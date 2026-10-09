# PageHeader

**Atomic Design category:** Organism · **Status:** `stable` · **Version:** 1.1.0
**Figma:** [PageHeader](https://www.figma.com/design/GZRi3cvtWVfu0MTxPvPEcY/Design-System?node-id=14-116)

## 1. Name and category
`PageHeader` — Organism.

## 2. Purpose
Header of each view with a title, subtitle and actions.

## 3. When to use
- First section of every view inside DashboardTemplate.

## 4. When not to use
- Inner section titles: Heading medium.

## 5. Anatomy
1. Title (Heading, h1)
2. Optional subtitle
3. Actions slot (max. 2)

## 6. Props
| Prop | Type | Default | Required | Description |
|---|---|---|---|---|
| `title` | `string` | — | Yes | Greeting or title. |
| `subtitle` | `string` | — | No | Supporting text. |
| `actions` | `ReactNode` | — | No | Tag, Avatar or Button (max. 2). |
| `size` | `'display' \| 'large'` | `'display'` | No | large for secondary dashboards (Schedule, Surfers). |

## 7. Variants and states
- **context:** `coach`, `surfer`
- **size:** `display`, `large`
- **States:** `—`

## 8. Tokens used
- `typography.display`
- `typography.heading-large`
- `color.text.brand`
- `size.space.small`
- `size.space.medium`
- `size.layout.content-width`

The component's own tokens live in [`PageHeader.tokens.json`](./PageHeader.tokens.json). Primitive tokens are never used directly.

## 9. Interaction
- Not interactive; its actions are.

## 10. Accessibility
- The only h1 in the view.

## 11. Composition rules
- DashboardTemplate Header slot.
- Depends on: `Heading`, `Text`, `Tag`, `Avatar`.

## 12. Code examples
```tsx
<PageHeader title="Welcome, Alejandro" subtitle="Connect with your surfers" actions={<Avatar name="Coach" tone="elite" />} />
```
More examples in [`PageHeader.examples.md`](./PageHeader.examples.md).

## 13. Anti-patterns
- More than two actions; use a menu.

## 14. Version, status and changelog
- Version: `1.1.0`
- Status: `stable`
- 2026-10-09 · 1.0.0 · First version, extracted from Coach Platform and Surfer Platform.
- 2026-10-09 · 1.1.0 · Added the large size.
