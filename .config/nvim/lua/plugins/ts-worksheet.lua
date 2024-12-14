return {
  "typed-rocks/ts-worksheet-neovim",
  keys = {
    { "<leader>ce", "<cmd>Tsw show_variables=true<cr>" },
  },
  opts = {
    severity = vim.diagnostic.severity.WARN,
  },
  config = function(_, opts)
    require("tsw").setup(opts)
  end,
}
