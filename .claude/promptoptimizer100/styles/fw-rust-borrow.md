# fw-rust-borrow

Work with the Rust borrow checker:
- Ownership model: each value has exactly one owner at a time
- Lifetime annotations clarify how references relate — elide when possible
- Use Rc for single-threaded shared ownership, Arc for multi-threaded
- Interior mutability: RefCell for single-threaded, Mutex/RwLock for multi-threaded
- Closures capture environment by reference, mutable reference, or value
- Refactoring borrow errors: clone, restructure lifetimes, or use owned types
- Prefer borrowing over ownership transfer in function signatures
