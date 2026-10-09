# TagChip

**Atomic Design category:** Molecule · **Status:** `beta` · **Version:** 1.0.0
**Figma:** [TagChip](https://www.figma.com/design/GZRi3cvtWVfu0MTxPvPEcY/Design-System?node-id=13-139)

## 1. Name and category
`TagChip` — Molecule.

## 2. Purpose
Selectable or removable chip.

## 3. When to use
- Filters (level, wave type), labels the user adds or removes.

## 4. When not to use
- Static information: Tag or Badge.

## 5. Anatomy
1. Pill container
2. Label
3. Optional remove button

## 6. Props
| Prop | Type | Default | Required | Description |
|---|---|---|---|---|
| `label` | `string` | — | Yes | Text. |
| `isSelected` | `boolean` | `false` | No | Selected. |
| `onToggle` | `() => void` | — | No | Selection. |
| `onRemove` | `() => void` | — | No | Shows a remove button. |

## 7. Variants and states
- No visual variants: behavior is controlled with props.
- **States:** `default`, `hover`, `selected`

## 8. Tokens used
- `tag.radius`
- `tag.padding-horizontal`
- `color.action.secondary.*`
- `color.background.brand-subtle`
- `color.border.brand`
- `color.text.brand`

The component's own tokens live in [`TagChip.tokens.json`](./TagChip.tokens.json). Primitive tokens are never used directly.

## 9. Interaction
- Clicking toggles; the remove button does not toggle.

## 10. Accessibility
- `<button aria-pressed>`; remove is a separate button with `aria-label="Remove {label}"`.

## 11. Composition rules
- Horizontal groups that wrap, with a `size.space.small` gap.
- Depends on: `Text`, `Icon`.

## 12. Code examples
```tsx
<TagChip label="Advanced" isSelected onToggle={toggle} onRemove={remove} />
```
More examples in [`TagChip.examples.md`](./TagChip.examples.md).

## 13. Anti-patterns
- Using TagChip for system states.

## 14. Version, status and changelog
- Version: `1.0.0`
- Status: `beta`
- 2026-10-09 · 1.0.0 · First version, extracted from Coach Platform and Surfer Platform.
