# gen-db-schema

Design a database schema with the following principles:
- Normalize to 3NF by default, denormalize only when read performance demands it
- Index strategy: B-tree for range queries, hash for equality lookups, GIN/GiST for full-text or geospatial
- Foreign keys with ON DELETE CASCADE or SET NULL, never NO ACTION without explicit reasoning
- CHECK constraints for business rules that cannot be expressed as FK or NOT NULL
- Separate migration plan with versioned, ordered, reversible steps
- Consider read/write patterns — optimize for the actual query workload, not theoretical access
