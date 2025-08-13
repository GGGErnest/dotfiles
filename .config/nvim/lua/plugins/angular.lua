local calculate_root_dir = nil
return {
  {
    "neovim/nvim-lspconfig",
    opts = {
      servers = {
        angularls = {
          root_dir = function(fname)
            if calculate_root_dir == nil then
              -- Calculate the root directory only once
              local nx_root = require("lspconfig.util").root_pattern("nx.json")(fname)
              if nx_root then
                calculate_root_dir = nx_root
                return calculate_root_dir
              end

              calculate_root_dir = require("lspconfig.util").root_pattern("angular.json", "project.json")(fname)
              return calculate_root_dir
            end
            return calculate_root_dir
          end,
        },
      },
    },
  },
}
