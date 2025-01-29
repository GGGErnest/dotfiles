local M = {}

-- Function to prompt user for file extensions
local function get_file_extensions(callback)
  -- Set the title for the input prompt
  vim.cmd("set title titlestring=Enter\\ file\\ extensions\\ (comma-separated,\\ e.g.\\ lua,vim,md)")

  -- Get input with history support
  local ok, extensions = pcall(vim.fn.input, {
    prompt = "> ",
    cancelreturn = "__CANCELLED__",
    history = "ext_search", -- This enables command history
  })

  -- Reset title to default
  vim.cmd("set titlestring=")

  -- Handle escape or cancellation
  if not ok or extensions == "__CANCELLED__" then
    return callback(nil)
  end

  -- Return empty table if user just pressed Enter
  if extensions == "" then
    return callback({})
  end

  -- Remove any spaces and split by comma
  local exts = vim.split(extensions:gsub("%s+", ""), ",")
  -- Add '.' prefix if not present and create glob pattern
  local patterns = {}
  for _, ext in ipairs(exts) do
    if ext:sub(1, 1) ~= "." then
      ext = "." .. ext
    end
    table.insert(patterns, "*" .. ext)
  end

  return callback(patterns)
end

-- Function to create the rg command with extension filters
local function build_rg_command(patterns)
  local cmd = "rg --column --line-number --no-heading --color=always --smart-case"
  -- Only add glob patterns if extensions were specified
  if #patterns > 0 then
    for _, pattern in ipairs(patterns) do
      cmd = cmd .. ' --glob "' .. pattern .. '"'
    end
  end
  return cmd
end

-- Function to get visually selected text
local function get_visual_selection()
  local save_previous = vim.fn.getreg("a")
  vim.cmd('normal! "ay')
  local selection = vim.fn.getreg("a")
  vim.fn.setreg("a", save_previous)
  -- Clean up the selection (remove newlines and extra spaces)
  selection = vim.fn.substitute(selection, [[\n]], "", "g")
  selection = vim.fn.substitute(selection, [[\s\+]], " ", "g")
  return vim.fn.trim(selection)
end

-- Function to get search text based on mode and options
local function get_search_text(opts)
  opts = opts or {}
  local mode = vim.api.nvim_get_mode().mode

  if mode:find("^v") or mode:find("^V") then
    -- Visual mode: use selected text
    return get_visual_selection()
  else
    -- Normal mode: use word under cursor
    return vim.fn.expand(opts.use_WORD and "<cWORD>" or "<cword>")
  end
end

local function get_cwd(opts)
  opts = opts or {}
  local cwd = vim.fn.getcwd()

  if opts.root == true then
    cwd = require("lazyvim.util").root()
  end

  return cwd
end

-- Main function for extension-based search with automatic text detection
function M.grep_word(opts)
  opts = opts or {}
  local initial_query = get_search_text(opts)

  get_file_extensions(function(patterns)
    -- If patterns is nil, user cancelled
    if patterns == nil then
      return
    end

    local fzf = require("fzf-lua")
    fzf.live_grep({
      cmd = build_rg_command(patterns),
      prompt = (#patterns > 0 and "Search in *." .. table.concat(patterns, ", *.") .. "> " or "Search in all files> "),
      search = initial_query,
      cwd = get_cwd(opts),
    })
  end)
end

-- Main function for extension-based search without initial query
function M.grep_by_extension(opts)
  get_file_extensions(function(patterns)
    -- If patterns is nil, user cancelled
    if patterns == nil then
      return
    end

    local fzf = require("fzf-lua")
    fzf.live_grep({
      cmd = build_rg_command(patterns),
      prompt = (#patterns > 0 and "Search in *." .. table.concat(patterns, ", *.") .. "> " or "Search in all files> "),
      cwd = get_cwd(opts),
    })
  end)
end

return M
