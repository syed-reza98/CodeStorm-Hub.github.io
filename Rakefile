require 'rake'
require 'rspec/core/rake_task'
require 'html-proofer'

# Default task
task default: [:test]

# Define test task
task test: [:spec, :htmlproofer]

# RSpec task
RSpec::Core::RakeTask.new(:spec) do |t|
  t.pattern = 'spec/**/*_spec.rb'
  t.rspec_opts = '--format documentation --color'
end

# Jekyll build task
task :build do
  puts "Building Jekyll site..."
  system('bundle exec jekyll build')
end

# Jekyll serve task for development
task :serve do
  puts "Starting Jekyll development server..."
  system('bundle exec jekyll serve --livereload')
end

# HTML Proofer task for link checking
task :htmlproofer => :build do
  puts "Running HTML Proofer..."
  HTMLProofer.check_directory(
    "./_site",
    {
      assume_extension: true,
      check_html: true,
      check_img_http: true,
      disable_external: true, # Disable external link checking for faster tests
      empty_alt_ignore: true,
      allow_hash_href: true,
      url_ignore: [/localhost/, /127.0.0.1/, /example\.com/]
    }
  ).run
end

# Lighthouse performance testing (requires lighthouse CLI)
task :lighthouse => :build do
  puts "Running Lighthouse audit..."
  urls = ['http://localhost:4000/', 'http://localhost:4000/about/', 'http://localhost:4000/contact/']
  
  # Start Jekyll server for testing
  pid = spawn('bundle exec jekyll serve --port 4000')
  sleep 5 # Wait for server to start
  
  begin
    urls.each do |url|
      puts "Auditing #{url}..."
      system("npx lighthouse #{url} --chrome-flags='--headless' --quiet --output json --output-path /tmp/lighthouse-#{url.gsub(/[^\w]/, '')}.json")
    end
  ensure
    Process.kill('TERM', pid)
  end
end

# Security audit task
task :security do
  puts "Running security checks..."
  
  # Check for common security issues
  puts "Checking for exposed sensitive files..."
  sensitive_files = ['.env', '.env.local', 'config/database.yml', 'id_rsa', '.ssh/']
  
  sensitive_files.each do |file|
    if File.exist?(file)
      puts "WARNING: Sensitive file #{file} found!"
    end
  end
  
  # Check for CSP headers in _config.yml
  if File.exist?('_config.yml')
    config = File.read('_config.yml')
    unless config.include?('content_security_policy') || config.include?('csp')
      puts "RECOMMENDATION: Add Content Security Policy headers"
    end
  end
  
  puts "Security check complete."
end

# Clean task
task :clean do
  puts "Cleaning build artifacts..."
  FileUtils.rm_rf(['./_site', './.sass-cache', './.jekyll-cache'])
end

# Deploy task (for GitHub Pages)
task :deploy => [:test, :build] do
  puts "Site ready for deployment!"
  puts "Commit and push to main branch to deploy to GitHub Pages."
end

# Development workflow task
task :dev do
  puts "Starting development workflow..."
  puts "1. Installing dependencies..."
  system('bundle install')
  
  puts "2. Building site..."
  Rake::Task[:build].execute
  
  puts "3. Running tests..."
  Rake::Task[:test].execute
  
  puts "4. Starting development server..."
  Rake::Task[:serve].execute
end

desc "Show available tasks"
task :help do
  puts "Available tasks:"
  puts "  rake build      - Build the Jekyll site"
  puts "  rake serve      - Start development server"
  puts "  rake test       - Run all tests"
  puts "  rake spec       - Run RSpec tests only"
  puts "  rake htmlproofer - Run HTML validation"
  puts "  rake lighthouse - Run Lighthouse audit"
  puts "  rake security   - Run security checks"
  puts "  rake clean      - Clean build artifacts"
  puts "  rake deploy     - Test and prepare for deployment"
  puts "  rake dev        - Full development workflow"
  puts "  rake help       - Show this help"
end