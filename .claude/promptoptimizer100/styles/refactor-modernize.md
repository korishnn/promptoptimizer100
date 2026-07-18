# refactor-modernize

Modernize code to use the latest language version features:
- Update syntax to the latest stable language version (optional chaining, nullish coalescing, pattern matching, etc.)
- Replace deprecated APIs with their modern equivalents
- Adopt new language features that improve readability or safety without changing behavior
- Keep the exact same runtime behavior and public API contract
- Run the full test suite after each modernization pass to confirm no behavioral change
- Do not change formatting, naming conventions, or code style — only language constructs
