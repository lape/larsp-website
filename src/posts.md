---
layout: page
title: Posts
---

<ul>
  <% collections.posts.resources.each do |post| %>
    <li>
      <a href="<%= post.relative_url %>"><%= post.data.title %></a>
    </li>
  <% end %>
</ul>

<a href="https://larsp.dev/feed.xml">Subscribe to Atom feed</a>

----

Made with [Bridgetown](/webtech/bridgetown/)
{:style="text-align:center"}
