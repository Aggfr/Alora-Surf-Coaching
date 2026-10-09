# Sidebar

**Atomic Design category:** Organism · **Status:** `stable` · **Version:** 1.1.0
**Figma:** [Sidebar](https://www.figma.com/design/GZRi3cvtWVfu0MTxPvPEcY/Design-System?node-id=14-84)

## 1. Name and category
`Sidebar` — Organism.

## 2. Purpose
Fixed main navigation on desktop.

## 3. When to use
- Every authenticated Coach and Surfer view at ≥ 1024px.

## 4. When not to use
- Mobile: bottom NavigationBar (planned).

## 5. Anatomy
1. List of NavigationItem
2. Logo at the bottom

## 6. Props
| Prop | Type | Default | Required | Description |
|---|---|---|---|---|
| `product` | `'coach' \| 'surfer'` | — | Yes | Sets the default items: Coach Queue, Surfers, Schedule, Profile; Surfer Dashboard, History, Profile. |
| `activeHref` | `string` | — | Yes | Active item. |
| `items` | `Array<NavigationItemProps>` | `from product` | No | Overrides the items (max. 5). |

## 7. Variants and states
- **product:** `coach`, `surfer`
- **States:** `—`

## 8. Tokens used
- `sidebar.background`
- `sidebar.width`
- `navigation-item.*`

The component's own tokens live in [`Sidebar.tokens.json`](./Sidebar.tokens.json). Primitive tokens are never used directly.

## 9. Interaction
- Stays fixed while scrolling (`layer.sticky`).

## 10. Accessibility
- `<nav aria-label="Main">`; a single `aria-current`.

## 11. Composition rules
- Items slot (max. 5) + Logo.
- Not customizable: width, background, logo position.
- Depends on: `NavigationItem`, `Logo`.

## 12. Code examples
```tsx
<Sidebar product="coach" activeHref="/" />
```
More examples in [`Sidebar.examples.md`](./Sidebar.examples.md).

## 13. Anti-patterns
- Adding actions (buttons) to the Sidebar.

## 14. Version, status and changelog
- Version: `1.1.0`
- Status: `stable`
- 2026-10-09 · 1.0.0 · First version, extracted from Coach Platform and Surfer Platform.
- 2026-10-09 · 1.1.0 · Default items follow the redesign (Coach: Queue, Surfers, Schedule, Profile; Surfer: Dashboard, History, Profile) and the Logo sits at the bottom.
