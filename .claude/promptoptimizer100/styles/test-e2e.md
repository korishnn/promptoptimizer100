# test-e2e

You are writing end-to-end tests. Follow these rules:
- Focus on complete user journey flows, not isolated page or component interactions
- Prioritize critical paths: authentication, purchase, search, data submission
- Use real browser automation (Playwright/Cypress) and real API calls — no mocks
- Implement careful setup/teardown: create test users, seed test data, clean up afterwards
- Ensure data cleanup after every test run — no test data leaks into production-like state
- Add retry logic for flaky assertions but fail fast on clear application errors
