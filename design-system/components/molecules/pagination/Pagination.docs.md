# Pagination

**Atomic Design category:** Molecule · **Status:** `beta` · **Version:** 1.0.0
**Figma:** [Pagination](https://www.figma.com/design/GZRi3cvtWVfu0MTxPvPEcY/Design-System?node-id=13-221)

## 1. Name and category
`Pagination` — Molecule.

## 2. Purpose
Moves between pages of a long list.

## 3. When to use
- History with more than 20 reviews.

## 4. When not to use
- Short lists or continuous feeds.

## 5. Anatomy
1. Previous
2. Page status
3. Next

## 6. Props
| Prop | Type | Default | Required | Description |
|---|---|---|---|---|
| `page` | `number` | — | Yes | Current page (1-based). |
| `pageCount` | `number` | — | Yes | Total pages. |
| `onPageChange` | `(page: number) => void` | — | Yes | Change. |

## 7. Variants and states
- No visual variants: behavior is controlled with props.
- **States:** `first`, `middle`, `last`

## 8. Tokens used
- `button.*`
- `size.space.xs`

The component's own tokens live in [`Pagination.tokens.json`](./Pagination.tokens.json). Primitive tokens are never used directly.

## 9. Interaction
- Previous is disabled on the first page and Next on the last.

## 10. Accessibility
- `<nav aria-label="Pagination">`; the page status is announced with `aria-live=polite`.

## 11. Composition rules
- Below the list it paginates.
- Depends on: `Button`, `Text`.

## 12. Code examples
```tsx
<Pagination page={2} pageCount={8} onPageChange={setPage} />
```
More examples in [`Pagination.examples.md`](./Pagination.examples.md).

## 13. Anti-patterns
- Pagination with a single page.

## 14. Version, status and changelog
- Version: `1.0.0`
- Status: `beta`
- 2026-10-09 · 1.0.0 · First version, extracted from Coach Platform and Surfer Platform.
