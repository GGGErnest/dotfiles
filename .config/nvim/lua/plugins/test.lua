return {
  {
    "nvim-neotest/neotest",
    dependencies = {
      "nvim-neotest/neotest-jest",
      "nvim-lua/plenary.nvim",
      "antoinemadec/FixCursorHold.nvim",
      "nvim-treesitter/nvim-treesitter",
      "thenbe/neotest-playwright",
      "nvim-telescope/telescope.nvim",
    },
    keys = {
      {
        "<leader>t",
        false,
      },
      {
        "<leader>tl",
        false,
      },
      {
        "<leader>to",
        false,
      },
      {
        "<leader>tO",
        false,
      },
      {
        "<leader>tr",
        false,
      },
      {
        "<leader>ts",
        false,
      },
      {
        "<leader>tS",
        false,
      },
      {
        "<leader>tt",
        false,
      },
      {
        "<leader>tT",
        false,
      },
      {
        "<leader>tw",
        false,
      },
      {
        "<leader>td",
        false,
      },
      { "<leader>ct", "", desc = "+test" },
      {
        "<leader>ctt",
        function()
          require("neotest").run.run(vim.fn.expand("%"))
        end,
        desc = "Run File (Neotest)",
      },
      {
        "<leader>ctT",
        function()
          require("neotest").run.run(vim.uv.cwd())
        end,
        desc = "Run All Test Files (Neotest)",
      },
      {
        "<leader>ctr",
        function()
          require("neotest").run.run()
        end,
        desc = "Run Nearest (Neotest)",
      },
      {
        "<leader>ctl",
        function()
          require("neotest").run.run_last()
        end,
        desc = "Run Last (Neotest)",
      },
      {
        "<leader>cts",
        function()
          require("neotest").summary.toggle()
        end,
        desc = "Toggle Summary (Neotest)",
      },
      {
        "<leader>cto",
        function()
          require("neotest").output.open({ enter = true, auto_close = true })
        end,
        desc = "Show Output (Neotest)",
      },
      {
        "<leader>ctO",
        function()
          require("neotest").output_panel.toggle()
        end,
        desc = "Toggle Output Panel (Neotest)",
      },
      {
        "<leader>ctS",
        function()
          require("neotest").run.stop()
        end,
        desc = "Stop (Neotest)",
      },
      {
        "<leader>ctw",
        function()
          require("neotest").watch.toggle(vim.fn.expand("%"))
        end,
        desc = "Toggle Watch (Neotest)",
      },
    },
    opts = {
      adapters = {
        ["neotest-jest"] = {
          jestConfigFile = function()
            return require("utils.path").get_root() .. "/jest.config.ts"
          end,
          env = { CI = true },
          cwd = function()
            return require("utils.path").get_root()
          end,
        },
      },
    },
  },
}
