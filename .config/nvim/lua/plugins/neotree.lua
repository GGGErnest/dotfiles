return {
  "nvim-neo-tree/neo-tree.nvim",
  opts = {
    window = {
      position = "float",
    },
  },
  keys = {
    {
      "<leader>e",
      function()
        if vim.bo.filetype == "neo-tree" then
          vim.cmd("Neotree close")
        else
          require("neo-tree.command").execute({
            action = "focus",
            source = "filesystem",
            position = "float",
            reveal_file = vim.fn.expand("%:p"),
            reveal_force_cwd = true,
          })
        end
      end,
      desc = "Explorer NeoTree (float)",
    },
  },
}
