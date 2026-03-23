# AGENTS.md
This file describes data to be used by AI agents when working on this app, following the agents.md specification.

---

## App Structure

- **docs/** contains the HTML, CSS, and JavaScript files used to build the GitHub Pages site.

---

## Agent Capabilities

The agent is designed to:

1. Build and update the static HTML site inside **docs/** for GitHub Pages.
2. Use only **HTML, CSS, and JavaScript** inside the docs/ directory.
3. Operate through the **cline CLI**.
4. After modifying any files, the agent must **always commit and push the changes** using the Git Workflow defined below.

---

## Git Workflow (Mandatory)

Whenever the agent modifies, creates, or deletes files, it **must** include the following commands in the final terminal step:

1. Stage all changes:
```
git add.
```
2. Commit with a descriptive message summarizing the changes:
```
git commit -m "Update: <summary of changes>"
```
3. Push to the current branch:
```
git push
```

These commands must appear in the final terminal command sequence **every time file changes occur**.  
The agent must not consider a task complete until the Git Workflow has been executed.

**Note**: This git workflow is the single source of truth for all git operations. Do not create conflicting git skills in the `.cline/skills/` directory.

---

## Rules for File Editing

- The agent must ensure all edits inside **docs/** remain valid HTML, CSS, or JavaScript.
- The agent must avoid introducing build steps or frameworks (no bundlers, no preprocessors).
- The agent must preserve existing structure unless explicitly instructed to refactor.

---

## Metadata

- **Repository:** https://github.com/kaiquekandykoga/kaiquekandykoga
- **GitHub Pages:** https://kaiquekandykoga.github.io/kaiquekandykoga/

