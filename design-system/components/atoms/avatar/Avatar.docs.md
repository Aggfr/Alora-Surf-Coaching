# Avatar

**Atomic Design category:** Atom · **Status:** `stable` · **Version:** 1.1.0
**Figma:** [Avatar](https://www.figma.com/design/GZRi3cvtWVfu0MTxPvPEcY/Design-System?node-id=12-119)

## 1. Name and category
`Avatar` — Atom.

## 2. Purpose
Represents a person with their initials.

## 3. When to use
- Next to a surfer or coach name (lists, cards, header).

## 4. When not to use
- As the only identifier of a person: always show the name.

## 5. Anatomy
1. Circle (`avatar.radius`)
2. Initials

## 6. Props
| Prop | Type | Default | Required | Description |
|---|---|---|---|---|
| `name` | `string` | — | Yes | Full name; initials are derived from it. |
| `size` | `'small' \| 'medium' \| 'large' \| 'xlarge'` | `'medium'` | No | 24 / 32 / 64 / 80 px. large and xlarge show two initials; xlarge adds a brand halo (profile). |
| `tone` | `'brand' \| 'elite' \| 'progression' \| 'session' \| 'performance' \| 'neutral'` | `'brand'` | No | Background color; plan tones go with a plan Badge. |

## 7. Variants and states
- **size:** `small`, `medium`, `large`, `xlarge`
- **tone:** `brand`, `elite`, `progression`, `session`, `performance`, `neutral`
- **States:** `—`

## 8. Tokens used
- `avatar.background`
- `avatar.foreground`
- `avatar.radius`
- `color.plan.*.foreground`
- `color.text.inverse`
- `size.layout.avatar-xlarge`
- `elevation.halo-brand`

The component's own tokens live in [`Avatar.tokens.json`](./Avatar.tokens.json). Primitive tokens are never used directly.

## 9. Interaction
- Not interactive; if it opens the profile, wrap it in a link with the name.

## 10. Accessibility
- Initials are `aria-hidden`; the visible name next to it gives context.

## 11. Composition rules
- ListItem type=person, SubmissionCard, PageHeader.

## 12. Code examples
```tsx
<Avatar name="Khata Kraiwan" tone="elite" />
```
More examples in [`Avatar.examples.md`](./Avatar.examples.md).

## 13. Anti-patterns
- Communicating the plan only through the avatar color.

## 14. Version, status and changelog
- Version: `1.1.0`
- Status: `stable`
- 2026-10-09 · 1.0.0 · First version, extracted from Coach Platform and Surfer Platform.
- 2026-10-09 · 1.1.0 · Added the xlarge size and the session and performance tones.
