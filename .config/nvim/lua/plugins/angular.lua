-- Angular LSP configuration with toggle between project and monorepo mode
-- <leader>cw toggles between modes and restarts the LSP

-- ============================================================================
-- State Management
-- ============================================================================

-- Global state: "project" (per-project, lower memory) or "monorepo" (full navigation)
vim.g.angular_lsp_mode = vim.g.angular_lsp_mode or "project"

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
    client:stop(true)
  end

  -- Brief delay to ensure clients are stopped, then restart
  vim.defer_fn(function()
    -- Get all buffers that should have angularls attached
    local angular_filetypes = { "typescript", "html", "typescriptreact", "htmlangular" }
    local buffers_to_attach = {}

    for _, buf in ipairs(vim.api.nvim_list_bufs()) do
      if vim.api.nvim_buf_is_loaded(buf) then
        local ft = vim.bo[buf].filetype
        for _, angular_ft in ipairs(angular_filetypes) do
          if ft == angular_ft then
            table.insert(buffers_to_attach, buf)
            break
          end
        end
      end
    end

    -- Trigger LspStart for current buffer to restart with new config
    if #buffers_to_attach > 0 then
      -- Re-setup angularls with new root pattern
      local lspconfig = require("lspconfig")
      local angularls_config = require("lspconfig.configs.angularls")

      local merged_config = vim.tbl_deep_extend("force", angularls_config.default_config, {
        root_dir = get_root_pattern(),
      })

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

      -- Attach to the first relevant buffer to trigger LSP start
      vim.api.nvim_set_current_buf(buffers_to_attach[1])
      vim.cmd("LspStart angularls")
    end

    -- Notify user of mode change
    local mode_display = vim.g.angular_lsp_mode == "monorepo" and "Monorepo (full navigation)" or "Project (isolated)"
    vim.notify("Angular LSP Mode: " .. mode_display, vim.log.levels.INFO, { title = "Angular LSP" })
  end, 100)
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

  if vim.g.angular_lsp_mode == "monorepo" then
    return "NG:Mono"
  else
    return "NG:Proj"
  end
end

-- Make component globally accessible for lualine
_G.angular_lsp_mode_component = angular_lsp_mode_component

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
        color = function()
          if vim.g.angular_lsp_mode == "monorepo" then
            return { fg = "#f59e0b" } -- Amber for monorepo mode
          else
            return { fg = "#10b981" } -- Green for project mode
          end
        end,
      })
    end,
  },
}
