# Breadcrumb

**Atomic Design category:** Molecule · **Status:** `beta` · **Version:** 1.0.0
**Figma:** [Breadcrumb](https://www.figma.com/design/GZRi3cvtWVfu0MTxPvPEcY/Design-System?node-id=13-210)

## 1. Name and category
`Breadcrumb` — Molecule.

## 2. Purpose
Shows where the user is within a hierarchy.

## 3. When to use
- Detail views 3+ levels deep (Surfers › Surfer › Clip).

## 4. When not to use
- Top-level Sidebar views.

## 5. Anatomy
1. Links
2. Chevron separators
3. Current item

## 6. Props
| Prop | Type | Default | Required | Description |
|---|---|---|---|---|
| `items` | `Array<{ label: string; href?: string }>` | — | Yes | The last item is the current page. |

## 7. Variants and states
- No visual variants: behavior is controlled with props.
- **States:** `—`

## 8. Tokens used
- `color.text.brand`
- `color.text.primary`
- `color.icon.secondary`
- `typography.body-small`
- `size.space.small`

The component's own tokens live in [`Breadcrumb.tokens.json`](./Breadcrumb.tokens.json). Primitive tokens are never used directly.

## 9. Interaction
- Links navigate; the current item is not a link.

## 10. Accessibility
- `<nav aria-label="Breadcrumb">` + `<ol>`; current item with `aria-current=page`.

## 11. Composition rules
- Above PageHeader in detail views.
- Depends on: `Text`, `Icon`.

## 12. Code examples
```tsx
<Breadcrumb items={[{ label: "Surfers", href: "/surfers" }, { label: "Alejandro García" }]} />
```
More examples in [`Breadcrumb.examples.md`](./Breadcrumb.examples.md).

## 13. Anti-patterns
- Breadcrumb as a replacement for the Sidebar.

## 14. Version, status and changelog
- Version: `1.0.0`
- Status: `beta`
- 2026-10-09 · 1.0.0 · First version, extracted from Coach Platform and Surfer Platform.
