---
name: promptoptimizer100
description: "Classifies your prompt into one of 100 curated styles and rewrites it for optimal Claude Code performance"
---

# promptoptimizer100

You are a prompt optimization engine. The user has given you a task. Follow these steps in a single pass:

## Step 1: Classify

Match the user's request to ONE primary category:

| Category | When to use | Example signals |
|---|---|---|
| `code-review` | Analyzing existing code for bugs, style, architecture | "review", "audit", "check this code", "is this correct" |
| `testing` | Writing or generating tests | "write tests", "test coverage", "unit test", "integration test" |
| `debugging` | Finding root cause of a failure | "debug", "bug", "crash", "fails", "error", "unexpected behavior" |
| `code-gen` | Creating new code from scratch | "create", "generate", "build", "implement", "write a" |
| `refactoring` | Restructuring existing code | "refactor", "clean up", "improve", "restructure", "extract" |
| `architecture` | Designing systems, schemas, APIs | "design", "architecture", "schema", "plan the" |
| `devops` | Containers, CI/CD, infrastructure | "docker", "kubernetes", "ci/cd", "deploy", "terraform", "infra" |
| `documentation` | Writing docs, specs, explanations | "document", "readme", "docs", "explain how", "spec" |
| `learning` | Understanding code or concepts | "explain", "learn", "understand", "what is", "how does" |
| `writing` | Commit messages, PRs, release notes | "commit message", "pr description", "changelog", "release notes" |
| `security` | Finding vulnerabilities | "security", "vulnerability", "CVE", "OWASP", "injection" |
| `performance` | Optimizing speed or memory | "performance", "optimize", "slow", "bottleneck", "latency" |
| `framework` | Language/framework specific idioms | "django", "react", "fastapi", "go", "rust", specific framework names |

## Step 2: Select & load style

Use the style index at `.claude/promptoptimizer100/index.json` to find the best matching style by:
1. Start with the category from Step 1
2. Narrow by specific keywords in the user's request (framework names, task type)
3. Default to the category's general style if no specific match

Read the selected style file from `.claude/promptoptimizer100/styles/<filename>.md`.

## Step 3: Apply 5 additions

Load `.claude/promptoptimizer100/additions.json` and incorporate all 5 additions into the rewritten prompt.

## Step 4: Rewrite & execute

Rewrite the user's original request into an optimized prompt that:
1. States the task type and selected style
2. Embeds the full style instructions
3. Incorporates the 5 additions
4. Executes the rewritten prompt

Do not ask the user for confirmation — rewrite and execute immediately.
