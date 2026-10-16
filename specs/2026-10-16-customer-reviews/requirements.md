# Customer Reviews Requirements

## Goal

Give prospective AgentClinic visitors a clear, welcoming way to read a small set of review-style examples that illustrate the clinic experience.

## Scope

- Add a dedicated customer reviews page linked from the main navigation.
- Populate it with a small, curated set of fictional/demo reviews.
- Make it unambiguous that the reviews are illustrative demo content, not genuine patient testimonials or endorsements.
- Follow the existing TypeScript, Hono JSX, layout, navigation, styling, and testing conventions.
- Keep the page readable and usable on mobile and desktop.

## Decisions from the stakeholder interview

- **Presentation:** A dedicated customer reviews page linked from the main navigation.
- **Content:** Use clearly identified fictional/demo reviews.
- **Implementation constraints:** Use existing UI conventions and the current stack. Do not introduce an external review service or new dependency unless implementation demonstrates a concrete need.
- **Context:** Integrate with the existing site navigation and content patterns; no additional context or source material was provided.

## Context and constraints

- AgentClinic should feel calming, trustworthy, and approachable. Keep review copy welcoming and consistent with the clinic's mission.
- Label the page and/or review content clearly as fictional examples so visitors cannot mistake it for genuine patient feedback.
- The feature is informational: it does not collect, submit, store, moderate, or manage reviews.
- Prefer simple local content and existing Hono JSX rendering patterns; do not add persistence or a third-party integration for demo content.
- Preserve the established TypeScript, Hono/Hono JSX, Pico.css, and Vitest stack and responsive UI principles.

## Open questions

- None from the stakeholder interview. The implementation may choose the specific demo review wording and presentation details while preserving the explicit demo labeling.
