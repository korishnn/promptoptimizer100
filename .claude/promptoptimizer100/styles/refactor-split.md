# refactor-split

Split a large function or module into smaller focused units:
- Identify natural cohesion boundaries within the existing code
- Split by concern — each piece handles one responsibility
- Handle shared state explicitly: pass dependencies as parameters, not via shared module scope
- Update all import statements across the codebase to point to the new split modules
- Split test files to match the new module structure, keeping coverage complete
- Verify that each new unit can be understood and tested independently
