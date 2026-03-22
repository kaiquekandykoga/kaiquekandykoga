# Jekyll Setup for GitHub Pages

This repository is configured to use Jekyll for GitHub Pages deployment.

## Local Development

To run the site locally, you'll need Ruby and Jekyll installed:

```bash
# Install Jekyll and Bundler
gem install jekyll bundler

# Install dependencies
bundle install

# Run the site locally
bundle exec jekyll serve
```

## GitHub Pages Deployment

The site is configured to deploy automatically from the `main` branch to GitHub Pages. The deployment is handled by the GitHub Actions workflow in `.github/workflows/pages.yml`.

## Project Structure

- `_config.yml` - Jekyll configuration
- `Gemfile` - Ruby dependencies
- `_layouts/` - HTML templates
- `assets/` - CSS, JavaScript, and images
- `index.html` - Main page content
- `_includes/` - Reusable HTML components

## Content

The site displays a portfolio-style page with:
- Hero section with profile information
- Grid of project cards linking to GitHub repositories
- Responsive design that works on mobile and desktop

## Customization

To customize the site:
1. Edit `index.html` to change the main content
2. Modify `assets/css/style.css` to change styling
3. Update `_config.yml` for site-wide settings
4. Add new images to the `assets/` directory