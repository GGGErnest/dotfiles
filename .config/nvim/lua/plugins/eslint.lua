return {
  "esmuellert/nvim-eslint",
  event = { "BufReadPre", "BufNewFile" },
  ft = { "javascript", "javascriptreact", "typescript", "typescriptreact", "vue", "svelte", "astro" },
  opts = {
    debug = true,
    settings = {
      -- Flat config support (eslint.config.js)
      experimental = {
        useFlatConfig = nil, -- auto-detect, set to true/false to force
      },
      -- Working directories
      workingDirectories = { mode = "auto" },
      -- Validate on save
      run = "onType", -- or "onSave"
      -- Code action settings
      codeAction = {
        disableRuleComment = {
          enable = true,
          location = "separateLine",
        },
        showDocumentation = {
          enable = true,
        },
      },
    },
  },
  config = function(_, opts)
    require("nvim-eslint").setup(opts)
  end,
}
