# TopBar

**Atomic Design category:** Organism · **Status:** `stable` · **Version:** 1.1.0
**Figma:** [TopBar](https://www.figma.com/design/GZRi3cvtWVfu0MTxPvPEcY/Design-System?node-id=63-229)

## 1. Name and category
`TopBar` — Organism.

## 2. Purpose
Header of a detail or task screen with a back button and a title.

## 3. When to use
- New submission, Edit profile, Change coach, a surfer detail, a review.

## 4. When not to use
- Top-level views reached from the Sidebar: PageHeader or SectionHeader.

## 5. Anatomy
1. Back IconButton
2. Title (Heading medium, h1)
3. Optional actions on the right
4. Bottom border (`top-bar.border`)

## 6. Props
| Prop | Type | Default | Required | Description |
|---|---|---|---|---|
| `title` | `string` | — | Yes | Screen title. |
| `onBack` | `() => void` | — | No | Shows the back button. |
| `backLabel` | `string` | `'Back'` | No | Accessible name of the back button. |
| `actions` | `ReactNode` | — | No | Up to two buttons or links. |

## 7. Variants and states
- **back:** `true`, `false`
- **States:** `—`

## 8. Tokens used
- `top-bar.background`
- `top-bar.border`
- `typography.heading-medium`
- `size.space.medium`
- `size.layout.control-height`

The component's own tokens live in [`TopBar.tokens.json`](./TopBar.tokens.json). Primitive tokens are never used directly.

## 9. Interaction
- The back button returns to the previous screen.

## 10. Accessibility
- `<header>` with the only h1 of the screen.
- The back button has an accessible name.

## 11. Composition rules
- First element inside DashboardTemplate (narrow) or a full-screen flow.
- Depends on: `IconButton`, `Heading`.

## 12. Code examples
```tsx
<TopBar title="New submission" onBack={goBack} />
```
More examples in [`TopBar.examples.md`](./TopBar.examples.md).

## 13. Anti-patterns
- A back button that loses unsaved changes without asking.

## 14. Version, status and changelog
- Version: `1.1.0`
- Status: `stable`
- 2026-10-09 · 1.1.0 · First version, added for the Coach and Surfer redesign screens.
