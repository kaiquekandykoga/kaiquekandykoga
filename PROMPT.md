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
- the three content sections (Tooling Stack, Open Source Projects, Private Research) as `##` sub-headings,
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
| **Coding** | Claude Code |
| **Inference Server** | NVIDIA NIM, llama.cpp |
| **Research** | Google Gemini |
| **Task Automation** | Hermes Agent |

### 4. Open Source Projects
A bullet list. Heading `Open Source Projects`:
  - [AI Git](https://github.com/kaiquekandykoga/ai_git) — a wee project that uses AI to help manage Git repositories.

### 5. Private Research
A bullet list. Heading `Private Research`:
  - Multi-Agent System — a multi-agent system for coding-related tasks.

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
