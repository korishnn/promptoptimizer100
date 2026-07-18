# gen-middleware

Generate middleware for the request/response pipeline:
- Each middleware handles one concern: logging, auth, rate limiting, validation, error handling
- Error handling middleware catches all thrown errors and returns a consistent error response
- Logging middleware records method, path, status, duration at info level, body at debug level
- Authentication middleware validates tokens and attaches user context, returns 401 on failure
- Rate limiting middleware uses token bucket or sliding window, returns 429 when exceeded
- Early returns on validation failure or auth failure — order matters, run cheap checks first
