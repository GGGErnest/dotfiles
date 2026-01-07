-- Angular LSP configuration with toggle between project and monorepo mode
-- <leader>cw toggles between modes and restarts the LSP
--
-- Project Mode (default): Strict isolation - one LSP client per project
--   - When navigating to a different project, the old client is stopped
--   - Lower memory usage, but no cross-project template navigation
--
-- Monorepo Mode: Full navigation - single LSP client for entire monorepo
--   - Client is reused across projects (workspace folders added)
--   - Higher memory usage, but full cross-project template navigation

-- ============================================================================
-- State Management
-- ============================================================================

-- Global state: "project" (per-project, lower memory) or "monorepo" (full navigation)
vim.g.angular_lsp_mode = vim.g.angular_lsp_mode or "project"

-- Flag to indicate we're in the middle of switching projects (prevents re-entry)
local is_switching_project = false

-- ============================================================================
-- Helper Functions - Get Active Client Info
-- ============================================================================

-- Get the currently active angularls client
local function get_active_angular_client()
  local clients = vim.lsp.get_clients({ name = "angularls" })
  if #clients > 0 then
    return clients[1]
  end
  return nil
end

-- Get the current root directory from the active angularls client
local function get_current_angular_root()
  local client = get_active_angular_client()
  if client and client.config.root_dir then
    return vim.fs.normalize(client.config.root_dir)
  end
  return nil
end

-- ============================================================================
-- Memory Monitoring
-- ============================================================================

-- Cached memory usage (in MB)
local cached_memory_mb = nil
local last_memory_check = 0
local MEMORY_CHECK_INTERVAL = 15 -- seconds

-- Get the PID of the ngserver process from the LSP client
local function get_ngserver_pid()
  local clients = vim.lsp.get_clients({ name = "angularls" })
  if #clients == 0 then
    return nil
  end

  local client = clients[1]

  -- Neovim 0.10+: check various possible locations for PID
  -- Option 1: Direct pid on rpc (older versions)
  if client.rpc and client.rpc.pid then
    return client.rpc.pid
  end

  -- Option 2: Handle with get_pid method
  if client.rpc and client.rpc.handle and type(client.rpc.handle.get_pid) == "function" then
    local ok, pid = pcall(client.rpc.handle.get_pid, client.rpc.handle)
    if ok and pid then
      return pid
    end
  end

  -- Option 3: Newer Neovim - look for the process handle
  if client.rpc and client.rpc.handle and client.rpc.handle.pid then
    return client.rpc.handle.pid
  end

  -- Option 4: Use pgrep to find ngserver process (fallback)
  -- This is async-unfriendly but works as last resort
  local handle = io.popen("pgrep -f 'ngserver.*stdio' 2>/dev/null | head -1")
  if handle then
    local result = handle:read("*a")
    handle:close()
    local pid = tonumber(result:match("%d+"))
    if pid then
      return pid
    end
  end

  return nil
end

-- Query memory usage of a process by PID (returns MB)
local function query_process_memory(pid, callback)
  if not pid then
    callback(nil)
    return
  end

  -- Use ps command to get RSS (Resident Set Size) in KB
  local cmd = string.format("ps -o rss= -p %d 2>/dev/null", pid)

  vim.system({ "sh", "-c", cmd }, { text = true }, function(result)
    if result.code == 0 and result.stdout then
      local rss_kb = tonumber(result.stdout:match("%d+"))
      if rss_kb then
        local rss_mb = math.floor(rss_kb / 1024)
        callback(rss_mb)
        return
      end
    end
    callback(nil)
  end)
end

-- Update cached memory (called by timer)
local function update_memory_cache()
  local pid = get_ngserver_pid()
  if not pid then
    cached_memory_mb = nil
    return
  end

  query_process_memory(pid, function(memory_mb)
    vim.schedule(function()
      cached_memory_mb = memory_mb
      last_memory_check = vim.uv.now()
    end)
  end)
end

-- Format memory for display
local function format_memory(mb)
  if not mb then
    return nil
  end

  if mb >= 1024 then
    return string.format("%.1fG", mb / 1024)
  else
    return string.format("%dM", mb)
  end
end

-- Get color based on memory usage
local function get_memory_color(mb)
  if not mb then
    return { fg = "#6b7280" } -- Gray for unknown
  elseif mb < 1024 then
    return { fg = "#10b981" } -- Green: < 1GB
  elseif mb < 2048 then
    return { fg = "#f59e0b" } -- Amber: 1-2GB
  else
    return { fg = "#ef4444" } -- Red: > 2GB
  end
end

-- Start the memory monitoring timer
local memory_timer = nil

local function start_memory_timer()
  if memory_timer then
    return -- Already running
  end

  memory_timer = vim.uv.new_timer()
  memory_timer:start(
    0,
    MEMORY_CHECK_INTERVAL * 1000,
    vim.schedule_wrap(function()
      update_memory_cache()
    end)
  )
end

local function stop_memory_timer()
  if memory_timer then
    memory_timer:stop()
    memory_timer:close()
    memory_timer = nil
  end
end

-- Start timer when angularls attaches, stop when it detaches
local function setup_memory_monitoring_autocmds()
  local group = vim.api.nvim_create_augroup("AngularLspMemoryMonitor", { clear = true })

  vim.api.nvim_create_autocmd("LspAttach", {
    group = group,
    callback = function(args)
      local client = vim.lsp.get_client_by_id(args.data.client_id)
      if client and client.name == "angularls" then
        start_memory_timer()
        -- Do an immediate update after a short delay to let the process start
        vim.defer_fn(function()
          update_memory_cache()
        end, 1000)
      end
    end,
  })

  vim.api.nvim_create_autocmd("LspDetach", {
    group = group,
    callback = function(args)
      local client = vim.lsp.get_client_by_id(args.data.client_id)
      if client and client.name == "angularls" then
        -- Check if there are any other angularls clients
        vim.defer_fn(function()
          local clients = vim.lsp.get_clients({ name = "angularls" })
          if #clients == 0 then
            stop_memory_timer()
            cached_memory_mb = nil
          end
        end, 100)
      end
    end,
  })
end

-- Initialize memory monitoring
setup_memory_monitoring_autocmds()

-- Debug command to check memory monitoring status
vim.api.nvim_create_user_command("AngularLspDebug", function()
  local pid = get_ngserver_pid()
  local clients = vim.lsp.get_clients({ name = "angularls" })
  local current_root = get_current_angular_root()

  local info = {
    "Angular LSP Debug Info:",
    "  Mode: " .. (vim.g.angular_lsp_mode or "nil"),
    "  Current Root (from client): " .. (current_root or "nil"),
    "  Clients: " .. #clients,
    "  PID: " .. (pid and tostring(pid) or "not found"),
    "  Cached Memory: " .. (cached_memory_mb and (cached_memory_mb .. " MB") or "nil"),
    "  Timer Active: " .. (memory_timer and "yes" or "no"),
  }

  if #clients > 0 then
    local client = clients[1]
    table.insert(info, "  Client ID: " .. client.id)
    table.insert(info, "  Client Root: " .. (client.config.root_dir or "nil"))

    -- Debug RPC structure
    if client.rpc then
      table.insert(info, "  RPC exists: yes")
      if client.rpc.handle then
        table.insert(info, "  RPC handle exists: yes")
        table.insert(info, "  RPC handle type: " .. type(client.rpc.handle))
        if type(client.rpc.handle) == "table" then
          local keys = {}
          for k, _ in pairs(client.rpc.handle) do
            table.insert(keys, k)
          end
          table.insert(info, "  RPC handle keys: " .. table.concat(keys, ", "))
        end
      else
        table.insert(info, "  RPC handle exists: no")
      end
    else
      table.insert(info, "  RPC exists: no")
    end
  end

  vim.notify(table.concat(info, "\n"), vim.log.levels.INFO)

  -- Try to update memory now
  if pid then
    query_process_memory(pid, function(mb)
      vim.schedule(function()
        if mb then
          vim.notify("Memory query result: " .. mb .. " MB", vim.log.levels.INFO)
          cached_memory_mb = mb
        else
          vim.notify("Memory query failed", vim.log.levels.WARN)
        end
      end)
    end)
  end
end, { desc = "Debug Angular LSP memory monitoring" })

-- ============================================================================
-- Helper Functions
-- ============================================================================

-- Find node_modules directory from root
local function get_probe_dir(root_dir)
  local project_root = vim.fs.dirname(vim.fs.find("node_modules", { path = root_dir, upward = true })[1])
  return project_root and (project_root .. "/node_modules") or ""
end

-- Get Angular core version from package.json
local function get_angular_core_version(root_dir)
  local project_root = vim.fs.dirname(vim.fs.find("node_modules", { path = root_dir, upward = true })[1])

  if not project_root then
    return ""
  end

  local package_json = project_root .. "/package.json"
  if not vim.uv.fs_stat(package_json) then
    return ""
  end

  local file = io.open(package_json)
  if not file then
    return ""
  end

  local contents = file:read("*a")
  file:close()

  local ok, json = pcall(vim.json.decode, contents)
  if not ok or not json.dependencies then
    return ""
  end

  local angular_core_version = json.dependencies["@angular/core"]
  angular_core_version = angular_core_version and angular_core_version:match("%d+%.%d+%.%d+")

  return angular_core_version or ""
end

-- Get root pattern based on current mode
local function get_root_pattern()
  if vim.g.angular_lsp_mode == "monorepo" then
    -- Monorepo mode: prefer nx.json at root for full cross-project navigation
    return require("lspconfig.util").root_pattern("nx.json", "angular.json", "project.json")
  else
    -- Project mode (default): prefer project.json for per-project isolation
    return require("lspconfig.util").root_pattern("project.json", "angular.json", "nx.json")
  end
end

-- Find the project root for a given buffer
local function get_buffer_project_root(bufnr)
  local bufname = vim.api.nvim_buf_get_name(bufnr)
  if bufname == "" then
    return nil
  end

  local root_pattern = get_root_pattern()
  return root_pattern(bufname)
end

-- Get short project name from root path (e.g., "apps/my-app" from full path)
local function get_project_name(root_dir)
  if not root_dir then
    return nil
  end

  -- Try to extract a meaningful project name
  -- Look for apps/X or libs/X pattern
  local app_match = root_dir:match("apps/([^/]+)")
  local lib_match = root_dir:match("libs/([^/]+)")

  if app_match then
    return "apps/" .. app_match
  elseif lib_match then
    return "libs/" .. lib_match
  else
    -- Fallback to last directory component
    return vim.fn.fnamemodify(root_dir, ":t")
  end
end

-- Build the angularls command for a given root directory
local function build_angularls_cmd(root_dir)
  local probe_dir = get_probe_dir(root_dir)
  local angular_core_version = get_angular_core_version(root_dir)

  return {
    vim.fn.exepath("ngserver"),
    "--stdio",
    "--tsProbeLocations",
    probe_dir,
    "--ngProbeLocations",
    probe_dir,
    "--angularCoreVersion",
    angular_core_version,
  }
end

-- Get LSP capabilities (works with both nvim-cmp and blink.cmp)
local function get_capabilities()
  local capabilities = vim.lsp.protocol.make_client_capabilities()

  -- Try blink.cmp first (user's setup)
  local ok, blink = pcall(require, "blink.cmp")
  if ok and blink.get_lsp_capabilities then
    return blink.get_lsp_capabilities(capabilities)
  end

  -- Fallback to cmp_nvim_lsp
  ok, cmp_nvim_lsp = pcall(require, "cmp_nvim_lsp")
  if ok then
    return cmp_nvim_lsp.default_capabilities(capabilities)
  end

  -- No completion plugin, use default
  return capabilities
end

-- Start angularls for a specific buffer with a specific root
local function start_angularls_for_buffer(bufnr, root_dir)
  if not vim.api.nvim_buf_is_valid(bufnr) then
    return
  end

  local cmd = build_angularls_cmd(root_dir)

  -- Use vim.lsp.start directly for precise control
  local client_id = vim.lsp.start({
    name = "angularls",
    cmd = cmd,
    root_dir = root_dir,
    filetypes = { "typescript", "html", "typescriptreact", "typescript.tsx", "htmlangular" },
    capabilities = get_capabilities(),
    -- Prevent automatic workspace folder additions in project mode
    workspace_folders = vim.g.angular_lsp_mode == "project" and {
      { uri = vim.uri_from_fname(root_dir), name = root_dir },
    } or nil,
  }, {
    bufnr = bufnr,
    reuse_client = function(existing_client, config)
      -- In project mode, only reuse if same root
      if vim.g.angular_lsp_mode == "project" then
        return existing_client.config.root_dir == config.root_dir
      end
      -- In monorepo mode, always reuse
      return existing_client.name == "angularls"
    end,
  })

  return client_id
end

-- ============================================================================
-- Project Mode: Strict Isolation Logic
-- ============================================================================

-- Check if we need to switch LSP clients when entering a buffer in project mode
local function check_project_switch(bufnr)
  -- Prevent re-entry during switching
  if is_switching_project then
    return
  end

  -- Only applies in project mode
  if vim.g.angular_lsp_mode ~= "project" then
    return
  end

  -- Check if this buffer should have angularls
  local ft = vim.bo[bufnr].filetype
  local angular_filetypes = { "typescript", "html", "typescriptreact", "htmlangular" }
  local is_angular_ft = false
  for _, angular_ft in ipairs(angular_filetypes) do
    if ft == angular_ft then
      is_angular_ft = true
      break
    end
  end

  if not is_angular_ft then
    return
  end

  -- Get the project root for this buffer
  local buffer_root = get_buffer_project_root(bufnr)
  if not buffer_root then
    return
  end

  -- Normalize paths for comparison
  buffer_root = vim.fs.normalize(buffer_root)

  -- Get current root from active client (not from global state)
  local current_root = get_current_angular_root()

  -- If no current root (no client running), nothing to switch from
  if not current_root then
    return
  end

  -- If same project, nothing to do
  if buffer_root == current_root then
    return
  end

  -- Different project! Stop the old client and start a new one
  is_switching_project = true

  local clients = vim.lsp.get_clients({ name = "angularls" })

  if #clients > 0 then
    -- Stop all existing angularls clients
    for _, client in ipairs(clients) do
      -- Detach from all buffers first
      local attached_buffers = vim.lsp.get_buffers_by_client_id(client.id)
      for _, buf in ipairs(attached_buffers) do
        vim.lsp.buf_detach_client(buf, client.id)
      end
      -- Then stop the client
      client:stop(true)
    end
  end

  -- Wait for clients to fully stop, then start new one
  vim.defer_fn(function()
    -- Double-check no angularls clients are running
    local remaining_clients = vim.lsp.get_clients({ name = "angularls" })
    local attempts = 0
    local max_attempts = 10

    local function try_start()
      remaining_clients = vim.lsp.get_clients({ name = "angularls" })
      if #remaining_clients == 0 then
        -- All clients stopped, start new one
        start_angularls_for_buffer(bufnr, buffer_root)
        is_switching_project = false
      elseif attempts < max_attempts then
        -- Still have running clients, wait more
        attempts = attempts + 1
        vim.defer_fn(try_start, 100)
      else
        -- Give up waiting, force start anyway
        vim.notify("Angular LSP: Force starting after timeout", vim.log.levels.WARN)
        start_angularls_for_buffer(bufnr, buffer_root)
        is_switching_project = false
      end
    end

    try_start()
  end, 100)
end

-- ============================================================================
-- Toggle Function
-- ============================================================================

local function toggle_angular_lsp_mode()
  -- Toggle the mode
  if vim.g.angular_lsp_mode == "project" then
    vim.g.angular_lsp_mode = "monorepo"
  else
    vim.g.angular_lsp_mode = "project"
  end

  -- Stop all angularls clients
  local clients = vim.lsp.get_clients({ name = "angularls" })
  for _, client in ipairs(clients) do
    local attached_buffers = vim.lsp.get_buffers_by_client_id(client.id)
    for _, buf in ipairs(attached_buffers) do
      vim.lsp.buf_detach_client(buf, client.id)
    end
    client:stop(true)
  end

  -- Brief delay to ensure clients are stopped, then restart
  vim.defer_fn(function()
    -- Find the current buffer to attach to
    local bufnr = vim.api.nvim_get_current_buf()
    local ft = vim.bo[bufnr].filetype
    local angular_filetypes = { "typescript", "html", "typescriptreact", "htmlangular" }
    local is_angular_ft = false
    for _, angular_ft in ipairs(angular_filetypes) do
      if ft == angular_ft then
        is_angular_ft = true
        break
      end
    end

    if is_angular_ft then
      local root = get_buffer_project_root(bufnr)
      if root then
        start_angularls_for_buffer(bufnr, root)
      end
    end

    -- Notify user of mode change
    local mode_display = vim.g.angular_lsp_mode == "monorepo" and "Monorepo (full navigation)" or "Project (isolated)"
    vim.notify("Angular LSP Mode: " .. mode_display, vim.log.levels.INFO, { title = "Angular LSP" })
  end, 200)
end

-- Make toggle function globally accessible
_G.toggle_angular_lsp_mode = toggle_angular_lsp_mode

-- ============================================================================
-- Lualine Component
-- ============================================================================

-- Function to get current mode for statusline display
local function angular_lsp_mode_component()
  -- Only show for Angular-related filetypes
  local ft = vim.bo.filetype
  local angular_filetypes = { "typescript", "html", "typescriptreact", "htmlangular" }
  local is_angular_ft = false
  for _, angular_ft in ipairs(angular_filetypes) do
    if ft == angular_ft then
      is_angular_ft = true
      break
    end
  end

  if not is_angular_ft then
    return ""
  end

  -- Check if angularls is attached to current buffer
  local clients = vim.lsp.get_clients({ bufnr = 0, name = "angularls" })
  if #clients == 0 then
    return ""
  end

  -- Build the display string
  local mode_str
  if vim.g.angular_lsp_mode == "monorepo" then
    mode_str = "NG:Mono"
  else
    -- In project mode, show the LSP root folder name
    local current_root = get_current_angular_root()
    if current_root then
      local root_name = vim.fn.fnamemodify(current_root, ":t")
      mode_str = "NG:" .. root_name
    else
      mode_str = "NG:Proj"
    end
  end

  -- Add memory usage if available
  local memory_str = format_memory(cached_memory_mb)
  if memory_str then
    return mode_str .. "(" .. memory_str .. ")"
  else
    return mode_str
  end
end

-- Function to get memory color for lualine
local function angular_lsp_mode_color()
  -- Use memory-based color if we have memory info
  if cached_memory_mb then
    return get_memory_color(cached_memory_mb)
  end

  -- Fall back to mode-based color
  if vim.g.angular_lsp_mode == "monorepo" then
    return { fg = "#f59e0b" } -- Amber for monorepo mode
  else
    return { fg = "#10b981" } -- Green for project mode
  end
end

-- Make component globally accessible for lualine
_G.angular_lsp_mode_component = angular_lsp_mode_component
_G.angular_lsp_mode_color = angular_lsp_mode_color

-- ============================================================================
-- Autocmd for Project Mode Isolation
-- ============================================================================

local angular_augroup = vim.api.nvim_create_augroup("AngularLspProjectMode", { clear = true })

-- Check for project switches when entering a buffer
vim.api.nvim_create_autocmd("BufEnter", {
  group = angular_augroup,
  pattern = { "*.ts", "*.html", "*.tsx" },
  callback = function(args)
    -- Defer slightly to ensure filetype is set
    vim.defer_fn(function()
      if vim.api.nvim_buf_is_valid(args.buf) then
        check_project_switch(args.buf)
      end
    end, 50)
  end,
  desc = "Angular LSP: Check for project switch in project mode",
})

-- ============================================================================
-- Plugin Configuration
-- ============================================================================

return {
  -- Angular LSP configuration
  {
    "neovim/nvim-lspconfig",
    opts = {
      servers = {
        angularls = {
          -- Root directory detection based on current mode (default: project mode)
          root_dir = get_root_pattern(),
        },
      },
      setup = {
        angularls = function(_, opts)
          local lspconfig = require("lspconfig")
          local angularls_config = require("lspconfig.configs.angularls")

          -- Merge our root_dir with the default config
          local merged_config = vim.tbl_deep_extend("force", angularls_config.default_config, opts)

          lspconfig.angularls.setup(vim.tbl_extend("force", merged_config, {
            on_new_config = function(new_config, new_root_dir)
              local probe_dir = get_probe_dir(new_root_dir)
              local angular_core_version = get_angular_core_version(new_root_dir)

              new_config.cmd = {
                vim.fn.exepath("ngserver"),
                "--stdio",
                "--tsProbeLocations",
                probe_dir,
                "--ngProbeLocations",
                probe_dir,
                "--angularCoreVersion",
                angular_core_version,
              }
            end,
          }))

          -- Return true to indicate we handled the setup ourselves
          return true
        end,
      },
    },
    keys = {
      {
        "<leader>cw",
        toggle_angular_lsp_mode,
        desc = "Toggle Angular LSP Mode (Project/Monorepo)",
      },
    },
  },

  -- Lualine integration for visual indicator
  {
    "nvim-lualine/lualine.nvim",
    optional = true,
    opts = function(_, opts)
      -- Add angular mode component to lualine_x section
      opts.sections = opts.sections or {}
      opts.sections.lualine_x = opts.sections.lualine_x or {}

      -- Insert at the beginning of lualine_x
      table.insert(opts.sections.lualine_x, 1, {
        _G.angular_lsp_mode_component,
        color = _G.angular_lsp_mode_color,
      })
    end,
  },
}
