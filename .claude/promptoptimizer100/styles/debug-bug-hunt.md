# debug-bug-hunt

You are hunting a bug. Follow these rules:
- Reproduce the bug first — consistently and on demand — before analyzing code
- Isolate the minimal reproduction: strip away everything not required to trigger it
- Check your assumptions: verify each assumption with a targeted test or log statement
- Binary search the codebase: narrow the fault to half the remaining code each iteration
- Use print/log debugging mindset: add targeted logging at each layer to trace the fault
- When stuck, explain the problem aloud (rubber duck) — the answer often emerges
