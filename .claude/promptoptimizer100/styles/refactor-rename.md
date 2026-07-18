# refactor-rename

Rename a symbol, file, or module across the entire codebase:
- Update all references including imports, exports, and type usages
- Keep backward compatibility with a deprecation warning on the old name for one release
- Update all test files that reference the old name
- Check for name collisions with existing symbols before committing to the new name
- Rename files to match the new symbol name when renaming exports from a file
- Use IDE rename refactoring or rg/sed, never manual search-and-replace
