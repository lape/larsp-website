---
layout: post
title: "Favorite CLI Tools"
description: "Command-Line Wizardry"
category: software
---

In software development, the command line is the equivalent of a wizard's staff. These CLI tools saved me heaps of time and I find them generally a joy to work with.

It's all about sharing the love and the magic, and maybe you'll find a new favorite or two. Let me [know](/contact) if you have an invaluable CLI tool that you can't live without.

## `bat` - a cat(1) clone with wings

I love this. It's a drop-in replacement for `cat` that adds syntax highlighting, Git integration and lots more. It's written in Rust and is blazing fast. [sharkdp/bat: A cat(1) clone with wings.](https://github.com/sharkdp/bat)

### How to use `bat`

To glance at a file using `bat`, simply provide the path:

```sh
bat /path/to/your/file
```

The syntax highlighting and file-specific metadata make `bat` a joy to use, ensuring you can inspect code and text files efficiently and with finesse.

## `Homebrew` - The missing package manager for macOS

It's simply a must-have for every Mac user. Whether it's installing a new programming language, a database server, or the latest web framework, `Homebrew` streamlines the process, taking out the need for locating and manually downloading software.

### The brew command

Working with `Homebrew` is straightforward:

```sh
brew update
brew install <package>
```

`Homebrew` also handles dependencies, ensuring that your software stack remains tidy and up-to-date with a simple command. Plus, with over 4,800 official packages and a thriving community of contributors, you're sure to find everything you need.

## `httpie` - HTTP client for the command line

Making HTTP requests from the command line has never been more elegant than with `httpie`. It simplifies interaction with APIs and web services, offering a user-friendly interface and an eye-pleasing HTTP request syntax colorization.

### Crafting requests with `httpie`

A basic GET request:

```sh
https httpie.io/hello
```

Output:

```json
{
    "ahoy": [
        "Hello, World! 👋 Thank you for trying out HTTPie 🥳",
        "We hope this will become a friendship."
    ],
    "links": {
        "discord": "https://httpie.io/discord",
        "github": "https://github.com/httpie",
        "homepage": "https://httpie.io",
        "twitter": "https://twitter.com/httpie"
    }
}
```

And the response is structured, formatted, and legible. `httpie` also supports POST, PUT, DELETE requests, authentication, and other advanced features. It's a great alternative to `curl`.

## `jq` - Command-line JSON processor

`jq` is a sed-like tool that parses, manipulates, and displays JSON objects from the comfort of the command line. It excels at selectively filtering and transforming complex JSON data, which is a common task when working with APIs and backend services.

### Transforming with `jq`

Filtering results:

```sh
https httpie.io/hello | jq "{links}"
```

This will present just the links from the JSON response. `jq` is nice for quickly juggling JSON data.

## `lando` - Local development environment and DevOps tool built on Docker containers

For local development, `lando` is a mighty ally. It configures and manages Docker-based development environments, providing an abstraction layer that spares developers the mundanity of configuring development Docker environments and installing necessary tools and software versions.

### A `lando` starter

Creating a Wordpress site:

```sh
lando init --recipe wordpress
```

And with that simple command, you're on your way to local Wordpress development with a containerized environment. `lando` integrates with other tools such as `composer`, `npm`, and `gulp` to streamline development workflows. It's an excellent tool for building, testing, and deploying applications locally.  One of the most powerful features is the ability to define multiple environments in a single configuration file (e.g. local, staging, production) that can be easily switched between.

## `ohmyzsh` - Delightful framework for managing your `zsh` configuration

`ohmyzsh` transforms the already powerful `zsh` into a feature-rich and stylish terminal environment. With themes, plugins, and an active community contributing enhancements, `ohmyzsh` makes the terminal experience more personal and productive.

`ohmyzsh` also comes packed with a variety of plugins that add new features to `zsh`, such as an auto-suggestion tool and syntax highlighting, making it even more powerful. These can be easily enabled or disabled through the `~/.zshrc` file as well.

## `rbenv` - Ruby Version Manager

For managing multiple Ruby environments, `rbenv` is a vital cog. It allows for per-project Ruby versions, which is a blessing when working on legacy software that demands older Ruby interpreters alongside the current releases.

### Balancing Ruby versions

Selecting a Ruby version for your project:

```sh
rbenv local 3.3.0
```

This indicates that the local project should use Ruby 3.3.0, leaving others unaffected by the change. When executing `bundle` command, or any other code that requires a Ruby environment, `rbenv` will use the specified version. This keeps developers from experiencing surprises when their global Ruby version is updated, and your project breaks.

## `zsh-autosuggestions` - Completions for `zsh`

`zsh` users will find `zsh-autosuggestions` a game-changer. This tool offers context-aware auto-completion, predicting your command line needs with eerie accuracy, and saving precious keystrokes in the process.

Simply start typing a command and, based on your history, `zsh-autosuggestions` will begin offering predictions. You can cycle through suggestions with the right arrow key or accept one with the tab key.
