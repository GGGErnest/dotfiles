return {
  "mrjones2014/smart-splits.nvim",
  lazy = false,
  options = {},
  keys = {
    -- Moving focus to other panes
    {
      "<C-h>",
      mode = { "n" },
      function()
        require("smart-splits").move_cursor_left()
      end,
      desc = "Move focus to the next left pane",
    },
    {
      "<C-l>",
      mode = { "n" },
      function()
        require("smart-splits").move_cursor_right()
      end,
      desc = "Move focus to the next right pane",
    },
    {
      "<C-j>",
      mode = { "n" },
      function()
        require("smart-splits").move_cursor_down()
      end,
      desc = "Move focus to the next right pane",
    },
    {
      "<C-k>",
      mode = { "n" },
      function()
        require("smart-splits").move_cursor_up()
      end,
      desc = "Move focus to the next right pane",
    },
    -- Resizing panes
    {
      "<C-S-h>",
      mode = { "n" },
      function()
        require("smart-splits").move_cursor_left()
      end,
      desc = "Move focus to the next left pane",
    },
    {
      "<C-S-l>",
      mode = { "n" },
      function()
        require("smart-splits").move_cursor_right()
      end,
      desc = "Move focus to the next right pane",
    },
    {
      "<C-S-j>",
      mode = { "n" },
      function()
        require("smart-splits").move_cursor_down()
      end,
      desc = "Move focus to the next right pane",
    },
    {
      "<C-S-k>",
      mode = { "n" },
      function()
        require("smart-splits").move_cursor_up()
      end,
      desc = "Move focus to the next right pane",
    },
  },
}
