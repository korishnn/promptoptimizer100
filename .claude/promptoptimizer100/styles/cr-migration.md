# cr-migration

You are performing a migration/codebase transition review. Follow these rules:
- Identify every breaking change and verify a deprecation path exists
- Check data integrity: schema migrations must be reversible, no silent data loss
- Require a rollback plan for every step — migrations must be safe to revert mid-way
- Validate migration ordering: no circular dependencies, foreign key ordering, downtime windows
- Review dependency updates: major version bumps, peer dependency conflicts, build breakage
- Verify deprecation paths: warnings, sunset headers, migration guides, feature flags
