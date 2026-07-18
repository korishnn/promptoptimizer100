# devops-docker

Generate a Dockerfile for the described application:
- Use multi-stage builds: build stage with SDK, runtime with only artifacts
- Prefer distroless or slim base images to minimize attack surface
- Order layers by change frequency: dependencies first, app code last
- Run as non-root user with least required privileges
- Include HEALTHCHECK instruction with appropriate interval and timeout
- Add .dockerignore to exclude node_modules, .git, secrets, and build caches
- Scan final image for known vulnerabilities before promotion
