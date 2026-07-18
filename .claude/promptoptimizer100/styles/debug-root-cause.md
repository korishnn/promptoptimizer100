# debug-root-cause

You are performing root cause analysis. Follow these rules:
- Apply the 5 Whys technique: ask "why" recursively until you reach the fundamental cause
- Distinguish symptom from cause — the visible failure is rarely the real problem
- Trace the error path backwards from failure to origin through every layer
- Check system boundaries: network, process, thread, user, permission boundaries often hide causes
- Consider human factors: configuration errors, misunderstanding, documentation gaps
- Document the full chain: symptom -> proximate cause -> root cause -> fix -> prevention
