# README Generation Prompt

## Target Repository
https://github.com/kaiquekandykoga/kaiquekandykoga

## Task
Overwrite `README.md` with newly generated content based on this prompt. Do not modify any other file.

`README.md` must contain **two versions of the same content** in a single file: **English first, then Japanese**. The English version is written in **New Zealand (NZ) English**, and the Japanese version is rendered in **natural, culturally appropriate Japanese** — same sections, same order, same facts in both, but each expressed the way a reader of that language would naturally put it, rather than a word-for-word translation.

This runs as a scheduled task, so the output must be **stable**: regenerating without any change to this prompt should alter only the "Last Updated" date. Keep section order, headings, wording, translations, and formatting identical between runs. Use the exact text pinned below for both languages verbatim — do not re-translate or rephrase freely, as that would make the file drift between runs.

## Voice & Style
- Write in the **first person** ("I", present tense) — the README speaks as the author. The Japanese version keeps the same first-person voice.
- **English — New Zealand English.** Use NZ/Commonwealth spelling and vocabulary (e.g. `-ise`, `-our`, and `-re` endings such as `organise`, `colour`, `centre`) and the NZ day-month date format (`7 June 2026`). Express ideas the Kiwi way — understated, modest, and plain-spoken, with the occasional friendly turn of phrase ("a wee project", "keep at it", "save on") — and steer clear of hype or self-promotion, in keeping with the local tall-poppy modesty.
- **Japanese — natural, culturally attuned Japanese.** Write idiomatic Japanese rather than a literal translation. Keep the polite です/ます register, favour humble, modest phrasing (謙遜 — e.g. 「〜にすぎません」, 「ささやかな」, 「地道に」), and address the reader courteously (e.g. 「ご確認いただけます」).
- Keep the tone concise, professional, and factual. Prefer plain statements over marketing language.
- Use GitHub-flavored Markdown: a table for the tooling stack, bullet lists for projects.
- Do **not** add badges, shields, images, emojis, banners, or any sections beyond those specified below.
- The NZ-English and Japanese cultural flavour is already baked into the pinned wording below — reproduce it **verbatim** so the file changes only the date between runs.

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
Each item gives the **English** and **Japanese** text to use verbatim. Keep all project names, URLs, and tool names identical (untranslated) in both versions; adapt the prose only, exactly as pinned.

### 1. Name
Single top-level heading (`#`) with the full name: **Kaíque Kandy Koga**. Same in both versions; appears once as the page title.

### 2. Auto-generation Notice
State that `README.md` was auto-generated as part of a scheduled task, that all content was originally written by me and only rephrased by AI during the generation process, and show when the file was last updated on its own line.

- **English** — label **Last Updated:**, current UTC date in the NZ day-month format `D Month YYYY (UTC)` (e.g., `30 May 2026 (UTC)`):

  This README.md was auto-generated as part of a scheduled task. All the content was originally written by me — AI just tidied up the wording during generation.

  **Last Updated:** D Month YYYY (UTC)

- **Japanese** — label **最終更新:**, the same date in the format `YYYY年M月D日 (UTC)` (e.g., `2026年5月30日 (UTC)`):

  このREADME.mdは、スケジュールされたタスクの一環として自動生成されたものです。内容はすべて私自身が執筆しており、生成の過程でAIが表現を整えただけにすぎません。

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
  - [AI Git](https://github.com/kaiquekandykoga/ai_git) — a wee project that uses AI to help manage Git repositories.
  - [Bitbucket MCP](https://github.com/kaiquekandykoga/bitbucket_mcp) — an MCP server for Bitbucket.
  - [Docker MCP](https://github.com/kaiquekandykoga/docker_mcp) — an MCP server for Docker.
  - [Oracle MCP](https://github.com/kaiquekandykoga/oracle_mcp) — an MCP server for Oracle.
  - [PostgreSQL MCP](https://github.com/kaiquekandykoga/postgresql_mcp) — an MCP server for PostgreSQL.
  - [Ruby Claude](https://github.com/kaiquekandykoga/ruby_claude) — a lightweight Ruby SDK for Claude, working through the Claude Code CLI.
- **Japanese** — heading `進行中のプロジェクト`:
  - [AI Git](https://github.com/kaiquekandykoga/ai_git) — AIを活用してGitリポジトリを管理する、ささやかなプロジェクト。
  - [Bitbucket MCP](https://github.com/kaiquekandykoga/bitbucket_mcp) — Bitbucket用のMCPサーバー。
  - [Docker MCP](https://github.com/kaiquekandykoga/docker_mcp) — Docker用のMCPサーバー。
  - [Oracle MCP](https://github.com/kaiquekandykoga/oracle_mcp) — Oracle用のMCPサーバー。
  - [PostgreSQL MCP](https://github.com/kaiquekandykoga/postgresql_mcp) — PostgreSQL用のMCPサーバー。
  - [Ruby Claude](https://github.com/kaiquekandykoga/ruby_claude) — Claude Code CLI を介して Claude を利用する、軽量な Ruby SDK。

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

  I use Hermes Agent to back itself up, keeping only the newest snapshots to save on cloud storage.

- **Japanese** — heading `Hermes Agent の用途`:

  私は Hermes Agent を使って Hermes Agent 自体をバックアップしており、クラウドストレージの容量を節約するために、最新のスナップショットのみを保持するようにしています。

### 7. Footer Note
At the end of **each** version, after a horizontal rule (`---`), add a note pointing to the prompt. The URL is identical in both.

- **English:**

  You can find the prompt used to generate this README here:
  https://github.com/kaiquekandykoga/kaiquekandykoga/blob/master/PROMPT.md

- **Japanese:**

  このREADMEの生成に使用したプロンプトは、以下からご確認いただけます:
  https://github.com/kaiquekandykoga/kaiquekandykoga/blob/master/PROMPT.md

## Constraints
- Only modify `README.md`. Do not change `PROMPT.md`, `AGENTS.md`, `opencode.json`, or any workflow files.
- Use only the facts in this prompt. Do not invent projects, statistics, dates, links, employers, or biographical details, and do not embellish beyond what is stated here.
- Keep all project names, URLs, and tool names exactly as written above, in both versions — adapt the prose only (English in NZ English, Japanese in natural Japanese), per the pinned wording.
- Include **both** the English and the Japanese version on every run, English first, each containing every section in the order given; do not add, drop, reorder, or rename sections.
- Both versions must show the **same** "Last Updated" date: English in the NZ day-month format `D Month YYYY (UTC)`, Japanese as `YYYY年M月D日 (UTC)`.
- Use the pinned wording above for both languages verbatim; do not re-translate or rephrase between runs.
