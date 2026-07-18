# gen-cron

Generate a cron job implementation with these guarantees:
- Idempotent execution — running the same job twice produces the same result
- Distributed locking to prevent overlapping runs across multiple instances
- Structured logging with job ID, run ID, duration, and outcome for observability
- Error notification integration (email, Slack, PagerDuty) on persistent failures
- Timezone-aware scheduling using standard cron expressions with explicit timezone
- Graceful shutdown — finish the current iteration, don't abort mid-batch
