---
name: merge-and-clean-up
description: >
  Merge the current branch's pull request, then remove its git worktree and delete the local and remote branches. Use when the user says "merge and clean up", "merge the PR and delete the branch", or asks to finish/land a PR. Works in any repository using the worktree workflow.
model: haiku
---

# Merge and clean up
Merge the PR, then remove the worktree and its branches

## Steps
1. **Inspect (one call):** `gh pr view --json number,url,state,mergeable && git branch --show-current && git worktree list`.
   Note the current branch, its worktree path, and the main worktree
   (first entry of `git worktree list`). Abort and report if there's no
   open, mergeable PR (conflicts/failing checks).
2. **Merge (remote only):** `gh pr merge --squash`. If it fails with
   "squash merges are not allowed", retry `gh pr merge --merge` (honor
   the repo's convention). Don't pass `--delete-branch` — it tries to
   check out the base branch inside this linked worktree and errors
   ("<base> is already used by worktree"); step 3 deletes the branch.
3. **Remove the worktree & branch** — run from the main worktree with
   `-C <main>` since the branch is checked out here and can't be deleted
   in place:
   - `git -C <main> worktree remove <worktree-path> --force`
   - `git -C <main> branch -d claude/<name>` (merged, so safe)
   - `git -C <main> push origin --delete claude/<name>` (delete remote branch)
   - `git -C <main> pull --ff-only`
   - `git -C <main> worktree prune && git -C <main> remote prune origin`
4. **Report:** merged PR URL, and that the worktree + branch are gone
   locally and remotely. Warn the user this session's directory was
   removed — they should `cd <main>`.

## Notes
- Confirm the target PR with the user before merging unless already authorized.
- No `gh`: have the user merge via the web UI, then run the step-3 cleanup.
