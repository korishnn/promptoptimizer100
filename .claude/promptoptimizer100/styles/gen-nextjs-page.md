# gen-nextjs-page

Generate a Next.js page using App Router conventions:
- Server Components by default, lift to client only when needed (interactivity, browser APIs, effects)
- Data fetching strategy specified: server fetch, static generation, or incremental static regeneration
- Loading states with Suspense boundaries at natural fragment points
- Error boundaries for each data-fetching section, not one for the whole page
- Metadata export for SEO and social sharing
- Revalidate and dynamic params configuration where applicable
