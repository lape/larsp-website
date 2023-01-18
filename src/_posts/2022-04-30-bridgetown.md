---
layout: post
title: "Bridgetown with Github Pages and custom domain"
category: webtech
---

For this personal website, I wanted to keep it lean and minimal and the blogging software or CMS should stay out of the way. It shouldn't be a hassle to maintain or update. So in 2022 I started this site with the [Bridgetown](https://bridgetownrb.com/) static site generator. And so far, it's going well.

Having become quite an avid fan of Ruby in my recent developer years, a Ruby-powered static site generator seems a good fit. Bridgetown stands on the shoulders of [Jekyll](https://jekyllrb.com/), which became immensely popular through Github Pages.

> _"Like the Ruby language itself, Bridgetown is optimized for web developer happiness."_

There is an undeniable appeal to static websites. Fast and simple, solid and staying as they are, without surprises (usually).

## Build and deploy on Github

Thanks to [@andrewmcodes](https://ruby.social/@andrewmcodes) for the writeup on [how to setup the Bridgetown Github Pages plugin](https://andrewm.codes/deploy-bridgetown-to-github-pages/) to automatically publish a site when pushing new content.

I noticed that in order to get the deployment working with a custom domain the _cname_ setting has to be included in the workflow file:

```yaml
# .github/workflows/gh-pages.yml (Deploy section)
- name: Deploy
  uses: peaceiris/actions-gh-pages@v3
  with:
    github_token: ${{ secrets.GITHUB_TOKEN }}
    publish_dir: ./output
    cname: larsp.dev
```

To prevent the auto reload script from being included in the deployed code I also changed the build environment in the Rakefile to _production_:

```ruby
# Rakefile
desc "Build the Bridgetown site for deployment"
task :deploy => [:clean, "frontend:build"] do
  ENV["BRIDGETOWN_ENV"] = "production"
  Bridgetown::Commands::Build.start
end
```

View this site's source on [Github](https://github.com/lape/larsp-website/).

- [Bridgetown](https://bridgetownrb.com/)
- [Bridgetown’s Github repo](https://github.com/bridgetownrb/bridgetown/)
- [How to Deploy Your Bridgetown Site to Github Pages — andrewm.codes](https://andrewm.codes/deploy-bridgetown-to-github-pages/)
