# AgentClinic Technology Stack

## Current baseline

- **Runtime:** Node.js 22.5 or newer. The application uses Node's built-in `node:sqlite` module.
- **Language:** TypeScript with strict type checking.
- **HTTP server and routing:** Hono, served by `@hono/node-server`.
- **UI rendering:** Hono JSX server-rendered components.
- **Styling:** Pico.css.
- **Database:** SQLite, with schema migrations during initialization and repeatable seeding of fictional starter data.
- **Tests:** Vitest.
- **Development:** `tsx watch src/index.ts`.
- **Build and run:** `tsc` compiles the application; `node dist/index.js` runs it.
- **Package management:** npm, with dependencies recorded in `package-lock.json`.

## Stack principles

1. Prefer the established TypeScript, Hono, Hono JSX, Pico.css, and SQLite stack for new work.
2. Keep the application reliable and easy to maintain. Add a framework or dependency only when it solves a concrete need that the current stack cannot meet simply.
3. Preserve strict typing and keep UI, routing, and data access consistent with existing project patterns.
4. Keep database initialization and migrations safe to repeat, and preserve existing user data.
5. Test behavior with Vitest. Use the project scripts as the source of truth:
   - `npm run dev` starts local development.
   - `npm test` runs the test suite.
   - `npm run validate` runs the standard automated validation checks.
   - `npm run build` builds the production output.
6. Keep the UI responsive and readable across mobile and desktop viewports, and compatible with modern browsers.

## Open gaps

No additional frontend framework or dependency is currently required. Revisit stack choices only when a roadmap feature demonstrates a specific limitation in the existing stack; document the reason and impact before introducing it.

