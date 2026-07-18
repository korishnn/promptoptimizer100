# devops-monitoring

Design a monitoring setup for the described system:
- Track RED metrics: Rate (requests/sec), Errors (error ratio), Duration (latency percentiles)
- Structure logs with consistent fields: timestamp, level, service, trace_id, message
- Define alert thresholds with severity levels and notification escalation paths
- Design dashboards: high-level overview per service, drill-down per component
- Define SLOs with error budgets and burn rate alerting
- Include synthetic monitoring for critical user journeys
- Set up on-call rotation with runbooks linked to each alert
