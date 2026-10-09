# Dropzone

**Atomic Design category:** Molecule · **Status:** `stable` · **Version:** 1.1.0
**Figma:** [Dropzone](https://www.figma.com/design/GZRi3cvtWVfu0MTxPvPEcY/Design-System?node-id=62-269)

## 1. Name and category
`Dropzone` — Molecule.

## 2. Purpose
Area to pick or drop files for upload.

## 3. When to use
- New submission: add surf clips.
- Any upload of videos or images.

## 4. When not to use
- One small file in a form: a file Input (planned).

## 5. Anatomy
1. Dashed container (`dropzone.*`)
2. IconTile (plus, or close on error)
3. Label
4. Hint (formats and limits)

## 6. Props
| Prop | Type | Default | Required | Description |
|---|---|---|---|---|
| `label` | `string` | — | Yes | Call to action ('Tap to add surf clips'). |
| `hint` | `string` | — | No | Formats and limits ('MP4 or MOV · Max 2:30 per clip'). |
| `accept` | `string` | — | No | Accepted types ('video/*'). |
| `isMultiple` | `boolean` | `false` | No | Allows several files. |
| `errorMessage` | `string` | — | No | Failed state: replaces the label with this message. |
| `isDisabled` | `boolean` | `false` | No | Disabled. |
| `onFiles` | `(files: File[]) => void` | — | No | Files picked or dropped. |

## 7. Variants and states
- **state:** `default`, `error`
- **States:** `default`, `hover`, `drag-over`, `focus`, `error`, `disabled`

## 8. Tokens used
- `dropzone.background`
- `dropzone.border`
- `dropzone.background-error`
- `dropzone.border-error`
- `icon-tile.*`
- `size.border.default`
- `card.radius`

The component's own tokens live in [`Dropzone.tokens.json`](./Dropzone.tokens.json). Primitive tokens are never used directly.

## 9. Interaction
- Click or Enter opens the file picker; drag over highlights the area; drop calls onFiles.

## 10. Accessibility
- A visually hidden native file input inside a `<label>`, so it works with keyboard and screen readers.
- The hint is linked with `aria-describedby`; in the error state the message replaces the label, so it becomes the accessible name, and the input is `aria-invalid`.

## 11. Composition rules
- New submission screen above the ClipItem list.
- Depends on: `IconTile`.

## 12. Code examples
```tsx
<Dropzone label="Tap to add surf clips" hint="MP4 or MOV · Max 2:30 per clip" accept="video/*" isMultiple onFiles={addClips} />
```
More examples in [`Dropzone.examples.md`](./Dropzone.examples.md).

## 13. Anti-patterns
- Drag and drop as the only way to add files.

## 14. Version, status and changelog
- Version: `1.1.0`
- Status: `stable`
- 2026-10-09 · 1.1.0 · First version, added for the Coach and Surfer redesign screens.
