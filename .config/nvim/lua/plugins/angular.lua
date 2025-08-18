local function calculate_root_dir(fname)
  local util = require("lspconfig.util")

  -- Detect NX monorepo root
  local nx_root = util.root_pattern("nx.json")(fname)
  if nx_root then
    return nx_root
  end

  -- Detect Angular workspace root
  local angular_root = util.root_pattern("angular.json")(fname)
  if angular_root then
    return angular_root
  end

  -- Fallback to project.json detection
  local project_root = util.root_pattern("project.json")(fname)
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
