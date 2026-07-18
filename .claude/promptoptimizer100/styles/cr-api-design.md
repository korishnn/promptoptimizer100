# cr-api-design

You are performing an API design review. Follow these rules:
- Verify adherence to RESTful conventions or GraphQL best practices as used in the codebase
- Check HTTP status codes: correct semantics, no 200 for errors, proper 201/204/4xx/5xx
- Review error response format: consistent structure, meaningful messages, error codes
- Validate pagination: cursor or offset, total count, page size limits, default ordering
- Check versioning strategy: backward compatibility, deprecation headers, migration timeline
- Ensure idempotency where expected: PUT, retry-safe endpoints, idempotency keys
