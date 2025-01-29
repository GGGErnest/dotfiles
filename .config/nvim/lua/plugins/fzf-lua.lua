return {
  "ibhagwan/fzf-lua",
  keys = {
    {
      "<leader>ss",
      false,
    },
    {
      "<leader>sS",
      false,
    },
    { "<leader>sw", false },
    { "<leader>sW", false },
    {
      "<leader>cs",
      function()
        require("fzf-lua").lsp_document_symbols({
          regex_filter = symbols_filter,
        })
      end,
      desc = "Goto Symbol",
    },
    {
      "<leader>cS",
      function()
        require("fzf-lua").lsp_live_workspace_symbols({
          regex_filter = symbols_filter,
        })
      end,
      desc = "Goto Symbol (Workspace)",
    },
    {
      "<leader>se",
      function()
        require("utils.fzf_utils").grep_by_extension({ root = true })
      end,
      desc = "Grep by Extension",
    },
    {
      "<leader>sE",
      function()
        require("utils.fzf_utils").grep_by_extension()
      end,
      desc = "Grep by Extension",
    },
    {
      "<leader>sw",
      function()
        require("utils.fzf_utils").grep_word({ use_WORD = false, root = true })
      end,
      mode = { "n", "v" },
      desc = "Grep Word by Extension",
    },
    {
      "<leader>sW",
      function()
        require("utils.fzf_utils").grep_word({ use_WORD = true })
      end,
      mode = { "n", "v" },
      desc = "Grep WORD by Extension",
    },
  },
  opts = function()
    local fzf = require("fzf-lua")
    local actions = fzf.actions

    return {
      files = {
        cwd_prompt = false,
        actions = {
          ["ctrl-i"] = { actions.toggle_ignore },
          ["ctrl-h"] = { actions.toggle_hidden },
        },
      },
      grep = {
        actions = {
          ["ctrl-i"] = { actions.toggle_ignore },
          ["ctrl-h"] = { actions.toggle_hidden },
        },
      },
    }
  end,
}
