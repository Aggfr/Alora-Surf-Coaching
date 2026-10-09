# SectionHeader

**Atomic Design category:** Molecule · **Status:** `stable` · **Version:** 1.1.0
**Figma:** [SectionHeader](https://www.figma.com/design/GZRi3cvtWVfu0MTxPvPEcY/Design-System?node-id=62-417)

## 1. Name and category
`SectionHeader` — Molecule.

## 2. Purpose
Title of a simple page or of a section inside it, with an optional icon, subtitle and action.

## 3. When to use
- Assigned surfers, Your history, Account & Billing, Weekly availability.

## 4. When not to use
- A greeting header with avatar and plan: PageHeader.
- A detail screen with a back button: TopBar.

## 5. Anatomy
1. Optional IconTile
2. Heading
3. Optional subtitle
4. Optional action on the right

## 6. Props
| Prop | Type | Default | Required | Description |
|---|---|---|---|---|
| `title` | `string` | — | Yes | Section name. |
| `subtitle` | `ReactNode` | — | No | Count or explanation; accepts `<strong>`. |
| `icon` | `IconName` | — | No | Leading icon in a tile. |
| `size` | `'small' \| 'large'` | `'large'` | No | large for page sections, small for groups inside a card. |
| `as` | `'h1' \| 'h2' \| 'h3'` | `h1 when large, h2 when small` | No | Heading level. |
| `action` | `ReactNode` | — | No | Link or Button on the right. |
| `id` | `string` | — | No | id of the heading, for `aria-labelledby`. |

## 7. Variants and states
- **size:** `small`, `large`
- **States:** `—`

## 8. Tokens used
- `typography.heading-large`
- `typography.heading-small`
- `typography.body-small`
- `color.text.secondary`
- `icon-tile.*`
- `size.space.medium`

The component's own tokens live in [`SectionHeader.tokens.json`](./SectionHeader.tokens.json). Primitive tokens are never used directly.

## 9. Interaction
- Only the action is interactive.

## 10. Accessibility
- Real heading element; keep levels in order.

## 11. Composition rules
- First element of a section; DataList and AvailabilityGrid sit under it.
- Depends on: `Heading`, `IconTile`.

## 12. Code examples
```tsx
<SectionHeader title="Assigned surfers" subtitle="12 surfers" action={<Link href="/surfers">See all</Link>} />
```
More examples in [`SectionHeader.examples.md`](./SectionHeader.examples.md).

## 13. Anti-patterns
- Bold Text pretending to be a title.

## 14. Version, status and changelog
- Version: `1.1.0`
- Status: `stable`
- 2026-10-09 · 1.1.0 · First version, added for the Coach and Surfer redesign screens.
