return {
  "folke/snacks.nvim",
  opts = {
    explorer = {
      enabled = true,
    },
    picker = {
      enabled = true,
      ---@class snacks.picker.sources.Config
      sources = {
        files = {
          follow = true,
        },
        explorer = {
          hidden = true, -- show hidden files
          follow = true,
          auto_close = true,
          layout = {
            preview = false,
            layout = {
              backdrop = false,
              width = 0.7,
              min_width = 80,
              height = 0.8,
              min_height = 3,
              box = "vertical",
              border = "rounded",
              title = "{title}",
              title_pos = "center",
              { win = "input", height = 1, border = "bottom" },
              { win = "list", border = "none" },
              { win = "preview", title = "{preview}", height = 0.4, border = "top" },
            },
          }, -- layout for the explorer picker
        },
      },
    },
  },
  -- stylua: ignore
  keys = {
    { "<leader>,", function() Snacks.picker.buffers({focus="list",current=false, sort_lastused=true,preview= false }) end, desc = "Buffers" },
    { "<leader>su", function() Snacks.picker.undo({focus="list"}) end, desc = "Undotree" },
    { "<leader>sD", function() Snacks.picker.diagnostics_buffer({focus="list"}) end, desc = "Buffer Diagnostics" },
  },
}
