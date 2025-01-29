local M = {}

-- Configuration with default values
M.config = {
  ignore_case = false,
  whole_word = false,
}

-- Function to clear all highlights and virtual text
local function clear_highlights(bufnr, ns_id)
  -- Clear all matches
  local matches = vim.fn.getmatches()
  for _, match in ipairs(matches) do
    vim.fn.matchdelete(match.id)
  end

  -- Clear virtual text
  if ns_id then
    vim.api.nvim_buf_clear_namespace(bufnr, ns_id, 0, -1)
  end
end

-- Function to highlight and count matches
local function update_matches()
  local search = vim.fn.getcmdline()
  local bufnr = vim.api.nvim_get_current_buf()
  local ns_id = vim.api.nvim_create_namespace("text_replace_count")

  -- Clear existing matches first
  clear_highlights(bufnr, ns_id)

  -- If search is empty, just return
  if search == "" then
    return 0
  end

  -- Define highlight groups
  vim.cmd([[
        highlight! TextReplaceMatch guibg=#FF3333 guifg=#FFFFFF gui=bold,nocombine 
        highlight! TextReplaceMatchBorder guibg=NONE guifg=#FF3333 gui=bold,underline,nocombine
    ]])

  -- Count and highlight matches
  local lines = vim.api.nvim_buf_get_lines(bufnr, 0, -1, false)
  local count = 0

  for i, line in ipairs(lines) do
    local search_pat = M.config.ignore_case and search:lower() or search
    local line_text = M.config.ignore_case and line:lower() or line
    local start = 1

    while true do
      local s, e = string.find(line_text, search_pat, start, true)
      if not s then
        break
      end

      -- Add highlight for this match
      vim.fn.matchaddpos("TextReplaceMatch", { { i, s, e - s + 1 } }, 100)
      vim.fn.matchaddpos("TextReplaceMatchBorder", { { i, s }, { i, e } }, 99)

      count = count + 1
      start = e + 1
    end
  end

  -- Show count using virtual text
  if count > 0 then
    local line = vim.api.nvim_win_get_cursor(0)[1] - 1
    local text = string.format(" %d match%s", count, count == 1 and "" or "es")
    vim.api.nvim_buf_set_virtual_text(bufnr, ns_id, line, { { text, "DiagnosticInfo" } }, {})
  end

  return count
end

-- Get word under cursor
function M.get_word_under_cursor()
  return vim.fn.expand("<cword>")
end

-- Get selected text in visual mode
function M.get_visual_selection()
  -- Save the current register content
  local reg_save = vim.fn.getreg('"')
  local regtype_save = vim.fn.getregtype('"')

  -- Yank the visual selection into the default register
  vim.cmd("normal! y")

  -- Get the text
  local text = vim.fn.getreg('"')

  -- Restore register
  vim.fn.setreg('"', reg_save, regtype_save)

  -- Clean up the text (remove newlines etc)
  text = text:gsub("\n", "")

  return text
end

-- Replace text in current buffer
function M.replace_in_buffer(initial_search)
  local bufnr = vim.api.nvim_get_current_buf()
  local ns_id = vim.api.nvim_create_namespace("text_replace_count")

  -- Set up autocommands for real-time preview
  local group = vim.api.nvim_create_augroup("TextReplacePreview", { clear = true })

  -- Update on cmdline changes and initial entry
  vim.api.nvim_create_autocmd({ "CmdlineChanged", "CmdlineEnter" }, {
    group = group,
    callback = function()
      update_matches()
    end,
  })

  -- Set up temporary Alt+Backspace mapping
  vim.api.nvim_create_autocmd("CmdlineEnter", {
    group = group,
    callback = function()
      vim.cmd([[cnoremap <buffer> <M-BS> <C-U>]])
    end,
  })

  -- Clean up mapping when leaving cmdline
  vim.api.nvim_create_autocmd("CmdlineLeave", {
    group = group,
    callback = function()
      vim.cmd([[cunmap <buffer> <M-BS>]])
    end,
  })

  -- Get search pattern with live preview
  local search = vim.fn.input({
    prompt = "Search (Alt-BS to clear): ",
    default = initial_search or "",
    cancelreturn = "",
  })

  vim.api.nvim_del_augroup_by_name("TextReplacePreview")

  if search == "" then
    clear_highlights(bufnr, ns_id)
    return
  end

  -- Count final matches
  local lines = vim.api.nvim_buf_get_lines(bufnr, 0, -1, false)
  local count = 0
  local search_pat = M.config.ignore_case and search:lower() or search

  for _, line in ipairs(lines) do
    local line_text = M.config.ignore_case and line:lower() or line
    local start = 1
    while true do
      local s = string.find(line_text, search_pat, start, true)
      if not s then
        break
      end
      count = count + 1
      start = s + 1
    end
  end

  if count == 0 then
    clear_highlights(bufnr, ns_id)
    vim.notify("No matches found", vim.log.levels.WARN)
    return
  end

  -- Set up new autocommands for replacement preview
  local group = vim.api.nvim_create_augroup("TextReplacePreview", { clear = true })

  -- Update on cmdline changes and initial entry
  vim.api.nvim_create_autocmd({ "CmdlineChanged", "CmdlineEnter" }, {
    group = group,
    callback = function()
      update_matches()
    end,
  })

  -- Set up temporary Alt+Backspace mapping
  vim.api.nvim_create_autocmd("CmdlineEnter", {
    group = group,
    callback = function()
      vim.cmd([[cnoremap <buffer> <M-BS> <C-U>]])
    end,
  })

  -- Clean up mapping when leaving cmdline
  vim.api.nvim_create_autocmd("CmdlineLeave", {
    group = group,
    callback = function()
      vim.cmd([[cunmap <buffer> <M-BS>]])
    end,
  })

  -- Get replacement text (empty means delete), prefilled with search text
  local replacement = vim.fn.input({
    prompt = string.format("Replace %d match%s with (Alt-BS to clear): ", count, count == 1 and "" or "es"),
    default = search,
    cancelreturn = "\27", -- Escape character
  })

  vim.api.nvim_del_augroup_by_name("TextReplacePreview")

  -- Return if user cancelled (pressed Escape)
  if replacement == "\27" then
    clear_highlights(bufnr, ns_id)
    return
  end

  -- Perform replacement
  vim.cmd("silent! undojoin")

  -- Create an undo breakpoint before starting
  vim.cmd("normal! i \b")

  local replaced = 0
  local lines = vim.api.nvim_buf_get_lines(bufnr, 0, -1, false)

  for i, line in ipairs(lines) do
    local new_line, count
    if M.config.ignore_case then
      local pattern = string.format("()%s()", search:lower())
      new_line = line
      local positions = {}

      -- Find all matches positions
      for start, finish in line:lower():gmatch(pattern) do
        table.insert(positions, { start, finish })
      end

      -- Replace from end to start to maintain positions
      for j = #positions, 1, -1 do
        local start, finish = positions[j][1], positions[j][2]
        new_line = new_line:sub(1, start - 1) .. replacement .. new_line:sub(finish)
      end

      count = #positions
    else
      new_line, count = line:gsub(search, replacement)
    end

    if count and count > 0 then
      vim.api.nvim_buf_set_lines(bufnr, i - 1, i, false, { new_line })
      replaced = replaced + count
    end
  end

  -- Show result
  local action = replacement == "" and "Deleted" or "Replaced"
  vim.notify(string.format("%s %d occurrence%s", action, replaced, replaced == 1 and "" or "s"), vim.log.levels.INFO)

  -- Clear highlights at the very end
  clear_highlights(bufnr, ns_id)
end

-- Smart word/selection replace function
function M.smart_word_replace()
  -- Exit visual mode first if we're in it to ensure clean state
  local is_visual = vim.fn.mode(1):match("[vV]")
  local text

  if is_visual then
    text = M.get_visual_selection()
    vim.cmd("normal! `<") -- Return to start of visual selection
  else
    text = M.get_word_under_cursor()
  end

  -- Now call replace_in_buffer with the text
  vim.schedule(function()
    M.replace_in_buffer(text)
  end)
end

return M
