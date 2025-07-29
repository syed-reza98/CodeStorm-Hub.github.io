require 'rspec'
require 'capybara'
require 'capybara/rspec'
require 'selenium-webdriver'

# Configure Capybara
Capybara.configure do |config|
  config.default_driver = :selenium_chrome_headless
  config.javascript_driver = :selenium_chrome_headless
  config.default_max_wait_time = 10
  config.app_host = 'http://localhost:4000'
end

# Configure Chrome options for headless testing
Capybara.register_driver :selenium_chrome_headless do |app|
  options = Selenium::WebDriver::Chrome::Options.new
  options.add_argument('--headless')
  options.add_argument('--no-sandbox')
  options.add_argument('--disable-dev-shm-usage')
  options.add_argument('--disable-gpu')
  options.add_argument('--window-size=1280,800')
  
  Capybara::Selenium::Driver.new(app, browser: :chrome, options: options)
end

RSpec.configure do |config|
  config.include Capybara::DSL
  
  config.before(:each, type: :feature) do
    # Start Jekyll server if not running
    unless system('curl -s http://localhost:4000 > /dev/null 2>&1')
      puts "Starting Jekyll server for testing..."
      spawn('bundle exec jekyll serve --detach')
      sleep 5 # Wait for server to start
    end
  end
  
  config.after(:suite) do
    # Clean up Jekyll server
    system('pkill -f jekyll') if ENV['CI'] != 'true'
  end
end