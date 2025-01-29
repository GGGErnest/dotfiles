-- lua/root-finder/init.lua
local M = {}

M.root_patterns = { "nx.json", "project.json", "package.json" }

local function get_lsp_roots()
  local path = vim.api.nvim_buf_get_name(0)
  path = path ~= "" and vim.loop.fs_realpath(path) or nil
  local roots = {}
  if path then
    for _, client in pairs(vim.lsp.get_active_clients({ bufnr = 0 })) do
      local workspace = client.config.workspace_folders
      local paths = workspace and vim.tbl_map(function(ws)
        return vim.uri_to_fname(ws.uri)
      end, workspace) or client.config.root_dir and { client.config.root_dir } or {}
      for _, p in ipairs(paths) do
        local r = vim.loop.fs_realpath(p)
        if r and not vim.tbl_contains(roots, r) then
          roots[#roots + 1] = r
        end
      end
    end
  end
  table.sort(roots, function(a, b)
    return #a > #b
  end)
  return roots[1]
end

function M.get_root()
  local root = get_lsp_roots()
  if not root then
    local path = vim.api.nvim_buf_get_name(0)
    path = path ~= "" and vim.fs.dirname(path) or vim.loop.cwd()
    root = vim.fs.find(M.root_patterns, { path = path, upward = true })[1]
  end
  return root or vim.loop.cwd()
end

return M
