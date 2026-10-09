# Stepper

**Atomic Design category:** Molecule · **Status:** `stable` · **Version:** 1.1.0
**Figma:** [Stepper](https://www.figma.com/design/GZRi3cvtWVfu0MTxPvPEcY/Design-System?node-id=FIGMA_Stepper)

## 1. Name and category
`Stepper` — Molecule.

## 2. Purpose
Shows where the user is in a multi-step flow.

## 3. When to use
- Surfer onboarding (5 steps).
- Any form split into ordered steps.

## 4. When not to use
- Free navigation between sections: tabs or Sidebar.
- One-step forms.

## 5. Anatomy
1. Numbered markers (done with a check, current filled, upcoming outlined)
2. ProgressBar under the markers

## 6. Props
| Prop | Type | Default | Required | Description |
|---|---|---|---|---|
| `steps` | `string[]` | — | Yes | Step names; read by screen readers. |
| `currentStep` | `number` | — | Yes | Index of the current step, from 0. |

## 7. Variants and states
- No visual variants: behavior is controlled with props.
- **States:** `first`, `middle`, `last`

## 8. Tokens used
- `stepper.step-background`
- `stepper.step-foreground`
- `stepper.step-current`
- `stepper.step-on-current`
- `progress-bar.*`
- `size.layout.icon-tile-small`

The component's own tokens live in [`Stepper.tokens.json`](./Stepper.tokens.json). Primitive tokens are never used directly.

## 9. Interaction
- Not interactive: steps change with Continue and Back.

## 10. Accessibility
- `<nav aria-label="Progress">` with an ordered list; the current step has `aria-current=step`.
- Each marker carries the step name (visually hidden) and its state.

## 11. Composition rules
- Top of each onboarding step, above the question.
- Depends on: `ProgressBar`, `Icon`.

## 12. Code examples
```tsx
<Stepper steps={["Skill level", "Stance", "Goal", "Approach", "About you"]} currentStep={1} />
```
More examples in [`Stepper.examples.md`](./Stepper.examples.md).

## 13. Anti-patterns
- Clickable markers that skip validation.

## 14. Version, status and changelog
- Version: `1.1.0`
- Status: `stable`
- 2026-10-09 · 1.1.0 · First version, added for the Coach and Surfer redesign screens.
