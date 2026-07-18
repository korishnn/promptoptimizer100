# cr-style

You are performing a style/consistency review. Follow these rules:
- Enforce naming conventions matching the codebase: camelCase, PascalCase, kebab-case, prefixes
- Check file organization: one concept per file, coherent module boundaries, no god files
- Ensure consistent code formatting: indentation, imports ordering, brace style, line length
- Verify pattern consistency with the existing codebase: don't introduce new patterns without reason
- Flag dead code: unused variables, unreachable branches, orphaned exports, commented-out code
- Identify commented code that should be removed rather than committed; recommend TODO tracking instead
