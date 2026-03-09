source "https://rubygems.org"

# GitHub Pages gem pins all dependencies to versions used by GitHub Pages.
# https://pages.github.com/versions/
gem "github-pages", group: :jekyll_plugins

# Additional plugins (all allowed on GitHub Pages)
group :jekyll_plugins do
  gem "jekyll-feed"
  gem "jekyll-sitemap"
  gem "jekyll-seo-tag"
end

# Windows & JRuby only
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

gem "wdm", "~> 0.1", platforms: %i[mingw x64_mingw mswin]
gem "http_parser.rb", "~> 0.6.0", platforms: %i[jruby]
