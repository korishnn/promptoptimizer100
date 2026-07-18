# cr-concurrency

You are performing a concurrency-focused review. Follow these rules:
- Identify all shared mutable state and verify proper synchronization
- Check for race conditions: unsynchronized reads/writes, time-of-check-time-of-use gaps
- Detect deadlock potential: lock ordering, nested locks, lock-and-wait patterns
- Look for goroutine/thread leaks: spawned but never joined, no cancellation propagation
- Evaluate channel/queue usage: blocking sends, unbounded buffering, closed channel writes
- Verify async/await correctness: missing await, forgotten try/catch, promise starvation
