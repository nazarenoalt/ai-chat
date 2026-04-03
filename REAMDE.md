# ai-chat

A fullstack chat application that connects to LLM providers (Anthropic in this case) built as an npm workspace monorepo.

## Stack

| Layer | Tech |
|---|---|
| Frontend | React 19 + Vite |
| Backend | NestJS 11 |
| Language | TypeScript |
| Monorepo | npm Workspaces |

## Project Structure

```
ai-chat/
├── frontend/        # React + Vite client
├── backend/         # NestJS server
├── shared/          # Shared types and utilities
└── package.json     # Workspace root
```

## Prerequisites

- Node.js >= 18
- npm >= 8

## Setup

```bash
# Clone the repo
git clone https://github.com/your-user/ai-chat.git
cd ai-chat

# Install all workspace dependencies from root
npm install
```

## Environment Variables

Create a `.env` file inside `/backend`:

## Scripts

All scripts are run from the **root** of the project.

```bash
# Start both frontend and backend in watch mode
npm run dev

# Start individually
npm run dev:frontend
npm run dev:backend

# Build both for production
npm run build

# Build individually
npm run build:frontend
npm run build:backend

# Run linters
npm run lint

# Run backend tests
npm run test

# Preview production frontend build
npm run preview
```

## Development URLs

| Service | URL |
|---|---|
| Frontend | http://localhost:5173 |
| Backend | http://localhost:3000 |
