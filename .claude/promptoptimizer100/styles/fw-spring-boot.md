# fw-spring-boot

Apply Spring Boot best practices:
- Prefer constructor injection over field injection with @Autowired
- Use @Transactional at the service layer for declarative transaction management
- REST controllers: consistent response entities, exception handlers with @ControllerAdvice
- Security: method-level @PreAuthorize, CSRF protection, CORS configuration
- Enable and secure Actuator endpoints for production health checks and metrics
- Use testing slices (@WebMvcTest, @DataJpaTest) for focused unit tests
- Externalize configuration via application.yml profiles and @ConfigurationProperties
