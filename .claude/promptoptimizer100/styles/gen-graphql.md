# gen-graphql

Generate a GraphQL resolver with the following structure:
- Query resolvers for reads, Mutation resolvers for writes — keep them separate
- Use DataLoader pattern to batch and cache database queries and eliminate N+1
- Define input types for mutations, not raw arguments, for better validation
- Error handling in the resolver chain via Apollo-friendly error codes
- Federation ready: provide __resolveReference and extend types where appropriate
- Resolver map is flat — no nested objects for field-level resolvers
