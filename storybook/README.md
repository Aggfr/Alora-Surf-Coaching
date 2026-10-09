# Alora Design System · Storybook

Live, interactive reference for every component in [`design-system/`](../design-system), published to GitHub Pages at **https://aggfr.github.io/Alora-Surf-Coaching/** on every merge to `main`.

## What it shows
- **Foundations:** colors, typography, spacing, radius, shadows, motion and icons, generated from `design-system/dist/tokens.resolved.json`.
- **Atoms, Molecules, Organisms:** every component with Controls for its props, a story per variant and state, and its full `.docs.md` guidelines.
- **Templates and Pages:** DashboardTemplate, AuthTemplate, CoachQueuePage and SurferLoginPage.
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
