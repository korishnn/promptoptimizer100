# sec-input-validation

Review input validation across all entry points:
- Identify every input vector: forms, APIs, file uploads, headers, query params, webhooks
- Use whitelist (allowlist) over blacklist (blocklist) validation
- Parameterized queries for all database interactions to prevent injection
- Output encoding based on context: HTML, URL, JS, CSS attribute encoding
- Enforce size limits: max string lengths, max file sizes, max request body
- Type validation: strong typing on all inputs, reject unexpected data types
- Reject malformed input at the boundary before any processing begins
