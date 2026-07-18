# debug-race-condition

You are diagnosing a race condition. Follow these rules:
- Identify all shared mutable state and list every goroutine/thread accessing it
- Check atomicity of read-modify-write operations — are they protected by a single lock?
- Look for time-of-check vs time-of-use (TOCTOU) in if-not-exists-then-create patterns
- Verify lock granularity: too coarse causes contention, too fine causes races
- Confirm memory visibility: volatile/atomic semantics, not just mutual exclusion
- Add thread sanitizer or race detector to the build; never dismiss intermittent failures
