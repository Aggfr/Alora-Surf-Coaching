# Badge

**Atomic Design category:** Atom · **Status:** `stable` · **Version:** 1.1.0
**Figma:** [Badge](https://www.figma.com/design/GZRi3cvtWVfu0MTxPvPEcY/Design-System?node-id=12-139)

## 1. Name and category
`Badge` — Atom.

## 2. Purpose
Non-interactive label that shows a status or a plan.

## 3. When to use
- Submission status (Pending, In review, Review ready, Overdue).
- Surfer plan (Pay as you go, Elite, Progression, Session, Performance).
- On a thumbnail, a solid status (appearance=solid).

## 4. When not to use
- Information with an icon or a time: Tag.
- Selectable or removable items: TagChip.

## 5. Anatomy
1. Container (`badge.radius`, padding `badge.padding-*`)
2. Optional icon
3. Uppercase text (`typography.overline`)

## 6. Props
| Prop | Type | Default | Required | Description |
|---|---|---|---|---|
| `children` | `string` | — | Yes | Status text. |
| `tone` | `'pending' \| 'in-review' \| 'review-ready' \| 'overdue' \| 'neutral' \| 'plan-pay-as-you-go' \| 'plan-elite' \| 'plan-progression' \| 'plan-session' \| 'plan-performance'` | `'neutral'` | No | Semantic tone. |
| `appearance` | `'subtle' \| 'solid'` | `'subtle'` | No | solid fills the badge (status tones only), for use on images. |
| `icon` | `IconName` | — | No | Leading icon (check on Reviewed). |

## 7. Variants and states
- **tone:** `pending`, `in-review`, `review-ready`, `overdue`, `neutral`, `plan-pay-as-you-go`, `plan-elite`, `plan-progression`, `plan-session`, `plan-performance`
- **appearance:** `subtle`, `solid`
- **States:** `—`

## 8. Tokens used
- `badge.radius`
- `badge.padding-horizontal`
- `badge.padding-vertical`
- `badge.typography`
- `color.status.*`
- `color.status.*.solid`
- `color.text.on-action`
- `color.plan.*`
- `color.feedback.neutral.*`

The component's own tokens live in [`Badge.tokens.json`](./Badge.tokens.json). Primitive tokens are never used directly.

## 9. Interaction
- Not interactive.

## 10. Accessibility
- The text names the state; color only reinforces it.
- Contrast ≥ 4.5:1 in every tone.

## 11. Composition rules
- SubmissionCard (status and plan), ListItem (plan), ClipItem thumbnails (solid), ReviewCard.
- Depends on: `Icon`.

## 12. Code examples
```tsx
<Badge tone="in-review">In review</Badge>
```
More examples in [`Badge.examples.md`](./Badge.examples.md).

## 13. Anti-patterns
- A clickable Badge.
- Inventing tones outside the list.

## 14. Version, status and changelog
- Version: `1.1.0`
- Status: `stable`
- 2026-10-09 · 1.0.0 · First version, extracted from Coach Platform and Surfer Platform.
- 2026-10-09 · 1.1.0 · Added the plan-session and plan-performance tones, the solid appearance and the optional icon.
