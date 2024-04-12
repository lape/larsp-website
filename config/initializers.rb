Bridgetown.configure do |config|
  config.url = "https://larsp.de"
  config.permalink = :simple
  config.template_engine = :erb
  config.timezone = "Europe/Berlin"

  init :"bridgetown-sitemap"
  init :"bridgetown-feed"
  init :"bridgetown-seo-tag"
  init :bridgetown_linkchecker
end
