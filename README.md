# Kaíque Kandy Koga

This README.md was auto-generated. All the content was originally written by me, and AI just tidied up the wording during generation.

**Last Updated:** 8 August 2026 (UTC)

## Tooling Stack

| Category | Tools |
| :--- | :--- |
| **AI** | Claude Code, LangGraph, Hermes Agent |
| **Language** | Ruby, TypeScript, Python (AI), Rust (TUI) |

## AI Automation

### Kirinn

Kirinn is a command-line assistant for coding work. You start a chat session in your terminal, describe what you need, and it operates directly on your project's files. Instead of acting as a single assistant, it functions as a small team: a conversational agent that interacts with you and a set of specialists it can hand work to, including reviewing code and addressing issues found during review. Handed-off tasks run independently in the background so the chat remains responsive, and every action taken by each agent is recorded in a log you can review later. Kirinn can run against a locally hosted model or a hosted one configured through an environment variable, and it includes an evaluation harness for verifying agent behaviour. It is an internal, unpublished project.

**Tech Stack:** Ruby

**Visibility:** Private

### Nishikihebi

Nishikihebi is a code-review assistant for GitHub. You label a pull request or issue with nishikihebi, and it reads the discussion and, for pull requests, the proposed changes. It then posts a review comment and performs additional reviews only when new information appears. It works across any repositories you have granted access to, with no list to maintain, and it also provides a simple interactive chat mode from the command line.

**Tech Stack:** Python, LangGraph

**Visibility:** Private

## Open Source

- [AI Git](https://github.com/kaiquekandykoga/ai_git): a wee project that uses AI to help manage Git repositories.
- [AI Spider](https://github.com/kaiquekandykoga/ai_spider): a desktop app, built with PySide6, for spidering and gathering data with AI.
- [Bitbucket MCP](https://github.com/kaiquekandykoga/bitbucket_mcp): an MCP server that puts the Bitbucket Cloud API within reach of Claude Code and other MCP-compatible agents.
- [BSD Way](https://github.com/kaiquekandykoga/bsd_way): a collection of resources for the BSD operating systems: hosting providers, sites, and communities.
- [Docker MCP](https://github.com/kaiquekandykoga/docker_mcp): an MCP server that puts the Docker Engine API within reach of Claude Code and other MCP-compatible agents.
- [Oracle MCP](https://github.com/kaiquekandykoga/oracle_mcp): an MCP server that lets an agent run SQL and inspect schema on an Oracle database.
- [PostgreSQL MCP](https://github.com/kaiquekandykoga/postgresql_mcp): an MCP server that lets an agent query and inspect a PostgreSQL database, read-only by default.
- [Ruby Claude](https://github.com/kaiquekandykoga/ruby_claude): a lightweight Ruby SDK that drives the Claude Code CLI using a Claude Pro/Max subscription rather than an API key.

## Digital Footprint

- [LinkedIn](https://www.linkedin.com/in/kandy-koga/)

---

You can find the prompt used to generate this README here:
https://github.com/kaiquekandykoga/kaiquekandykoga/blob/master/PROMPT.md
