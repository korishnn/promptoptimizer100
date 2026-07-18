# fw-terraform

Apply Terraform best practices:
- Use modules for reusable infrastructure components with version constraints
- Store remote state in a locked backend (S3 + DynamoDB, GCS, Azure Storage)
- Workspace strategy: separate environments via workspaces or separate directory structures
- Resource naming: consistent convention with environment and region prefixes
- Apply tags on all resources for cost tracking and ownership identification
- Policy as code with Sentinel or OPA for governance guardrails
- Enable state locking to prevent concurrent modifications
- Use drift detection tools to catch out-of-band infrastructure changes
