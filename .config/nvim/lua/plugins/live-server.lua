return {
  "barrett-ruth/live-server.nvim",
  build = "pnpm add -g live-server",
  cmd = { "LiveServerStart", "LiveServerStop" },
  keys = {
    { "<leader>clr", "<cmd>LiveServerStart<CR>", desc = "Live Server Start" },
    { "<leader>cls", "<cmd>LiveServerStop<CR>", desc = "Live Server Stop" },
  },
  config = true,
}
