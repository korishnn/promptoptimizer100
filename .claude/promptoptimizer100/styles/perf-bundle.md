# perf-bundle

Optimize bundle size:
- Enable tree shaking: remove dead code via ES module static analysis
- Code splitting: route-based and component-level lazy loading
- Dynamic imports for rarely used features and heavy third-party libraries
- Compress assets: Brotli or Gzip, image optimization (WebP/AVIF), font subsetting
- Audit dependencies with bundle analysis tools (webpack-bundle-analyzer, source-map-explorer)
- Set and enforce size budgets per entry point with CI failure gates
- Remove duplicate dependencies with deduplication and resolution strategies
