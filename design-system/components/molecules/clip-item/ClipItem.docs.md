# ClipItem

**Atomic Design category:** Molecule · **Status:** `stable` · **Version:** 1.1.0
**Figma:** [ClipItem](https://www.figma.com/design/GZRi3cvtWVfu0MTxPvPEcY/Design-System?node-id=62-320)

## 1. Name and category
`ClipItem` — Molecule.

## 2. Purpose
Row for one video clip: thumbnail, title, facts and a light action.

## 3. When to use
- Clips added to a new submission.
- Clips inside a submission in History or the coach review.

## 4. When not to use
- A whole submission with status and deadline: SubmissionCard.
- A delivered review: ReviewCard.

## 5. Anatomy
1. Thumbnail (optional play button and status Badge solid)
2. Title
3. Meta (duration, size)
4. Optional details
5. Optional action (Link)

## 6. Props
| Prop | Type | Default | Required | Description |
|---|---|---|---|---|
| `title` | `string` | — | Yes | Clip name. |
| `meta` | `string` | — | No | Short facts ('1 clip · 0:11'). |
| `details` | `ReactNode` | — | No | Extra lines (coach, expected date). |
| `thumbnailSrc` | `string` | — | No | Thumbnail image; a dark placeholder shows when missing. |
| `thumbnailAlt` | `string` | `''` | No | Alt text when the thumbnail is meaningful. |
| `status` | `{ label: string; tone: 'pending' \| 'in-review' \| 'review-ready' \| 'overdue' }` | — | No | Status shown on the thumbnail. |
| `isPlayable` | `boolean` | `false` | No | Shows a play icon on the thumbnail. |
| `action` | `{ label: string; icon?: IconName; tone?: 'brand' \| 'danger'; onPress: () => void }` | — | No | Row action ('Delete clip'). |
| `size` | `'small' \| 'medium'` | `'medium'` | No | Thumbnail 56 or 94 px tall (16:9). |

## 7. Variants and states
- **size:** `small`, `medium`
- **States:** `default`, `with-status`, `with-action`

## 8. Tokens used
- `size.layout.thumbnail-width`
- `size.layout.thumbnail-height`
- `color.media.background`
- `color.media.scrim`
- `card.radius`
- `color.status.*.solid`
- `typography.heading-small`
- `typography.body-small`

The component's own tokens live in [`ClipItem.tokens.json`](./ClipItem.tokens.json). Primitive tokens are never used directly.

## 9. Interaction
- Only the action is interactive.

## 10. Accessibility
- Decorative thumbnail by default (`alt=""`).
- The status is real text inside the Badge.

## 11. Composition rules
- Stacked with Dividers inside a card, under Dropzone or inside SubmissionCard.
- Depends on: `Badge`, `Link`, `Icon`.

## 12. Code examples
```tsx
<ClipItem title="Surf clip" meta="1 clip · 0:11" isPlayable action={{ label: "Delete clip", icon: "trash", tone: "danger", onPress: remove }} />
```
More examples in [`ClipItem.examples.md`](./ClipItem.examples.md).

## 13. Anti-patterns
- A whole clickable row with a nested action.

## 14. Version, status and changelog
- Version: `1.1.0`
- Status: `stable`
- 2026-10-09 · 1.1.0 · First version, added for the Coach and Surfer redesign screens.
