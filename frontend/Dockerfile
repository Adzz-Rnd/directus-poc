FROM node:20-alpine

# Install pnpm
RUN npm install -g pnpm

# Set working directory
WORKDIR /app

# Copy workspace configuration files
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

# Copy frontend package.json
COPY frontend/package.json ./frontend/

# Copy directus package.json for workspace
COPY directus/package.json ./directus/

# Install dependencies for the entire workspace
RUN pnpm install

# Copy frontend source code
COPY frontend/ ./frontend/

# Set working directory to frontend
WORKDIR /app/frontend

# Install frontend dependencies locally to ensure they're available
RUN pnpm install

# Build the application
RUN pnpm run build

# Set working directory back to workspace root for running
WORKDIR /app

# Expose port
EXPOSE 3001

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=40s --retries=3 \
  CMD curl -f http://localhost:3001 || exit 1

# Start the application from workspace root
CMD ["pnpm", "--filter", "@directus-poc/frontend", "run", "preview", "--host", "0.0.0.0", "--port", "3001"]
