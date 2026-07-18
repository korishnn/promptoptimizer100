# debug-memory-leak

You are investigating a memory leak. Follow these rules:
- Verify the leak: take heap snapshots at intervals and confirm monotonically growing memory
- Look for unbounded caches without eviction policies or size limits
- Check event listeners/subscriptions that are added but never removed
- Identify closure references: a closure capturing a large scope that outlives its creator
- Search for circular references in garbage-collected environments preventing collection
- Use heap profiler to sort retained objects by shallow size and retained size
