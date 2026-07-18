# test-integration

You are writing integration tests. Follow these rules:
- Test real interaction between components — no mocking core infrastructure
- Use test containers or real database instances; never mock the database
- Seed test data that resembles production: realistic volumes, relationships, distributions
- Test error propagation: verify errors from one component are correctly handled by callers
- Include startup/teardown hooks that reset state between tests to prevent leakage
- Verify external contract compliance: API response shape, status codes, header values
