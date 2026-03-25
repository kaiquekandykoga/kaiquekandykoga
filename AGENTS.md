# AGENTS.md

This file describes data to be used by AI agents when working on this app, following the agents.md specification.

## Project Overview

This is a **static website** for a personal portfolio built with plain HTML, CSS, and JavaScript - no frameworks, no build tools, no servers required. The site is deployed via GitHub Pages.

### Directory Structure

- **docs/** - All source files for the GitHub Pages site
  - `index.html` - Main HTML file with theme switching and tab navigation
  - `main.css` - Stylesheet with light/dark theme support
  - `main.js` - Theme management and tab functionality
  - `about.js` - About page data loading from YAML
  - `external_links.js` - External links loading from YAML
  - `about.yaml` - Personal information data
  - `external_links.yaml` - External link configurations
  - `js-yaml.min.js` - YAML parsing library (CDN fallback)

### Site Sections

1. **About** - Personal info loaded from about.yaml
2. **External Links** - Professional platform links from external_links.yaml
3. **Open Source** - Static "Under Construction" section

---

## Commands

Since this is a static website with no build process:

- **Test/View**: Open `docs/index.html` directly in any browser (no server needed)
- **Validate**: Check HTML structure, CSS validity, and YAML syntax
- **No build/lint/test commands** - This project uses plain HTML/CSS/JS with no dependencies to test

---

## Code Style Guidelines

### General Principles

- Keep files simple and self-contained
- Use semantic HTML, CSS, and vanilla JavaScript only
- No frameworks, bundlers, or preprocessors
- Maintain cross-browser compatibility
- Ensure accessibility (ARIA labels, proper contrast)

### HTML Guidelines

- Use semantic elements (`<header>`, `<main>`, `<section>`, `<nav>`)
- Include proper meta tags for responsive design
- Maintain theme toggle button structure
- Preserve tab navigation functionality with proper ARIA attributes

### CSS Guidelines

- Use CSS custom properties (`--variable-name`) for theme colors
- Support both light and dark themes via `data-theme` attribute
- Maintain responsive design (mobile-first approach)
- Use classes for styling, avoid inline styles
- 2-space indentation

### JavaScript Guidelines

- Use `const` and `let` - never `var`
- Use 4-space indentation
- Use camelCase for function and variable names
- Include error handling for all async operations (fetch, YAML loading)
- Always provide fallback data when loading external files
- Use `DOMContentLoaded` for initialization
- Keep functions focused and small

### YAML Guidelines

- Use 2-space indentation (no tabs)
- Quote strings with special characters
- Use consistent key naming (lowercase with underscores)
- Validate syntax before committing

---

## Data Management

### about.yaml Format
```yaml
- name: "Full Name"
- interests: "Comma-separated list of interests"
```

### external_links.yaml Format
```yaml
- name: "Platform Name"
  url: "https://example.com"
  description: "Brief description"
  icon: "svg-icon-markup"
```

---

## Error Handling

- JavaScript must include fallback data if YAML loading fails
- Test site functionality after any changes
- Check browser console for errors
- Validate theme switching works correctly
- Ensure all external links are accessible

---

## Git Workflow (Mandatory)

After **every** file modification, agents must commit and push:

```bash
git add .
git commit -m "AI-Assisted Update: <summary of changes>"
git push origin master
```

- Changes must push to **master** branch (required for GitHub Pages)
- Use descriptive commit messages explaining the purpose
- Include "AI-Assisted" prefix in commit messages to indicate AI assistance
- Never skip this workflow - it's the single source of truth

---

## Deployment

- **Platform**: GitHub Pages (automatic from master branch)
- **URL**: https://kaiquekandykoga.github.io/kaiquekandykoga/
- **Process**: Push to master triggers deployment (live within minutes)

---

## Metadata

- **Repository**: https://github.com/kaiquekandykoga/kaiquekandykoga
- **Primary Branch**: master
- **Technology Stack**: HTML, CSS, JavaScript, YAML

