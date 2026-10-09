# SearchField

**Atomic Design category:** Molecule · **Status:** `stable` · **Version:** 1.0.0
**Figma:** [SearchField](https://www.figma.com/design/GZRi3cvtWVfu0MTxPvPEcY/Design-System?node-id=13-92)

## 1. Name and category
`SearchField` — Molecule.

## 2. Purpose
Search field with an icon and a clear button.

## 3. When to use
- Search surfers, clips or spots in long lists.

## 4. When not to use
- Filters with a fixed set of values: TagChip.

## 5. Anatomy
1. Input with a search icon
2. Clear button (visible when there is text)

## 6. Props
| Prop | Type | Default | Required | Description |
|---|---|---|---|---|
| `value` | `string` | — | Yes | Search text. |
| `onChange` | `(value: string) => void` | — | Yes | Change. |
| `placeholder` | `string` | `'Search'` | No | What is being searched: 'Search surfers'. |
| `onClear` | `() => void` | — | No | Clears and returns focus. |

## 7. Variants and states
- **filled:** `false`, `true`
- **States:** `default`, `focus`

## 8. Tokens used
- `input.*`
- `color.icon.secondary`

The component's own tokens live in [`SearchField.tokens.json`](./SearchField.tokens.json). Primitive tokens are never used directly.

## 9. Interaction
- Escape clears the text.
- Results are filtered with a 200ms debounce.

## 10. Accessibility
- `role=search` container; `type=search` Input with a hidden label.
- The clear button has `aria-label="Clear search"`.

## 11. Composition rules
- Above lists (Surfers).
- Depends on: `Input`, `Icon`, `Button`.

## 12. Code examples
```tsx
<SearchField value={q} onChange={setQ} placeholder="Search surfers" />
```
More examples in [`SearchField.examples.md`](./SearchField.examples.md).

## 13. Anti-patterns
- Search without an accessible label.

## 14. Version, status and changelog
- Version: `1.0.0`
- Status: `stable`
- 2026-10-09 · 1.0.0 · First version, extracted from Coach Platform and Surfer Platform.
