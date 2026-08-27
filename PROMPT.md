# README Generation Prompt

## Target Repository
https://github.com/kaiquekandykoga/kaiquekandykoga

## Task
Overwrite `README.md` with newly generated content based on this prompt. Do not modify any other file.

`README.md` is written in **New Zealand (NZ) English**, expressed the way a reader of that language would naturally put it, rather than as a word-for-word rendering.

This may be regenerated repeatedly, so the output must be **stable**: regenerating without any change to this prompt should alter only the "Last Updated" date. Keep section order, headings, wording, and formatting identical between runs. Use the exact text pinned below verbatim. Do not re-translate or rephrase freely, as that would make the file drift between runs.

## Voice & Style
- Write in the **first person** ("I", present tense). The README speaks as the author.
- **New Zealand English.** Use NZ/Commonwealth spelling and vocabulary (e.g. `-ise`, `-our`, and `-re` endings such as `organise`, `colour`, `centre`) and the NZ day-month date format (`7 June 2026`). Express ideas the Kiwi way: understated, modest, and plain-spoken, with the occasional friendly turn of phrase ("a wee project", "keep at it", "save on"), and steer clear of hype or self-promotion, in keeping with the local tall-poppy modesty.
- **No em dashes.** Never use an em dash (`—`) anywhere in `README.md`. Do not use an en dash (`–`) as sentence punctuation either. Use a comma, colon, semicolon, brackets, or a separate sentence instead. Hyphens inside compound words (`read-only`, `command-line`) are fine.
- Keep the tone concise, professional, and factual. Prefer plain statements over marketing language.
- Use GitHub-flavored Markdown: bullet lines for Personal Apps, a single line for Digital Footprint.
- Do **not** add badges, shields, images, emojis, banners, or any sections beyond those specified below.
- The NZ-English cultural flavour is already baked into the pinned wording below. Reproduce it **verbatim** so the file changes only the date between runs.

## Output Layout
Structure the file exactly like this:

1. The **Last Updated** line, appearing first, at the very top of the file.
2. Immediately below it, the two content sections (Personal Apps, Digital Footprint) as `##` sub-headings, with each Personal Apps project as one compact bullet line beneath it.

## Required Content (in order)
Each item gives the text to use verbatim. Keep all project names, URLs, and tool names identical.

### 1. Last Updated
Label **Last Updated:**, current UTC date in the NZ day-month format `D Month YYYY (UTC)` (e.g., `30 May 2026 (UTC)`), appearing first in the file:

  **Last Updated:** D Month YYYY (UTC)

### 2. Personal Apps
Unpublished work, ordered alphabetically by project name. Heading `Personal Apps`. Each project is a single compact bullet line in this exact shape. The app name and `Tech Stack` are bold. Projects with a public repository end with a `Link:` instead of a visibility marker:

  `**<Name>**: <description>. **Tech Stack:** <stack>. **Link:** <url>`

  `**<Name>**: <description>. **Tech Stack:** <stack>.`

Use these facts:

  - **AI Git**: AI-powered Git commit messages using a local LLM. **Tech Stack:** Ruby, llama.cpp. **Link:** https://github.com/kaiquekandykoga/ai_git

  - **Electron Git**: Desktop git companion supporting macOS, Linux, and Windows. **Tech Stack:** TypeScript, Electron, React. **Link:** https://github.com/kaiquekandykoga/electron_git

### 3. Digital Footprint
A single line of links to my profiles elsewhere, separated by a star, no list. Heading `Digital Footprint`:

  [LinkedIn](https://www.linkedin.com/in/kandy-koga/) ☆ [Personal Branding](https://kaiquekandykoga.vercel.app)

## Constraints
- Only modify `README.md`. Do not change `PROMPT.md`, `AGENTS.md`, `opencode.json`, or any workflow files.
- Use only the facts in this prompt. Do not invent projects, statistics, dates, links, employers, or biographical details, and do not embellish beyond what is stated here.
- Keep all project names, URLs, and tool names exactly as written above. Adapt the prose only (NZ English), per the pinned wording.
- Include every section in the order given; do not add, drop, reorder, or rename sections.
- Show the **Last Updated** date in the NZ day-month format `D Month YYYY (UTC)`.
- Use the pinned wording above verbatim; do not re-translate or rephrase between runs.
- Do not use em dashes (`—`) anywhere in the generated `README.md`.
