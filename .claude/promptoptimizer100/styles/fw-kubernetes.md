# fw-kubernetes

Apply Kubernetes patterns:
- Set pod resource requests and limits for CPU and memory on every container
- Use affinity rules and topology spread constraints for high availability
- Configure PodDisruptionBudget for minimum available pods during voluntary disruptions
- Horizontal Pod Autoscaler with custom metrics for dynamic scaling
- Network policies to isolate workloads and enforce zero-trust between pods
- RBAC with least privilege: service accounts per application, not per namespace
- Package and version applications with Helm charts supporting multiple environments
