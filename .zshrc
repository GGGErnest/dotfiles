path+=/opt/homebrew/bin

export NVM_DIR="$HOME/.nvm"
  [ -s "/opt/homebrew/opt/nvm/nvm.sh" ] && \. "/opt/homebrew/opt/nvm/nvm.sh"  # This loads nvm
  [ -s "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm" ] && \. "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm"  # This loads nvm bash_completion

if type brew &>/dev/null; then
    FPATH=$(brew --prefix)/share/zsh-completions:$FPATH

    autoload -Uz compinit
    compinit
fi

# Some alias definitions 
alias onotes="cd /Users/e.pedrosaalonso/Library/Mobile\ Documents/iCloud~md~obsidian/Documents/ObsidianVault/"
alias oworkspace="cd /Users/e.pedrosaalonso/Workspace/"
alias n="nvim ."
alias odotfiles="cd /Users/e.pedrosaalonso/dotfiles/.config/"

# pnpm
export PNPM_HOME="/Users/e.pedrosaalonso/Library/pnpm"
case ":$PATH:" in
  *":$PNPM_HOME:"*) ;;
  *) export PATH="$PNPM_HOME:$PATH" ;;
esac
# pnpm end

source /opt/homebrew/share/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh

