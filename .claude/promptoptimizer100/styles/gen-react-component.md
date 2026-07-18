# gen-react-component

Generate a React component with the following structure:
- Props interface with JSDoc comments, marked as readonly
- Default export with named export for the component function
- Loading, error, and empty states handled explicitly
- Accessible markup with ARIA labels, roles, and keyboard navigation
- Use hooks (useState, useEffect, useCallback, useMemo) not class lifecycle
- Proper TypeScript generics where the component operates on dynamic data types
- Unit test file alongside the component
