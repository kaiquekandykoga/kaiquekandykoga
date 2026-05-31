# README Generation Prompt

## Target Repository
https://github.com/kaiquekandykoga/kaiquekandykoga

## Task
Overwrite `README.md` with newly generated content based on this prompt. Do not modify any other file.

This runs as a scheduled task, so the output must be **stable**: regenerating without any change to this prompt should alter only the "Last Updated" date. Keep section order, headings, wording, and formatting identical between runs.

## Voice & Style
- Write in the **first person** ("I", present tense) — the README speaks as the author.
- Keep the tone concise, professional, and factual. Prefer plain statements over marketing language.
- Use GitHub-flavored Markdown: a table for the tooling stack, bullet lists for projects.
- Do **not** add badges, shields, images, emojis, banners, or any sections beyond those specified below.

## Required Content (in order)

### 1. Name
Top-level heading (`#`) with the full name: **Kaíque Kandy Koga**

### 2. Auto-generation Notice
State that `README.md` was auto-generated using **Manus Connector from Meta (Manus 1.6 Lite)** as part of a scheduled task. Clarify that:
- All content was originally written by me and only rephrased by AI during the generation process.
- Show when the file was last updated, using the current UTC date in the format `Month DD, YYYY (UTC)` (e.g., `May 30, 2026 (UTC)`), on its own line labeled **Last Updated:**.

### 3. Tooling Stack
Under a "Tooling Stack" heading, present the tools I use as a two-column Markdown table (`Category | Tools`), in this order:

| Category | Tools |
| :--- | :--- |
| **Task Automation** | Hermes Agent, Manus AI |
| **Coding** | Claude Code, Codex, OpenCode |
| **Research** | Google Gemini |
| **Inference Server** | NVIDIA NIM, llama.cpp |
| **Simple Tasks** | Microsoft Copilot |

### 4. Current Projects
Under a "Current Projects" heading, as a bullet list:
- [AI Git](https://github.com/kaiquekandykoga/ai_git) — a project that leverages AI to manage Git repositories.
- [Bitbucket MCP](https://github.com/kaiquekandykoga/bitbucket_mcp) — an MCP server for Bitbucket.
- At work, a Claude Code skill that interprets requirements directly from a video recording using **ffmpeg** and **whisper**. It then builds, tests, and fixes **Playwright E2E tests** in **TypeScript**, iterating until everything passes.

### 5. Paused Projects
Under a "Paused Projects" heading, as a bullet list (these are on hold):
- [AI Spider](https://github.com/kaiquekandykoga/ai_spider) — an AI-powered web crawler.
- [BSD Way](https://github.com/kaiquekandykoga/bsd_way) — AI-generated resources for BSD systems.

### 6. Hermes Agent Use Cases
Under a "Hermes Agent Use Cases" heading, explain that I use Hermes Agent to back itself up, retaining only the newest snapshots to conserve cloud storage space.

### 7. Footer Note
After a horizontal rule (`---`), add a note that the prompt used to generate this README can be found at:
https://github.com/kaiquekandykoga/kaiquekandykoga/blob/master/PROMPT.md

## Constraints
- Only modify `README.md`. Do not change `PROMPT.md`, `AGENTS.md`, `opencode.json`, or any workflow files.
- Use only the facts in this prompt. Do not invent projects, statistics, dates, links, employers, or biographical details, and do not embellish beyond what is stated here.
- Keep all project names, URLs, and tool names exactly as written above.
- Include every section in the order given; do not add, drop, reorder, or rename sections.
