# Feedback Form Requirements

## Goal

Let visitors send useful feedback to AgentClinic, give clinic staff a place to review submissions, and provide clear confirmation when feedback is received.

## Scope

- Add a dedicated feedback page linked from the site's main navigation.
- Collect the submitter's name, email address, a feedback category, and a message.
- Validate submissions on the server and persist valid submissions in the existing SQLite database.
- Show a clear confirmation after a successful submission and clear, accessible errors when submission data is invalid or storage fails.
- Add a feedback list to the existing dashboard for clinic staff to review saved submissions.
- Follow the established TypeScript, Hono JSX, Pico.css, SQLite migration, and Vitest patterns. Do not add dependencies for this feature.
- Keep the form and staff list readable and usable at mobile and desktop widths.

## Decisions from the stakeholder interview

- **Location:** A simple, dedicated feedback page linked from the main navigation.
- **Fields:** Name, email, category, and message. Treat all four as required.
- **Submission:** Validate and save to SQLite, then confirm success to the submitter.
- **Staff access:** Include a feedback list on the existing dashboard.
- **Authentication:** The current application has no authentication. Use the existing dashboard access pattern and defer authentication; the feedback list is staff-facing, but is not access-controlled in this phase.

## Context and constraints

- The product serves AI agents and clinic staff and should feel calming, trustworthy, and approachable. Keep copy clear and welcoming.
- The current stack is Node.js 22.5+, TypeScript, Hono/Hono JSX, Pico.css, SQLite through `node:sqlite`, and Vitest.
- The database uses ordered, transactional migrations. Add a new migration without modifying or removing existing user data, and preserve repeatable initialization behavior.
- Use server-side validation even when browser form constraints are present. Trim text fields, reject blank required values, validate email syntax, and enforce explicit length limits consistently in the UI, route, and database.
- Use parameterized SQLite statements. Do not expose stack traces or internal database errors in user-facing responses.
- Feedback is not displayed publicly, emailed, edited, deleted, or exported as part of this phase. No external notification service is introduced.
- Because authentication is deferred, do not describe dashboard feedback as private or secure. Anyone able to access the dashboard can access submitted contact details; access control is a known limitation, not a guarantee.
- The exact category labels and field length limits should be kept small, documented in the implementation, and covered by validation tests.

