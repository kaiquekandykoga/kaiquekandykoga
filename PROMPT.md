# README Generation Prompt

## Target Repository
https://github.com/kaiquekandykoga/kaiquekandykoga

## Task
Overwrite `README.md` with newly generated content based on this prompt. Do not modify any other file.

`README.md` is written in **New Zealand (NZ) English** — expressed the way a reader of that language would naturally put it, rather than a word-for-word rendering.

This may be regenerated repeatedly, so the output must be **stable**: regenerating without any change to this prompt should alter only the "Last Updated" date. Keep section order, headings, wording, and formatting identical between runs. Use the exact text pinned below verbatim — do not re-translate or rephrase freely, as that would make the file drift between runs.

## Voice & Style
- Write in the **first person** ("I", present tense) — the README speaks as the author.
- **New Zealand English.** Use NZ/Commonwealth spelling and vocabulary (e.g. `-ise`, `-our`, and `-re` endings such as `organise`, `colour`, `centre`) and the NZ day-month date format (`7 June 2026`). Express ideas the Kiwi way — understated, modest, and plain-spoken, with the occasional friendly turn of phrase ("a wee project", "keep at it", "save on") — and steer clear of hype or self-promotion, in keeping with the local tall-poppy modesty.
- Keep the tone concise, professional, and factual. Prefer plain statements over marketing language.
- Use GitHub-flavored Markdown: a table for the tooling stack, bullet lists for projects.
- Do **not** add badges, shields, images, emojis, banners, or any sections beyond those specified below.
- The NZ-English cultural flavour is already baked into the pinned wording below — reproduce it **verbatim** so the file changes only the date between runs.

## Output Layout
Structure the file exactly like this:

1. A single top-level heading (`#`) with the name — it is the page title, and appears **once** at the very top.
2. Immediately below it:
- the auto-generation notice and the **Last Updated** line (section 2),
- the three content sections (Tooling Stack, AI Automation, Open Source) as `##` sub-headings, with each AI Automation project as a `###` sub-heading beneath it,
- a horizontal rule (`---`),
- the footer note (section 6).

## Required Content (in order)
Each item gives the text to use verbatim. Keep all project names, URLs, and tool names identical.

### 1. Name
Single top-level heading (`#`) with the full name: **Kaíque Kandy Koga**. Appears once as the page title.

### 2. Auto-generation Notice
State that `README.md` was auto-generated, that all content was originally written by me and only rephrased by AI during the generation process, and show when the file was last updated on its own line.

Label **Last Updated:**, current UTC date in the NZ day-month format `D Month YYYY (UTC)` (e.g., `30 May 2026 (UTC)`):

  This README.md was auto-generated. All the content was originally written by me — AI just tidied up the wording during generation.

  **Last Updated:** D Month YYYY (UTC)

### 3. Tooling Stack
A two-column Markdown table, in this order. Heading `Tooling Stack`:

| Category | Tools |
| :--- | :--- |
| **AI** | Hermes Agent, LangGraph, Claude Code |
| **Language** | Ruby, TypeScript, Python |

### 4. AI Automation
Unpublished work, ordered alphabetically by project name. Heading `AI Automation`. Each project gets its own `###` sub-heading with the project name, followed by a note (no links) and a **Tech Stack** line listing the tools:

  ### Kirinn

  Kirinn is a command-line assistant for coding work. You start a chat session in your terminal, describe what you need, and it operates directly on your project's files. Instead of acting as a single assistant, it functions as a small team: a conversational agent that interacts with you and a set of specialists it can hand work to, including reviewing code and addressing issues found during review. Handed-off tasks run independently in the background so the chat remains responsive, and every action taken by each agent is recorded in a log you can review later. Kirinn can run against a locally hosted model or a hosted one configured through an environment variable, and it includes an evaluation harness for verifying agent behaviour. It is an internal, unpublished project.

  **Tech Stack:** Ruby

  ### Nishikihebi

  Nishikihebi is a code-review assistant for GitHub. You label a pull request or issue with nishikihebi, and it reads the discussion and, for pull requests, the proposed changes. It then posts a review comment and performs additional reviews only when new information appears. It works across any repositories you have granted access to, with no list to maintain, and it also provides a simple interactive chat mode from the command line.

  **Tech Stack:** Python, LangGraph

### 5. Open Source
A bullet list, ordered alphabetically by project name. Heading `Open Source`:
  - [AI Git](https://github.com/kaiquekandykoga/ai_git) — a wee project that uses AI to help manage Git repositories.
  - [AI Spider](https://github.com/kaiquekandykoga/ai_spider) — a desktop app, built with PySide6, for spidering and gathering data with AI.
  - [Bitbucket MCP](https://github.com/kaiquekandykoga/bitbucket_mcp) — an MCP server that puts the Bitbucket Cloud API within reach of Claude Code and other MCP-compatible agents.
  - [BSD Way](https://github.com/kaiquekandykoga/bsd_way) — a collection of resources for the BSD operating systems: hosting providers, sites, and communities.
  - [Docker MCP](https://github.com/kaiquekandykoga/docker_mcp) — an MCP server that puts the Docker Engine API within reach of Claude Code and other MCP-compatible agents.
  - [Oracle MCP](https://github.com/kaiquekandykoga/oracle_mcp) — an MCP server that lets an agent run SQL and inspect schema on an Oracle database.
  - [PostgreSQL MCP](https://github.com/kaiquekandykoga/postgresql_mcp) — an MCP server that lets an agent query and inspect a PostgreSQL database, read-only by default.
  - [Ruby Claude](https://github.com/kaiquekandykoga/ruby_claude) — a lightweight Ruby SDK that drives the Claude Code CLI using a Claude Pro/Max subscription rather than an API key.

### 6. Footer Note
At the end, after a horizontal rule (`---`), add a note pointing to the prompt.

  You can find the prompt used to generate this README here:
  https://github.com/kaiquekandykoga/kaiquekandykoga/blob/master/PROMPT.md

## Constraints
- Only modify `README.md`. Do not change `PROMPT.md`, `AGENTS.md`, `opencode.json`, or any workflow files.
- Use only the facts in this prompt. Do not invent projects, statistics, dates, links, employers, or biographical details, and do not embellish beyond what is stated here.
- Keep all project names, URLs, and tool names exactly as written above — adapt the prose only (NZ English), per the pinned wording.
- Include every section in the order given; do not add, drop, reorder, or rename sections.
- Show the **Last Updated** date in the NZ day-month format `D Month YYYY (UTC)`.
- Use the pinned wording above verbatim; do not re-translate or rephrase between runs.
