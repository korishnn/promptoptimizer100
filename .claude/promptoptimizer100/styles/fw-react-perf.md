# fw-react-perf

Optimize React performance:
- Use useMemo for expensive computations, useCallback for stable function references
- Apply React.memo to prevent unnecessary re-renders of pure components
- Implement code splitting with React.lazy and Suspense for route-level chunks
- Virtualize long lists with react-window or react-virtuoso
- Colocate state: lift state up only when truly shared, keep it low otherwise
- Run bundle analysis regularly and set size budgets
- Profile component render counts and identify unnecessary re-renders with React DevTools
