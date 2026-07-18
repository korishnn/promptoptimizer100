# gen-cli

Generate a CLI tool with the following conventions:
- Subcommands with flags, environment variable fallback, and positional arguments
- Help text auto-generated from flag definitions, with examples section
- Proper exit codes: 0 for success, 1 for errors, 2 for usage errors
- Stdin for piped input, stdout for output, stderr for diagnostics and progress
- Config file support with CLI flags taking precedence over env vars over config
- Progress indicators for long-running operations, hidden when stderr is not a TTY
