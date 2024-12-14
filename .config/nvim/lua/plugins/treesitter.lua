return {
  "nvim-treesitter/nvim-treesitter",
  opts = function(_, opts)
    vim.list_extend(opts.ensure_installed, {
      "typescript",
      "css",
      "lua",
      "html",
      "json",
      "http",
      "xml",
      "http",
      "graphql",
    })
  end,
}
