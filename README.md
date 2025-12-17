# Pattern Lab

Pattern Lab is a unified **Next.js + TypeScript** workspace for demonstrating and experimenting with **software design patterns** (e.g. Singleton, Factory) in a practical, UI-driven way.

The repository is designed to scale over time, allowing new patterns to be added without coupling business logic, UI demos, or routing concerns.

---

## Goals

- Provide clear, real-world examples of common design patterns
- Separate **pattern logic** from **UI demos**
- Use a single **Next.js application** as the visualization and navigation layer
- Support incremental growth (new patterns, docs, tests)

---

## Tech Stack

- **Node.js 18+**
- **npm workspaces**
- **Next.js (App Router)**
- **React 18**
- **TypeScript**

---

## Repository Structure

pattern-lab/
├─ apps/
│ └─ web/ # Next.js application (shell)
│ └─ src/
│ ├─ app/ # Routes (/, /demos/[pattern])
│ └─ registry/ # Demo metadata + component mapping
│
├─ packages/
│ ├─ patterns/ # Framework-agnostic pattern implementations
│ │ └─ src/
│ └─ demos/ # React demo components (UI layer)
│ └─ src/
│
├─ package.json # npm workspaces root
├─ tsconfig.base.json # Shared TypeScript configuration
└─ README.md

### Responsibilities

#### `packages/patterns`
- Pure TypeScript
- No React, no Next.js
- Canonical implementations of each pattern

#### `packages/demos`
- React components (`"use client"`)
- Visual and interactive demos
- Consume logic from `packages/patterns`

#### `apps/web`
- Next.js App Router
- Navigation, routing, layout
- Demo registry and dynamic demo pages

---

## Getting Started

### Prerequisites

Verify your environment:

```bash
node -v   # >= 18
npm -v    # >= 9
Installation
From the repository root:

npm install
This installs dependencies for all workspace packages.

Running the Application
Start the Next.js development server:

npm run dev
Then open:

http://localhost:3000 → Demo list

http://localhost:3000/demos/singleton

http://localhost:3000/demos/factory

How Demos Work
Each demo is registered centrally via a demo registry

A single dynamic route handles routing:

/demos/[pattern]
Demo components are mapped explicitly to avoid magic imports and keep type safety

Adding a New Pattern
Add the pattern implementation

packages/patterns/src/<pattern>/
Create a React demo

packages/demos/src/<pattern>/<Pattern>Demo.tsx
Export the demo

packages/demos/src/<pattern>/index.ts
Register it

Add metadata:

apps/web/src/registry/demos.ts
Map the component:

apps/web/src/registry/demo-components.ts
The demo will be available at:

/demos/<pattern>
Notes on Design Patterns & Next.js
Singleton demos

Implemented as client-side singletons

Each browser session owns its own instance

Avoid shared server state unless explicitly demonstrating SSR behavior

Factories and other patterns

Implemented framework-agnostically

Adapted to React only in the demo layer

Scripts
From the repo root:

npm run dev     # Start Next.js dev server
npm run build   # Build the application
npm run lint    # Run ESLint
Future Enhancements
Pattern documentation pages

Code previews alongside demos

Unit tests per pattern

SSR vs client-only pattern comparisons

Additional patterns (Observer, Strategy, Command, etc.)

License
MIT

---
