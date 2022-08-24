---
layout: post
title: "Ruby on Rails with Docker in production"
category: rails
---

Docker is great. Clean separation of applications, neatly defined versions of the underlying software and languages lead to consistent, replicable testing and deployments in all kinds of environments. Not only during development, but also for production.

There are several

Maybe not all three database clients MySQL/PostgreSQL/SQLite that are included in the Dockerfile are necessary for your application, so omit what isn't needed.

### Dockerfile

```docker
# Ruby on Rails application in production mode
FROM ruby:3.1.2
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
RUN SECRET_KEY_BASE=`bundle exec rails secret` \
  bundle exec rails assets:precompile
EXPOSE 3000
CMD bundle exec rails s -e production -p 3000
```

Extend with a Github action to build on commit (similar to [autobuilding this Bridgetown site](/webtech/bridgetown/)) and push the image to a repository like Docker Hub or Amazon ECR.

Combine with nginx or [Traefik](https://github.com/traefik/traefik) as load balancer/reverse proxy.

Using nginx an additional certbot container is needed to generate and renew Letsencrypt TLS certificates. Traefik will handle this by itself.

Another great option is to use the excellent [fly.io](https://fly.io) service, which runs your Docker image on [Firecracker](https://firecracker-microvm.github.io) microVMs on its global infrastructure.