# 🎯 promptoptimizer100

**100 curated Claude Code styles. One command. Optimal output every time.**

Stop re-prompting Claude with the same instructions. `promptoptimizer100` automatically classifies your request across 100 expert-curated styles, rewrites your prompt with the optimal format, and delivers better results — instantly.

```bash
# Before: generic result
"review this PR"

# After: senior-level security review
/promptoptimizer100 review this PR
```

---

## How it works

```
Your prompt
    ↓
promptoptimizer100 classifies it (13 categories, 100 styles)
    ↓
Selects the best matching style
    ↓
Applies 5 performance additions
    ↓
Rewrites your prompt with embedded instructions
    ↓
Claude executes — optimized output
```

### Example

**You type:** `write a CRUD API in FastAPI`

**promptoptimizer100 applies the `gen-rest-api` style and rewrites to:**

> Generate a full REST API for the described resource following REST conventions with proper HTTP status codes, input validation with error messages, pagination/sorting/filtering support, and request/response schemas as types. Use proper error handling. Include OpenAPI documentation.

**Result:** Claude outputs production-quality code instead of a generic skeleton.

---

## 🏷️ All 100 Styles

### Code Review (10)
`cr-strict` `cr-security` `cr-performance` `cr-api-design` `cr-migration`
`cr-dependency` `cr-style` `cr-correctness` `cr-concurrency` `cr-data-flow`

### Testing (8)
`test-tdd` `test-unit` `test-integration` `test-e2e` `test-property`
`test-mutation` `test-regression` `test-coverage`

### Debugging (6)
`debug-bug-hunt` `debug-stack-trace` `debug-memory-leak` `debug-race-condition`
`debug-regression` `debug-root-cause`

### Code Generation (14)
`gen-crud-api` `gen-react-component` `gen-nextjs-page` `gen-sql-query`
`gen-migration` `gen-cli` `gen-cron` `gen-webhook` `gen-rest-api` `gen-graphql`
`gen-db-schema` `gen-docker-config` `gen-config-file` `gen-middleware`

### Refactoring (8)
`refactor-rename` `refactor-extract` `refactor-modernize` `refactor-deduplicate`
`refactor-simplify` `refactor-split` `refactor-convert` `refactor-rearchitect`

### Architecture (6)
`arch-system-design` `arch-db-schema` `arch-api-design` `arch-event-driven`
`arch-microservices` `arch-directory`

### DevOps (6)
`devops-docker` `devops-kubernetes` `devops-ci-cd` `devops-terraform`
`devops-deploy` `devops-monitoring`

### Documentation (6)
`docs-readme` `docs-api-docs` `docs-changelog` `docs-migration-guide`
`docs-tech-spec` `docs-inline-comments`

### Learning (5)
`learn-eli5` `learn-deep-dive` `learn-compare` `learn-pros-cons` `learn-tutorial`

### Writing (6)
`write-commit` `write-pr-description` `write-rfc` `write-release-notes`
`write-postmortem` `write-blog`

### Security (5)
`sec-audit` `sec-owasp` `sec-input-validation` `sec-auth` `sec-dependency`

### Performance (5)
`perf-profile` `perf-bundle` `perf-query` `perf-n-plus-one` `perf-caching`

### Framework (15)
`fw-django` `fw-fastapi` `fw-go-concurrency` `fw-rust-borrow` `fw-react-perf`
`fw-nextjs-ssr` `fw-typescript` `fw-python-idioms` `fw-sql` `fw-terraform`
`fw-kubernetes` `fw-express` `fw-flask` `fw-spring-boot` `fw-rails`

---

## 🧩 5 Built-in Additions

| Addition | What it does |
|---|---|
| **Shortcode Expander** | `@strict` → full code review mode. `@tdd` → test-first mode. 16 shortcodes. |
| **Format Guard** | Auto-formats output by type — bug reports get severity ranks, code gen gets file headings, docs get proper markdown. |
| **Context Meter** | Estimates if your prompt fits efficiently and suggests lighter alternatives when needed. |
| **Tone Adapt** | Reads urgency signals — terse for quick tasks, detailed for complex ones, explanatory for learning. |
| **Style Chain** | Detects multi-phase tasks and chains styles automatically (design → build → test). |

**Total overhead:** ~175 tokens. Less than this paragraph.

---

## 📦 Installation

### Quick install into any project

```bash
# Clone the repo
git clone https://github.com/korishnn/promptoptimizer100.git
cd your-project

# Install into this project's .claude/
bash promptoptimizer100/bin/install.sh
```

### Or symlink for global access

```bash
ln -s ~/promptoptimizer100/.claude/skills/promptoptimizer100.md ~/Projects/my-project/.claude/skills/
```

### Then use in Claude Code

```
/promptoptimizer100 <your task>
```

---

## 🎬 Instagram-Worthy Demos

- **"Watch Claude switch from code reviewer → test writer → documentation expert with one command"** — terminal recording showing 3 prompts with different auto-selected styles
- **"Before/After: same prompt, with and without promptoptimizer100"** — side by side showing the quality gap
- **"100 Claude Code styles in 30 seconds"** — scrolling through the style list with an AI voiceover
- **"I built a prompt optimizer that makes Claude Code 10x smarter"** — dev setup time-lapse + demo

---

## 🛠️ Development

```bash
# Validate all 100 styles exist and match the index
npm test

# Add a new style
touch .claude/promptoptimizer100/styles/your-new-style.md
# Add to index.json
```
---

## License

MIT — use it, fork it, ship it.
