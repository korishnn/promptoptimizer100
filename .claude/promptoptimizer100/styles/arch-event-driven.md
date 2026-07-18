# arch-event-driven

Design an event-driven architecture for the described flow:
- Define event schema with schema versioning and backwards compatibility
- Document producer/consumer contracts including expected payload shapes
- Specify ordering guarantees: partition key strategy for ordered topics
- Design dead letter queue handling with retry policies and alerting
- Choose at-least-once vs exactly-once semantics per event type
- Include error handling: poison pill messages, circuit breakers, fallbacks
- Define observability: event tracing, lag monitoring, throughput tracking
