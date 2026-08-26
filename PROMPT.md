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

1. A single top-level heading (`#`) with the name. It is the page title, and appears **once** at the very top.
2. Immediately below it:
- the **Last Updated** line (section 2),
- the two content sections (Personal Apps, Digital Footprint) as `##` sub-headings, with each Personal Apps project as one compact bullet line beneath it.

## Required Content (in order)
Each item gives the text to use verbatim. Keep all project names, URLs, and tool names identical.

### 1. Name
Single top-level heading (`#`) with the full name: **Kaíque Kandy Koga**. Appears once as the page title.

### 2. Last Updated
Label **Last Updated:**, current UTC date in the NZ day-month format `D Month YYYY (UTC)` (e.g., `30 May 2026 (UTC)`):

  **Last Updated:** D Month YYYY (UTC)

### 3. Personal Apps
Unpublished work, ordered alphabetically by project name. Heading `Personal Apps`. Each project is a single compact bullet line in this exact shape, with no links. The app name, `Tech Stack`, and `Visibility` are bold:

  `**<Name>**: <description>. **Tech Stack:** <stack>. **Visibility:** Public/Private.`

Use these facts:

  - **Kirinn**: Kirinn is a command-line assistant for coding work. You start a chat session in your terminal, describe what you need, and it operates directly on your project's files. Instead of acting as a single assistant, it functions as a small team: a conversational agent that interacts with you and a set of specialists it can hand work to, including reviewing code and addressing issues found during review. Handed-off tasks run independently in the background so the chat remains responsive, and every action taken by each agent is recorded in a log you can review later. Kirinn can run against a locally hosted model or a hosted one configured through an environment variable, and it includes an evaluation harness for verifying agent behaviour. It is an internal, unpublished project. **Tech Stack:** Ruby. **Visibility:** Private.

  - **Nishikihebi**: Nishikihebi is a code-review assistant for GitHub. You label a pull request or issue with nishikihebi, and it reads the discussion and, for pull requests, the proposed changes. It then posts a review comment and performs additional reviews only when new information appears. It works across any repositories you have granted access to, with no list to maintain, and it also provides a simple interactive chat mode from the command line. **Tech Stack:** Python, LangGraph. **Visibility:** Private.

### 4. Digital Footprint
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
