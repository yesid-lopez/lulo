# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Payload CMS 3.x application built with Next.js 15 and PostgreSQL. It serves as a headless CMS with both admin interface and API capabilities using TypeScript.

## Development Commands

```bash
# Development
pnpm dev                    # Start development server on localhost:3000
pnpm devsafe               # Clean build and start dev (removes .next directory)

# Building and Production
pnpm build                 # Build production application
pnpm start                 # Start production server

# Code Quality
pnpm lint                  # Run ESLint
pnpm generate:types        # Generate TypeScript types from Payload config
pnpm generate:importmap    # Generate import map for admin UI

# Testing
pnpm test                  # Run all tests (integration + e2e)
pnpm test:int             # Run integration tests with Vitest
pnpm test:e2e             # Run end-to-end tests with Playwright

# Payload Commands
pnpm payload              # Run Payload CLI commands
```

## Architecture

### Core Structure
- **Next.js App Router**: Uses `src/app/` directory with route groups `(frontend)` and `(payload)`
- **Payload CMS**: Configuration in `src/payload.config.ts` with PostgreSQL adapter
- **Collections**: Located in `src/collections/` (Users, Media)
- **Database**: PostgreSQL with connection via `DATABASE_URI` environment variable

### Key Configuration Files
- `src/payload.config.ts`: Main Payload CMS configuration
- `src/payload-types.ts`: Auto-generated TypeScript types (do not edit manually)
- `docker-compose.yml`: PostgreSQL database setup for local development
- `next.config.mjs`: Next.js configuration
- `playwright.config.ts`: E2E testing configuration
- `vitest.config.mts`: Integration testing configuration

### Environment Setup
Required environment variables (see `.env.example`):
- `DATABASE_URI`: PostgreSQL connection string
- `PAYLOAD_SECRET`: Secret key for Payload CMS

### Docker Development
Use `docker-compose up` to run with containerized PostgreSQL database. The compose file automatically sets up:
- PostgreSQL database on port 5432
- Application on port 3000
- Persistent data volumes

### Collections Architecture
- **Users**: Authentication-enabled collection using email as title
- **Media**: File upload collection with alt text field, public read access

### Testing Strategy
- Integration tests with Vitest and jsdom
- E2E tests with Playwright
- Test environment configured with separate `.env` file (`test.env`)

## Development Notes

- Uses pnpm as package manager (required by engines)
- Node.js version: ^18.20.2 || >=20.9.0
- TypeScript types are auto-generated - run `pnpm generate:types` after schema changes
- All commands use `cross-env` with `NODE_OPTIONS=--no-deprecation` for clean output