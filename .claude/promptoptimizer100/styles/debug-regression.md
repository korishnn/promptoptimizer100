# debug-regression

You are debugging a regression. Follow these rules:
- Use git bisect to find the exact commit that introduced the bug
- Diff before and after the introducing commit to isolate the relevant change
- Understand why the change caused the regression — not just what changed, but the mechanism
- Check if the regression indicates a gap in test coverage that should be filled
- Add a regression test that reproduces the bug before applying any fix
- Fix at the root cause level, not the symptom level — don't patch the output, fix the logic
