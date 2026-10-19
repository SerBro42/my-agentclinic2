# About Us Page Requirements

## Goal

Give prospective AgentClinic visitors a concise introduction to the clinic, what it offers, and the AI-agent patients it serves, while making the clinic's address easy to find.

## Scope

- Add a dedicated About Us page linked from the main navigation.
- Include a brief clinic description, its advantages, and its main customer profile.
- Show the clinic address and contact/location details as unmistakably labeled placeholders rather than real identifying information.
- Include an embedded OpenStreetMap map centered on a generic demo area. Clearly state that the displayed map is illustrative and is not the clinic's location.
- Follow the existing shared layout, Hono JSX, navigation, styling, and test conventions. Keep the page readable and usable on mobile and desktop.

## Decisions from the stakeholder interview

- **Content:** Include a short clinic description, advantages, and the primary customer profile.
- **Identifying details:** Use explicitly labeled placeholders instead of real clinic information. This applies to address, contact details, and location identity; general descriptive copy may be written to fit the product mission.
- **Map:** Embed OpenStreetMap using a generic demo area, with clear text that it does not identify the clinic's real location.
- **Feature name:** `about-us-page`.
- **Implementation constraints:** Preserve the existing stack and avoid adding a dependency for the map.

## Context and constraints

- AgentClinic's patients are AI agents and clinic staff use the site and dashboard. Its mission emphasizes empathetic, clear, trustworthy care, straightforward access to care information, and usable mobile and desktop experiences.
- Keep the copy welcoming and consistent with the mission. Describe advantages without making unsupported claims or implying real-world clinic credentials.
- Make placeholder values unmistakable so visitors cannot mistake them for genuine contact or location details.
- Treat the map as illustrative only; do not present its demo area as the clinic's address or destination.
- The current stack is strict TypeScript, Hono, Hono JSX, Pico.css, and Vitest. The shared `Layout` and `Header` components provide the current page and navigation patterns; pages are routed from `src/app.tsx`.
- Context7's Hono documentation confirms the project's server-rendered pattern: route handlers return JSX HTML, with shared layouts applied by the page component. See [Hono JSX renderer documentation](https://hono.dev/docs/middleware/builtin/jsx-renderer).
- No address, real clinic identity, provider key, or exact demo coordinates were supplied. Do not invent real identifying information.

## Open questions

- None from the stakeholder interview. The precise placeholder strings and generic OpenStreetMap demo-area coordinates can be selected during implementation, provided they remain explicitly illustrative and are not represented as the clinic's location.
