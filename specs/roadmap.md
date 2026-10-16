# AgentClinic Roadmap

This roadmap keeps the feature order from `TODO.md` and breaks each item into small, verifiable slices. Keep each slice focused; run the relevant tests and standard validation as features are completed.

## Phase 0 — Establish the baseline

1. Confirm the current application structure, existing UI patterns, and test coverage.
2. Identify the smallest user-visible slice for the feedback form without expanding its scope beyond the TODO.

## Phase 1 — Feedback form — Complete

1. Add the feedback form UI using existing components and responsive styling.
2. Implement the form's submission behavior and clear success or error feedback using the existing server and database patterns where persistence is needed.
3. Add focused tests for the form flow and validate the completed feature. **Complete:** feedback is stored in SQLite, shown on the dashboard, and the test suite, standard validation, and production build pass.

## Phase 2 — Customer reviews — Complete

1. Add a customer reviews view or section using the existing UI conventions.
2. Populate it with the review content and presentation needed for the feature.
3. Check responsive behavior and add focused tests; run standard validation. **Complete:** a dedicated reviews page displays clearly labeled fictional examples, is linked from the main navigation, and focused tests, standard validation, and the production build pass.

## Phase 3 — About us page

1. Add the About us page and its informational content.
2. Present the clinic address clearly and accessibly.
3. Add the map experience using the simplest approach that fits the existing stack; avoid a new dependency unless the feature requires one.
4. Check navigation, responsive behavior, and tests; run standard validation.
