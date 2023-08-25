---
layout: post
title: "Rails translation cheatsheet"
description: "How to translate a Rails application"
category: rails
---

Locales

```ruby
# config/application.rb

config.i18n.available_locales = %i[de fr it]
config.i18n.default_locale = :de
```

```ruby
# app/controllers/application_controller.rb

class ApplicationController < ActionController::Base
  around_action :switch_locale

  def switch_locale(&)
    locale = params[:locale] || I18n.default_locale
    I18n.with_locale(locale, &)
  end

  def default_url_options
    { locale: I18n.locale }
  end
end
```

```ruby
# config/routes.rb

scope "(:locale)", locale: /de|fr|it/ do
  get "thankyou", to: "pages#thankyou"
  get "terms", to: "pages#terms"

  resource :submissions, only: %i[new create]
  get "submissions", to: "submissions#new"
  get "/", to: "submissions#new"
end
```

```ruby
gem "traco"
```

```ruby
# app/models/question.rb

class Question < ApplicationRecord
  translates :question, :answer
end
```
