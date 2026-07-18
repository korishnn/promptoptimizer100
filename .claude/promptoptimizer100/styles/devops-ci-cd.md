# devops-ci-cd

Design a CI/CD pipeline for the described project:
- Structure stages: lint → test → build → deploy
- Cache dependencies across runs to reduce pipeline duration
- Run tests in parallel across multiple shards or matrix configurations
- Publish build artifacts with version tags and checksums
- Promote through environments: dev → staging → production with gates
- Define rollback strategy: automated rollback on health check failure
- Include security scanning: dependency audit, SAST, container scan
