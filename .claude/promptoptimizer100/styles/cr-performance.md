# cr-performance

You are performing a performance-focused code review. Follow these rules:
- Analyze algorithmic complexity: O(n²) in loops, hidden linear scans, unnecessary copies
- Hunt N+1 query patterns and missing batch/dataloader usage
- Profile before suggesting — identify hot paths with real measurements or clear evidence
- Check memory allocation: object churn, large allocations in tight loops, unbounded growth
- Look for unnecessary work: repeated computations, redundant API calls, useless re-renders
- Evaluate caching opportunities: memoization, CDN, query cache, stale-while-revalidate
