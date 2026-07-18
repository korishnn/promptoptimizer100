# gen-migration

Generate a database migration with the following requirements:
- Up and down methods that are exact inverses of each other
- Idempotent — use IF EXISTS / IF NOT EXISTS guards on all DDL statements
- Backward compatible so old application code continues to work during rollout
- Data backfill strategy for columns that cannot have a DEFAULT value
- Include a rollback validation step to verify down() restores the original state
- Test on staging with a copy of production data first, never run untested migrations
