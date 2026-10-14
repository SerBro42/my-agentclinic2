# Feedback Form Implementation Plan

Complete the task groups in order. Keep the implementation within the scope and decisions in [requirements.md](./requirements.md), and use the checks in [validation.md](./validation.md) before considering the feature complete.

## 1. Persist feedback safely

1. Define a feedback record shape and a new ordered SQLite migration for feedback submissions.
2. Choose and document concise fixed category labels and explicit field length limits.
3. Add parameterized create/list database operations with server-side integrity constraints where appropriate.
4. Verify migrations remain ordered, transactional, repeatable, and preserve existing records.

## 2. Build the feedback submission flow

1. Add a dedicated feedback page using the shared layout and link it from the main navigation.
2. Render required name, email, category, and message fields with labels, browser constraints, and accessible error messaging.
3. Add a POST route that trims and validates input on the server, persists valid submissions, and handles storage failures without exposing internal details.
4. Preserve safe user-entered values when redisplaying invalid submissions and show a clear success confirmation after a successful save.
5. Keep the page usable at mobile and desktop widths using existing styling.

## 3. Let staff review submissions

1. Add a feedback section to the existing dashboard, showing saved submissions in a clear, readable order with their submitted details.
2. Ensure empty-state behavior is clear and that output is safely escaped by the existing rendering conventions.
3. Keep the staff-facing list on the existing dashboard access pattern; do not imply it is protected while authentication is absent.

## 4. Test and validate the feature

1. Add focused database and route tests for migration behavior, persistence, field validation, successful confirmation, and storage/list behavior.
2. Check navigation, dashboard rendering, empty states, and the responsive form/list experience.
3. Run `npm test`, `npm run validate`, and `npm run build`; resolve regressions before merge.

