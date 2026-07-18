# fw-django

Apply Django best practices:
- Fat models, thin views: put business logic in model methods or managers
- Optimize QuerySets: use select_related for FK/O2O, prefetch_related for M2M
- Use Django REST Framework viewsets and serializers for consistent API design
- Leverage signals for decoupling (but prefer direct calls in the same process)
- Write custom QuerySet methods for reusable query logic
- Use database-level constraints alongside model-level validation
