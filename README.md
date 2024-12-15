# Dotfiles Repository

This repository contains configuration files (dotfiles) and setup instructions for my development environment. It includes application installations managed via Homebrew and configuration for various tools. Dotfiles are organized and symlinked using **GNU Stow** for easy management.

## Prerequisites

1. **Install Git**  
   Ensure you have Git installed on your system. If not, install it using:

```bash
   xcode-select --install
```

2. Install Homebrew
   If Homebrew is not already installed, you can install it with:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

3. Install GNU Stow
   GNU Stow is used to manage symlinks. Install it with Homebrew:

```bash
brew install stow
```

4. Clone this Repository
   Clone this repository to your home directory:

```bash
git clone https://github.com/<your-username>/<your-repo-name>.git ~/dotfiles
```

Installation Steps 1. Navigate to the Dotfiles Directory

```bash
cd ~/dotfiles
```

2. Install Applications with Homebrew

The repository includes a Brewfile that lists all the required applications and packages. Install them using:

```bash
brew bundle --file=Brewfile
```

3. Organize Dotfiles

Each application’s dotfiles are organized into separate directories. For example:

dotfiles/
├── zsh/ # Zsh configuration
│ └── .zshrc
├── vim/ # Vim configuration
│ └── .vimrc
├── git/ # Git configuration
│ └── .gitconfig
└── Brewfile # Homebrew configuration

4. Create Symlinks with GNU Stow

Use GNU Stow to symlink configuration files to their appropriate locations. For example:

```bash
stow .
```

This will create symlinks like:

~/.zshrc -> ~/dotfiles/zsh/.zshrc
~/.vimrc -> ~/dotfiles/vim/.vimrc
~/.gitconfig -> ~/dotfiles/git/.gitconfig

5. Reload Your Shell

After linking your dotfiles, reload your shell or restart your terminal:

```bash
source ~/.zshrc
```

## Managing Your Dotfiles

Add New Configurations

### To track new configuration files:

1. Place the configuration files into a directory under ~/dotfiles. For example:

```bash
mkdir -p ~/dotfiles/vscode
mv ~/Library/Application\ Support/Code/User/settings.json ~/dotfiles/vscode/settings.json
```

2. Commit and push the changes:

```bash
git add vscode
git commit -m "Add VSCode configuration"
git push origin main
```

3. Use stow to symlink the new configuration:

```bash
stow .
```

## Update Brewfile

If you install new applications using Homebrew, update the Brewfile:

```bash
brew bundle dump --file=Brewfile --force
git add Brewfile
git commit -m "Update Brewfile with new applications"
git push origin main
```

## Restoring Your Environment

To restore your environment on a new machine: 1. Clone the repository:

```bash
git clone https://github.com/<your-username>/<your-repo-name>.git ~/dotfiles
cd ~/dotfiles
```

2. Install the applications:

```bash
brew bundle --file=Brewfile
```

3. Use GNU Stow to symlink the dotfiles:

```bash
stow .
```

4. Reload your shell:

```bash
source ~/.zshrc
```
