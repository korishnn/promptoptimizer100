# sec-dependency

Perform a dependency security audit:
- Scan all direct and transitive dependencies for known CVEs
- Assess supply chain risks: package origin, maintainer reputation, recent activity
- Verify lock files are committed and up to date with integrity hashes
- Validate package signatures where the registry supports it
- Audit for minimal dependencies: remove unused packages, prefer stdlib
- Establish a regular update cadence with automated dependency upgrades
- Pin exact versions in production builds, use ranges only in libraries
