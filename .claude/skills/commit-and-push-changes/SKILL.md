---
name: commit-and-push-changes
description: >
  Commit and push the changes made during this session, then ensure a pull request exists. Use when the user says "commit and push", "ship this", "open a PR", or asks to save/publish session work to git. Works in any repository. Uses git worktrees: if on the main/master branch, moves the work into a new worktree first. Opens a PR if none exists for the branch.
model: haiku
---

# Commit and push changes
Commit session changes in a worktree, push, and ensure a PR exists

## Steps
1. **Inspect (one call):** `git status --short && git branch --show-current`.
2. **Ensure a worktree branch:** If the current branch is `main`/`master`,
   move the work into a new worktree (don't commit onto main):
   - Pick a kebab-case `<name>` from the work; branch is `claude/<name>`.
   - `git stash -u` (only if step 1 showed changes), then
     `git worktree add .claude/worktrees/<name> -b claude/<name>`, then
     `git -C .claude/worktrees/<name> stash pop` (skip pop if nothing stashed).
   - Run all remaining git commands with `-C .claude/worktrees/<name>` and
     tell the user the work now lives there.
   Otherwise you're already in a worktree — proceed in place.
3. **Stage by name:** `git add <path>` per relevant file. Never `-A` / `.`.
4. **Commit:** Concise message; follow repo conventions (line-wrap width,
   trailers) from AGENTS.md/CLAUDE.md.
5. **Push:** `git push -u origin HEAD`.
6. **Ensure PR:** `gh pr view --json url,state 2>/dev/null`.
   - No PR / error → `gh pr create --fill`. End the body with:
     `🤖 Generated with [Claude Code](https://claude.com/claude-code)`
   - PR exists → report its URL.
7. **Report:** branch, commit subject, and PR URL.

## Notes
- Batch independent git reads into a single call to save round-trips.
- Only commit session work; leave unrelated dirty files unless told otherwise.
- No `gh` / no remote: push if possible, then have the user open the PR.
