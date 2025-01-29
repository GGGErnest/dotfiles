local M = {}

M.config = {
  -- List of all possible variants
  variants = {
    "component",
    "container",
    "presenter",
    "view",
  },
  -- File extensions and their human-readable names
  extensions = {
    {
      key = "c",
      name = "Source",
      patterns = { "ts" },
    },
    {
      key = "h",
      name = "Template",
      patterns = { "html" },
    },
    {
      key = "s",
      name = "Styles",
      patterns = { "scss", "css" },
    },
    {
      key = "t",
      name = "Test",
      patterns = { "spec.ts", "test.ts" },
    },
  },
  -- Special files (non-variant based)
  special_files = {
    {
      key = "m",
      name = "Module",
      patterns = { "module.ts" },
    },
  },
}

local function get_file_info(file_name)
  -- Extract both base name and variant from current file
  local base_name = file_name
  local current_variant = nil

  -- Try to find which variant this file belongs to
  for _, variant in ipairs(M.config.variants) do
    local pattern = string.format(".%s.", variant)
    if file_name:match(pattern) then
      current_variant = variant
      -- Remove the variant and all extensions to get base name
      base_name = file_name:gsub(pattern .. ".*$", "")
      break
    end
  end

  -- If no variant found (could be module or other special file), try to extract base name
  if not current_variant then
    for _, special in ipairs(M.config.special_files) do
      for _, pattern in ipairs(special.patterns) do
        local special_pattern = "%." .. pattern:gsub("%.", "%.") .. "$"
        if file_name:match(special_pattern) then
          base_name = file_name:gsub(special_pattern, "")
          break
        end
      end
    end
  end

  return {
    base_name = base_name,
    variant = current_variant,
  }
end

local function try_file_patterns(base_path, variant, patterns)
  for _, pattern in ipairs(patterns) do
    local target_file
    if variant and variant ~= "" then
      target_file = base_path .. string.format(".%s.%s", variant, pattern)
    else
      target_file = base_path .. "." .. pattern
    end
    if vim.fn.filereadable(target_file) == 1 then
      return target_file
    end
  end
  return nil
end

function M.setup_keymaps()
  local function switch_angular_file(extension_key)
    local current_file = vim.fn.expand("%:t")
    local file_info = get_file_info(current_file)

    if not file_info.base_name then
      vim.notify("Could not determine base name from current file", vim.log.levels.WARN)
      return
    end

    local base_path = vim.fn.expand("%:p:h") .. "/" .. file_info.base_name

    -- Handle special files first (like module)
    local is_special_key = false
    for _, special in ipairs(M.config.special_files) do
      if special.key == extension_key then
        is_special_key = true
        local target_file = try_file_patterns(base_path, "", special.patterns)
        if target_file then
          vim.cmd("edit " .. target_file)
        else
          local pattern_list = table.concat(special.patterns, " or ")
          vim.notify(
            string.format("No %s file found for %s (tried: %s)", special.name, file_info.base_name, pattern_list),
            vim.log.levels.WARN
          )
        end
        break
      end
    end

    -- If not a special file, handle variant files
    if not is_special_key then
      if not file_info.variant then
        vim.notify("Not in a variant file", vim.log.levels.WARN)
        return
      end

      -- Find the extension config for the target type
      local extension_config
      for _, ext in ipairs(M.config.extensions) do
        if ext.key == extension_key then
          extension_config = ext
          break
        end
      end

      if not extension_config then
        vim.notify("Invalid extension key", vim.log.levels.ERROR)
        return
      end

      local target_file = try_file_patterns(base_path, file_info.variant, extension_config.patterns)

      if target_file then
        vim.cmd("edit " .. target_file)
      else
        local pattern_list = table.concat(extension_config.patterns, " or ")
        vim.notify(
          string.format(
            "No related %s file found for %s.%s (tried: %s)",
            extension_config.name,
            file_info.base_name,
            file_info.variant,
            pattern_list
          ),
          vim.log.levels.WARN
        )
      end
    end
  end

  -- Create keymaps dynamically based on configuration
  for _, ext_config in ipairs(M.config.extensions) do
    vim.keymap.set("n", string.format("<leader>a%s", ext_config.key), function()
      switch_angular_file(ext_config.key)
    end, { desc = string.format("Go to %s", ext_config.name) })
  end

  -- Add keymaps for special files
  for _, special in ipairs(M.config.special_files) do
    vim.keymap.set("n", string.format("<leader>a%s", special.key), function()
      switch_angular_file(special.key)
    end, { desc = string.format("Go to %s", special.name) })
  end
end

return M
