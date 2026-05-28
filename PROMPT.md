# README Generation Prompt

## Target Repository
https://github.com/kaiquekandykoga/kaiquekandykoga

## Task
Overwrite `README.md` with newly generated content. Do not modify any other file.

## Required Content (in order)

### 1. Name
Start with the full name: **Kaíque Kandy Koga**

### 2. Auto-generation Notice
State that `README.md` was auto-generated using **Manus Connector from Meta (Manus 1.6 Lite)** as part of a scheduled task. Clarify that:
- All content was originally written by the author
- It was rephrased by AI during the README creation process
- Include the current UTC date to indicate when the file was last updated

### 3. Tooling Stack
State that the author uses the following tools:
- **Task automation**: Hermes Agent, Manus AI
- **Coding**: Claude Code, Codex, OpenCode
- **Research**: Google Gemini
- **Inference server**: NVIDIA NIM, llama.cpp
- **Simple tasks**: Microsoft Copilot

### 4. Current Projects
- State that the author is building [AI Git](https://github.com/kaiquekandykoga/ai_git), a project that leverages AI to manage Git repositories.
- State that the author is building [Bitbucket MCP](https://github.com/kaiquekandykoga/bitbucket_mcp).
- At work, I’m building a Claude Code skill that can interpret requirements directly from a video recording using ffmpeg and whisper. From there, it builds, tests, and fixes Playwright E2E tests in TypeScript, iterating until everything passes

### 5. Hermes Agent Use Cases
Explain that the author uses Hermes Agent to back up itself, keeping only the newest snapshots to save space in cloud storage.

### 6. Footer Note
Add a note that the prompt used to generate this README can be found at:
https://github.com/kaiquekandykoga/kaiquekandykoga/blob/master/PROMPT.md

## Constraints
- Only modify `README.md`
- Do not change `PROMPT.md`, `AGENTS.md`, `opencode.json`, or any workflow files
