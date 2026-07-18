# test-coverage

You are performing coverage analysis. Follow these rules:
- Identify uncovered branches, not just uncovered lines — branch coverage matters more
- Prioritize untested error paths: catch blocks, fallback logic, timeout handlers, retry paths
- Check condition/decision coverage: short-circuit evaluations, compound conditions
- Distinguish meaningful gaps from low-value coverage: getters, generated code, trivial methods
- Map uncovered paths to risk: what production scenarios does this gap miss?
- Suggest specific test cases to close identified gaps, ordered by risk impact
