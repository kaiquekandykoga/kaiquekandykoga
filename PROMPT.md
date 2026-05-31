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
- It was rephrased by AI during the README generation process
- Include the current UTC date to indicate when the file was last updated

### 3. Tooling Stack
State that the author uses the following tools, grouped by purpose:
- **Task automation**: Hermes Agent, Manus AI
- **Coding**: Claude Code, Codex, OpenCode
- **Research**: Google Gemini
- **Inference server**: NVIDIA NIM, llama.cpp
- **Simple tasks**: Microsoft Copilot

### 4. Current Projects
- The author is building [AI Git](https://github.com/kaiquekandykoga/ai_git), a project that leverages AI to manage Git repositories.
- The author is building [Bitbucket MCP](https://github.com/kaiquekandykoga/bitbucket_mcp), an MCP server for Bitbucket.
- At work, the author is building a Claude Code skill that interprets requirements directly from a video recording using ffmpeg and whisper. It then builds, tests, and fixes Playwright E2E tests in TypeScript, iterating until everything passes.

### 5. Paused Projects
- The author was building [AI Spider](https://github.com/kaiquekandykoga/ai_spider), an AI-powered web crawler.
- The author was building [BSD Way](https://github.com/kaiquekandykoga/bsd_way), an AI-Generated resources for BSD systems.

### 6. Hermes Agent Use Cases
Explain that the author uses Hermes Agent to back itself up, retaining only the newest snapshots to conserve cloud storage space.

### 7. Footer Note
Add a note that the prompt used to generate this README can be found at:
https://github.com/kaiquekandykoga/kaiquekandykoga/blob/master/PROMPT.md

## Constraints
- Only modify `README.md`
- Do not change `PROMPT.md`, `AGENTS.md`, `opencode.json`, or any workflow files
