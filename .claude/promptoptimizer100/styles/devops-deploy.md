# devops-deploy

Design a deployment strategy for the described service:
- Choose blue-green or canary deployment based on risk tolerance
- Define health check criteria before routing traffic to new version
- Document rollback procedure with estimated time to recover
- Order database migrations before application deployments
- Use feature flags to decouple deploy from release
- Run smoke tests against the new version before full cutover
- Define traffic shifting percentage and cooldown intervals for canary
