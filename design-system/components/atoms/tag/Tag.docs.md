# Tag

**Atomic Design category:** Atom · **Status:** `stable` · **Version:** 1.1.0
**Figma:** [Tag](https://www.figma.com/design/GZRi3cvtWVfu0MTxPvPEcY/Design-System?node-id=12-167)

## 1. Name and category
`Tag` — Atom.

## 2. Purpose
Informational pill with an optional icon.

## 3. When to use
- Time left on a review, highlighted plan, context (Surf park).

## 4. When not to use
- Short states without an icon: Badge.
- Selectable or removable items: TagChip.

## 5. Anatomy
1. Pill container (`tag.radius`)
2. Optional icon
3. Text (`typography.body-small`)

## 6. Props
| Prop | Type | Default | Required | Description |
|---|---|---|---|---|
| `children` | `ReactNode` | — | Yes | Text. |
| `tone` | `'brand' \| 'highlight' \| 'warning' \| 'danger' \| 'neutral'` | `'brand'` | No | Semantic tone. |
| `icon` | `IconName` | — | No | Leading icon. |

## 7. Variants and states
- **tone:** `brand`, `highlight`, `warning`, `danger`, `neutral`
- **States:** `—`

## 8. Tokens used
- `tag.background`
- `tag.foreground`
- `tag.border`
- `tag.radius`
- `tag.padding-horizontal`
- `color.background.highlight-subtle`
- `color.text.highlight`
- `color.feedback.*`

The component's own tokens live in [`Tag.tokens.json`](./Tag.tokens.json). Primitive tokens are never used directly.

## 9. Interaction
- Not interactive.

## 10. Accessibility
- If the Tag conveys urgency (warning/danger), the text says so ('1h 9m left', 'Overdue').

## 11. Composition rules
- SubmissionCard (deadline), PageHeader (plan, notifications).
- Depends on: `Icon`.

## 12. Code examples
```tsx
<Tag tone="warning" icon="clock">1h 9m left</Tag>
```
More examples in [`Tag.examples.md`](./Tag.examples.md).

## 13. Anti-patterns
- Using Tag as a button.

## 14. Version, status and changelog
- Version: `1.1.0`
- Status: `stable`
- 2026-10-09 · 1.0.0 · First version, extracted from Coach Platform and Surfer Platform.
