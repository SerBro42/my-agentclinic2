# Angular frontend migration assessment

**Date:** 2026-10-19  
**Status:** Recommendation — stay with the current frontend stack

## Summary

Do not migrate AgentClinic to Angular at this time. The project currently uses Hono JSX to render pages on the server, Pico.css for styling, and standard HTML forms that submit to Hono routes. This approach fits the application's present page-and-form workflow, and the existing technology-stack guidance says to introduce a framework only when it addresses a concrete need.

The assessment was proactive rather than prompted by a specific pain point. The migration constraint is to avoid disruption unless there is a clear benefit. Given those criteria and the current implementation, a full migration would add cost and architectural complexity without a demonstrated payoff.

## Current frontend

- TypeScript application served by Hono.
- UI components written in Hono JSX and rendered into HTML on the server.
- Pico.css for styling.
- Forms use normal HTTP `POST` requests to Hono routes.
- The backend and frontend currently live in the same Hono application; data is accessed through the existing SQLite layer.

Relevant implementation references:

- [`src/app.tsx`](../src/app.tsx) defines routes and renders JSX responses.
- [`src/components/MvpPages.tsx`](../src/components/MvpPages.tsx) contains server-rendered pages and form workflows.
- [`specs/tech-stack.md`](../specs/tech-stack.md) documents the stack and its principles.

## Potential Angular advantages

Angular provides an integrated framework for applications with substantial client-side behavior, including:

- An official router for single-page navigation.
- Dependency injection and established application architecture.
- Built-in form APIs for richer client-side validation and interactions.
- Reactive state tools such as signals.
- Server-side rendering and hydration options when those are specifically needed.

These capabilities can be valuable as an application and team grow, particularly when many screens share complex client-side state, navigation, and interaction patterns.

## Costs and risks of migrating now

- Rebuilding the existing Hono JSX pages and their form workflows in Angular.
- Establishing how the Angular client communicates with the Hono and SQLite-backed server, likely through a defined API boundary.
- Adding Angular tooling, dependencies, and a second application runtime/build path.
- Potentially introducing SSR and hydration configuration if server-rendered behavior must be retained.
- Taking on migration and maintenance work without a current frontend limitation to solve.

## Recommendation

Keep Hono JSX, Pico.css, and the existing server-rendered request/form model. Do not begin a full Angular migration based solely on a proactive technology comparison.

Revisit Angular if concrete requirements emerge, such as:

- Complex interactions or shared client-side state that are cumbersome to implement with server-rendered pages.
- A need for frequent client-side navigation or real-time updates across multiple views.
- Team growth that benefits materially from Angular's conventions and tooling.
- A roadmap feature that demonstrates a specific limitation of the current approach.

If one workflow becomes a proven bottleneck, evaluate it as a bounded experiment before considering a broader migration.

## Documentation consulted

Current Angular documentation was retrieved through Context7:

- [Angular routing](https://angular.dev/guide/routing)
- [Angular dependency injection](https://angular.dev/guide/di)
- [Angular SSR and performance](https://angular.dev/best-practices/performance/ssr)
