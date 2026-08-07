# Kaíque Kandy Koga

This README.md was auto-generated. All the content was originally written by me — AI just tidied up the wording during generation.

**Last Updated:** 7 August 2026 (UTC)

## Tooling Stack

| Category | Tools |
| :--- | :--- |
| **AI** | Hermes Agent, LangGraph, Claude Code |
| **Language** | Ruby, TypeScript, Python |

## AI Automation

### Kirinn

Command-line assistant for coding work: you start a chat session in your terminal, describe what you need, and it works on your project's files for you. Rather than being one monolithic assistant, it's a small team — a conversational agent that talks to you and specialists it can pass work to, such as reviewing code and fixing what the review turns up. Handed-off work runs on its own in the background, so the chat stays responsive, and everything each agent does is recorded to a log you can read afterward to see what happened. It runs against either a locally hosted model or a hosted one, configured by environment variable, and ships with an evaluation harness for checking that the agents behave as intended. It's an internal, unpublished project.

**Tech Stack:** Ruby

### Nishikihebi

Code-review assistant for GitHub: you label a pull request or issue with nishikihebi, and it reads the discussion — and, for pull requests, the proposed changes — and posts back a review comment, re-reviewing only when there's something new to look at. It works across whichever repositories you've given it access to, with no list to maintain, and it also offers a simple interactive chat mode from the command line.

**Tech Stack:** Python, LangGraph

## Open Source

- [AI Git](https://github.com/kaiquekandykoga/ai_git) — a wee project that uses AI to help manage Git repositories.
- [AI Spider](https://github.com/kaiquekandykoga/ai_spider) — a desktop app, built with PySide6, for spidering and gathering data with AI.
- [Bitbucket MCP](https://github.com/kaiquekandykoga/bitbucket_mcp) — an MCP server that puts the Bitbucket Cloud API within reach of Claude Code and other MCP-compatible agents.
- [BSD Way](https://github.com/kaiquekandykoga/bsd_way) — a collection of resources for the BSD operating systems: hosting providers, sites, and communities.
- [Docker MCP](https://github.com/kaiquekandykoga/docker_mcp) — an MCP server that puts the Docker Engine API within reach of Claude Code and other MCP-compatible agents.
- [Oracle MCP](https://github.com/kaiquekandykoga/oracle_mcp) — an MCP server that lets an agent run SQL and inspect schema on an Oracle database.
- [PostgreSQL MCP](https://github.com/kaiquekandykoga/postgresql_mcp) — an MCP server that lets an agent query and inspect a PostgreSQL database, read-only by default.
- [Ruby Claude](https://github.com/kaiquekandykoga/ruby_claude) — a lightweight Ruby SDK that drives the Claude Code CLI using a Claude Pro/Max subscription rather than an API key.

---

You can find the prompt used to generate this README here:
https://github.com/kaiquekandykoga/kaiquekandykoga/blob/master/PROMPT.md
