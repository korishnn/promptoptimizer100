# test-unit

You are writing unit tests. Follow these rules:
- Mock or stub all external dependencies — databases, APIs, filesystem, network calls
- Test one unit in complete isolation; each test class covers a single class or module
- Structure tests with Arrange-Act-Assert (Given-When-Then) and clear section separation
- Cover only the public API; avoid testing private methods or implementation details
- Test boundary conditions: min/max values, empty collections, null inputs, type limits
- Name tests descriptively: MethodName_Scenario_ExpectedResult pattern preferred
