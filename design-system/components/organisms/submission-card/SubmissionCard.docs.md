# SubmissionCard

**Atomic Design category:** Organism · **Status:** `stable` · **Version:** 1.0.0
**Figma:** [SubmissionCard](https://www.figma.com/design/GZRi3cvtWVfu0MTxPvPEcY/Design-System?node-id=14-223)

## 1. Name and category
`SubmissionCard` — Organism.

## 2. Purpose
Summarizes a clip submitted for review and its main action.

## 3. When to use
- Coach queue, surfer submission list.

## 4. When not to use
- A review already delivered in History: ReviewCard (planned).

## 5. Anatomy
1. Header: Avatar + name + plan Badge + status Badge
2. Clip title + date + metadata
3. Surfer note (optional)
4. Footer: deadline Tag + primary Button

## 6. Props
| Prop | Type | Default | Required | Description |
|---|---|---|---|---|
| `surfer` | `{ name: string; plan: 'pay-as-you-go' \| 'elite' \| 'progression' }` | — | Yes | Who submitted it. |
| `status` | `'pending' \| 'in-review' \| 'review-ready' \| 'overdue'` | — | Yes | State. |
| `clipTitle` | `string` | — | Yes | Maneuver. |
| `submittedAt` | `string` | — | Yes | Formatted date. |
| `meta` | `string` | — | No | Stance · level · spot. |
| `note` | `string` | — | No | Message from the surfer. |
| `deadline` | `{ label: string; tone: 'on-track' \| 'due-soon' \| 'overdue' }` | — | Yes | Deadline. |
| `action` | `{ label: string; icon?: IconName; onPress: () => void }` | — | Yes | Main action. |

## 7. Variants and states
- **deadline:** `on-track`, `due-soon`, `overdue`
- **States:** `—`

## 8. Tokens used
- `card.background`
- `card.border`
- `card.radius`
- `card.padding`
- `card.gap`
- `color.background.surface-sunken`
- `size.layout.content-width`

The component's own tokens live in [`SubmissionCard.tokens.json`](./SubmissionCard.tokens.json). Primitive tokens are never used directly.

## 9. Interaction
- Only the button is interactive; the whole card is not clickable.

## 10. Accessibility
- `<article>` with the title as an h3 and `aria-labelledby`.

## 11. Composition rules
- In a list: a column with a `size.space.large` gap.
- Customizable: text, tones and action. Not customizable: block order.
- Depends on: `Avatar`, `Heading`, `Text`, `Badge`, `Tag`, `Button`.

## 12. Code examples
```tsx
<SubmissionCard surfer={{ name: "Khata Kraiwan", plan: "elite" }} status="in-review" clipTitle="Frontside snap" submittedAt="Aug 31, 2026, 18:01" deadline={{ label: "1h 9m left", tone: "due-soon" }} action={{ label: "View & Download", icon: "eye", onPress }} />
```
More examples in [`SubmissionCard.examples.md`](./SubmissionCard.examples.md).

## 13. Anti-patterns
- Two primary buttons in the card.
- Hiding the status.

## 14. Version, status and changelog
- Version: `1.0.0`
- Status: `stable`
- 2026-10-09 · 1.0.0 · First version, extracted from Coach Platform and Surfer Platform.
