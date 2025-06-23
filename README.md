# Directus POC

A proof-of-concept monorepo demonstrating Directus CMS with Astro frontend, using Docker and pnpm.

## Architecture

- **Backend**: Directus CMS (Port 8055)
- **Frontend**: Astro (Port 3001)
- **Database**: PostgreSQL (Port 5432)
- **Package Manager**: pnpm
- **Containerization**: Docker Compose

## Project Structure

```
directus-poc/
├── directus/                 # Directus CMS backend
│   ├── Dockerfile           # Production Dockerfile
│   ├── .env                 # Environment variables
│   └── package.json         # Backend dependencies
├── frontend/                # Astro frontend
│   ├── src/
│   │   ├── layouts/         # Astro layouts
│   │   └── pages/           # Astro pages
│   ├── Dockerfile           # Production Dockerfile
│   ├── Dockerfile.dev       # Development Dockerfile
│   ├── astro.config.mjs     # Astro configuration
│   └── package.json         # Frontend dependencies
├── docker-compose.yml       # Production Docker Compose
├── docker-compose.dev.yml   # Development Docker Compose
├── package.json             # Root package.json (monorepo)
└── README.md               # This file
```

## Prerequisites

- Docker and Docker Compose
- pnpm (optional, for local development)

## Quick Start

### Production Mode

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd directus-poc
   ```

2. Start all services:
   ```bash
   pnpm start
   # or
   docker compose up --build
   ```

3. Access the applications:
   - **Frontend**: http://localhost:3001
   - **Directus Admin**: http://localhost:8055/admin
   - **Database**: localhost:5432

### Development Mode

1. Start development environment:
   ```bash
   pnpm dev
   # or
   docker compose -f docker-compose.dev.yml up --build
   ```

2. The development setup includes:
   - Hot reloading for frontend changes
   - Volume mounts for live code updates
   - Debug logging enabled

## Default Credentials

### Directus Admin
- **Email**: admin@example.com
- **Password**: admin123

### PostgreSQL Database
- **User**: postgres
- **Password**: yourpassword
- **Database**: directus

> ⚠️ **Security Warning**: Change these default credentials before deploying to production!

## Available Scripts

### Root Level
- `pnpm dev` - Start development environment
- `pnpm start` - Start production environment
- `pnpm build` - Build all services
- `pnpm stop` - Stop all services
- `pnpm clean` - Clean up containers and volumes
- `pnpm logs` - View logs from all services

### Frontend
- `pnpm install:frontend` - Install frontend dependencies
- `pnpm dev:frontend` - Start frontend in development mode

### Backend
- `pnpm install:backend` - Install backend dependencies
- `pnpm dev:backend` - Start backend services

## Environment Variables

### Directus (.env)
Key environment variables for Directus configuration:

```env
NODE_ENV=development
DB_CLIENT=pg
DB_HOST=postgres
DB_DATABASE=directus
DB_USER=postgres
DB_PASSWORD=yourpassword
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=admin123
KEY=your-secret-key
SECRET=your-secret-value
```

## Health Checks

All services include health checks:
- **Directus**: `http://localhost:8055/server/health`
- **Frontend**: `http://localhost:3001`
- **PostgreSQL**: `pg_isready` command

## Volumes

- `postgres_data`: PostgreSQL data persistence
- `directus_uploads`: Directus file uploads
- `postgres_data_dev`: Development PostgreSQL data

## Networking

All services communicate through the `app-network` Docker network:
- Services can reach each other using service names
- Frontend connects to Directus via `http://directus-backend:8055`

## Troubleshooting

### Common Issues

1. **Port conflicts**: Ensure ports 3001, 5432, and 8055 are available
2. **Docker permissions**: Make sure Docker daemon is running
3. **Build failures**: Try cleaning Docker cache: `docker system prune`

### Logs

View logs for specific services:
```bash
docker compose logs directus-backend
docker compose logs astro-frontend
docker compose logs postgres
```

### Reset Database

To reset the database and start fresh:
```bash
pnpm clean
pnpm dev
```

## Development

### Adding New Features

1. **Frontend changes**: Edit files in `frontend/src/`
2. **Backend configuration**: Modify `directus/.env` or add extensions
3. **Database schema**: Use Directus admin panel to modify collections

### Hot Reloading

Development mode supports hot reloading:
- Frontend changes are reflected immediately
- Directus configuration changes require container restart

## Production Deployment

For production deployment:

1. Update environment variables with secure values
2. Use production Docker Compose: `docker-compose.yml`
3. Set up proper SSL/TLS termination
4. Configure backup strategies for PostgreSQL
5. Set up monitoring and logging

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test with both development and production setups
5. Submit a pull request

## License

This project is for demonstration purposes. Please check individual package licenses for production use.
