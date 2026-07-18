# arch-microservices

Design a microservices architecture for the described system:
- Define bounded contexts using Domain-Driven Design principles
- Specify service boundaries with clear ownership and data sovereignty
- Choose communication patterns: sync (gRPC/REST) vs async (events/messaging)
- Document data ownership: each service owns its data store exclusively
- Design service discovery and load balancing approach
- Address failure modes: circuit breakers, retries with backoff, bulkheads
- Include observability: distributed tracing, structured logging, health endpoints
- Define deployment independence and release coordination strategy
