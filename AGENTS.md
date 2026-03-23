# AGENTS.md

This file describes data to be used by AI agents when working on this app, following the agents.md specification.

## App Structure

- **docs/** contains the HTML, CSS, and JavaScript files used to build the GitHub Pages site.
- **docs/index.html** - Main HTML file with theme switching and tab navigation
- **docs/main.css** - Stylesheet with light/dark theme support
- **docs/about.js** - JavaScript for loading and displaying about data from YAML
- **docs/external_links.js** - JavaScript for loading and displaying external links from YAML
- **docs/about.yaml** - YAML data file containing personal information and interests
- **docs/external_links.yaml** - YAML data file containing external link configurations

The site has three main sections:
1. **About** - Personal information loaded from about.yaml
2. **External Links** - Professional platform links loaded from external_links.yaml
3. **Open Source** - Static "Under Construction" section

## Agent Capabilities

The agent is designed to:

1. Build and update the static HTML site inside **docs/** for GitHub Pages.
2. Use only **HTML, CSS, and JavaScript** inside the docs/ directory.
3. Modify **YAML data files** (about.yaml, external_links.yaml) to update content.
4. Operate through the **cline CLI**.
5. Handle **client-side rendering** with JavaScript and YAML data loading.
6. Support **theme switching** (light/dark mode) functionality.
7. After modifying any files, the agent must **always commit and push the changes** using the Git Workflow defined below.

## Technology Stack

This project is built using **plain HTML, CSS, and JavaScript** - no frameworks, no build tools, no servers required!

### For Developers & AI Agents

**Important:** This is a static website that runs directly in the browser. To test or view this application:

1. **No server setup needed** - Just open any `.html` file directly in your browser
2. **No Python, Node.js, or other servers required**
3. **No build process** - The files are ready to use as-is
4. **Cross-platform compatibility** - Works in any modern browser

### Quick Start

```bash
# Clone the repository
git clone https://github.com/kaiquekandykoga/kaiquekandykoga.git

# Navigate to the project
cd kaiquekandykoga

# Open in browser (no server needed!)
open docs/index.html
# or
start docs/index.html  # Windows
```

**Note for AI Agents:** When working with this codebase, remember that all files are static and can be opened directly in a browser without any server setup or build process.

## Dependencies

- **jsyaml** - JavaScript library for parsing YAML files (loaded via CDN in HTML)
- **GitHub Pages** - Deployment platform (requires main branch for automatic deployment)
- **No build tools** - Site runs directly in browser without compilation

## Data Management

### YAML Files Structure

**about.yaml** format:
```yaml
- name: "Full Name"
- interests: "Comma-separated list of interests"
```

**external_links.yaml** format:
```yaml
- name: "Platform Name"
  url: "https://example.com"
  description: "Brief description of the platform"
  icon: "svg-icon-markup"
```

### Guidelines
- Always validate YAML syntax after modifications
- Maintain consistent indentation (2 spaces)
- Include fallback content in JavaScript for loading failures
- Test external links for accessibility and proper formatting

## Error Handling

- JavaScript includes fallback data if YAML loading fails
- Always test site functionality after making changes
- Validate HTML structure and CSS styling
- Check for JavaScript console errors
- Ensure theme switching works correctly

## Git Workflow (Mandatory)

**IMPORTANT: AI agents MUST automatically commit and push changes after every file modification.**

Whenever the agent modifies, creates, or deletes files, it **must** include the following commands in the final terminal step:

1. Stage all changes:
```
git add .
```
2. Commit with a descriptive message summarizing the changes:
```
git commit -m "Update: <summary of changes>"
```
3. Push to the master branch (required for GitHub Pages):
```
git push origin master
```

These commands must appear in the final terminal command sequence **every time file changes occur**.  
The agent must not consider a task complete until the Git Workflow has been executed.

**Important Notes:**
- Changes must be pushed to the **master branch** for GitHub Pages to deploy
- Use descriptive commit messages that explain the purpose of changes
- This git workflow is the single source of truth for all git operations
- Do not create conflicting git skills in the `.cline/skills/` directory
- **AI agents must automatically execute these commands without requiring user intervention**

## Rules for File Editing

### General Rules
- The agent must ensure all edits inside **docs/** remain valid HTML, CSS, or JavaScript
- The agent must avoid introducing build steps or frameworks (no bundlers, no preprocessors)
- The agent must preserve existing structure unless explicitly instructed to refactor
- Always maintain accessibility standards (semantic HTML, proper ARIA labels)

### HTML Guidelines
- Use semantic HTML elements
- Include proper meta tags for responsive design
- Maintain theme toggle button structure
- Preserve tab navigation functionality

### CSS Guidelines
- Support both light and dark themes
- Use CSS custom properties for theme colors
- Maintain responsive design for mobile devices
- Follow existing naming conventions

### JavaScript Guidelines
- Include error handling for YAML loading failures
- Maintain existing event listeners and functionality
- Use vanilla JavaScript (no frameworks)
- Follow existing code structure and patterns

### YAML Guidelines
- Use 2-space indentation
- Maintain consistent key naming
- Include proper quoting for strings with special characters
- Validate syntax before committing

## Deployment

- **GitHub Pages** automatically deploys from the main branch
- Site URL: https://kaiquekandykoga.github.io/kaiquekandykoga/
- No additional deployment steps required beyond git push
- Changes are live within minutes of pushing to main branch

## Metadata

- **Repository:** https://github.com/kaiquekandykoga/kaiquekandykoga
- **GitHub Pages:** https://kaiquekandykoga.github.io/kaiquekandykoga/
- **Primary Branch:** main (required for GitHub Pages)
- **Technology Stack:** HTML, CSS, JavaScript, YAML
- **Deployment:** GitHub Pages (automatic from main branch)

