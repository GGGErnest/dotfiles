local wezterm = require("wezterm")
local session_manager = require("wezterm-session-manager/session-manager")
local resurrect = wezterm.plugin.require("https://github.com/MLFlexer/resurrect.wezterm")
local act = wezterm.action
local mux = wezterm.mux

resurrect.periodic_save()
-- --------------------------------------------------------------------
-- FUNCTIONS AND EVENT BINDINGS
-- --------------------------------------------------------------------

-- Session Manager event bindings
-- See https://github.com/danielcopper/wezterm-session-manager
wezterm.on("save_session", function(window)
	session_manager.save_state(window)
end)
wezterm.on("load_session", function(window)
	session_manager.load_state(window)
end)
wezterm.on("restore_session", function(window)
	session_manager.restore_state(window)
end)

-- --------------------------------------------------------------------
-- CONFIGURATION
-- --------------------------------------------------------------------

-- This table will hold the configuration.
local config = {}

-- In newer versions of wezterm, use the config_builder which will
-- help provide clearer error messages
if wezterm.config_builder then
	config = wezterm.config_builder()
end

-- if you are *NOT* lazy-loading smart-splits.nvim (recommended)
local function is_vim(pane)
	-- this is set by the plugin, and unset on ExitPre in Neovim
	return pane:get_user_vars().IS_NVIM == "true"
end

local direction_keys = {
	h = "Left",
	j = "Down",
	k = "Up",
	l = "Right",
}

local function split_nav(resize_or_move, key)
	return {
		key = key,
		mods = resize_or_move == "resize" and "META|CTRL" or "CTRL", -- Changed from "META" to "META|CTRL"
		action = wezterm.action_callback(function(win, pane)
			if is_vim(pane) then
				win:perform_action({
					SendKey = { key = key, mods = resize_or_move == "resize" and "META|CTRL" or "CTRL" },
				}, pane)
			else
				if resize_or_move == "resize" then
					win:perform_action({ AdjustPaneSize = { direction_keys[key], 3 } }, pane)
				else
					win:perform_action({ ActivatePaneDirection = direction_keys[key] }, pane)
				end
			end
		end),
	}
end

config.adjust_window_size_when_changing_font_size = false
config.automatically_reload_config = true
config.color_scheme = "tokyonight_night"
config.enable_scroll_bar = true
config.enable_wayland = true
-- config.window_background_opacity = 0.8
-- config.window_background_image = "/Users/ernesto/.config/wezterm/terminal_wallpaper.jpg"
-- config.window_background_image_hsb = ;
-- 	brightness = 0.4,
-- 	hue = 1.0,
-- 	saturation = 1.0,
-- }
--
config.font = wezterm.font("JetBrains Mono")
config.font_size = 14.0
config.hide_tab_bar_if_only_one_tab = true
-- The leader is similar to how tmux defines a set of keys to hit in order to
-- invoke tmux bindings. Binding to ctrl-a here to mimic tmux
config.leader = { key = "a", mods = "CTRL", timeout_milliseconds = 2000 }
config.mouse_bindings = {
	-- Open URLs with Ctrl+Click
	{
		event = { Up = { streak = 1, button = "Left" } },
		mods = "CTRL",
		action = act.OpenLinkAtMouseCursor,
	},
}
config.pane_focus_follows_mouse = true
config.scrollback_lines = 5000
config.use_dead_keys = false
config.warn_about_missing_glyphs = false
config.window_decorations = "RESIZE"
config.window_padding = {
	left = 0,
	right = 0,
	top = 0,
	bottom = 0,
}

-- Tab bar
config.use_fancy_tab_bar = true
config.tab_bar_at_bottom = true
config.switch_to_last_active_tab_when_closing_tab = true
config.tab_max_width = 32
-- config.colors = {
-- 	tab_bar = {
-- 		active_tab = {
-- 			fg_color = "#1a1b26",
-- 			bg_color = "#7aa2f7",
-- 		},
-- 	},
-- }

-- Setup muxing by default
config.unix_domains = {
	{
		name = "unix",
	},
}

-- Custom key bindings
config.keys = {
	-- -- Disable Alt-Enter combination (already used in tmux to split pane)
	-- {
	--     key = 'Enter',
	--     mods = 'ALT',
	--     action = act.DisableDefaultAssignment,
	-- },

	-- Copy mode
	{
		key = "[",
		mods = "LEADER",
		action = act.ActivateCopyMode,
	},

	-- ----------------------------------------------------------------
	-- TABS
	--
	-- Where possible, I'm using the same combinations as I would in tmux
	-- ----------------------------------------------------------------

	-- Show tab navigator; similar to listing panes in tmux
	{
		key = "w",
		mods = "LEADER",
		action = act.ShowTabNavigator,
	},
	-- Create a tab (alternative to Ctrl-Shift-Tab)
	{
		key = "c",
		mods = "LEADER",
		action = act.SpawnTab("CurrentPaneDomain"),
	},
	-- Rename current tab; analagous to command in tmux
	{
		key = ",",
		mods = "LEADER",
		action = act.PromptInputLine({
			description = "Enter new name for tab",
			action = wezterm.action_callback(function(window, pane, line)
				if line then
					window:active_tab():set_title(line)
				end
			end),
		}),
	},
	-- Move to next/previous TAB
	{
		key = "n",
		mods = "LEADER",
		action = act.ActivateTabRelative(1),
	},
	{
		key = "p",
		mods = "LEADER",
		action = act.ActivateTabRelative(-1),
	},
	-- Close tab
	{
		key = "&",
		mods = "LEADER|SHIFT",
		action = act.CloseCurrentTab({ confirm = true }),
	},

	-- ----------------------------------------------------------------
	-- PANES
	--
	-- These are great and get me most of the way to replacing tmux
	-- entirely, particularly as you can use "wezterm ssh" to ssh to another
	-- server, and still retain Wezterm as your terminal there.
	-- ----------------------------------------------------------------

	-- -- Vertical split
	{
		-- |
		key = "|",
		mods = "LEADER|SHIFT",
		action = act.SplitPane({
			direction = "Right",
			size = { Percent = 50 },
		}),
	},
	-- Horizontal split
	{
		-- -
		key = "-",
		mods = "LEADER",
		action = act.SplitPane({
			direction = "Down",
			size = { Percent = 50 },
		}),
	},
	-- move between split panes
	split_nav("move", "h"),
	split_nav("move", "j"),
	split_nav("move", "k"),
	split_nav("move", "l"),
	-- resize panes
	split_nav("resize", "h"),
	split_nav("resize", "j"),
	split_nav("resize", "k"),
	split_nav("resize", "l"),
	-- Close/kill active pane
	{
		key = "x",
		mods = "LEADER",
		action = act.CloseCurrentPane({ confirm = true }),
	},
	-- Swap active pane with another one
	{
		key = "{",
		mods = "LEADER|SHIFT",
		action = act.PaneSelect({ mode = "SwapWithActiveKeepFocus" }),
	},
	-- Zoom current pane (toggle)
	{
		key = "f",
		mods = "LEADER",
		action = act.TogglePaneZoomState,
	},
	-- Move to next/previous pane
	{
		key = ";",
		mods = "LEADER",
		action = act.ActivatePaneDirection("Prev"),
	},
	{
		key = "o",
		mods = "LEADER",
		action = act.ActivatePaneDirection("Next"),
	},

	-- ----------------------------------------------------------------
	-- Workspaces
	--
	-- These are roughly equivalent to tmux sessions.
	-- ----------------------------------------------------------------

	-- Attach to muxer
	{
		key = "a",
		mods = "LEADER",
		action = act.AttachDomain("unix"),
	},

	-- Detach from muxer
	{
		key = "d",
		mods = "LEADER",
		action = act.DetachDomain({ DomainName = "unix" }),
	},

	-- Show list of workspaces
	{
		key = "s",
		mods = "LEADER",
		action = act.ShowLauncherArgs({ flags = "WORKSPACES" }),
	},
	-- Rename current session; analogous to command in tmux
	{
		key = "$",
		mods = "LEADER|SHIFT",
		action = act.PromptInputLine({
			description = "Enter new name for session",
			action = wezterm.action_callback(function(window, pane, line)
				if line then
					mux.rename_workspace(window:mux_window():get_workspace(), line)
				end
			end),
		}),
	},

	-- Session manager bindings
	-- {
	-- 	key = "S",
	-- 	mods = "LEADER|SHIFT",
	-- 	action = act({ EmitEvent = "save_session" }),
	-- },
	-- {
	-- 	key = "L",
	-- 	mods = "LEADER|SHIFT",
	-- 	action = act({ EmitEvent = "load_session" }),
	-- },
	-- {
	-- 	key = "R",
	-- 	mods = "LEADER|SHIFT",
	-- 	action = act({ EmitEvent = "restore_session" }),
	-- },
	-- Save session
	{
		key = "w",
		mods = "LEADER",
		action = wezterm.action_callback(function(win, pane)
			resurrect.save_state(resurrect.workspace_state.get_workspace_state())
			resurrect.window_state.save_window_action()
		end),
	},
	{
		key = "r",
		mods = "LEADER",
		action = wezterm.action_callback(function(win, pane)
			resurrect.fuzzy_load(win, pane, function(id, label)
				local type = string.match(id, "^([^/]+)") -- match before '/'
				id = string.match(id, "([^/]+)$") -- match after '/'
				id = string.match(id, "(.+)%..+$") -- remove file extention
				local opts = {
					relative = true,
					restore_text = true,
					on_pane_restore = resurrect.tab_state.default_on_pane_restore,
				}
				if type == "workspace" then
					local state = resurrect.load_state(id, "workspace")
					resurrect.workspace_state.restore_workspace(state, opts)
				elseif type == "window" then
					local state = resurrect.load_state(id, "window")
					resurrect.window_state.restore_window(pane:window(), state, opts)
				elseif type == "tab" then
					local state = resurrect.load_state(id, "tab")
					resurrect.tab_state.restore_tab(pane:tab(), state, opts)
				end
			end)
		end),
	},
}

-- Connecting automatically to the unix domain
-- config.default_gui_startup_args = { "connect", "unix" }

-- and finally, return the configuration to wezterm
return config
