---
layout: post
title: "Ruby on Rails with Docker in production"
category: rails
---

Docker is great. Clean separation of applications, neatly defined versions of the underlying software and languages lead to consistent, replicable testing and deployments in all kinds of environments.

Not only for development, but also for production. Combine with nginx or Traefik as load balancer/reverse proxy.

Note: Probably not all three database clients that are included in the Dockerfile are necessary for your application, so cut down as you like.

### Dockerfile

```docker
FROM ruby:3.1.1
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash -
RUN apt-get update -qq && apt-get install -qq --no-install-recommends \
    nodejs \
    mariadb-client \
    postgresql-client \
		sqlite3 \
  && apt-get clean \
  && rm -rf /var/lib/apt/lists/*
RUN npm install -g yarn@1
WORKDIR /app
COPY Gemfile Gemfile.lock ./
RUN gem install bundler
RUN bundle config set force_ruby_platform true
RUN bundle config set --local without 'development test'
RUN bundle install --jobs 20 --retry 5

# Set Rails to run in production
ENV RAILS_ENV production
ENV RACK_ENV production

COPY . ./

RUN SECRET_KEY_BASE=`bundle exec rails secret` bundle exec rails assets:precompile
CMD bundle exec rails s -e production
```

Extend with a Github action to build on commit (similar to [autobuilding this Bridgetown site](/webtech/2022/04/30/bridgetown/)). You need a Docker image repository where the ready build image will be pushed, e.g. Docker Hub or Amazon ECR.