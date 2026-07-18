# perf-caching

Design and implement a caching strategy:
- Choose a pattern: cache-aside (lazy loading) vs write-through vs write-behind
- Plan cache invalidation: TTL-based, event-driven, or explicit purge
- Set TTL strategy: shorter for dynamic data, longer for reference data
- Use distributed caching (Redis/Memcached) for horizontally scaled services
- Warm the cache on deploy to avoid cold-start thundering herd
- Prevent cache stampede: locking, probabilistic early expiration, or stale-while-revalidate
- Monitor cache hit/miss ratios and adjust strategy accordingly
