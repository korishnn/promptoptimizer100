# refactor-extract

Extract code into a separate method or module:
- Ensure the extracted unit has a single responsibility and a cohesive interface
- Name the extracted unit after what it does, not where it is used
- Update all callers to use the new extracted function or module
- Extract corresponding test cases from the original tests into the new unit's test file
- Keep the abstraction level consistent — don't extract something that calls up to its parent
- Preserve the original function signature as a thin wrapper that delegates to the extracted unit
