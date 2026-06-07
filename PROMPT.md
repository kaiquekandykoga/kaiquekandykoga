# README Generation Prompt

## Target Repository
https://github.com/kaiquekandykoga/kaiquekandykoga

## Task
Overwrite `README.md` with newly generated content based on this prompt. Do not modify any other file.

`README.md` must contain **two versions of the same content** in a single file: **English first, then Japanese**. The Japanese version is a faithful translation of the English version — same sections, same order, same facts.

This runs as a scheduled task, so the output must be **stable**: regenerating without any change to this prompt should alter only the "Last Updated" date. Keep section order, headings, wording, translations, and formatting identical between runs. Use the exact text pinned below for both languages verbatim — do not re-translate or rephrase freely, as that would make the file drift between runs.

## Voice & Style
- Write in the **first person** ("I", present tense) — the README speaks as the author. The Japanese version keeps the same first-person voice.
- Keep the tone concise, professional, and factual. Prefer plain statements over marketing language.
- Use GitHub-flavored Markdown: a table for the tooling stack, bullet lists for projects.
- Do **not** add badges, shields, images, emojis, banners, or any sections beyond those specified below.

## Output Layout
Structure the file exactly like this:

1. A single top-level heading (`#`) with the name — it is the page title, shared by both versions, and appears **once** at the very top.
2. Immediately below it, a language navigation line: `[English](#english) | [日本語](#日本語)`
3. The English version under a `## English` heading.
4. The Japanese version under a `## 日本語` heading, immediately after the English version.

Within **each** version, in this order:
- the auto-generation notice and the **Last Updated** line (section 2),
- the four content sections (Tooling Stack, Current Projects, Paused Projects, Hermes Agent Use Cases) as `###` sub-headings,
- a horizontal rule (`---`),
- that version's footer note (section 7).

## Required Content (in order)
Each item gives the **English** and **Japanese** text to use verbatim. Keep all project names, URLs, and tool names identical (untranslated) in both versions; translate prose only.

### 1. Name
Single top-level heading (`#`) with the full name: **Kaíque Kandy Koga**. Same in both versions; appears once as the page title.

### 2. Auto-generation Notice
State that `README.md` was auto-generated as part of a scheduled task, that all content was originally written by me and only rephrased by AI during the generation process, and show when the file was last updated on its own line.

- **English** — label **Last Updated:**, current UTC date in the format `Month DD, YYYY (UTC)` (e.g., `May 30, 2026 (UTC)`):

  This README.md was auto-generated as part of a scheduled task. All content was originally written by me and only rephrased by AI during the generation process.

  **Last Updated:** Month DD, YYYY (UTC)

- **Japanese** — label **最終更新:**, the same date in the format `YYYY年M月D日 (UTC)` (e.g., `2026年5月30日 (UTC)`):

  このREADME.mdは、スケジュールされたタスクの一環として自動生成されました。内容はすべて私自身が執筆したもので、生成の過程でAIによって言い換えられただけです。

  **最終更新:** YYYY年M月D日 (UTC)

### 3. Tooling Stack
A two-column Markdown table, in this order.

- **English** — heading `Tooling Stack`:

| Category | Tools |
| :--- | :--- |
| **Task Automation** | Hermes Agent, Manus AI |
| **Coding** | Claude Code, Codex, OpenCode |
| **Research** | Google Gemini |
| **Inference Server** | NVIDIA NIM, llama.cpp |
| **Simple Tasks** | Microsoft Copilot |

- **Japanese** — heading `ツールスタック`:

| カテゴリ | ツール |
| :--- | :--- |
| **タスク自動化** | Hermes Agent, Manus AI |
| **コーディング** | Claude Code, Codex, OpenCode |
| **リサーチ** | Google Gemini |
| **推論サーバー** | NVIDIA NIM, llama.cpp |
| **簡単なタスク** | Microsoft Copilot |

### 4. Current Projects
A bullet list.

- **English** — heading `Current Projects`:
  - [AI Git](https://github.com/kaiquekandykoga/ai_git) — a project that leverages AI to manage Git repositories.
  - [Bitbucket MCP](https://github.com/kaiquekandykoga/bitbucket_mcp) — an MCP server for Bitbucket.
  - At work, I use a Claude Code skill that interprets requirements directly from a video recording using **ffmpeg** and **whisper**. It then builds, tests, and fixes **Playwright E2E tests** in **TypeScript**, iterating until everything passes.
- **Japanese** — heading `進行中のプロジェクト`:
  - [AI Git](https://github.com/kaiquekandykoga/ai_git) — AIを活用してGitリポジトリを管理するプロジェクト。
  - [Bitbucket MCP](https://github.com/kaiquekandykoga/bitbucket_mcp) — Bitbucket用のMCPサーバー。
  - 仕事では、**ffmpeg** と **whisper** を使って動画の録画から直接要件を解釈する Claude Code スキルを使用しています。その後、**TypeScript** で **Playwright E2Eテスト** を構築・テスト・修正し、すべて通過するまで繰り返します。

### 5. Paused Projects
A bullet list (these are on hold).

- **English** — heading `Paused Projects`:
  - [AI Spider](https://github.com/kaiquekandykoga/ai_spider) — an AI-powered web crawler.
  - [BSD Way](https://github.com/kaiquekandykoga/bsd_way) — AI-generated resources for BSD systems.
- **Japanese** — heading `中断中のプロジェクト`:
  - [AI Spider](https://github.com/kaiquekandykoga/ai_spider) — AIを活用したWebクローラー。
  - [BSD Way](https://github.com/kaiquekandykoga/bsd_way) — BSDシステム向けのAI生成リソース。

### 6. Hermes Agent Use Cases
Explain that I use Hermes Agent to back itself up, retaining only the newest snapshots to conserve cloud storage space.

- **English** — heading `Hermes Agent Use Cases`:

  I use Hermes Agent to back itself up, retaining only the newest snapshots to conserve cloud storage space.

- **Japanese** — heading `Hermes Agent の用途`:

  私は Hermes Agent を使って Hermes Agent 自体をバックアップしており、クラウドストレージの容量を節約するために最新のスナップショットのみを保持しています。

### 7. Footer Note
At the end of **each** version, after a horizontal rule (`---`), add a note pointing to the prompt. The URL is identical in both.

- **English:**

  The prompt used to generate this README can be found at:
  https://github.com/kaiquekandykoga/kaiquekandykoga/blob/master/PROMPT.md

- **Japanese:**

  このREADMEの生成に使用したプロンプトは、次の場所で確認できます:
  https://github.com/kaiquekandykoga/kaiquekandykoga/blob/master/PROMPT.md

## Constraints
- Only modify `README.md`. Do not change `PROMPT.md`, `AGENTS.md`, `opencode.json`, or any workflow files.
- Use only the facts in this prompt. Do not invent projects, statistics, dates, links, employers, or biographical details, and do not embellish beyond what is stated here.
- Keep all project names, URLs, and tool names exactly as written above, in both versions — translate prose only.
- Include **both** the English and the Japanese version on every run, English first, each containing every section in the order given; do not add, drop, reorder, or rename sections.
- Both versions must show the **same** "Last Updated" date: English as `Month DD, YYYY (UTC)`, Japanese as `YYYY年M月D日 (UTC)`.
- Use the pinned wording above for both languages verbatim; do not re-translate or rephrase between runs.
