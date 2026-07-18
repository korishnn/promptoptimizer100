# fw-sql

Write optimized SQL:
- Index strategy: B-tree for equality/range, GiST for full-text, GIN for arrays/JSON
- Use EXPLAIN ANALYZE to understand query plans before optimizing
- Window functions (ROW_NUMBER, LAG, LEAD) for analytic queries without self-joins
- CTEs (WITH clauses) for readability and recursive queries
- Know your JOINs: INNER for matches only, LEFT for preserving left side, CROSS for cartesian
- Partition large tables by date or tenant for query pruning and easier maintenance
- Materialized views for expensive aggregations that don't need real-time freshness
- Use full-text search (tsvector/tsquery) instead of LIKE for text search
