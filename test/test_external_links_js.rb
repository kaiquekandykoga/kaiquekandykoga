# Test for external_links.js functionality
# Tests the externalLinksData array and its properties without using any Ruby gems

require 'uri'

class ExternalLinksTest
  def initialize
    @test_results = []
    @passed_tests = 0
    @failed_tests = 0
  end

  def run
    puts "Running External Links JavaScript Tests"
    puts "=" * 50
    
    # Test 1: Verify externalLinksData exists and is an array
    test_external_links_data_exists
    
    # Test 2: Verify all required fields are present
    test_required_fields_present
    
    # Test 3: Verify all URLs are valid
    test_urls_valid
    
    # Test 4: Verify all icons are valid
    test_icons_valid
    
    # Test 5: Verify all categories are present
    test_categories_present
    
    # Test 6: Verify descriptions are not empty
    test_descriptions_not_empty
    
    # Test 7: Verify names are not empty
    test_names_not_empty
    
    # Test 8: Verify summary field exists (even if empty)
    test_summary_field_exists
    
    # Test 9: Verify specific link data integrity
    test_specific_link_data
    
    # Print results
    print_results
  end

  private

  def test_external_links_data_exists
    test_name = "Test 1: externalLinksData exists and is an array"
    begin
      data = load_external_links_data
      if data.is_a?(Array) && data.length > 0
        add_pass(test_name)
      else
        add_fail(test_name, "externalLinksData should be a non-empty array")
      end
    rescue => e
      add_fail(test_name, "Error loading data: #{e.message}")
    end
  end

  def test_required_fields_present
    test_name = "Test 2: All required fields are present"
    begin
      data = load_external_links_data
      required_fields = ['name', 'url', 'summary', 'description', 'icon', 'category']
      
      data.each_with_index do |link, index|
        missing_fields = required_fields.reject { |field| link.key?(field) }
        unless missing_fields.empty?
          add_fail(test_name, "Link #{index + 1} (#{link['name']}) missing fields: #{missing_fields.join(', ')}")
          return
        end
      end
      
      add_pass(test_name)
    rescue => e
      add_fail(test_name, "Error: #{e.message}")
    end
  end

  def test_urls_valid
    test_name = "Test 3: All URLs are valid"
    begin
      data = load_external_links_data
      
      data.each_with_index do |link, index|
        url = link['url']
        if url.nil? || url.empty?
          add_fail(test_name, "Link #{index + 1} (#{link['name']}) has empty URL")
          return
        end
        
        # Basic URL validation
        unless url.start_with?('http://', 'https://')
          add_fail(test_name, "Link #{index + 1} (#{link['name']}) has invalid URL format: #{url}")
          return
        end
      end
      
      add_pass(test_name)
    rescue => e
      add_fail(test_name, "Error: #{e.message}")
    end
  end

  def test_icons_valid
    test_name = "Test 4: All icons are valid"
    begin
      data = load_external_links_data
      valid_icons = ['linkedin', 'github', 'gitlab', 'codeberg', 'instagram', 'huggingface']
      
      data.each_with_index do |link, index|
        icon = link['icon']
        if icon.nil? || icon.empty?
          add_fail(test_name, "Link #{index + 1} (#{link['name']}) has empty icon")
          return
        end
        
        unless valid_icons.include?(icon)
          add_fail(test_name, "Link #{index + 1} (#{link['name']}) has invalid icon: #{icon}")
          return
        end
      end
      
      add_pass(test_name)
    rescue => e
      add_fail(test_name, "Error: #{e.message}")
    end
  end

  def test_categories_present
    test_name = "Test 5: All categories are present"
    begin
      data = load_external_links_data
      
      data.each_with_index do |link, index|
        category = link['category']
        if category.nil? || category.empty?
          add_fail(test_name, "Link #{index + 1} (#{link['name']}) has empty category")
          return
        end
      end
      
      add_pass(test_name)
    rescue => e
      add_fail(test_name, "Error: #{e.message}")
    end
  end

  def test_descriptions_not_empty
    test_name = "Test 6: Descriptions are not empty"
    begin
      data = load_external_links_data
      
      data.each_with_index do |link, index|
        description = link['description']
        if description.nil? || description.strip.empty?
          add_fail(test_name, "Link #{index + 1} (#{link['name']}) has empty description")
          return
        end
      end
      
      add_pass(test_name)
    rescue => e
      add_fail(test_name, "Error: #{e.message}")
    end
  end

  def test_names_not_empty
    test_name = "Test 7: Names are not empty"
    begin
      data = load_external_links_data
      
      data.each_with_index do |link, index|
        name = link['name']
        if name.nil? || name.strip.empty?
          add_fail(test_name, "Link #{index + 1} has empty name")
          return
        end
      end
      
      add_pass(test_name)
    rescue => e
      add_fail(test_name, "Error: #{e.message}")
    end
  end

  def test_summary_field_exists
    test_name = "Test 8: Summary field exists (can be empty)"
    begin
      data = load_external_links_data
      
      data.each_with_index do |link, index|
        unless link.key?('summary')
          add_fail(test_name, "Link #{index + 1} (#{link['name']}) missing summary field")
          return
        end
      end
      
      add_pass(test_name)
    rescue => e
      add_fail(test_name, "Error: #{e.message}")
    end
  end

  def test_specific_link_data
    test_name = "Test 9: Specific link data integrity"
    begin
      data = load_external_links_data
      
      # Expected data structure
      expected_links = [
        {
          'name' => 'LinkedIn',
          'url' => 'https://www.linkedin.com/in/kandy-koga',
          'icon' => 'linkedin',
          'category' => 'Professional networking'
        },
        {
          'name' => 'GitHub',
          'url' => 'https://github.com/kaiquekandykoga',
          'icon' => 'github',
          'category' => 'Software development'
        },
        {
          'name' => 'GitLab',
          'url' => 'https://gitlab.com/kaiquekandykoga',
          'icon' => 'gitlab',
          'category' => 'Software development'
        },
        {
          'name' => 'Codeberg',
          'url' => 'https://codeberg.org/kaiquekandykoga',
          'icon' => 'codeberg',
          'category' => 'Software development'
        },
        {
          'name' => 'Instagram',
          'url' => 'https://www.instagram.com/kaiquekandykoga',
          'icon' => 'instagram',
          'category' => 'Social media'
        },
        {
          'name' => 'Hugging Face',
          'url' => 'https://huggingface.co/kaiquekandykoga',
          'icon' => 'huggingface',
          'category' => 'Artificial intelligence'
        }
      ]
      
      # Check if we have the right number of links
      if data.length != expected_links.length
        add_fail(test_name, "Expected #{expected_links.length} links, got #{data.length}")
        return
      end
      
      # Check each expected link
      expected_links.each_with_index do |expected, index|
        actual = data[index]
        
        # Check name
        unless actual['name'] == expected['name']
          add_fail(test_name, "Link #{index + 1} name mismatch: expected '#{expected['name']}', got '#{actual['name']}'")
          return
        end
        
        # Check URL
        unless actual['url'] == expected['url']
          add_fail(test_name, "Link #{index + 1} URL mismatch: expected '#{expected['url']}', got '#{actual['url']}'")
          return
        end
        
        # Check icon
        unless actual['icon'] == expected['icon']
          add_fail(test_name, "Link #{index + 1} icon mismatch: expected '#{expected['icon']}', got '#{actual['icon']}'")
          return
        end
        
        # Check category
        unless actual['category'] == expected['category']
          add_fail(test_name, "Link #{index + 1} category mismatch: expected '#{expected['category']}', got '#{actual['category']}'")
          return
        end
      end
      
      add_pass(test_name)
    rescue => e
      add_fail(test_name, "Error: #{e.message}")
    end
  end

  def load_external_links_data
    # Read the external_links.js file and extract the externalLinksData array
    js_file_path = File.join(File.dirname(__FILE__), '..', 'docs', 'external_links.js')
    
    unless File.exist?(js_file_path)
      raise "external_links.js file not found at #{js_file_path}"
    end
    
    js_content = File.read(js_file_path)
    
    # Extract the externalLinksData array using regex
    # This regex looks for the array assignment and captures the JSON-like structure
    array_match = js_content.match(/externalLinksData\s*=\s*(\[.*?\]);/m)
    
    unless array_match
      raise "Could not find externalLinksData array in external_links.js"
    end
    
    # Parse the JavaScript array manually
    js_array = array_match[1]
    parse_js_array(js_array)
  end

  def parse_js_array(js_array)
    # Remove the outer brackets
    content = js_array[1..-2].strip
    
    # Split by object boundaries (look for }, { pattern)
    objects = []
    current_object = ""
    brace_count = 0
    in_string = false
    escape_next = false
    
    content.each_char do |char|
      if escape_next
        current_object << char
        escape_next = false
        next
      end
      
      case char
      when '\\'
        escape_next = true
        current_object << char
      when '"'
        in_string = !in_string
        current_object << char
      when '{'
        unless in_string
          brace_count += 1
        end
        current_object << char
      when '}'
        unless in_string
          brace_count -= 1
          if brace_count == 0
            # End of object
            current_object << char
            objects << parse_js_object(current_object.strip)
            current_object = ""
            next
          end
        end
        current_object << char
      else
        current_object << char
      end
    end
    
    objects
  end

  def parse_js_object(js_object)
    # Remove the braces
    content = js_object[1..-2].strip
    
    result = {}
    
    # Use a simpler approach - split by commas and parse each field
    # Look for patterns like: name: 'value'
    field_pattern = /(\w+):\s*['"]([^'"]*)['"]/i
    
    content.scan(field_pattern) do |match|
      key = match[0]
      value = match[1]
      result[key] = value
    end
    
    result
  end

  def add_pass(test_name)
    @test_results << { name: test_name, status: 'PASS' }
    @passed_tests += 1
    puts "✓ #{test_name}"
  end

  def add_fail(test_name, error_message)
    @test_results << { name: test_name, status: 'FAIL', error: error_message }
    @failed_tests += 1
    puts "✗ #{test_name}"
    puts "  Error: #{error_message}"
  end

  def print_results
    puts "\n" + "=" * 50
    puts "Test Results Summary"
    puts "=" * 50
    puts "Total tests: #{@passed_tests + @failed_tests}"
    puts "Passed: #{@passed_tests}"
    puts "Failed: #{@failed_tests}"
    
    if @failed_tests > 0
      puts "\nFailed Tests:"
      @test_results.each do |result|
        if result[:status] == 'FAIL'
          puts "- #{result[:name]}"
          puts "  Error: #{result[:error]}" if result[:error]
        end
      end
      puts "\nOverall result: FAILED"
      exit(1)
    else
      puts "\nOverall result: PASSED"
      exit(0)
    end
  end
end

# Run the tests
if __FILE__ == $0
  test = ExternalLinksTest.new
  test.run
end