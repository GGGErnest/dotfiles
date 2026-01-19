return {
  "NickvanDyke/opencode.nvim",
  dependencies = {
    { "folke/snacks.nvim", opts = { input = { enabled = true } } },
  },
  config = function()
    vim.g.opencode_opts = {
      auto_fallback_to_embedded = true,
    }

    vim.opt.autoread = true

    -- Register which-key groups
    local ok, wk = pcall(require, "which-key")
    if ok then
      wk.add({
        { "<leader>a", group = "AI/OpenCode" },
        { "<leader>ai", group = "Inspect/Diagnostics" },
      })
    end

    -- === Core Actions ===
    vim.keymap.set({ "n", "x" }, "<leader>aa", function()
      require("opencode").ask("@this: ", { submit = true })
    end, { desc = "OpenCode: Ask with @this (auto-submit)" })

    vim.keymap.set({ "n", "x" }, "<leader>aq", function()
      require("opencode").ask("", { submit = false })
    end, { desc = "OpenCode: Quick ask" })

    vim.keymap.set({ "n", "x" }, "<leader>ax", function()
      require("opencode").select()
    end, { desc = "OpenCode: Execute action" })

    -- === Predefined Prompts: Code Actions ===
    vim.keymap.set({ "n", "x" }, "<leader>ae", function()
      require("opencode").prompt("explain", { submit = true })
    end, { desc = "OpenCode: Explain @this" })

    vim.keymap.set({ "n", "x" }, "<leader>ao", function()
      require("opencode").prompt("optimize", { submit = true })
    end, { desc = "OpenCode: Optimize @this" })

    vim.keymap.set({ "n", "x" }, "<leader>ad", function()
      require("opencode").prompt("document", { submit = true })
    end, { desc = "OpenCode: Document @this" })

    vim.keymap.set({ "n", "x" }, "<leader>aT", function()
      require("opencode").prompt("test", { submit = true })
    end, { desc = "OpenCode: Add tests for @this" })

    vim.keymap.set({ "n", "x" }, "<leader>ar", function()
      require("opencode").prompt("review", { submit = true })
    end, { desc = "OpenCode: Review @this" })

    -- === Predefined Prompts: Diagnostics ===
    vim.keymap.set({ "n", "x" }, "<leader>aid", function()
      require("opencode").prompt("diagnostics", { submit = true })
    end, { desc = "OpenCode: Explain diagnostics" })

    vim.keymap.set({ "n", "x" }, "<leader>aif", function()
      require("opencode").prompt("fix", { submit = true })
    end, { desc = "OpenCode: Fix diagnostics" })

    -- === Predefined Prompts: Git ===
    vim.keymap.set({ "n", "x" }, "<leader>aga", function()
      require("opencode").ask("@diff: ", { submit = true })
    end, { desc = "OpenCode: Review git diff" })
    vim.keymap.set({ "n", "x" }, "<leader>agr", function()
      require("opencode").prompt("diff", { submit = true })
    end, { desc = "OpenCode: Review git diff" })
    vim.keymap.set({ "n", "x" }, "<leader>agt", function()
      require("opencode").prompt("@diff: add update the tests for the changes in git", { submit = true })
    end, { desc = "OpenCode: Add tets to files in git diff" })

    -- === Predefined Prompts: Context ===
    vim.keymap.set({ "n", "x" }, "<leader>ab", function()
      require("opencode").ask("@buffer: ", { submit = false })
    end, { desc = "OpenCode: Ask @buffer" })

    vim.keymap.set({ "n", "x" }, "<leader>ap", function()
      require("opencode").prompt("@buffer")
    end, { desc = "OpenCode: Append @buffer to prompt" })

    -- === Window Management ===
    vim.keymap.set({ "n", "t" }, "<leader>at", function()
      require("opencode").toggle()
    end, { desc = "OpenCode: Toggle window" })

    vim.keymap.set({ "n", "t" }, "<leader>as", function()
      require("opencode").show()
    end, { desc = "OpenCode: Show window" })

    -- === Input Management ===
    vim.keymap.set({ "n", "x" }, "<leader>ac", function()
      require("opencode").prompt("", { clear = true })
    end, { desc = "OpenCode: Clear input" })

    -- === Scrolling ===
    vim.keymap.set("n", "<leader>au", function()
      require("opencode").command("session.half.page.up")
    end, { desc = "OpenCode: Scroll up" })

    vim.keymap.set("n", "<leader>aU", function()
      require("opencode").command("session.half.page.down")
    end, { desc = "OpenCode: Scroll down" })
  end,
}
