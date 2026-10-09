# Alora Design System

The design system for the **Coach** and **Surfer** platforms of Alora Surf Coaching. The single source of truth for designers, developers and AI agents: W3C/DTCG tokens, 32 documented React components, templates, example pages and the Figma library.

**Figma:** [Design System](https://www.figma.com/design/GZRi3cvtWVfu0MTxPvPEcY/Design-System) · **Version:** 1.0.0 · **Themes:** dark (default) and light

## Getting started
| If you are… | Read |
|---|---|
| An AI agent | [docs/ai-usage-guide.md](docs/ai-usage-guide.md) and [MANIFEST.json](MANIFEST.json) |
| A designer | The Figma library and [docs/principles.md](docs/principles.md) |
| A developer | This README, [tokens/README.md](tokens/README.md) and each component's `.docs.md` |

### Install
The package is published to GitHub Packages. Add an `.npmrc` next to your app's `package.json`:
```
@aggfr:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
```
`GITHUB_TOKEN` must be a token with `read:packages`. Then:
```bash
npm install @aggfr/alora-design-system
```
The app also needs `react` and `react-dom` (18 or later) and must load the Inter and Outfit fonts (e.g. from Google Fonts).

```tsx
import '@aggfr/alora-design-system/tokens.css';
import '@aggfr/alora-design-system/components.css';
import { Button, FormField, Input } from '@aggfr/alora-design-system';

<html data-theme="dark">   {/* or "light" */}
  <Button variant="primary" leadingIcon="upload" onPress={upload}>Upload clip</Button>
</html>
```

## Structure
```
design-system/
├── MANIFEST.json                 Index of tokens and components (schema: docs/manifest.schema.json)
├── package.json                  npm package @aggfr/alora-design-system
├── CHANGELOG.md
├── index.ts                      Public API
├── tests/                        Component tests (Vitest + Testing Library + axe)
├── tokens/
│   ├── primitives.tokens.json    Layer 1 · base values (198)
│   ├── semantic.tokens.json      Layer 2 · intent, dark theme (131)
│   ├── semantic.light.tokens.json         light theme (72 color overrides)
│   ├── component.tokens.json     Layer 3 · per component (86)
│   └── README.md
├── dist/                         Generated: tokens.css, tokens.resolved.json
├── styles/components.css         ds-* classes that only read var(--ds-*)
├── components/
│   ├── atoms/<kebab>/            Name.tsx · Name.tokens.json · Name.docs.md · Name.examples.md
│   ├── molecules/<kebab>/
│   └── organisms/<kebab>/
├── templates/                    DashboardTemplate, AuthTemplate
├── pages/                        CoachQueuePage, SurferLoginPage (examples)
├── lib/cx.ts
├── docs/
│   ├── principles.md
│   ├── naming-conventions.md
│   ├── atomic-design.md
│   ├── accessibility.md
│   ├── ai-usage-guide.md
│   └── manifest.schema.json
└── scripts/
    ├── build_tokens.py           Validates layers and references, writes dist/
    ├── component_specs.py        Specification of the 32 components
    ├── build_docs.py             Writes .docs.md, .examples.md, .tokens.json and MANIFEST.json
    └── check_hardcoded.py        Fails if any value bypasses the tokens
```

## Inventory
- **Atoms (16):** Button, Icon, Label, Text, Heading, Input, Textarea, Checkbox, Radio, Switch, Avatar, Badge, Tag, Spinner, Divider, Tooltip
- **Molecules (9):** FormField, SearchField, ListItem, TagChip, Stat, Notification, Breadcrumb, Pagination, NavigationItem
- **Organisms (7):** Sidebar, PageHeader, SubmissionCard, DataList, EmptyState, Modal, FormSection
- **Templates (2):** DashboardTemplate, AuthTemplate
- **Pages (2):** CoachQueuePage (dark and light), SurferLoginPage
- **Planned:** NavigationBar, DataTable, CommandPalette, Footer, Select, ProgressBar, ReviewCard

## Figma
| Page | Content |
|---|---|
| 📘 Cover | Cover and version |
| 🎨 Foundations | Colors, typography, spacing, radii, elevation |
| ⚛️ Atoms · 🧬 Molecules · 🦠 Organisms | Component sets with variants and properties, all bound to variables |
| 📐 Templates | Dashboard and Auth with slots |
| 📄 Pages | Coach · Queue (Dark and Light) and Surfer · Log in |

Variables: **Primitives** (hidden from publishing), **Semantic** (Dark / Light modes) and **Component** collections. Every variable has the code syntax `var(--ds-…)` so Dev Mode shows the right token. 12 text styles and 4 effect styles.

## Workflow
```bash
npm ci                      # once
npm run tokens              # after editing tokens/*.json (validates layers, writes dist/)
npm run docs                # after editing scripts/component_specs.py
npm run lint:tokens         # no value bypasses the tokens
npm run typecheck
npm test                    # component behavior, keyboard and axe tests (tests/)
npm run build               # builds the package into build/
```
CI (`.github/workflows/design-system.yml`) runs all of these on every pull request and also fails if `dist/`, `MANIFEST.json` or the generated component docs were not regenerated. The Storybook workflow audits every story in both themes with axe (including contrast) and compares screenshots against `storybook/tests/__screenshots__`; see `storybook/README.md` to update the baselines.

## Releasing
1. Add the changes under **Unreleased** in [CHANGELOG.md](CHANGELOG.md) and pick the version with the rules at the top of that file.
2. Set the same version in `package.json` (and in this README), move the changelog entries under it and merge to `main`.
3. Tag the merge commit `design-system-v<version>` and push the tag. The release workflow runs the checks, publishes the package to GitHub Packages and creates a GitHub release.
Component `.docs.md`, `.examples.md` and `.tokens.json` files are generated from `scripts/component_specs.py`: edit the spec, not the generated files.

## Design decisions
1. **Primary button gradient** darkened to `ocean.800 → ocean.700` for contrast (the original gave 2.5–3.7:1). Approved on 2026-10-09.
2. **Reading typeface:** Inter replaces Apple SD Gothic Neo (a macOS system font that is not available on the web or Windows); it is kept as a fallback.
3. **Progression plan color:** Coach uses violet and Surfer uses sun yellow. The system uses violet for the plan Badge and keeps yellow for the surfer's `highlight` Tag.
4. **Light theme:** proposed by the system; the original designs are dark only.

## Changelog
See [CHANGELOG.md](CHANGELOG.md).
