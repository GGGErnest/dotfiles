local path_util = require("utils.path")
return {
  {
    "nvim-neotest/neotest",
    dependencies = {
      "nvim-neotest/neotest-jest",
      "nvim-lua/plenary.nvim",
      "antoinemadec/FixCursorHold.nvim",
      "nvim-treesitter/nvim-treesitter",
      "thenbe/neotest-playwright",
      dependencies = "nvim-telescope/telescope.nvim",
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
      {
        "<leader>ctD",
        function()
          require("neotest").diagnostic()
        end,
        desc = "Toogle Diagnostics (Neotest)",
      },
    },
    opts = {
      output = {
        enabled = true,
        open_on_run = true,
        enter = true,
        short = false,
      },
      output_options = {
        open_on_run = true,
        open_on_failure = true,
        short_output = false,
        capture_output = true,
        clear = true,
      },
      adapters = {
        ["neotest-jest"] = {
          jestConfigFile = function()
            return path_util.get_root() .. "/jest.config.ts"
          end,
          -- Remove CI=true to ensure console.log is not suppressed
          env = {
            NODE_ENV = "test",
            FORCE_COLOR = "1",
          },
          cwd = function()
            return path_util.get_root()
          end,
        },
        ["neotest-playwright"] = {
          options = {
            persist_project_selection = true,
            enable_dynamic_test_discovery = true,
            get_playwright_config = function()
              return path_util.get_root() .. "/tests/user-journey/playwright.config.ts"
            end,
            env = {
              ["EMS_URL"] = "http://localhost:4200",
              ["EMS_TEAM"] = "https://sdet-debug-celonis.beta.celonis.cloud",
              ["EMS_API_KEY"] = "NzRkMGQ5YTctZmJlOC00ZWExLWFkMGEtM2UzMTQ5YWJhOTBiOmZaWEF6bGpGOVJaRkpiYkVLN1RQc0h0U1NRZ0J0bVZQRzJyd2VqaEt0bjRX",
              ["EMS_USERNAME"] = "cypress+screenplay@celonis.de",
              ["EMS_PASSWORD"] = "Cypress123",
              ["USER_KEY"] = "Github_CI",
              ["EMS_BACKEND_API_KEY"] = "YzY3MjQ1MWUtNjNlMC00OTcxLTgwZWYtMjk4MWJhY2IzZGU3OmcvMWlOanRZTWJzS2NScUxBRkp1SVgzb2NqaC9ma1ZpODNYSWFuaUVJUnEr",
            },
            is_test_file = function(file_path)
              local result = file_path:find("tests/user-journey/tests/.*%.screenplay%.ts$") ~= nil
              return result
            end,
            experimental = {
              telescope = {
                enabled = true,
                opts = {},
              },
            },
          },
        },
      },
    },
  },
}
