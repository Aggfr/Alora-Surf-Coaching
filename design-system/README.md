# Alora Design System

The design system for the **Coach** and **Surfer** platforms of Alora Surf Coaching. The single source of truth for designers, developers and AI agents: W3C/DTCG tokens, 32 documented React components, templates, example pages and the Figma library.

**Figma:** [Design System](https://www.figma.com/design/GZRi3cvtWVfu0MTxPvPEcY/Design-System) · **Version:** 1.0.0 · **Themes:** dark (default) and light

## Getting started
| If you are… | Read |
|---|---|
| An AI agent | [docs/ai-usage-guide.md](docs/ai-usage-guide.md) and [MANIFEST.json](MANIFEST.json) |
| A designer | The Figma library and [docs/principles.md](docs/principles.md) |
| A developer | This README, [tokens/README.md](tokens/README.md) and each component's `.docs.md` |

```tsx
import './dist/tokens.css';
import './styles/components.css';
import { Button, FormField, Input } from './index';

<html data-theme="dark">   {/* or "light" */}
  <Button variant="primary" leadingIcon="upload" onPress={upload}>Upload clip</Button>
</html>
```

## Structure
```
design-system/
├── MANIFEST.json                 Index of tokens and components (schema: docs/manifest.schema.json)
├── index.ts                      Public API
├── tokens/
│   ├── primitives.tokens.json    Layer 1 · base values (198)
│   ├── semantic.tokens.json      Layer 2 · intent, dark theme (130)
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
python3 scripts/build_tokens.py     # after editing tokens/*.json
python3 scripts/build_docs.py       # after editing scripts/component_specs.py
python3 scripts/check_hardcoded.py  # before every commit
```
Component `.docs.md`, `.examples.md` and `.tokens.json` files are generated from `scripts/component_specs.py`: edit the spec, not the generated files.

## Design decisions
1. **Primary button gradient** darkened to `ocean.800 → ocean.700` for contrast (the original gave 2.5–3.7:1). Approved on 2026-10-09.
2. **Reading typeface:** Inter replaces Apple SD Gothic Neo (a macOS system font that is not available on the web or Windows); it is kept as a fallback.
3. **Progression plan color:** Coach uses violet and Surfer uses sun yellow. The system uses violet for the plan Badge and keeps yellow for the surfer's `highlight` Tag.
4. **Light theme:** proposed by the system; the original designs are dark only.

## Changelog
- **1.0.0** (2026-10-09): first version, extracted from Coach Platform and Surfer Platform.
