-- Options are automatically loaded before lazy.nvim startup
-- Default options that are always set: https://github.com/LazyVim/LazyVim/blob/main/lua/lazyvim/config/options.lua
-- Add any additional options here
language = en_US
vim.opt.spelllang = "en_us"
vim.opt.spell = true
vim.g.lazyvim_prettier_needs_config = false
--  This is a workaround to work with nvim in mux mode in Wezterm. Enabling this causes sluggishness in nwovim
vim.opt.termsync = false
-- views can only be fully collapsed with the global statusline
vim.opt.laststatus = 3
