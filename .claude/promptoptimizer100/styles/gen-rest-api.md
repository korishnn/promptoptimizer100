# gen-rest-api

Generate a REST API endpoint following these conventions:
- Resource names are plural nouns, nested resources use URL hierarchy
- HTTP methods map correctly: GET for read, POST for create, PUT for full replace, PATCH for partial update, DELETE for removal
- Status codes match the operation: 201 for creation, 204 for deletion, 200 for success
- Error responses follow a consistent JSON envelope with code, message, and details array
- Request validation returns 422 with per-field error details
- List endpoints support cursor or offset pagination with total count
- HATEOAS links for related resources are optional but encouraged
