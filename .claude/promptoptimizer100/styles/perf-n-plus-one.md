# perf-n-plus-one

Fix N+1 query problems:
- Detect N+1 patterns: loops executing a query per iteration, ORM lazy loading
- Implement batch loading: collect IDs and fetch in a single query
- Use eager loading: JOIN or prefetch related data upfront
- Apply DataLoader pattern (or equivalent) to batch and deduplicate requests
- Optimize with JOINs when fetching parent + child data together
- Prefetch strategies: preload associations known to be needed at the controller/resolver level
- Add query count assertions in tests to prevent N+1 regressions
