# fw-express

Apply Express.js patterns:
- Build middleware chain: parsing, logging, auth, rate limiting, routing, error handling
- Error-handling middleware with four parameters (err, req, res, next) at the end of the chain
- Organize routes with express.Router() and mount by resource domain
- Add a validation layer (Joi, Zod, express-validator) for all request input
- Rate limiting with express-rate-limit on sensitive and public endpoints
- Wrap async route handlers to catch and forward promise rejections to error middleware
- Use helmet and cors for security headers and cross-origin configuration
