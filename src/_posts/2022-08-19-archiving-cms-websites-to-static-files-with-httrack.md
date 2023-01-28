---
layout: post
title: "Archiving CMS websites to static files with httrack"
description: "Using httrack to archive a CMS website to keep only as static site."
category: webtech
---

When a website made with a content management system like Drupal or Wordpress is no longer updated with content or a campaign has ended, sometimes the webpages need to be archived for reference or just stay online without any more changes. But it's not always possible to upgrade all of the CMS along the way. Maybe there's a major version change and it's not economically reasonable to upgrade the custom modules for a site no longer in production use.

That's why it's convenient to know how to easily archive a site to static HTML files.

## Using the httrack tool to archive a website

There are quite some options for archiving a website (see [Awesome Web Archiving List](https://github.com/iipc/awesome-web-archiving/)). I prefer using the [httrack](https://www.httrack.com/) command line tool. On MacOS using Homebrew install it simply with:

```
brew install httrack
```

These seem optimal httrack options for mirroring:

```bash
httrack http://SITE_TO_ARCHIVE -O DESTINATION_DIR -N "%h%p/%n/index%[page].%t" \
  -WqQ%v --robots=0 --footer ''
```

The tool will prompt you if external links should be followed.

If you like, relative links can also be rewritten afterwards e.g. "about.html" to "about". This is optional but useful if you want to preserve the URL paths (for inbound links).

```bash
find . -name "*.html" -type f -print0 | xargs -0 perl -i -pe "s/\/index.html/\//g"
```

Copy the homepage index index/index.html to the site root and change include paths and links in it (remove "../" everywhere).

If the source site uses HTTP authentication, provide username and password as part of the URL: username:password@your.url

The resulting files can be served from some inexpensive static web hosting like Netlify or Github Pages.

* [Httrack users guide](http://www.httrack.com/html/fcguide.html)
* [Archiving Drupal sites](https://www.drupal.org/node/27882/) on drupal.org.
* Karen from Lullabot [about archiving Drupal sites](https://www.lullabot.com/articles/sending-drupal-site-retirement-using-httrack/)
