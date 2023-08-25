---
layout: post
title: "Ruby on Rails with Docker in production"
description: "Minimal Docker production setup for Ruby on Rails."
category: rails
---

Docker is a fantastic tool that allows developers to create and deploy applications in a consistent and predictable way. It offers the ability to create clean separations between different applications, ensuring that developers can work on multiple projects without worrying about conflicting dependencies or software versions. Additionally, Docker provides a way to define specific versions of software and runtime environments, which ensures that the application runs consistently across different environments. This is particularly useful for testing and deployment, as it allows developers to replicate the environment across different platforms, making it easy to deploy the application to production without any surprises.

### Dokku

Today we are lucky to have several nice options for containerized Rails deployment. Personally, I like the [Dokku](https://dokku.com) hosting system. Think of Dokku as a mini-Heroku; it's lightweight but certainly packs a punch in terms of functionality. Multi-host deployments are not (easily) possible with Dokku.

### MRSK

Developed by the Basecamp team and used for their Rails deployments (i.e. the HEY email service), this is a great option for multi-host setups. Imagine [MRSK](https://github.com/mrsked/mrsk) as Capistrano for Containers, it will provision your servers and deploy the software to it, including the right version of Ruby and other dependencies. That all lives in the Docker image now. You can boot a brand new Ubuntu (or whatever) server, add it to the list of servers in MRSK, and it'll be auto-provisioned with Docker, ready to run.

### Minimal production Dockerfile

The following is best thought of as a _minimal_ Ruby on Rails Docker production setup. It can be further build on e.g. by using an incremental build process (with several layers).

Maybe not all three database clients MySQL/PostgreSQL/SQLite that are included in the Dockerfile are necessary for your application, so omit what isn't needed.

![Container ship](/images/venti-views-1cqIcrWFQBI-unsplash.jpg)
*Photo by [Venti Views](https://unsplash.com/@ventiviews?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)*

### Dockerfile

```docker
# Ruby on Rails application in production mode
FROM ruby:3.2.2
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash -
RUN apt-get update -qq && \
  apt-get install -qq --no-install-recommends \
  nodejs \
  mariadb-client \
  postgresql-client \
  sqlite3 \
  && apt-get clean \
  && rm -rf /var/lib/apt/lists/*
RUN npm install -g yarn
WORKDIR /app
COPY Gemfile Gemfile.lock ./
RUN gem install bundler
RUN bundle config set force_ruby_platform true
RUN bundle config set --local without 'development test'
RUN bundle install --jobs 20 --retry 5
ENV RAILS_ENV production
ENV RACK_ENV production
COPY . ./
RUN SECRET_KEY_BASE=1 \
  bundle exec rails assets:precompile
EXPOSE 3000
CMD bundle exec rails s -e production -p 3000
```

Extend with a GitHub action to build on commit (similar to [autobuilding this Bridgetown site](/webtech/bridgetown/)) and push the image to a repository like Docker Hub or Amazon ECR.

Combine with nginx or [Traefik](https://github.com/traefik/traefik/) as load balancer/reverse proxy.

Using nginx an additional certbot container is needed to generate and renew Letsencrypt TLS certificates. Traefik will handle this by itself.

Another great option is to use the great [fly.io](https://fly.io/) service, which runs your Docker image on [Firecracker](https://firecracker-microvm.github.io/) microVMs on their global infrastructure.

[Mailsnag recently posted](https://mailsnag.com/blog/optimized-ruby-dockerfile/) a comprehensive Dockerfile for production.
