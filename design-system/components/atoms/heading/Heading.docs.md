# Heading

**Atomic Design category:** Atom · **Status:** `stable` · **Version:** 1.1.0
**Figma:** [Heading](https://www.figma.com/design/GZRi3cvtWVfu0MTxPvPEcY/Design-System?node-id=9-77)

## 1. Name and category
`Heading` — Atom.

## 2. Purpose
Titles a view, section or card while respecting the document hierarchy.

## 3. When to use
- View greeting (display, h1).
- Section titles (medium, h2) and card titles (small, h3).

## 4. When not to use
- To emphasize text within a paragraph: use Text.

## 5. Anatomy
1. Text (`typography.display` or `typography.heading-*`)

## 6. Props
| Prop | Type | Default | Required | Description |
|---|---|---|---|---|
| `children` | `ReactNode` | — | Yes | Title text. |
| `level` | `'display' \| 'large' \| 'medium' \| 'small'` | `'medium'` | No | Visual style. |
| `as` | `'h1' \| 'h2' \| 'h3' \| 'h4' \| 'h5' \| 'h6'` | `from level` | No | Semantic level; do not skip levels. |

## 7. Variants and states
- **level:** `display`, `large`, `medium`, `small`
- **States:** `—`

## 8. Tokens used
- `typography.display`
- `typography.heading-large`
- `typography.heading-medium`
- `typography.heading-small`
- `color.text.primary`

The component's own tokens live in [`Heading.tokens.json`](./Heading.tokens.json). Primitive tokens are never used directly.

## 9. Interaction
- Not interactive.

## 10. Accessibility
- Only one h1 per view.
- Level order reflects structure, not size.

## 11. Composition rules
- PageHeader uses display; DataList uses medium; SubmissionCard uses small.

## 12. Code examples
```tsx
<Heading level="display" as="h1">Welcome, Alejandro</Heading>
```
More examples in [`Heading.examples.md`](./Heading.examples.md).

## 13. Anti-patterns
- Using Heading for bold text that is not a title.
- Jumping from h1 to h4.

## 14. Version, status and changelog
- Version: `1.1.0`
- Status: `stable`
- 2026-10-09 · 1.0.0 · First version, extracted from Coach Platform and Surfer Platform.
