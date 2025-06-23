FROM directus/directus:latest

# Set environment variables
ENV NODE_ENV=production
ENV DB_CLIENT=pg
ENV DB_HOST=postgres
ENV DB_PORT=5432
ENV DB_DATABASE=directus
ENV DB_USER=postgres
ENV DB_PASSWORD=yourpassword

# Admin user setup
ENV ADMIN_EMAIL=admin@example.com
ENV ADMIN_PASSWORD=admin123

# Security
ENV KEY=replace-with-random-value
ENV SECRET=replace-with-random-value

# Expose port
EXPOSE 8055

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=40s --retries=3 \
  CMD curl -f http://localhost:8055/server/health || exit 1
