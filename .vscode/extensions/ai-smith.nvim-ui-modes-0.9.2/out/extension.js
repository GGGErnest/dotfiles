"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = activate;
exports.deactivate = deactivate;
const vscode = __importStar(require("vscode"));
function getConfiguration(section = '', resource = null) {
    return vscode.workspace.getConfiguration(section, resource);
}
function getColorCustomization(config) {
    const colorCustomizations = config.get('colorCustomizations') || {};
    return colorCustomizations;
}
function updateColors(workbenchConfig, colorCustomizations) {
    workbenchConfig.update('colorCustomizations', colorCustomizations, vscode.ConfigurationTarget.Workspace);
}
const luaCreateConfig = [
    "local vscode = require('vscode')",
    "local function send_mode()",
    "  local mode = vim.api.nvim_get_mode().mode",
    "  if mode == 'i' or mode == '' then",
    "    vscode.call('nvim-ui-modes.insert')",
    "  elseif mode == 'c' then",
    "    vscode.call('nvim-ui-modes.command')",
    "  elseif mode == 'R' then",
    "    vscode.call('nvim-ui-modes.replace')",
    "  elseif mode == 'n' then",
    "    vscode.call('nvim-ui-modes.normal')",
    "  elseif mode == 'V' or mode == 'v' or mode == '\\x16' then",
    "    vscode.call('nvim-ui-modes.visual')",
    "  end",
    "end",
    "local group = vim.api.nvim_create_augroup('nvim-ui-modes', { clear = true })",
    "send_mode()",
    "vim.api.nvim_create_autocmd({ 'InsertEnter', 'InsertLeave', 'ModeChanged' }, {",
    "  group = group,",
    "  callback = function()",
    "    send_mode()",
    "  end,",
    "})"
];
const luaDeleteConfig = [
    "pcall(vim.api.nvim_clear_autocmds, { group = 'nvim-ui-modes' })",
    "pcall(vim.api.nvim_del_augroup_by_name, 'nvim-ui-modes')"
];
function executeCommand(luaCode) {
    vscode.commands.executeCommand('vscode-neovim.lua', luaCode);
}
function activate(context) {
    const activeTextEditor = vscode.window.activeTextEditor;
    const resource = activeTextEditor ? activeTextEditor.document.uri : null;
    const workbenchConfig = getConfiguration('workbench', resource);
    const colorCustomizations = getColorCustomization(getConfiguration('nvim-ui-modes', resource));
    const modes = ['normal', 'command', 'insert', 'visual', 'replace'];
    modes.forEach((mode) => {
        const disposable = vscode.commands.registerCommand(`nvim-ui-modes.${mode}`, () => {
            updateColors(workbenchConfig, colorCustomizations[mode]);
        });
        context.subscriptions.push(disposable);
    });
    const interval = setInterval(async () => {
        const commands = await vscode.commands.getCommands(true);
        if (commands.includes('vscode-neovim.lua')) {
            executeCommand(luaCreateConfig);
            clearInterval(interval);
        }
    }, 1000);
}
function deactivate() {
    executeCommand(luaDeleteConfig);
}
//# sourceMappingURL=extension.js.map