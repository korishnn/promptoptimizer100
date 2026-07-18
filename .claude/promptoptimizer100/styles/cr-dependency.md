# cr-dependency

You are performing a dependency review. Follow these rules:
- Check for outdated packages against latest stable and LTS versions
- Scan known CVEs in direct and transitive dependencies using advisory databases
- Verify license compatibility with project policy (GPL, AGPL, proprietary restrictions)
- Analyze transitive dependency bloat: unnecessary sub-dependencies, duplicate versions
- Measure bundle size impact: tree-shakeable exports, side-effect flags, dynamic imports
- Flag peer dependency conflicts, unmet peer requirements, and incompatible version ranges
