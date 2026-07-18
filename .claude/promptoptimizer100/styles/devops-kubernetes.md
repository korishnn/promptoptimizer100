# devops-kubernetes

Generate Kubernetes manifests for the described service:
- Define Deployments with resource requests and limits (CPU/memory)
- Configure Services with precise label selectors
- Use ConfigMaps for environment-specific configuration
- Store secrets encrypted (SealedSecrets or External Secrets Operator)
- Configure liveness, readiness, and startup probes with proper thresholds
- Include HorizontalPodAutoscaler with target CPU/memory utilization
- Define NetworkPolicies to restrict ingress/egress traffic
- Set PodDisruptionBudget for availability during rolling updates
