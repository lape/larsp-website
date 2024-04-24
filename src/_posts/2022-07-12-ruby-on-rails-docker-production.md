---
layout: post
title: "Ruby on Rails with Docker"
description: "Docker container setup for Ruby on Rails."
category: rails
---

Docker is a fantastic tool that allows developers to create and deploy applications in a consistent and predictable way. It offers the ability to create clean separations between different applications, ensuring that developers can work on multiple projects without worrying about conflicting dependencies or software versions. Additionally, Docker provides a way to define specific versions of software and runtime environments, which ensures that the application runs consistently across different environments. This is particularly useful for testing and deployment, as it allows developers to replicate the environment across different platforms, making it easy to deploy the application to production without any surprises.

### Dokku

Today we are lucky to have several nice options for containerized Rails deployment. Personally, I like the [Dokku](https://dokku.com/) hosting system. Think of Dokku as a mini-Heroku; it's lightweight but certainly packs a punch in terms of functionality. Multi-host deployments are not (easily) possible with Dokku.

### Kamal

Developed by the Basecamp team and used for their Rails deployments (i.e. the HEY email service), this is a great option for multi-host setups. Imagine [Kamal](https://kamal-deploy.org/) as Capistrano for Containers, it will provision your servers and deploy the software to it, including the right version of Ruby and other dependencies. That all lives in the Docker image now. You can boot a brand new Ubuntu (or whatever) server, add it to the list of servers in MRSK, and it'll be auto-provisioned with Docker, ready to run.

> Kamal offers zero-downtime deploys, rolling restarts, asset bridging, remote builds, accessory service management, and everything else you need to deploy and manage your web app in production with Docker. Originally built for Rails apps, Kamal will work with any type of web app that can be containerized.

![Container ship](/images/venti-views-1cqIcrWFQBI-unsplash.jpg)
*Photo by [Venti Views](https://unsplash.com/@ventiviews?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)*

### Dockerfile

Since 7.1 Rails comes with a default Dockerfile, which is a good starting point for your own:

```docker
# syntax = docker/dockerfile:1

# Make sure RUBY_VERSION matches the Ruby version in .ruby-version and Gemfile
ARG RUBY_VERSION=3.3.0
FROM registry.docker.com/library/ruby:$RUBY_VERSION-slim as base

# Rails app lives here
WORKDIR /rails

# Set production environment
ENV RAILS_ENV="production" \
    BUNDLE_DEPLOYMENT="1" \
    BUNDLE_PATH="/usr/local/bundle" \
    BUNDLE_WITHOUT="development"

# Throw-away build stage to reduce size of final image
FROM base as build

# Install packages needed to build gems and node modules
RUN apt-get update -qq && \
    apt-get install --no-install-recommends -y build-essential curl git libvips node-gyp pkg-config python-is-python3

# Install JavaScript dependencies
ARG NODE_VERSION=20.11.0
ARG YARN_VERSION=1.22.21
ENV PATH=/usr/local/node/bin:$PATH
RUN curl -sL https://github.com/nodenv/node-build/archive/master.tar.gz | tar xz -C /tmp/ && \
    /tmp/node-build-master/bin/node-build "${NODE_VERSION}" /usr/local/node && \
    npm install -g yarn@$YARN_VERSION && \
    rm -rf /tmp/node-build-master

# Install application gems
COPY Gemfile Gemfile.lock ./
RUN bundle install && \
    rm -rf ~/.bundle/ "${BUNDLE_PATH}"/ruby/*/cache "${BUNDLE_PATH}"/ruby/*/bundler/gems/*/.git && \
    bundle exec bootsnap precompile --gemfile

# Install node modules
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Copy application code
COPY . .

# Precompile bootsnap code for faster boot times
RUN bundle exec bootsnap precompile app/ lib/

# Precompiling assets for production without requiring secret RAILS_MASTER_KEY
RUN SECRET_KEY_BASE_DUMMY=1 ./bin/rails assets:precompile

# Final stage for app image
FROM base

# Install packages needed for deployment
RUN apt-get update -qq && \
    apt-get install --no-install-recommends -y curl libsqlite3-0 libvips && \
    rm -rf /var/lib/apt/lists /var/cache/apt/archives

# Copy built artifacts: gems, application
COPY --from=build /usr/local/bundle /usr/local/bundle
COPY --from=build /rails /rails

# Run and own only the runtime files as a non-root user for security
RUN useradd rails --create-home --shell /bin/bash && \
    chown -R rails:rails db log storage tmp
USER rails:rails

# Entrypoint prepares the database.
ENTRYPOINT ["/rails/bin/docker-entrypoint"]

# Start the server by default, this can be overwritten at runtime
EXPOSE 3000
CMD ["./bin/rails", "server"]
```

Extend with a GitHub action to build on commit (similar to [autobuilding this Bridgetown site](/webtech/bridgetown/)) and push the image to a repository like Docker Hub or Amazon ECR.

Combine with nginx or [Traefik](https://github.com/traefik/traefik/) as load balancer/reverse proxy (or use Kamal or Dokku).

Using nginx an additional certbot container is needed to generate and renew Letsencrypt TLS certificates. Traefik will handle this by itself.

Another great option is to use the great [fly.io](https://fly.io/) service, which runs your Docker image on [Firecracker](https://firecracker-microvm.github.io/) microVMs on their global infrastructure.
