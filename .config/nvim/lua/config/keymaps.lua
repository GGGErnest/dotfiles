local text_replace = require("utils.text_replacement")

local keymap = vim.keymap
local opts = { noremap = true, silent = true }

-- Function to create a smooth scrolling effect
local function smooth_scroll(lines, key)
  return string.format(
    [[<Cmd>lua for _ = 1, %d do vim.cmd('normal! %s') vim.cmd('redraw') vim.loop.sleep(10) end<CR>]],
    lines,
    key
  )
end

-- use jk to exit insert mode
--keymap.set("i", "jk", "<ESC>", opts)
keymap.set("n", "<C-S-s>", ":wall<CR>", opts)

-- Set up keymaps for scrolling with arrow keys
vim.keymap.set("n", "<S-Down>", smooth_scroll(3, "<C-e>"), { silent = true })
vim.keymap.set("n", "<S-Up>", smooth_scroll(3, "<C-y>"), { silent = true })

-- Optional: Set up keymaps for faster scrolling
vim.keymap.set("n", "<Down>", smooth_scroll(10, "<C-e>"), { silent = true })
vim.keymap.set("n", "<Up>", smooth_scroll(10, "<C-y>"), { silent = true })

-- Move Lines
keymap.set("n", "<A-Down>", "<cmd>m .+1<cr>==", { desc = "Move Down" })
keymap.set("n", "<A-Up>", "<cmd>m .-2<cr>==", { desc = "Move Up" })
keymap.set("i", "<A-Down>", "<esc><cmd>m .+1<cr>==gi", { desc = "Move Down" })
keymap.set("i", "<A-Up>", "<esc><cmd>m .-2<cr>==gi", { desc = "Move Up" })
keymap.set("v", "<A-Down>", ":m '>+1<cr>gv=gv", { desc = "Move Down" })
keymap.set("v", "<A-Up>", ":m '<-2<cr>gv=gv", { desc = "Move Up" })

-- Register angular navigation keymaps.
require("utils.angular_utils").setup_keymaps()

-- Regular search and replace
-- vim.keymap.set({ "n", "v" }, "<leader>tr", text_replace.replace_in_buffer, { desc = "Replace in buffer" })

-- Word/selection replace for both normal and visual mode
-- vim.keymap.set(
--   { "n", "v" },
--   "<leader>tw",
--   text_replace.smart_word_replace,
--   { desc = "Replace word under cursor/selection" }
-- )
