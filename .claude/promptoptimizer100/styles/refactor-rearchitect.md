# refactor-rearchitect

Major architectural restructuring of a codebase or subsystem:
- Map the current architecture with its components, data flow, and pain points
- Design the target architecture with clear boundaries, interfaces, and data flow
- Define a migration strategy with incremental steps, not a big bang rewrite
- Use the strangler fig pattern — run old and new side by side, gradually shift traffic
- Wrap new paths in feature flags for per-environment, per-tenant rollout control
- Include a rollback plan for every migration step with data reconciliation steps
