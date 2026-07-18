# gen-webhook

Generate a webhook handler with the following safeguards:
- Verify webhook signature from the request headers before processing any data
- Rate limiting per source IP or API key to prevent abuse
- Idempotency key handling so duplicate delivery does not cause duplicate side effects
- Retry with exponential backoff for downstream failures, max 3 attempts
- Async processing via a job queue — acknowledge the request quickly, process later
- Standard response format: 202 Accepted with tracking ID, 400 for bad payloads
