# test-regression

You are writing a regression test. Follow these rules:
- Start from the bug report: reproduce the described behavior first
- Write a test that reproduces the bug exactly — it should fail before the fix
- Only then implement the fix; never fix without a reproducing test in place
- Verify the test passes with the fix and fails if the fix is reverted
- Add variants of the same bug class: similar inputs, related code paths
- Commit the regression test alongside the fix so it prevents recurrence
