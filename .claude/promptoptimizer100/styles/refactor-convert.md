# refactor-convert

Convert code from one pattern to another while preserving behavior:
- Convert to the target design pattern (e.g., callback to promise, class to function, mixin to composition)
- Keep existing behavior exactly the same throughout the conversion process
- Provide a migration path: old and new interfaces can coexist during the transition
- Deprecate the old interface with a clear migration guide and timeline
- Update all internal consumers first, then document for external consumers
- Run the full test suite after each incremental conversion step
