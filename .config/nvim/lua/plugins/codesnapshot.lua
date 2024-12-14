return {
  "michaelrommel/nvim-silicon",
  lazy = true,
  cmd = "Silicon",
  main = "nvim-silicon",
  keys = {
    {
      "<leader>csc",
      mode = { "v" },
      function()
        require("nvim-silicon").clip()
      end,
      desc = "Create a code snipet and copies it to the clipboard",
    },
    {
      "<leader>css",
      mode = { "v" },
      function()
        require("nvim-silicon").shoot()
      end,
      desc = "Create a code snipet shot to a file",
    },
  },
  opts = {
    -- Configuration here, or leave empty to use defaults
    line_offset = function(args)
      return args.line1
    end,
    theme = "Dracula",
    background = "#3d59a1",
  },
}
