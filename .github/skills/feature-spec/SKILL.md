---
name: feature-spec
description: 'Create a feature specification from the next incomplete phase in specs/roadmap.md. Use when planning a feature, preparing implementation tasks, or creating requirements and validation docs.'
argument-hint: 'Optional feature or roadmap phase to consider'
user-invocable: true
disable-model-invocation: false
---

# Feature specification

Prepare a feature for implementation by discussing its scope with the user and creating a dated specification directory on a dedicated branch. This workflow creates planning documents only; do not implement the feature.

## Procedure

1. Inspect `specs/roadmap.md` and identify its next incomplete phase. If the user supplied a feature or phase, check how it fits the roadmap rather than silently substituting another item.
2. Read `specs/mission.md`, `specs/tech-stack.md`, and any related existing specs. Use them to frame the proposed work and avoid contradicting established product and stack guidance.
3. Before changing repository files or creating a branch, interview the user in one grouped question call. Use the available AskUserQuestion tool (or the equivalent user-question tool) and group the questions under these three headings:
   - **Scope:** What should the feature do, who is it for, and what is explicitly out of scope?
   - **Decisions:** What product or implementation choices are already made, and what constraints or preferences should guide the work?
   - **Context:** What background, existing behavior, dependencies, or other information should the specification account for?
   
   Include the roadmap phase and a concise proposed feature summary so the user can correct the framing. Ask all three groups together before writing anything. If no user-question tool is available, stop without creating a branch or files; do not skip the interview.
4. Incorporate the user's answers. Resolve remaining material ambiguities with a follow-up question before making changes; do not invent decisions. Agree on a concise kebab-case feature name based on the feature.
5. Check `git status` and existing branches. Preserve all pre-existing work. If the working tree has changes that make creating or switching branches unsafe, pause and ask the user how to proceed. Otherwise create a branch named `feature/YYYY-MM-DD-feature-name`, using the current local date and checking for name collisions first. If that branch already exists, do not overwrite or reset it; ask the user how to proceed.
6. Create `specs/YYYY-MM-DD-feature-name/` and these three files:
   - `plan.md`: a series of numbered task groups, ordered to support incremental implementation and verification. Keep it at planning level; do not implement the tasks.
   - `requirements.md`: record the agreed scope, decisions, context, constraints, and relevant mission/stack guidance. Distinguish confirmed decisions from open questions.
   - `validation.md`: define observable acceptance criteria, relevant focused tests, and the project's applicable validation/build commands. Describe what must pass for the feature to be considered complete and mergeable; do not claim checks have run.
7. Ensure the three documents agree with one another, the roadmap, and the user-approved feature. Do not edit the roadmap or other project files unless the user explicitly requests it.

## Output

Report the selected roadmap phase, created branch, and links to the three spec documents. Mention any open questions or validation checks that remain for implementation.
