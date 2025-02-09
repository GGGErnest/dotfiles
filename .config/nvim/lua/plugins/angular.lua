return {
  {
    "neovim/nvim-lspconfig",
    opts = {
      servers = {
        angularls = {
          root_dir = function(fname)
            local nx_root = require("lspconfig.util").root_pattern("nx.json")(fname)
            if nx_root then
              return nx_root
            end
            return require("lspconfig.util").root_pattern("angular.json", "project.json")(fname)
          end,
        },
      },
    },
  },
}
