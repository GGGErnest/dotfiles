local util = require("lspconfig.util")
return {
  "neovim/nvim-lspconfig",
  opts = {
    inlay_hints = { enabled = false },
    servers = {
      angularls = {
        root_dir = util.root_pattern("angular.json", "project.json"),
      },
    },
  },
}
