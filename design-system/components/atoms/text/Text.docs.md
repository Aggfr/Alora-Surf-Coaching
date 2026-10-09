# Text

**Atomic Design category:** Atom · **Status:** `stable` · **Version:** 1.0.0
**Figma:** [Text](https://www.figma.com/design/GZRi3cvtWVfu0MTxPvPEcY/Design-System?node-id=9-65)

## 1. Name and category
`Text` — Atom.

## 2. Purpose
Shows reading text and metadata with a type role and a semantic tone.

## 3. When to use
- Paragraphs, descriptions, metadata, dates and overlines.

## 4. When not to use
- Titles: use Heading.
- Form labels: use Label.

## 5. Anatomy
1. Text

## 6. Props
| Prop | Type | Default | Required | Description |
|---|---|---|---|---|
| `children` | `ReactNode` | — | Yes | Content. |
| `role` | `'body-large' \| 'body-medium' \| 'body-small' \| 'caption' \| 'overline'` | `'body-medium'` | No | Type style (`typography.*`). |
| `tone` | `'primary' \| 'secondary' \| 'tertiary' \| 'brand' \| 'danger'` | `'primary'` | No | Semantic color. |
| `as` | `'p' \| 'span' \| 'div' \| 'dd' \| 'dt'` | `'p'` | No | HTML element. |

## 7. Variants and states
- **role:** `body-large`, `body-medium`, `body-small`, `caption`, `overline`
- **tone:** `primary`, `secondary`, `tertiary`, `brand`, `danger`
- **States:** `—`

## 8. Tokens used
- `typography.body-*`
- `typography.caption`
- `typography.overline`
- `color.text.*`
- `color.feedback.danger.foreground`

The component's own tokens live in [`Text.tokens.json`](./Text.tokens.json). Primitive tokens are never used directly.

## 9. Interaction
- Not interactive.

## 10. Accessibility
- `tertiary` meets 4.5:1 on surface-raised, but is not used for critical information.
- Acronyms in `overline` are typed in uppercase in the content; do not rely on text-transform for them.

## 11. Composition rules
- Free to use inside molecules and organisms.

## 12. Code examples
```tsx
<Text role="body-small" tone="tertiary">Submitted 31 ago 2026, 18:01</Text>
```
More examples in [`Text.examples.md`](./Text.examples.md).

## 13. Anti-patterns
- Combining size and weight by hand instead of `role`.
- Using `brand` widely for text that is not a link.

## 14. Version, status and changelog
- Version: `1.0.0`
- Status: `stable`
- 2026-10-09 · 1.0.0 · First version, extracted from Coach Platform and Surfer Platform.
