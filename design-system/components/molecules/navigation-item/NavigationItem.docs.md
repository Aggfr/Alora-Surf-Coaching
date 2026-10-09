# NavigationItem

**Atomic Design category:** Molecule · **Status:** `stable` · **Version:** 1.0.0
**Figma:** [NavigationItem](https://www.figma.com/design/GZRi3cvtWVfu0MTxPvPEcY/Design-System?node-id=13-293)

## 1. Name and category
`NavigationItem` — Molecule.

## 2. Purpose
Main navigation entry with an icon and a label.

## 3. When to use
- Inside Sidebar.

## 4. When not to use
- Actions: Button.

## 5. Anatomy
1. 24px icon
2. Label
3. Bottom divider

## 6. Props
| Prop | Type | Default | Required | Description |
|---|---|---|---|---|
| `label` | `string` | — | Yes | Destination. |
| `icon` | `IconName` | — | Yes | Icon. |
| `href` | `string` | — | Yes | URL. |
| `isActive` | `boolean` | `false` | No | Current page. |

## 7. Variants and states
- No visual variants: behavior is controlled with props.
- **States:** `default`, `hover`, `active`

## 8. Tokens used
- `navigation-item.*`
- `color.action.ghost.background-hover`
- `size.space.large`

The component's own tokens live in [`NavigationItem.tokens.json`](./NavigationItem.tokens.json). Primitive tokens are never used directly.

## 9. Interaction
- Hover tints the icon with the brand color.

## 10. Accessibility
- `<a>` with `aria-current=page` when active.
- Active state is shown by both text and icon color, not text color alone.

## 11. Composition rules
- Only inside Sidebar.
- Depends on: `Icon`, `Text`.

## 12. Code examples
```tsx
<NavigationItem label="Queue" icon="play-circle" href="/queue" isActive />
```
More examples in [`NavigationItem.examples.md`](./NavigationItem.examples.md).

## 13. Anti-patterns
- More than one active item at once.

## 14. Version, status and changelog
- Version: `1.0.0`
- Status: `stable`
- 2026-10-09 · 1.0.0 · First version, extracted from Coach Platform and Surfer Platform.
