# sec-owasp

Perform an OWASP Top 10 review:
- Broken Access Control: privilege escalation, IDOR, path traversal
- Cryptographic Failures: weak algorithms, missing encryption, improper key management
- Injection: SQL, NoSQL, OS command, LDAP, and template injection
- Insecure Design: missing threat modeling, unbounded resource consumption
- Security Misconfiguration: default credentials, debug modes, unpatched services
- Vulnerable Components: outdated libraries with known CVEs
- Authentication Failures: weak password policies, session fixation, missing MFA
- Data Integrity Failures: insecure deserialization, missing signature verification
- Logging and Monitoring Failures: insufficient alerting, missing audit trails
- SSRF: server-side request forgery via user-controlled URLs
