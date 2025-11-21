# Ripple Fullstack Showcase

A demonstration of the [Ripple](https://www.ripplejs.com/) TypeScript framework with a fullstack application.

## Stack

- Frontend: Ripple, TanStack Query, Tailwind CSS, Vite
- Backend: Express.js, TypeScript
- Monorepo: pnpm workspaces, Turborepo

## Setup

```bash
pnpm install
```

## Development

To run the full application with the backend:

```bash
pnpm preview
```

This command runs from the project root and:

- Builds the frontend and serves it with Vite preview
- Starts the backend API server at `http://localhost:3001`
- Vite proxies `/api` requests to the backend

Access the application at `http://localhost:4173`.

**Note:** The GitHub Pages deployment uses a mocked in-memory API. To see how the frontend interacts with an actual backend, clone this repository and run it locally. The backend uses Express with TypeScript.

## Production Build

```bash
cd apps/my-ripple-app
pnpm build
```

The production build uses `.env.production` which sets `VITE_MOCK_API=true` to use in-memory mock data (useful for static hosting like GitHub Pages).

## GitHub Pages

The application is automatically deployed to GitHub Pages on pushes to `main`. The GitHub Actions workflow builds the frontend with mock API enabled.

Live demo: [GitHub Pages](https://ephraimhaber.github.io/ripple-fullstack/)

## Structure

```
apps/
├── my-ripple-app/    # Ripple frontend
└── backend/          # Express API
```

## Features

- **Counter Page**: Demonstrates Ripple's fine-grained reactivity with `track()` and `@` syntax
- **Users Page**: Shows data fetching with TanStack Query, with support for both real backend and in-memory mock API
- Reactive components with Ripple
- TanStack Query for data fetching
- Tailwind CSS design system
- Type-safe API calls
- Configurable delays and error simulation

## Environment Variables

- `VITE_MOCK_API`: Set to `true` to use in-memory mock API instead of the backend
    - Development: `.env.development` (defaults to `false`)
    - Production: `.env.production` (defaults to `true`)

## Links

- [Ripple Docs](https://www.ripplejs.com/docs/introduction)
- [Ripple GitHub](https://github.com/Ripple-TS/ripple)
- [Ripple Router](https://github.com/WebEferen/ripple-router)
- [Tanstack Ripple Query](https://github.com/wobsoriano/tanstack-ripple-query)
- [Project Repository](https://github.com/EphraimHaber/ripple-fullstack)
