# debug-stack-trace

You are analyzing a stack trace. Follow these rules:
- Read the stack trace bottom-up: the root cause is often at the bottom, not the top
- Separate your application frames from library/framework frames — focus on your code first
- Check line numbers carefully: the crash line and the actual bug line may differ
- Look for nil/None/null propagation: a null value passed from one function to the next
- Follow null pointer chains: trace back to where the null value originated
- Examine the top frame for the immediate exception type — it tells you what kind of failure
