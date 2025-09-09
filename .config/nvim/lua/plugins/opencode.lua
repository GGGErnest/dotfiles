return {
  "NickvanDyke/opencode.nvim",
  dependencies = {
    { "folke/snacks.nvim", opts = { input = { enabled = true } } },
  },
  opts = {
    auto_fallback_to_embedded = true,
  },
  keys = {
    {
      "<leader>aa",
      function()
        require("opencode").ask("@cursor: ")
      end,
      desc = "Ask opencode",
      mode = "n",
    },
    {
      "<leader>aa",
      function()
        require("opencode").ask("@selection: ")
      end,
      desc = "Ask opencode about selection",
      mode = "v",
    },
    {
      "<leader>at",
      function()
        require("opencode").toggle()
      end,
      desc = "Toggle opencode terminal",
      mode = "n",
    },
    {
      "<leader>an",
      function()
        require("opencode").command("session_new")
      end,
      desc = "New opencode session",
      mode = "n",
    },
    {
      "<leader>ay",
      function()
        require("opencode").command("messages_copy")
      end,
      desc = "Copy last message",
      mode = "n",
    },
    {
      "<S-C-u>",
      function()
        require("opencode").command("messages_half_page_up")
      end,
      desc = "Scroll messages up",
      mode = "n",
    },
    {
      "<S-C-d>",
      function()
        require("opencode").command("messages_half_page_down")
      end,
      desc = "Scroll messages down",
      mode = "n",
    },
    {
      "<leader>ap",
      function()
        require("opencode").select_prompt()
      end,
      desc = "Select prompt",
      mode = { "n", "v" },
    },
    {
      "<leader>ae",
      function()
        require("opencode").prompt("Explain @cursor and its context")
      end,
      desc = "Explain code near cursor",
      mode = "n",
    },
    {
      "<leader>ab",
      function()
        require("opencode").ask("@buffer: ")
      end,
      desc = "Ask opencode about buffer",
      mode = "n",
    },
    {
      "<leader>ad",
      function()
        require("opencode").ask("@diagnostic: ")
      end,
      desc = "Ask opencode about the diagnostics under the cursor",
      mode = "n",
    },
    {
      "<leader>aD",
      function()
        require("opencode").ask("@diagnostics: ")
      end,
      desc = "Ask opencode about all diagnostics",
      mode = "n",
    },
    {
      "<leader>ag",
      function()
        require("opencode").ask("@diff: ")
      end,
      desc = "Ask opencode about git diff",
      mode = "n",
    },
    {
      "<leader>aq",
      function()
        require("opencode").ask("@quickfix: ")
      end,
      desc = "Ask opencode about quickfix",
      mode = "n",
    },
    {
      "<leader>av",
      function()
        require("opencode").ask("@visible: ")
      end,
      desc = "Ask opencode about visible text",
      mode = "n",
    },
  },
}
