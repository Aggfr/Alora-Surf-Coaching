# Switch

**Atomic Design category:** Atom · **Status:** `stable` · **Version:** 1.1.0
**Figma:** [Switch](https://www.figma.com/design/GZRi3cvtWVfu0MTxPvPEcY/Design-System?node-id=12-91)

## 1. Name and category
`Switch` — Atom.

## 2. Purpose
Turns a setting on or off with immediate effect.

## 3. When to use
- Preferences saved instantly (notifications).

## 4. When not to use
- When the change needs a Save button: Checkbox.

## 5. Anatomy
1. 36×20 track (`switch.radius`)
2. 16×16 thumb
3. Label

## 6. Props
| Prop | Type | Default | Required | Description |
|---|---|---|---|---|
| `label` | `ReactNode` | — | Yes | Visible text. |
| `isOn` | `boolean` | `false` | No | State. |
| `isDisabled` | `boolean` | `false` | No | Disabled. |
| `onChange` | `(on: boolean) => void` | — | No | Change. |

## 7. Variants and states
- **on:** `false`, `true`
- **States:** `default`, `disabled`

## 8. Tokens used
- `switch.track-off`
- `switch.track-on`
- `switch.thumb`
- `switch.radius`
- `color.border.default`

The component's own tokens live in [`Switch.tokens.json`](./Switch.tokens.json). Primitive tokens are never used directly.

## 9. Interaction
- The thumb slides with `motion.transition-base`.

## 10. Accessibility
- `role=switch` + `aria-checked`.
- State does not rely on color alone: the thumb position changes.

## 11. Composition rules
- Settings lists, one per row.
- Depends on: `Label`.

## 12. Code examples
```tsx
<Switch label="Email notifications" isOn={notify} onChange={setNotify} />
```
More examples in [`Switch.examples.md`](./Switch.examples.md).

## 13. Anti-patterns
- A Switch inside a form with a Save button.

## 14. Version, status and changelog
- Version: `1.1.0`
- Status: `stable`
- 2026-10-09 · 1.0.0 · First version, extracted from Coach Platform and Surfer Platform.
