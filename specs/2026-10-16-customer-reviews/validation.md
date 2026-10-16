# Customer Reviews Validation

The feature is ready to merge when the following checks pass.

## Functional acceptance

- The main navigation links to a dedicated customer reviews page.
- The page displays a small set of readable review-style examples consistent with AgentClinic's welcoming voice.
- The page and/or content clearly identifies the reviews as fictional/demo examples, not genuine or verified patient testimonials.
- The page uses the established shared layout and remains usable on mobile and desktop viewports.
- No review submission, storage, moderation, or external review-service behavior is introduced.

## Automated checks

- Focused tests cover the reviews route, navigation link, rendered review examples, and explicit demo labeling.
- Existing and new tests pass with `npm test`.
- The standard automated checks pass with `npm run validate`.
- The production TypeScript build succeeds with `npm run build`.

## Manual review

- Confirm the demo disclaimer is prominent enough that visitors will not reasonably mistake the examples for genuine patient reviews.
- Check the page at mobile and desktop widths for readable text, spacing, and navigation.
