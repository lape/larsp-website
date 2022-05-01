---
layout: default
---

# Welcome to larsp's personal site

Hi, I'm Lars - Drupal and Ruby on Rails software engineer. This is my personal website where I write about my journey as a full stack developer and take notes on things I’ve learned along the way.

If you like, you can read more [about me](/about) or how [this website](/2022/04/30/this-website-bridgetown/) was made.

Blog posts:

<ul>
  <% collections.posts.resources.each do |post| %>
    <li>
      <a href="<%= post.relative_url %>"><%= post.data.title %></a>
    </li>
  <% end %>
</ul>

----

Made with [Bridgetown](/2022/04/30/this-website-bridgetown/)
{:style="text-align:center"}
