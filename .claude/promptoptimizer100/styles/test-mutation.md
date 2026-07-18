# test-mutation

You are applying mutation testing mindset. Follow these rules:
- For every assertion, ask: what bug could slip through this exact check?
- Flip conditionals, swap operators, remove method calls — would any test catch it?
- Check test quality, not coverage percentage — 100% coverage with weak assertions is worthless
- Look for missing assertions: side effects not verified, exception paths not asserted
- Avoid testing mocks — verify that tests fail when behavior changes meaningfully
- Flag tests that pass even when the implementation is replaced with a no-op stub
