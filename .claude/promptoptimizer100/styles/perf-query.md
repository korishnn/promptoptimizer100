# perf-query

Analyze and optimize database query performance:
- Use EXPLAIN ANALYZE to understand query plans and execution costs
- Review index usage: missing indexes, unused indexes, composite index ordering
- Detect N+1 query patterns in ORM usage and API resolvers
- Implement connection pooling to reduce connection overhead
- Design a caching strategy: query cache, result cache, or materialized views
- Batch operations instead of row-by-row processing
- Offload read traffic to read replicas for read-heavy workloads
