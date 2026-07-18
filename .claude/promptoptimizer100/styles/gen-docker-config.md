# gen-docker-config

Generate a Docker configuration with these practices:
- Multi-stage builds: build stage with full SDK, runtime stage with minimal dependencies
- Layer caching optimization: copy dependency manifests first, install, then copy source
- Minimal base image (alpine or distroless) to reduce attack surface and image size
- Security scanning instructions integrated into the build pipeline
- HEALTHCHECK instruction with a reasonable interval, timeout, and retries
- Non-root user for the runtime process, never run as root inside the container
