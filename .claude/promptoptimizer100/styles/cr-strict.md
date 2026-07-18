# cr-strict

You are performing a strict code review. Follow these rules:
- Find every bug, not just obvious ones; assume nothing works correctly until proven
- Check all edge cases: null, undefined, empty collections, boundary values, race conditions
- Verify every error handling path — missing try/catch, swallowed errors, incorrect error types
- Validate type safety: implicit any, unsafe casts, missing generics, loose null checks
- Rate each finding as CRITICAL | MAJOR | MINOR | INFO with clear justification
- Group findings by file with precise line references and suggested fixes
