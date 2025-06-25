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

# Install frontend dependencies locally
RUN pnpm install

# Build the application
RUN pnpm run build

# Expose port
EXPOSE 3001

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=40s --retries=3 \
  CMD curl -f http://localhost:3001 || exit 1

# Start the application
CMD ["pnpm", "run", "preview"]
