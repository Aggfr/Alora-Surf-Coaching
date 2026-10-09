# Changelog

All notable changes to `@aggfr/alora-design-system`. The package follows [Semantic Versioning](https://semver.org):

- **Major:** a token or component is removed or renamed, a prop changes meaning, or a default changes how existing screens look.
- **Minor:** a new token, component, variant or prop, or a deprecation (with its alias kept).
- **Patch:** a bug fix, a docs fix, or a visual fix that brings code back in line with Figma.

## 1.1.0 (2026-10-09)
Everything needed to build the Coach and Surfer redesign screens with the system. Typography is unchanged (Outfit headings, Inter body).

**New components**
- Atoms: `Logo`, `Link`, `IconButton`, `IconTile`, `ProgressBar`, `Illustration` (auth background, surfers, nothing reviewed; colors follow the theme).
- Molecules: `OptionCard`, `SegmentedControl`, `Stepper`, `Dropzone`, `ClipItem`, `SummaryRow`, `StatGroup`, `SectionHeader`, `PeriodStepper`.
- Organisms: `TopBar`, `ResultState`, `ReviewCard`, `VideoPlayer`, `AvailabilityGrid`.

**New variants and props**
- `Button` variant `highlight`; a disabled primary keeps its brand gradient at 50% opacity.
- `Avatar` size `xlarge` and tones `session`, `performance`. `Spinner` size `xlarge`.
- `Badge` tones `plan-session`, `plan-performance`, `appearance="solid"` for status on images, and an optional `icon`.
- `Divider` `label` (OR separators). `Stat` `caption` and variants `featured`, `compact`.
- `ListItem` `avatarTone`, `badge`, linked person rows; definition actions are now `Link`s.
- `Notification` `density="compact"`; danger uses `alert-circle`.
- `DataList` optional title, `layout="inline"`, `isStriped`. `EmptyState` `title`, `hint`, `illustration`, `variant="inline"`.
- `SubmissionCard` optional `surfer` and `deadline`, `statusText`, `noteLabel`, `footnote`, `secondaryAction`.
- `Modal` `icon` with a centered layout. `PageHeader` `size="large"`.
- `Sidebar` default items follow the redesign (Coach: Queue, Surfers, Schedule, Profile; Surfer: Dashboard, History, Profile) and show the Logo.
- `AuthTemplate` `hasLogo`, `background="illustrated"`, optional title. `DashboardTemplate` `width="wide"`.
- Icons: download, play, pause, volume, maximize, shield, alert-circle, file-text, plus-circle, x-circle.

**New tokens**
- `color.pink.*` primitives and `color.plan.session` (pink) and `color.plan.performance` (sun).
- `color.status.*.solid`, `color.action.highlight.*`, `color.media.*`, `opacity.disabled`, `elevation.halo-brand`, `elevation.halo-danger`, `size.border.heavy` and new `size.layout.*` sizes (icon tiles, avatar xlarge, thumbnails, illustrations, progress height).
- Component tokens for the new components and `button.highlight.*`.

**Approximations**: some one-off colors in the source files map to the closest palette token instead of new primitives (Coach notification orange, a few blue, green and yellow accents).

**Tooling**
- Primary action matches the Coach Platform CTA exactly: `#3b8eaa → #5aaec8` (`ocean.600 → ocean.400`), diagonal. Hover and pressed are `ocean.700` and `ocean.800`. White text on it is 3.7–2.5:1, a documented accessibility exception.
- Installable npm package (`@aggfr/alora-design-system`) published to GitHub Packages, with CSS and token entry points.
- CI checks that tokens, docs and MANIFEST are regenerated, that no value bypasses the tokens, and runs the type check and the component tests.
- Component tests for behavior, keyboard use and axe rules; Storybook suite that audits accessibility (including contrast) and compares screenshots for every story in both themes.

## 1.0.0 (2026-10-09)
- First version, extracted from Coach Platform and Surfer Platform.
