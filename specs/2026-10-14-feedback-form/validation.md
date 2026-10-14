# Feedback Form Validation

The feature is ready to merge when the following checks pass.

## Functional acceptance

- The main navigation links to a dedicated feedback page.
- The form exposes required name, email, category, and message fields with associated labels and usable error messages.
- Invalid submissions are rejected by the server, are not saved, and return a clear response that allows correction.
- Valid submissions are saved in SQLite, and the submitter receives a clear confirmation.
- Saved submissions appear in the existing dashboard feedback list; the empty list has a clear empty state.
- The feedback list is not represented as private or access-controlled because dashboard authentication is out of scope.
- The form and feedback list remain readable and usable on mobile and desktop viewports.

## Data and reliability

- A new ordered migration creates the feedback storage without changing existing schema/data unexpectedly.
- Re-running database initialization does not create duplicate migrations or remove existing user data.
- Required values, email syntax, categories, and agreed field length limits are enforced server-side and consistently with the storage constraints.
- SQL writes use parameterized statements.
- Database/storage errors do not produce a success response or reveal internal error details to users.

## Automated checks

- Focused tests cover valid feedback persistence and listing, invalid/missing fields, category and length boundaries, successful confirmation, empty dashboard state, and repeatable migration behavior.
- Existing and new tests pass with `npm test`.
- The standard automated checks pass with `npm run validate`.
- The production TypeScript build succeeds with `npm run build`.

