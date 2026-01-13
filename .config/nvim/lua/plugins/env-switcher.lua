-- env-switcher plugin specification
-- The actual module logic is in lua/utils/env_switcher.lua

local env_switcher = require("utils.env_switcher")

return {
  dir = vim.fn.stdpath("config") .. "/lua/plugins",
  name = "env-switcher",
  dependencies = { "folke/snacks.nvim" },
  keys = {
    {
      "<leader>z",
      function()
        env_switcher.pick_config()
      end,
      desc = "Switch .env configuration",
    },
  },
  config = function()
    env_switcher.setup()
  end,
}
