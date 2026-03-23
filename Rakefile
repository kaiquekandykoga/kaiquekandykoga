# Rakefile for external links testing
# No external gems required - uses only Ruby standard library

require 'rake'

namespace :test do
  desc "Run external links JavaScript tests"
  task :external_links do
    test_file = File.join(File.dirname(__FILE__), 'test', 'test_external_links_js.rb')
    
    unless File.exist?(test_file)
      puts "Error: Test file not found at #{test_file}"
      exit(1)
    end
    
    puts "Running external links tests..."
    puts "-" * 50
    
    # Run the test file
    system('ruby', test_file)
    
    # Check the exit status
    if $?.success?
      puts "\nAll tests passed successfully!"
    else
      puts "\nSome tests failed. Please check the output above."
      exit(1)
    end
  end
end

# Default task
desc "Default task - run external links tests"
task :default => ['test:external_links']

# Alias for convenience
task :test => ['test:external_links']