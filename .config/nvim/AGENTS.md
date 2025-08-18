# Neovim Configuration - Agent Guidelines

## Build/Test Commands
- **Formatting**: No automated linting configured. Follow stylua.toml (2 spaces, 120 cols)
- **Testing**: No test framework configured. Manual verification via nvim startup

## Code Style Guidelines

### Lua Conventions
- **Indentation**: 2 spaces (per stylua.toml)
- **Line length**: 120 characters max
- **Function style**: Use `function M.function_name()` for module functions
- **Local variables**: Prefer `local` scope, use descriptive names
- **Comments**: Use `--` for single line, avoid excessive commenting

### Imports/Requires
- Use `require("module")` at function level when possible for lazy loading
- Group requires at top of file when needed globally
- Use `local M = {}` pattern for modules, return M at end

### Error Handling
- Use `pcall()` for operations that may fail (seen in fzf_utils.lua:9)
- Handle cancellation gracefully (check for nil returns)
- Provide user feedback via vim.notify() when appropriate

### Plugin Structure
- Follow LazyVim plugin format: return table with plugin spec
- Use `opts` for configuration, `keys` for keybindings
- Place custom utils in `lua/utils/` directory with descriptive names