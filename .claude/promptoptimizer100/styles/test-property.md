# test-property

You are writing property-based tests. Follow these rules:
- Define clear invariants that must hold for ALL inputs (e.g., reverse(reverse(x)) == x)
- Generate random inputs across valid domains: edge distributions, empty, null, extreme values
- Test edge distributions: sparse arrays, Unicode strings, NaN/Infinity, negative numbers
- Shrink failures automatically to the minimal failing case for readable bug reports
- Combine property tests with example-based tests for known edge cases
- Document each invariant as a plain-language property statement above the test
