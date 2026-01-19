return {
  "nvim-lualine/lualine.nvim",
  opts = function(_, opts)
    -- table.insert(opts.sections.lualine_z, require("opencode").statusline)
    table.remove(opts.sections.lualine_b)
    table.remove(opts.sections.lualine_c)
    table.remove(opts.sections.lualine_x)
    table.remove(opts.sections.lualine_y)

    -- Add env-switcher component to show current .env configuration
    local env_switcher = require("utils.env_switcher")
    table.insert(opts.sections.lualine_x, 1, {
      env_switcher.lualine_component,
      cond = env_switcher.lualine_cond,
    })
  end,
}
