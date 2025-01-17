return {
  {
    "chentoast/marks.nvim",
    event = "VeryLazy",
    config = function()
      -- Initialize marks.nvim plugin
      require("marks").setup({
        default_mappings = false,
        builtin_marks = {}, -- Disable built-in marks
        cyclic = true, -- Allow cycling through marks
      })

      -- Function to get all marks
      local function get_marks()
        local marks = {}
        for line in vim.fn.execute("marks"):gmatch("[^\r\n]+") do
          -- Skip the header line
          if not line:match("^mark line  col file/text") then
            local mark = line:match("^%s*([A-Z])%s+")
            if mark then
              table.insert(marks, mark)
            end
          end
        end
        return marks
      end

      -- Function to navigate to next/previous mark
      local function navigate_marks(direction)
        local marks = get_marks()
        if #marks == 0 then
          vim.notify("No marks set", vim.log.levels.WARN)
          return
        end

        -- Get current position details
        local current_file = vim.fn.expand("%:p")
        local current_line = vim.fn.line(".")
        local current_col = vim.fn.col(".")

        -- Get positions of all marks
        local mark_positions = {}
        for _, mark in ipairs(marks) do
          local pos = vim.fn.getpos("'" .. mark)
          table.insert(mark_positions, {
            mark = mark,
            line = pos[2],
            col = pos[3],
            file = vim.fn.expand("#" .. pos[1] .. ":p") or current_file,
          })
        end

        -- Sort marks by file, line, and column
        table.sort(mark_positions, function(a, b)
          if a.file ~= b.file then
            return a.file < b.file
          end
          if a.line ~= b.line then
            return a.line < b.line
          end
          return a.col < b.col
        end)

        -- Find the next/previous mark
        local found = false
        local target_mark
        if direction == "next" then
          for _, pos in ipairs(mark_positions) do
            if
              (pos.file > current_file)
              or (pos.file == current_file and pos.line > current_line)
              or (pos.file == current_file and pos.line == current_line and pos.col > current_col)
            then
              target_mark = pos.mark
              found = true
              break
            end
          end
          -- Cycle to first mark if at the end
          if not found and #mark_positions > 0 then
            target_mark = mark_positions[1].mark
          end
        else
          for i = #mark_positions, 1, -1 do
            local pos = mark_positions[i]
            if
              (pos.file < current_file)
              or (pos.file == current_file and pos.line < current_line)
              or (pos.file == current_file and pos.line == current_line and pos.col < current_col)
            then
              target_mark = pos.mark
              found = true
              break
            end
          end
          -- Cycle to last mark if at the beginning
          if not found and #mark_positions > 0 then
            target_mark = mark_positions[#mark_positions].mark
          end
        end

        if target_mark then
          vim.cmd("normal! `" .. target_mark)
          vim.notify("Navigated to mark '" .. target_mark .. "'", vim.log.levels.INFO)
        end
      end

      -- Function to check for mark at current position and set new one if none exists
      local function handle_mark_toggle()
        -- Get current position
        local current_line = vim.fn.line(".")
        local marks_output = vim.fn.execute("marks")

        -- Parse marks output to find marks at current line
        local found_mark = nil
        for line in marks_output:gmatch("[^\r\n]+") do
          local mark, line_num = line:match("^%s*([A-Z])%s+(%d+)")
          if mark and tonumber(line_num) == current_line then
            -- Verify the exact position using getpos
            local mark_pos = vim.fn.getpos("'" .. mark)
            if mark_pos[2] == current_line then
              found_mark = mark
              break
            end
          end
        end

        if found_mark then
          -- Remove existing mark
          vim.cmd("delmarks " .. found_mark)
          vim.notify("Mark '" .. found_mark .. "' deleted", vim.log.levels.INFO)
        else
          -- Wait for character input to set new mark
          vim.notify("Press a key to set mark...", vim.log.levels.INFO)
          local char = vim.fn.getcharstr():upper()
          if char:match("[A-Z]") then
            vim.cmd("mark " .. char)
            vim.notify("Mark '" .. char .. "' set", vim.log.levels.INFO)
          end
        end
      end

      -- Function to go to specific mark with error handling
      local function goto_specific_mark()
        vim.notify("Enter mark to go to...", vim.log.levels.INFO)
        local char = vim.fn.getcharstr():upper()
        if char:match("[A-Z]") then
          -- Check if mark exists
          local mark_pos = vim.fn.getpos("'" .. char)
          if mark_pos[2] == 0 then
            vim.notify("Mark '" .. char .. "' does not exist", vim.log.levels.WARN)
            return
          end
          -- Use backtick for exact position
          vim.cmd("normal! `" .. char)
          vim.notify("Jumped to mark '" .. char .. "'", vim.log.levels.INFO)
        end
      end

      -- Function to delete marks in current buffer
      local function delete_buffer_marks()
        -- Get current buffer's marks
        local marks_output = vim.fn.execute("marks")
        local current_file = vim.fn.expand("%:p")

        -- Collect global marks in current buffer
        local global_marks_to_delete = {}
        for line in marks_output:gmatch("[^\r\n]+") do
          local mark = line:match("^%s*([A-Z])%s+")
          if mark then
            -- Check if mark is in current buffer
            local mark_pos = vim.fn.getpos("'" .. mark)
            local mark_bufnr = mark_pos[1]
            if mark_bufnr == 0 or vim.fn.expand("#" .. mark_bufnr .. ":p") == current_file then
              table.insert(global_marks_to_delete, mark)
            end
          end
        end

        -- Delete local marks in buffer
        vim.cmd("delmarks!")

        -- Delete global marks that are in this buffer
        if #global_marks_to_delete > 0 then
          vim.cmd("delmarks " .. table.concat(global_marks_to_delete))
          vim.notify(
            "Deleted all marks in buffer including global marks: " .. table.concat(global_marks_to_delete, ", "),
            vim.log.levels.INFO
          )
        else
          vim.notify("Deleted all marks in buffer", vim.log.levels.INFO)
        end
      end

      -- Set up the keymaps
      -- Use <leader>m as the prefix for mark operations
      vim.keymap.set("n", "<leader>m", "<nop>", { desc = "+marks" })
      vim.keymap.set("n", "<leader>mt", handle_mark_toggle, { noremap = true, silent = true, desc = "Toggle mark" })
      vim.keymap.set("n", "<leader>mn", function()
        navigate_marks("next")
      end, { noremap = true, silent = true, desc = "Next mark" })
      vim.keymap.set("n", "<leader>mp", function()
        navigate_marks("prev")
      end, { noremap = true, silent = true, desc = "Previous mark" })
      vim.keymap.set("n", "<leader>mg", goto_specific_mark, { noremap = true, silent = true, desc = "Go to mark" })
      vim.keymap.set("n", "<leader>mD", function()
        vim.cmd("delmarks A-Z")
        vim.notify("All global marks deleted", vim.log.levels.INFO)
      end, { noremap = true, silent = true, desc = "Delete all global marks" })
      vim.keymap.set(
        "n",
        "<leader>md",
        delete_buffer_marks,
        { noremap = true, silent = true, desc = "Delete buffer marks" }
      )
      vim.keymap.set("n", "<leader>ml", ":marks<CR>", { noremap = true, silent = true, desc = "List marks" })

      -- Mark setting behavior with <leader>M
      vim.keymap.set("n", "<leader>M", function()
        local char = vim.fn.getcharstr():upper()
        if char:match("[A-Z]") then
          vim.cmd("mark " .. char)
          vim.notify("Mark '" .. char .. "' set", vim.log.levels.INFO)
        end
      end, { noremap = true, silent = true, desc = "Set mark" })
    end,
  },
}
