return {
  "gbprod/yanky.nvim",
  opts = {
    ring = {
      history_length = 100,
      storage = "shada",
      sync_with_numbered_registers = true,
      cancel_event = "update",
      ignore_registers = { "_" },
      update_register_on_cycle = false,
    },
    picker = {
      select = {
        action = nil, -- nil to use default put action
      },
      telescope = {
        use_default_mappings = true, -- if default mappings should be used
        mappings = nil, -- nil to use default mappings or no mappings (see `use_default_mappings`)
      },
    },
    system_clipboard = {
      sync_with_ring = true,
    },
    highlight = {
      on_put = true,
      on_yank = true,
      timer = 500,
    },
    preserve_cursor_position = {
      enabled = true,
    },
    textobj = {
      enabled = true,
    },
  },
  keys = {
    { "<leader>pp", "<cmd>Telescope yank_history<cr>" },
    { "p", "<Plug>(YankyPutAfter)", mode = { "n", "x" } },
    { "P", "<Plug>(YankyPutBefore)", mode = { "n", "x" } },
    { "gp", "<Plug>(YankyGPutAfter)", mode = { "n", "x" } },
    { "gP", "<Plug>(YankyGPutBefore)", mode = { "n", "x" } },
    { "<c-p>", "<Plug>(yankypreviousentry)", mode = { "n" } },
    { "<c-n>", "<Plug>(YankyNextEntry)", mode = { "n" } },
    { "]p", "<Plug>(YankyPutIndentAfterCharwise)", mode = { "n" } },
    { "[p", "<Plug>(YankyPutIndentBeforeCharwise)", mode = { "n" } },
    { "]P", "<Plug>(YankyPutIndentAfterCharwise)", mode = { "n" } },
    { "[P", "<Plug>(YankyPutIndentBeforeCharwise)", mode = { "n" } },
    { ">p", "<Plug>(YankyPutIndentAfterShiftRight)", mode = { "n" } },
    { "<p", "<Plug>(YankyPutIndentAfterShiftLeft)", mode = { "n" } },
    { ">P", "<Plug>(YankyPutIndentBeforeShiftRight)", mode = { "n" } },
    { "<P", "<Plug>(YankyPutIndentBeforeShiftLeft)", mode = { "n" } },
    { "=p", "<Plug>(YankyPutAfterFilter)", mode = { "n" } },
    { "=P", "<Plug>(YankyPutBeforeFilter))", mode = { "n" } },
  },
  config = function()
    require("yanky").setup()
    local Hydra = require("hydra")

    local function t(str)
      return vim.api.nvim_replace_termcodes(str, true, true, true)
    end

    local yanky_hydra = Hydra({
      name = "Yank ring",
      config = {
        invoke_on_body = true,
      },
      mode = "n",
      heads = {
        { "p", "<Plug>(YankyPutAfter)", { desc = "After" } },
        { "P", "<Plug>(YankyPutBefore)", { desc = "Before" } },
        { "<C-p>", "<Plug>(YankyPreviousEntry)", { private = true, desc = "↑" } },
        { "<C-n>", "<Plug>(YankyNextEntry)", { private = true, desc = "↓" } },
      },
    })

    -- choose/change the mappings if you want
    for key, putAction in pairs({
      ["p"] = "<Plug>(YankyPutAfter)",
      ["P"] = "<Plug>(YankyPutBefore)",
      ["gp"] = "<Plug>(YankyGPutAfter)",
      ["gP"] = "<Plug>(YankyGPutBefore)",
    }) do
      vim.keymap.set({ "n", "x" }, key, function()
        vim.fn.feedkeys(t(putAction))
        yanky_hydra:activate()
      end)
    end

    -- choose/change the mappings if you want
    for key, putAction in pairs({
      ["]p"] = "<Plug>(YankyPutIndentAfterLinewise)",
      ["[p"] = "<Plug>(YankyPutIndentBeforeLinewise)",
      ["]P"] = "<Plug>(YankyPutIndentAfterLinewise)",
      ["[P"] = "<Plug>(YankyPutIndentBeforeLinewise)",

      [">p"] = "<Plug>(YankyPutIndentAfterShiftRight)",
      ["<p"] = "<Plug>(YankyPutIndentAfterShiftLeft)",
      [">P"] = "<Plug>(YankyPutIndentBeforeShiftRight)",
      ["<P"] = "<Plug>(YankyPutIndentBeforeShiftLeft)",

      ["=p"] = "<Plug>(YankyPutAfterFilter)",
      ["=P"] = "<Plug>(YankyPutBeforeFilter)",
    }) do
      vim.keymap.set("n", key, function()
        vim.fn.feedkeys(t(putAction))
        yanky_hydra:activate()
      end)
    end
  end,
}
