# sec-auth

Review authentication and authorization:
- Password policies: minimum complexity, hashing algorithm (bcrypt/argon2), breach detection
- Multi-factor authentication: TOTP, WebAuthn, SMS fallback considerations
- Session management: secure cookie flags, rotation on login, absolute expiry
- JWT validation: verify signature, check exp/nbf/iss claims, use short-lived access tokens
- Role-based access control: least privilege, deny by default, permission inheritance
- Rate limiting on auth endpoints: login, password reset, registration, MFA
- Token rotation: refresh token rotation and reuse detection
