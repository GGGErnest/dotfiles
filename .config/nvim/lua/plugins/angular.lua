return {
  {
    "neovim/nvim-lspconfig",
    opts = {
      servers = {
        angularls = {
          root_dir = require("lspconfig.util").root_pattern("nx.json", "angular.json", "project.json"),
        },
      },
    },
  },
}
