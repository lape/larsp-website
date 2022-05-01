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

----

Made with [Bridgetown](/2022/04/30/this-website-bridgetown/)
{:style="text-align:center"}
