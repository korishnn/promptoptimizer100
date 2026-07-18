# arch-api-design

Design an API for the described use case:
- Use RESTful resource naming: plural nouns, nested resources for hierarchies
- Include versioning strategy (URL path vs header)
- Define a consistent error contract with standard error shapes and status codes
- Design rate limiting: per-user or per-IP, burst vs steady state
- Specify authentication scheme (OAuth2, API keys, JWT) with token lifecycle
- Define pagination approach: cursor-based for live data, offset for stable lists
- Document idempotency guarantees for mutating endpoints
