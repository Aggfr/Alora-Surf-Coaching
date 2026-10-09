# IconTile

**Atomic Design category:** Atom · **Status:** `stable` · **Version:** 1.1.0
**Figma:** [IconTile](https://www.figma.com/design/GZRi3cvtWVfu0MTxPvPEcY/Design-System?node-id=FIGMA_IconTile)

## 1. Name and category
`IconTile` — Atom.

## 2. Purpose
Tinted square or circle that frames an icon or a letter.

## 3. When to use
- Leading icon of summary rows, section headers and upload areas.
- Result screens (success check, error).
- Coach initial in a review.

## 4. When not to use
- People with a name: Avatar.
- Plain inline icons: Icon.

## 5. Anatomy
1. Container (`icon-tile.*`, square or circle)
2. Icon or one letter
3. Optional halo (`elevation.halo-*`)

## 6. Props
| Prop | Type | Default | Required | Description |
|---|---|---|---|---|
| `icon` | `IconName` | — | No | Icon. Use children for a letter. |
| `children` | `ReactNode` | — | No | Letter or short text instead of an icon. |
| `size` | `'small' \| 'medium' \| 'large' \| 'xlarge'` | `'medium'` | No | 24 / 36 / 56 / 96 px. |
| `tone` | `'brand' \| 'danger' \| 'highlight' \| 'neutral' \| 'solid'` | `'brand'` | No | Tint. solid is the filled teal for success. |
| `shape` | `'square' \| 'circle'` | `'square'` | No | Shape. |
| `hasHalo` | `boolean` | `false` | No | Soft glow around the tile. |
| `label` | `string` | — | No | Makes the tile meaningful (`role=img`). |

## 7. Variants and states
- **size:** `small`, `medium`, `large`, `xlarge`
- **tone:** `brand`, `danger`, `highlight`, `neutral`, `solid`
- **shape:** `square`, `circle`
- **States:** `—`

## 8. Tokens used
- `icon-tile.background`
- `icon-tile.foreground`
- `icon-tile.border`
- `icon-tile.radius`
- `size.layout.icon-tile-*`
- `color.feedback.danger.*`
- `color.action.highlight.*`
- `color.action.primary.background`
- `elevation.halo-brand`
- `elevation.halo-danger`

The component's own tokens live in [`IconTile.tokens.json`](./IconTile.tokens.json). Primitive tokens are never used directly.

## 9. Interaction
- Not interactive.

## 10. Accessibility
- Decorative by default; with `label` it becomes `role=img`.

## 11. Composition rules
- SummaryRow, SectionHeader, Dropzone, ResultState, ReviewCard, Modal with icon.
- Depends on: `Icon`.

## 12. Code examples
```tsx
<IconTile icon="check" tone="solid" shape="circle" size="xlarge" hasHalo />
```
More examples in [`IconTile.examples.md`](./IconTile.examples.md).

## 13. Anti-patterns
- Using a tile as a button.
- Putting more than two characters inside.

## 14. Version, status and changelog
- Version: `1.1.0`
- Status: `stable`
- 2026-10-09 · 1.1.0 · First version, added for the Coach and Surfer redesign screens.
