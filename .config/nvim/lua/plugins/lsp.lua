local picker = require("snacks.picker")

return {
  "neovim/nvim-lspconfig",
  opts = {
    inlay_hints = { enabled = false },
  },
  keys = {
    {
      "<leader>sS",
      false,
    },
    {
      "<leader>ss",
      false,
    },
    {
      "<leader>cs",
      function()
        picker.lsp_symbols({ filter = LazyVim.config.kind_filter })
      end,
      desc = "LSP Symbols",
    },
    {
      "<leader>cS",
      function()
        picker.lsp_workspace_symbols({ filter = LazyVim.config.kind_filter })
      end,
      desc = "LSP Workspace Symbols",
    },
    {
      "<leader>cR",
      "<cmd>LspRestart<cr>",
      desc = "Restart LSP",
    },
  },
}
