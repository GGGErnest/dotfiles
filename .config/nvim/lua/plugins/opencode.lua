return {
  "NickvanDyke/opencode.nvim",
  dependencies = {
    "folke/snacks.nvim",
  },
  opts = {
    auto_falback_to_embedded = true,
  },
  keys = {
    {
      "<leader>at",
      function()
        require("snacks").terminal.toggle("opencode", {
          env = { OPENCODE_THEME = "system" },
          cwd = vim.fn.getcwd(),
          win = {
            position = "right",
            width = 0.35,
            border = "none",
            style = "minimal",
          },
        })
      end,
      desc = "Toggle opencode terminal",
      mode = "n",
    },
    {
      "<leader>aa",
      function()
        local current_buf = vim.api.nvim_get_current_buf()
        local buf_name = vim.api.nvim_buf_get_name(current_buf)
        local relative_path = vim.fn.fnamemodify(buf_name, ":.")

        local prompt = "@selection: "
        if buf_name ~= "" and relative_path ~= "" and vim.fn.filereadable(buf_name) == 1 then
          prompt = "@buffer @selection: "
        end

        require("opencode").ask(prompt)
      end,
      desc = "Ask opencode about selection with buffer context",
      mode = "v",
    },
    {
      "<leader>aa",
      function()
        local current_buf = vim.api.nvim_get_current_buf()
        local buf_name = vim.api.nvim_buf_get_name(current_buf)
        local relative_path = vim.fn.fnamemodify(buf_name, ":.")

        local prompt = ""
        if buf_name ~= "" and relative_path ~= "" and vim.fn.filereadable(buf_name) == 1 then
          prompt = "@buffer: "
        end

        require("opencode").ask(prompt)
      end,
      desc = "Ask opencode with buffer context",
      mode = "n",
    },
  },
}
