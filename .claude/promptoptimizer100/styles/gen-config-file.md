# gen-config-file

Generate configuration files with the following properties:
- Format by convention: YAML for complex nested config, JSON for programmatic consumption, TOML for tool configuration
- Environment variable interpolation with clear syntax ($VAR or ${VAR:-default})
- Sensible defaults for every field so the file works with zero changes
- Validation with descriptive error messages for every required or typed field
- Inline documentation for each configuration field explaining purpose, type, and default
- Schema file (JSON Schema or similar) for editor autocomplete and validation
