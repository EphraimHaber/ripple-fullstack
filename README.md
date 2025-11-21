# Ripple Fullstack Demo

WIP demonstration of the [Ripple](https://www.ripplejs.com/) framework with a fullstack TypeScript application.

## Stack

- Frontend: Ripple, TanStack Query, Tailwind CSS, Vite
- Backend: Express.js, TypeScript
- Monorepo: pnpm workspaces, Turbo

## Setup

```bash
pnpm install
```

## Development

**Note:** Due to tanstack-ripple-query requirements, the frontend cannot run with `pnpm dev` in dev mode.

To run the full application:

```bash
pnpm preview
```

This command runs from the project root and:

- Builds the frontend and serves it with Vite preview
- Starts the backend API server at `http://localhost:3001`
- Vite proxies `/api` requests to the backend, simulating path-based routing behind a load balancer

Access the application at `http://localhost:4173`.

## Production

```bash
pnpm build
pnpm preview
```

## Structure

```
apps/
├── my-ripple-app/    # Ripple frontend
└── backend/          # Express API
```

## Features

- Reactive components with Ripple
- TanStack Query for data fetching
- Tailwind CSS design system
- Type-safe API calls
- Configurable delays and error simulation

## Links

- [Ripple Docs](https://www.ripplejs.com/docs/introduction)
- [Ripple GitHub](https://github.com/Ripple-TS/ripple)
- [Ripple Router](https://github.com/WebEferen/ripple-router)
- [Tanstack Ripple Query](https://github.com/wobsoriano/tanstack-ripple-query)
