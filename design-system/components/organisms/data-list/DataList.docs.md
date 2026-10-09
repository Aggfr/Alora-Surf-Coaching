# DataList

**Atomic Design category:** Organism · **Status:** `stable` · **Version:** 1.0.0
**Figma:** [DataList](https://www.figma.com/design/GZRi3cvtWVfu0MTxPvPEcY/Design-System?node-id=14-224)

## 1. Name and category
`DataList` — Organism.

## 2. Purpose
Read-only data section with a title and definition rows.

## 3. When to use
- Account & Billing, Surf Profile, Legal.

## 4. When not to use
- Comparable tabular data: DataTable (planned).

## 5. Anatomy
1. Title with icon (Heading small)
2. Card with ListItem type=definition or navigation

## 6. Props
| Prop | Type | Default | Required | Description |
|---|---|---|---|---|
| `title` | `string` | — | Yes | Section title. |
| `icon` | `IconName` | — | No | Title icon. |
| `items` | `Array<ListItemProps>` | — | Yes | Rows. |

## 7. Variants and states
- No visual variants: behavior is controlled with props.
- **States:** `—`

## 8. Tokens used
- `card.background`
- `card.border`
- `card.radius`
- `color.background.brand-subtle`
- `size.space.medium`

The component's own tokens live in [`DataList.tokens.json`](./DataList.tokens.json). Primitive tokens are never used directly.

## 9. Interaction
- Row actions are the only interactive elements.

## 10. Accessibility
- `<section aria-labelledby>` with an `<h2>` and `<dl>` rows.

## 11. Composition rules
- Stack sections with a `size.space.xl` gap.
- Depends on: `ListItem`, `Heading`, `Icon`.

## 12. Code examples
```tsx
<DataList title="Account & Billing" icon="user" items={rows} />
```
More examples in [`DataList.examples.md`](./DataList.examples.md).

## 13. Anti-patterns
- Mixing in editable fields: use FormSection.

## 14. Version, status and changelog
- Version: `1.0.0`
- Status: `stable`
- 2026-10-09 · 1.0.0 · First version, extracted from Coach Platform and Surfer Platform.
