-- env_switcher.lua
-- A module for switching between different .env configurations
-- Configurations are stored as commented sections in the .env file itself
--
-- Features:
-- - Automatically tracks the nearest .env file based on LSP project root (or CWD)
-- - Works from any buffer - no need to be in the .env file
-- - Supports .env, .env.*, and *.env file patterns
-- - Shows current config in lualine
-- - Normalizes marker format on save
-- - Validates and warns about malformed markers
--
-- File format:
-- The active configuration has its variables UNCOMMENTED within its block.
-- All other configurations have their variables COMMENTED.
-- An empty line ends a config block.
--
-- # @env-config-active: development
--
-- # @env-config: development
-- API_URL=http://localhost:3000      <- UNCOMMENTED (active)
-- DATABASE_HOST=localhost            <- UNCOMMENTED (active)
--
-- # @env-config: staging
-- #API_URL=https://staging.example.com   <- COMMENTED (inactive)
-- #DATABASE_HOST=staging-db.example.com  <- COMMENTED (inactive)
--
-- # @env-config: production
-- #API_URL=https://prod.example.com
-- #DATABASE_HOST=prod-db.example.com

local M = {}

-- State management for tracking current env file and configs
M._state = {
  current_env_file = nil, -- Path to the currently tracked .env file
  current_project_root = nil, -- Current project root for change detection
  config_cache = {}, -- Cache: filepath -> { active_config, configs }
}

--------------------------------------------------------------------------------
-- Marker Patterns (flexible to handle variations)
--------------------------------------------------------------------------------

-- Matches: #@env-config:name, # @env-config: name, #@env-config :name, etc.
local CONFIG_MARKER_PATTERN = "^#%s*@env%-config%s*:%s*(.+)%s*$"

-- Matches: #@env-config-active:name, # @env-config-active: name, etc.
local ACTIVE_MARKER_PATTERN = "^#%s*@env%-config%-active%s*:%s*(.+)%s*$"

-- Matches commented variable: # KEY=value or #KEY=value
local COMMENTED_VAR_PATTERN = "^#%s*([A-Za-z_][A-Za-z0-9_]*)=(.*)$"

-- Matches active variable: KEY=value
local ACTIVE_VAR_PATTERN = "^([A-Za-z_][A-Za-z0-9_]*)=(.*)$"

--------------------------------------------------------------------------------
-- Utility Functions
--------------------------------------------------------------------------------

--- Check if a file path is an .env file
--- Supports: .env, .env.*, *.env patterns
---@param filepath string|nil
---@return boolean
function M.is_env_file(filepath)
  filepath = filepath or vim.api.nvim_buf_get_name(0)
  if filepath == "" then
    return false
  end
  local filename = vim.fn.fnamemodify(filepath, ":t")
  return filename:match("^%.env") ~= nil or filename:match("%.env$") ~= nil
end

--- Get the current project root (LSP root or CWD fallback)
---@return string
function M.get_project_root()
  -- Try to get LSP root first
  local clients = vim.lsp.get_clients({ bufnr = 0 })
  for _, client in ipairs(clients) do
    if client.config.root_dir then
      return client.config.root_dir
    end
  end

  -- Fallback to CWD
  return vim.loop.cwd()
end

--- Find .env file in a specific directory with priority ordering
--- Priority: .env > .env.local > .env.* > *.env
---@param dir string
---@return string|nil
function M.find_env_file_in_dir(dir)
  -- Check if directory exists
  if not vim.loop.fs_stat(dir) then
    return nil
  end

  local priority_files = {
    ".env", -- Highest priority
    ".env.local", -- Second priority
  }

  -- Check priority files first
  for _, name in ipairs(priority_files) do
    local path = dir .. "/" .. name
    if vim.loop.fs_stat(path) then
      return path
    end
  end

  -- Then check for any .env* or *.env files
  local handle = vim.loop.fs_scandir(dir)
  if handle then
    while true do
      local name, ftype = vim.loop.fs_scandir_next(handle)
      if not name then
        break
      end
      if ftype == "file" then
        if name:match("^%.env") or name:match("%.env$") then
          return dir .. "/" .. name
        end
      end
    end
  end

  return nil
end

--- Update the current .env file based on project root
--- Called on LspAttach, BufEnter, DirChanged
function M.update_current_env_file()
  local project_root = M.get_project_root()
  local cwd = vim.loop.cwd()

  -- Check if project root changed
  if project_root == M._state.current_project_root and M._state.current_env_file then
    return -- No change needed
  end

  M._state.current_project_root = project_root

  -- Try to find .env in project root
  local env_file = M.find_env_file_in_dir(project_root)

  -- Fallback to CWD if not found and project_root != cwd
  if not env_file and project_root ~= cwd then
    env_file = M.find_env_file_in_dir(cwd)
  end

  M._state.current_env_file = env_file

  -- Update cache for the new env file
  if env_file then
    M.update_config_cache(env_file)
  end
end

--- Get the current .env file path
---@return string|nil
function M.get_current_env_file()
  if not M._state.current_env_file then
    M.update_current_env_file()
  end
  return M._state.current_env_file
end

--- Reload an env file buffer if it's open (silent reload)
---@param filepath string
local function reload_env_buffer_if_open(filepath)
  for _, bufnr in ipairs(vim.api.nvim_list_bufs()) do
    if vim.api.nvim_buf_is_loaded(bufnr) then
      local buf_name = vim.api.nvim_buf_get_name(bufnr)
      if buf_name == filepath then
        -- Save cursor position if this is the current buffer
        local is_current = vim.api.nvim_get_current_buf() == bufnr
        local cursor = is_current and vim.api.nvim_win_get_cursor(0) or nil

        -- Reload the buffer
        vim.api.nvim_buf_call(bufnr, function()
          vim.cmd("silent! edit!")
        end)

        -- Restore cursor position
        if cursor then
          pcall(vim.api.nvim_win_set_cursor, 0, cursor)
        end
        return
      end
    end
  end
end

--------------------------------------------------------------------------------
-- Normalization and Validation
--------------------------------------------------------------------------------

--- Normalize a line's marker format to standard format
--- Converts variations like "#@env-config :name" to "# @env-config: name"
---@param line string
---@return string
local function normalize_marker(line)
  -- Normalize config marker: # @env-config: name
  local config_name = line:match(CONFIG_MARKER_PATTERN)
  if config_name then
    return "# @env-config: " .. vim.trim(config_name)
  end

  -- Normalize active marker: # @env-config-active: name
  local active_name = line:match(ACTIVE_MARKER_PATTERN)
  if active_name then
    return "# @env-config-active: " .. vim.trim(active_name)
  end

  return line
end

--- Validate markers in a file and return warnings for malformed ones
---@param filepath string
---@return string[] warnings List of warning messages
function M.validate_markers(filepath)
  if not filepath or not vim.loop.fs_stat(filepath) then
    return {}
  end

  local lines = vim.fn.readfile(filepath)
  local warnings = {}

  for line_nr, line in ipairs(lines) do
    -- Check if line looks like it's trying to be a marker but doesn't match
    if line:match("@env%-config") then
      local is_valid_config = line:match(CONFIG_MARKER_PATTERN) ~= nil
      local is_valid_active = line:match(ACTIVE_MARKER_PATTERN) ~= nil

      if not is_valid_config and not is_valid_active then
        table.insert(warnings, string.format("Line %d: Malformed marker: %s", line_nr, line))
      end
    end
  end

  return warnings
end

--------------------------------------------------------------------------------
-- Parsing Functions
--------------------------------------------------------------------------------

--- Parse env configs from a file
--- Returns a table with config names as keys and their line numbers
--- Now captures BOTH commented and uncommented variables within each block
---@param filepath string
---@return table<string, {line_nrs: number[], is_active: boolean}>
function M.parse_env_configs_from_file(filepath)
  if not filepath or not vim.loop.fs_stat(filepath) then
    return {}
  end

  local lines = vim.fn.readfile(filepath)
  local configs = {}
  local current_config = nil

  for line_nr, line in ipairs(lines) do
    -- Check for config marker (flexible pattern)
    local config_name = line:match(CONFIG_MARKER_PATTERN)
    if config_name then
      config_name = vim.trim(config_name)
      current_config = config_name
      configs[config_name] = { line_nrs = {}, is_active = false }
    elseif current_config then
      -- Check if this is a variable line (commented or uncommented)
      local commented_key = line:match(COMMENTED_VAR_PATTERN)
      local active_key = line:match(ACTIVE_VAR_PATTERN)

      if commented_key or active_key then
        table.insert(configs[current_config].line_nrs, line_nr)
        -- If any line is uncommented, this config is active
        if active_key and not line:match("^#") then
          configs[current_config].is_active = true
        end
      elseif line:match("^$") then
        -- Truly empty line - END of config block
        current_config = nil
      end
      -- All other lines (comments, whitespace-only, etc.) are ignored but don't end the block
    end
  end

  return configs
end

--- Parse active (uncommented) variables from a file
---@param filepath string
---@return table<string, {value: string, line_nr: number}>
function M.parse_active_vars_from_file(filepath)
  if not filepath or not vim.loop.fs_stat(filepath) then
    return {}
  end

  local lines = vim.fn.readfile(filepath)
  local active_vars = {}

  for line_nr, line in ipairs(lines) do
    -- Skip comments and empty lines
    if not line:match("^#") and not line:match("^%s*$") then
      local key, value = line:match(ACTIVE_VAR_PATTERN)
      if key then
        active_vars[key] = { value = value, line_nr = line_nr }
      end
    end
  end

  return active_vars
end

--- Get the currently active configuration name from a file
--- First checks for explicit marker, then checks which config has uncommented lines
---@param filepath string
---@return string|nil
function M.get_active_config_from_file(filepath)
  if not filepath or not vim.loop.fs_stat(filepath) then
    return nil
  end

  local lines = vim.fn.readfile(filepath)

  -- First, check for explicit active marker (flexible pattern)
  for _, line in ipairs(lines) do
    local active_name = line:match(ACTIVE_MARKER_PATTERN)
    if active_name then
      return vim.trim(active_name)
    end
  end

  -- Fallback: find the config that has uncommented (active) lines
  local configs = M.parse_env_configs_from_file(filepath)

  for config_name, cfg_data in pairs(configs) do
    if cfg_data.is_active then
      return config_name
    end
  end

  return nil
end

--- Update the config cache for a specific file
---@param filepath string
function M.update_config_cache(filepath)
  if not filepath then
    return
  end

  local active_config = M.get_active_config_from_file(filepath)
  local configs = M.parse_env_configs_from_file(filepath)

  M._state.config_cache[filepath] = {
    active_config = active_config,
    configs = configs,
  }
end

--- Get cached active config for a file (with auto-refresh if not cached)
---@param filepath string
---@return string|nil
function M.get_cached_active_config(filepath)
  if not filepath then
    return nil
  end

  if not M._state.config_cache[filepath] then
    M.update_config_cache(filepath)
  end

  return M._state.config_cache[filepath] and M._state.config_cache[filepath].active_config
end

--- Get list of available config names from a file
---@param filepath string
---@return string[]
function M.get_config_names(filepath)
  local configs = M.parse_env_configs_from_file(filepath)
  local names = {}
  for name, _ in pairs(configs) do
    table.insert(names, name)
  end
  table.sort(names)
  return names
end

--- Get the count of variables in a config
---@param config_data table
---@return number
local function get_var_count(config_data)
  return #config_data.line_nrs
end

--------------------------------------------------------------------------------
-- Core Actions
--------------------------------------------------------------------------------

--- Transform lines to apply a configuration
--- Comments out all uncommented variables in ALL config blocks,
--- then uncomments the variables in the target config block
---@param lines string[]
---@param config_name string
---@param configs table
---@return string[]
local function transform_lines_for_config(lines, config_name, configs)
  local target_config = configs[config_name]
  if not target_config then
    return lines
  end

  -- Build sets of line numbers to modify
  local lines_to_comment = {} -- line_nr -> true (lines to comment out)
  local lines_to_uncomment = {} -- line_nr -> true (target config lines to uncomment)

  -- Collect ALL line numbers from ALL configs that need to be commented out
  for cfg_name, cfg_data in pairs(configs) do
    for _, line_nr in ipairs(cfg_data.line_nrs) do
      -- Mark all lines to be commented (we'll uncomment target ones after)
      lines_to_comment[line_nr] = true
    end
  end

  -- Mark target config lines to uncomment (and remove from comment list)
  for _, line_nr in ipairs(target_config.line_nrs) do
    lines_to_comment[line_nr] = nil
    lines_to_uncomment[line_nr] = true
  end

  -- Apply transformations
  local new_lines = {}
  for line_nr, line in ipairs(lines) do
    local new_line = line

    if lines_to_comment[line_nr] then
      -- Comment out this line (only if not already commented)
      if not line:match("^#") then
        new_line = "#" .. line
      end
    elseif lines_to_uncomment[line_nr] then
      -- Uncomment this line (remove leading # and optional space)
      new_line = line:gsub("^#%s*", "")
    end

    -- Normalize marker format for consistency
    new_line = normalize_marker(new_line)

    table.insert(new_lines, new_line)
  end

  return new_lines
end

--- Update the active config marker in lines
---@param lines string[]
---@param config_name string
---@return string[]
local function update_active_marker_in_lines(lines, config_name)
  local new_marker = "# @env-config-active: " .. config_name
  local marker_found = false

  local new_lines = {}
  for _, line in ipairs(lines) do
    if line:match(ACTIVE_MARKER_PATTERN) then
      table.insert(new_lines, new_marker)
      marker_found = true
    else
      table.insert(new_lines, line)
    end
  end

  -- Insert marker at the top if not found
  if not marker_found then
    table.insert(new_lines, 1, new_marker)
    table.insert(new_lines, 2, "")
  end

  return new_lines
end

--- Apply a configuration to the current .env file
---@param config_name string
---@return boolean success
function M.apply_config(config_name)
  local env_file = M.get_current_env_file()
  if not env_file then
    vim.notify("No .env file found in project", vim.log.levels.WARN)
    return false
  end

  -- Parse configs
  local configs = M.parse_env_configs_from_file(env_file)

  if not configs[config_name] then
    vim.notify("Configuration '" .. config_name .. "' not found", vim.log.levels.ERROR)
    return false
  end

  -- Validate and warn about malformed markers
  local warnings = M.validate_markers(env_file)
  if #warnings > 0 then
    vim.notify("Warnings in .env file:\n" .. table.concat(warnings, "\n"), vim.log.levels.WARN)
  end

  -- Read file
  local lines = vim.fn.readfile(env_file)

  -- Apply configuration changes
  local new_lines = transform_lines_for_config(lines, config_name, configs)

  -- Update active marker
  new_lines = update_active_marker_in_lines(new_lines, config_name)

  -- Write changes
  vim.fn.writefile(new_lines, env_file)

  -- Update cache
  M._state.config_cache[env_file] = {
    active_config = config_name,
    configs = configs,
  }

  -- Reload buffer if open (silent)
  reload_env_buffer_if_open(env_file)

  -- Show notification with relative path
  local relative_path = vim.fn.fnamemodify(env_file, ":~:.")
  vim.notify("Switched to: " .. config_name .. "\n  → " .. relative_path, vim.log.levels.INFO)

  return true
end

--- Open snacks.nvim picker to select a configuration
function M.pick_config()
  local env_file = M.get_current_env_file()
  if not env_file then
    vim.notify("No .env file found in project", vim.log.levels.WARN)
    return
  end

  local relative_path = vim.fn.fnamemodify(env_file, ":~:.")
  local configs = M.parse_env_configs_from_file(env_file)
  local config_names = M.get_config_names(env_file)

  if #config_names == 0 then
    -- Also check for validation warnings
    local warnings = M.validate_markers(env_file)
    local msg = "No configurations found in " .. relative_path .. "\nAdd configs with: # @env-config: <name>"
    if #warnings > 0 then
      msg = msg .. "\n\nWarnings:\n" .. table.concat(warnings, "\n")
    end
    vim.notify(msg, vim.log.levels.WARN)
    return
  end

  local current_config = M.get_cached_active_config(env_file)

  -- Build items for the picker
  local items = {}
  for idx, name in ipairs(config_names) do
    local cfg_data = configs[name]
    local var_count = get_var_count(cfg_data)
    local is_active = name == current_config

    table.insert(items, {
      idx = idx,
      text = name .. (is_active and " (active)" or ""),
      name = name,
      is_active = is_active,
      var_count = var_count,
    })
  end

  require("snacks").picker({
    title = "Env Config: " .. relative_path,
    items = items,
    focus = "list",
    preview = false,
    layout = {
      preview = false,
      layout = {
        backdrop = false,
        width = 0.3,
        min_width = 40,
        height = 0.3,
        min_height = 6,
      },
    },
    format = function(item, _)
      local ret = {}
      local hl = item.is_active and "DiagnosticOk" or "Normal"
      table.insert(ret, { item.name, hl })
      return ret
    end,
    confirm = function(picker, item)
      picker:close()
      if item then
        M.apply_config(item.name)
      end
    end,
  })
end

--- Show current active configuration
function M.show_current_config()
  local env_file = M.get_current_env_file()
  if not env_file then
    vim.notify("No .env file found in project", vim.log.levels.WARN)
    return
  end

  local relative_path = vim.fn.fnamemodify(env_file, ":~:.")
  local config = M.get_cached_active_config(env_file)

  if config then
    vim.notify("Current env config: " .. config .. "\n  → " .. relative_path, vim.log.levels.INFO)
  else
    vim.notify("No active configuration detected\n  → " .. relative_path, vim.log.levels.INFO)
  end
end

--------------------------------------------------------------------------------
-- Lualine Integration
--------------------------------------------------------------------------------

--- Lualine component - returns the current config name for the tracked env file
---@return string
function M.lualine_component()
  local env_file = M.get_current_env_file()
  if not env_file then
    return ""
  end

  local config = M.get_cached_active_config(env_file)
  if config then
    return "env: " .. config
  end

  return ""
end

--- Condition function for lualine
---@return boolean
function M.lualine_cond()
  return M.get_current_env_file() ~= nil
end

--------------------------------------------------------------------------------
-- Setup and Autocommands
--------------------------------------------------------------------------------

--- Setup autocommands for tracking env file and cache updates
function M.setup()
  local group = vim.api.nvim_create_augroup("EnvSwitcher", { clear = true })

  -- Update current env file on LSP attach (project root may change)
  vim.api.nvim_create_autocmd("LspAttach", {
    group = group,
    callback = function()
      -- Defer to allow LSP to fully initialize
      vim.defer_fn(function()
        M._state.current_project_root = nil -- Force re-detection
        M.update_current_env_file()
      end, 100)
    end,
  })

  -- Update on directory change
  vim.api.nvim_create_autocmd("DirChanged", {
    group = group,
    callback = function()
      M._state.current_project_root = nil -- Force re-detection
      M._state.current_env_file = nil
      M.update_current_env_file()
    end,
  })

  -- Update cache when .env file is written (covers both patterns)
  vim.api.nvim_create_autocmd("BufWritePost", {
    group = group,
    pattern = { "*.env", ".env*" },
    callback = function(args)
      local filepath = vim.api.nvim_buf_get_name(args.buf)
      M.update_config_cache(filepath)
    end,
  })

  -- Also update on BufEnter for .env files to catch external changes
  vim.api.nvim_create_autocmd("BufEnter", {
    group = group,
    pattern = { "*.env", ".env*" },
    callback = function(args)
      local filepath = vim.api.nvim_buf_get_name(args.buf)
      M.update_config_cache(filepath)
    end,
  })

  -- Initial detection
  M.update_current_env_file()
end

return M
