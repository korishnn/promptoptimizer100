# fw-rails

Apply Rails best practices:
- Fat models are an anti-pattern: extract business logic into service objects and interactors
- Use ActiveRecord scopes for reusable query fragments with lambdas for laziness
- Replace callbacks with service objects or explicit workflow methods
- Use Strong Parameters with permitted scalar types for mass-assignment safety
- Organize routes with resources and nested resources, avoid deep nesting
- Move heavy background work to ActiveJob with Sidekiq or GoodJob
- Write system specs with Capybara for critical user flows, request specs for API endpoints
