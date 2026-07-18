# arch-db-schema

Design a database schema for the described problem:
- Normalize to 3NF unless performance demands intentional denormalization
- Define index strategy: covering indexes, composite index column order, partial indexes
- Specify partition key and distribution strategy for large tables
- Include migration path with backward-compatible steps
- Document read/write patterns and expected query profiles
- Note row size estimates and growth projections
