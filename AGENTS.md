# AGENTS.md

## Repository purpose

GitHub profile repo (kaiquekandykoga/kaiquekandykoga). Static content only — no application code, build system, or dependencies.

## OpenCode setup

- `opencode.json`: default agent is `plan`
- CI: `.github/workflows/opencode.yml` triggers on `/oc` or `/opencode` comments in issues/PRs

## Files

- `README.md` — auto-generated from `PROMPT.md`. Written in New Zealand English. Do not edit by hand — regenerate from the prompt.
- `PROMPT.md` — generation instructions; do not execute or modify without request. The pinned wording carries the NZ-English cultural phrasing, so keep it verbatim to stay stable between runs.
- `AGENTS.md` — agent guidance for this repo (this file).
- `CLAUDE.md` — symlink to `AGENTS.md`, so Claude Code reads the same guidance.
