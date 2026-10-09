# OptionCard

**Atomic Design category:** Molecule · **Status:** `stable` · **Version:** 1.1.0
**Figma:** [OptionCard](https://www.figma.com/design/GZRi3cvtWVfu0MTxPvPEcY/Design-System?node-id=FIGMA_OptionCard)

## 1. Name and category
`OptionCard` — Molecule.

## 2. Purpose
Large selectable card for one choice among a few, with a title and an optional description.

## 3. When to use
- Onboarding answers: skill level, stance, goal, coaching approach.
- Choosing a plan or a profile (Coach or Surfer).

## 4. When not to use
- Many options or short labels: SegmentedControl or Radio.
- Several answers at once: Checkbox.

## 5. Anatomy
1. Card container (`option-card.*`)
2. Optional radio indicator
3. Title (`typography.heading-small`)
4. Optional description (`typography.body-small`)

## 6. Props
| Prop | Type | Default | Required | Description |
|---|---|---|---|---|
| `title` | `string` | — | Yes | Option name. |
| `description` | `string` | — | No | One line that explains the option. |
| `value` | `string` | — | Yes | Value sent to onChange. |
| `name` | `string` | — | Yes | Group name, shared by every card in the group. |
| `isSelected` | `boolean` | `false` | No | Selected. |
| `hasIndicator` | `boolean` | `true` | No | Shows the radio circle. Without it the text is centered (stance). |
| `isDisabled` | `boolean` | `false` | No | Disabled. |
| `onChange` | `(value: string) => void` | — | No | Selection. |

## 7. Variants and states
- **hasIndicator:** `true`, `false`
- **States:** `default`, `hover`, `focus`, `selected`, `disabled`

## 8. Tokens used
- `option-card.background`
- `option-card.border`
- `option-card.background-selected`
- `option-card.border-selected`
- `option-card.radius`
- `radio.*`
- `size.space.large`

The component's own tokens live in [`OptionCard.tokens.json`](./OptionCard.tokens.json). Primitive tokens are never used directly.

## 9. Interaction
- Clicking anywhere on the card selects it.
- Arrow keys move between cards of the same group (native radio behavior).

## 10. Accessibility
- A `<label>` around a native radio: the group needs a `<fieldset>` with a `<legend>` (the step question).
- Selection is shown by border, background and the indicator, not color alone.

## 11. Composition rules
- Vertical stack with a `size.space.small` gap; two columns for short options (stance).

## 12. Code examples
```tsx
<OptionCard name="level" value="intermediate" title="Intermediate" description="I catch green waves and trim along them." isSelected={level === "intermediate"} onChange={setLevel} />
```
More examples in [`OptionCard.examples.md`](./OptionCard.examples.md).

## 13. Anti-patterns
- Mixing OptionCard and Checkbox in the same question.
- Navigating on select: let the user confirm with Continue.

## 14. Version, status and changelog
- Version: `1.1.0`
- Status: `stable`
- 2026-10-09 · 1.1.0 · First version, added for the Coach and Surfer redesign screens.
