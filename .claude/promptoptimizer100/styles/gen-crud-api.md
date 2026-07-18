# gen-crud-api

Generate a full CRUD API for the described resource:
- Full REST endpoints following REST conventions: GET, POST, PUT, PATCH, DELETE
- Input validation with descriptive error messages for each field
- Pagination, sorting, and filtering support on list endpoints
- Proper HTTP status codes for each operation (200, 201, 204, 400, 404, 409, 500)
- Include complete request/response schemas as TypeScript types
- Handle partial updates with merge semantics, not full replacement
