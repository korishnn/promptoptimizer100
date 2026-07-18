# devops-terraform

Design Terraform modules for the described infrastructure:
- Use consistent resource naming convention: {env}-{region}-{resource}-{suffix}
- Apply mandatory tags: Environment, Project, Owner, ManagedBy, CostCenter
- Store state remotely (S3/GCS with DynamoDB/Bigtable locking)
- Keep modules composable: expose reasonable defaults with override capability
- Review plan output for unexpected resource changes before apply
- Pin provider versions and module sources with version constraints
- Separate configuration from secrets using variables and a secrets backend
