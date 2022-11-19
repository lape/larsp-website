---
layout: default
---

# Welcome to larsp's personal site

Hi, I'm Lars - a German Ruby on Rails and Drupal software developer from Germany. This is my personal website where I write about my journey as a full stack developer and take notes on things I’ve learned along the way.

If you like, you can read more [about me](/about) or how [this website](/webtech/bridgetown/) was made.

### Blog posts:

<ul>
  <% collections.posts.resources.each do |post| %>
    <li>
      <a href="<%= post.relative_url %>"><%= post.data.title %></a>
    </li>
  <% end %>
</ul>

<a href="https://larsp.dev/feed.xml">Subscribe to Atom feed</a>

----

<a rel="me" href="https://ruby.social/@lape"><i data-feather="user"></i></a>&nbsp;&nbsp;<a href="https://twitter.com/lape"><i data-feather="twitter"></i></a>&nbsp;&nbsp;<a href="mailto:hello@larsp.dev"><i data-feather="mail"></i></a>&nbsp;&nbsp;<a href="https://github.com/lape"><i data-feather="github"></i></a>
{:style="text-align:center"}
{:style="text-align:center"}
