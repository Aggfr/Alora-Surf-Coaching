# Alora Design System · Storybook

Live, interactive reference for every component in [`design-system/`](../design-system), published to GitHub Pages at **https://aggfr.github.io/Alora-Surf-Coaching/** on every merge to `main`.

## What it shows
- **Foundations:** colors, typography, spacing, radius, shadows, motion and icons, generated from `design-system/dist/tokens.resolved.json`.
- **Atoms, Molecules, Organisms:** every component with Controls for its props, a story per variant and state, and its full `.docs.md` guidelines.
- **Templates:** DashboardTemplate and AuthTemplate.
- **Themes:** Dark (default) and Light from the toolbar. **Accessibility:** axe checks in the Accessibility panel.

## Run it locally
```bash
cd storybook
npm install
npm run storybook        # http://localhost:6006
npm run build-storybook  # static site in storybook-static/
```

## Adding a component
Add `stories/<level>/<Name>.stories.tsx` next to the others. Import the component from `design-system/` and its docs with `docsFrom(docs, '<folder>')` so the page shows the guidelines from the repo.

## Accessibility and visual tests
`tests/stories.spec.ts` opens every story in the built Storybook, in the Dark and Light themes, and:
- runs an axe audit (WCAG 2.2 AA, including color contrast) on the story;
- compares a screenshot with its baseline in `tests/__screenshots__/`.

```bash
npm run build-storybook
npx playwright install chromium   # once
npm run test:visual
```

CI runs this on every pull request. When a visual change is intended, regenerate the baselines on your branch: run the **Storybook** workflow from the Actions tab on that branch with **update-snapshots** ticked. It commits the new screenshots to the branch. Baselines are taken on the CI's Linux runner, so do not commit screenshots taken on your own machine.
