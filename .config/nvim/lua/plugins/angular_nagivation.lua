return {
  {
    "ibhagwan/fzf-lua",
    keys = {
      {
        "<leader>fa",
        function()
          require("utils.angular_utils").get_angular_finder()()
        end,
        desc = "Find Angular files",
      },
    },
  },
}
