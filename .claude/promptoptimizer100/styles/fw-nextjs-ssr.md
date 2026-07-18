# fw-nextjs-ssr

Apply Next.js patterns:
- Use App Router with file-based routing for new projects
- Choose Server Components by default, Client Components only when interactivity is needed
- Data fetching: fetch directly in Server Components, no separate API needed
- Choose rendering strategy: SSG for static content, ISR for semi-dynamic, SSR for personalized
- Middleware for redirects, rewrites, header modifications, and bot detection
- Route handlers for API endpoints and webhooks within the app directory
- Use streaming with Suspense boundaries for progressive page loading
