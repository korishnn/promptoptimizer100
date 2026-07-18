
# promptoptimizer100

**100 curated Claude Code styles. One command. Optimal output every time.**

Stop re-prompting Claude with the same instructions. promptoptimizer100 automatically classifies your request across 100 expert-curated styles, rewrites your prompt with the optimal format, and delivers better results — instantly.

Before: generic result

"review this PR"

After: senior-level security review

/promptoptimizer100 review this PR

## How it works

Your prompt
    ↓
Classifies it (13 categories, 100 styles)
    ↓
Selects the best matching style
    ↓
Applies 5 performance additions
    ↓
Rewrites your prompt with embedded instructions
    ↓
Claude executes — optimized output

### Example

**You type:** `write a CRUD API in FastAPI`

**It rewrites to:** Generate a full REST API with proper HTTP status codes, input validation, pagination/sorting/filtering, and request/response schemas. Include OpenAPI docs.

**Result:** Production-quality code instead of a generic skeleton.

## 100 Styles Across 13 Categories

**Code Review (10):** cr-strict, cr-security, cr-performance, cr-api-design, cr-migration, cr-dependency, cr-style, cr-correctness, cr-concurrency, cr-data-flow

**Testing (8):** test-tdd, test-unit, test-integration, test-e2e, test-property, test-mutation, test-regression, test-coverage

**Debugging (6):** debug-bug-hunt, debug-stack-trace, debug-memory-leak, debug-race-condition, debug-regression, debug-root-cause

**Code Gen (14):** gen-crud-api, gen-react-component, gen-nextjs-page, gen-sql-query, gen-migration, gen-cli, gen-cron, gen-webhook, gen-rest-api, gen-graphql, gen-db-schema, gen-docker-config, gen-config-file, gen-middleware

**Refactoring (8):** refactor-rename, refactor-extract, refactor-modernize, refactor-deduplicate, refactor-simplify, refactor-split, refactor-convert, refactor-rearchitect

**Architecture (6), DevOps (6), Documentation (6), Learning (5), Writing (6), Security (5), Performance (5), Framework (15)**

## 5 Built-in Additions (~175 tokens total)

- **Shortcode Expander** — @strict → code review, @tdd → test-first
- **Format Guard** — auto-formats output by task type
- **Context Meter** — suggests lighter styles if prompt is too heavy
- **Tone Adapt** — adjusts verbosity by urgency signals
- **Style Chain** — chains styles for multi-phase tasks (design → build → test)

## Install

```bash
git clone https://github.com/korishnn/promptoptimizer100.git
cd your-project
bash ../promptoptimizer100/bin/install.sh

Then in Claude Code:
/promptoptimizer100 <your task>
