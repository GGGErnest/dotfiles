local function calculate_root_dir(fname)
  local util = require("lspconfig.util")
  local log = require("vim.lsp.log")

  -- Detect NX monorepo root
  local nx_root = util.root_pattern("nx.json")(fname)
  if nx_root then
    log.info("NX monorepo root detected at: " .. nx_root)
    return nx_root
  end

  -- Detect Angular workspace root
  local angular_root = util.root_pattern("angular.json")(fname)
  if angular_root then
    log.info("Angular workspace root detected at: " .. angular_root)
    return angular_root
  end

  -- Fallback to project.json detection
  local project_root = util.root_pattern("project.json")(fname)
  log.info("Fallback root detected at: " .. (project_root or "nil"))
  return project_root
end

return {
  {
    "neovim/nvim-lspconfig",
    opts = {
      servers = {
        angularls = {
          root_dir = calculate_root_dir,
        },
      },
    },
  },
}
