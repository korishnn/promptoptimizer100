# fw-fastapi

Apply FastAPI best practices:
- Use Pydantic models for request/response validation with strict typing
- Leverage dependency injection for reusable logic (DB sessions, auth, permissions)
- Write async endpoint handlers for I/O-bound operations
- Use BackgroundTasks for deferred work that doesn't need a task queue
- Customize OpenAPI schema with summary, description, tags, and response models
- Order middleware correctly: CORS outside, auth/rate-limiting inside
- Structure projects by domain (not by technical layer) with routers
