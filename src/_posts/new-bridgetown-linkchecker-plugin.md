---
layout: post
title: "Bridgetown linkchecker plugin"
description: "Validate external links in your Bridgetown site"
category: webtech
---

This site is using [Bridgetown](/webtech/bridgetown) as static site generator. I've written a plugin to validate external links in your site. It's called bridgetown_linkchecker and you can find it on [GitHub]() and [RubyGems](https://rubygems.org/gems/bridgetown_linkchecker).

My motivation was that external links in your content tend to go stale and while they should theoretically persist "until the end of the internet" (as [37signals](https://37signals.com/policies/until-the-end-of-the-internet/) call it in regard to their SaaS products), they sometimes move somewhere else or disappear altogether.

During the build process (or while running `bridgetown serve`), the plugin will check all external links in your site. If a link is broken, it will be reported in the build log. By default the checks will be done in your development environment. You can also enable the checks in production (?).

Note: The guidelines for naming plugins for Bridgetown changed from dash- to underscore-separated names recently. Many plugins are still using the old naming scheme. I've decided to use the new naming scheme for my plugin.
