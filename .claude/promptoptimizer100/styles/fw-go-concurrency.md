# fw-go-concurrency

Apply Go concurrency patterns:
- Use goroutines for concurrent work, channels for communication between them
- Use select for multiplexing across multiple channel operations with timeouts
- Sync primitives: WaitGroup for goroutine coordination, Mutex for shared state
- Propagate context.Context for cancellation, deadlines, and request-scoped values
- Pipeline pattern: stage goroutines connected by channels for streaming data
- Fan-out/fan-in: distribute work across workers, collect results
- Use errgroup for goroutine lifecycle and error propagation
- Never leak goroutines: ensure every goroutine has a guaranteed exit path
