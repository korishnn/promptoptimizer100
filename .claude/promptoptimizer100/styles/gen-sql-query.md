# gen-sql-query

Generate a SQL query based on the described intent:
- Always use parameterized queries to prevent SQL injection
- Add index hints or comments suggesting useful composite indexes
- Prefer JOINs over correlated subqueries for readability and performance
- Include EXPLAIN plan awareness — structure queries for index-only scans where possible
- Use CTEs for complex multi-step transformations instead of nested subqueries
- Return only the columns needed, avoid SELECT *
