# About Us Page Validation

The feature is ready to merge when the following checks pass.

## Functional acceptance

- The main navigation links to a dedicated About Us page that renders successfully in the shared site layout.
- The page briefly describes AgentClinic, communicates its advantages without unsupported factual claims, and identifies AI agents as its main customer profile.
- Address and contact/location information are clearly marked placeholders, not real clinic information.
- An embedded OpenStreetMap view displays a generic demo area, with adjacent text that clearly says it is illustrative and not the clinic's location.
- The map has an accessible title or equivalent accessible name, and the page remains readable and usable at mobile and desktop widths.
- No real clinic location, address, or contact data is introduced, and no new map dependency is added.

## Automated checks

- Focused route tests cover the page response, navigation link, clinic/customer-profile content, explicit identifying-detail placeholders, and the demo-map disclaimer/embed. The existing route tests are in `src/app.test.ts`; a focused run can use `npx vitest run src/app.test.ts`.
- Existing and new tests pass with `npm test`.
- The project's standard automated validation passes with `npm run validate` (currently runs Vitest as well).
- The production TypeScript build succeeds with `npm run build`.

## Manual review

- Confirm that address/contact placeholders and the mock map destination cannot reasonably be mistaken for the clinic's actual details.
- Check the embedded map's sizing, visible disclaimer, and page navigation at mobile and desktop widths.
- Confirm that the map provider's third-party request behavior is understood and that the embed loads without requiring a new project dependency or undisclosed credentials.
