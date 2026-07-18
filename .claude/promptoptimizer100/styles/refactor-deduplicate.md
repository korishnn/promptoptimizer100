# refactor-deduplicate

Find and eliminate duplicate code across the codebase:
- Identify repeated patterns across files using text matching or AST analysis
- Extract shared logic into a function, module, or utility with clear parameters
- Follow DRY but not at the cost of clarity — one duplication is often clearer than abstraction
- Consider the abstraction tradeoff: if the extracted version is harder to read than the duplication, keep the duplication
- Each extracted unit must have a single semantic meaning that justifies the abstraction
- Update all duplicate sites to call the shared implementation
