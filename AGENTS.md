# AGENTS.md

This is a **static portfolio website** (HTML/CSS/JS, no build process) deployed via GitHub Pages.

## Commands

- **View**: Open `docs/index.html` in any browser (no server needed)
- **Validate**: Check HTML structure, CSS validity, YAML syntax

## Git Workflow (Mandatory)

After **every** file modification, agents must commit and push:

```bash
git add .
git commit -m "AI-Assisted Update: <summary>
Model: <model-name>
Files: <changed files>"
git push origin master
```

- Push to **master** branch (required for GitHub Pages)
- Include "AI-Assisted" prefix and model name in commit message

## Data Files

- `docs/about.yaml` - Personal info (name, interests)
- `docs/external_links.yaml` - External links (name, url, description, icon)

## Error Handling

- JavaScript must include fallback data if YAML loading fails
- Test in browser after changes, check console for errors

## Deployment

- **URL**: https://kaiquekandykoga.github.io/kaiquekandykoga/
- Push to master triggers automatic deployment (live within minutes)