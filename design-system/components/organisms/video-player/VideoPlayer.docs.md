# VideoPlayer

**Atomic Design category:** Organism · **Status:** `stable` · **Version:** 1.1.0
**Figma:** [VideoPlayer](https://www.figma.com/design/GZRi3cvtWVfu0MTxPvPEcY/Design-System?node-id=63-446)

## 1. Name and category
`VideoPlayer` — Organism.

## 2. Purpose
Plays a surf clip with Alora controls.

## 3. When to use
- Coach review screen, surfer review detail, clip preview.

## 4. When not to use
- Thumbnails in lists: ClipItem.

## 5. Anatomy
1. Video area (`video-player.background`)
2. Central play button
3. Control bar: play/pause, timeline, time, mute, full screen

## 6. Props
| Prop | Type | Default | Required | Description |
|---|---|---|---|---|
| `src` | `string` | — | Yes | Video URL. |
| `title` | `string` | — | Yes | Accessible name (clip title). |
| `poster` | `string` | — | No | Image before playing. |

## 7. Variants and states
- No visual variants: behavior is controlled with props.
- **States:** `paused`, `playing`, `muted`, `focus`

## 8. Tokens used
- `video-player.background`
- `video-player.foreground`
- `video-player.track`
- `video-player.progress`
- `video-player.scrim`
- `card.radius`
- `size.layout.control-height-small`

The component's own tokens live in [`VideoPlayer.tokens.json`](./VideoPlayer.tokens.json). Primitive tokens are never used directly.

## 9. Interaction
- Space/Enter on the play button toggles playback.
- The timeline is a range input: arrows seek, Home and End jump.

## 10. Accessibility
- `<figure aria-label>` around a native `<video>`.
- Every control is a labelled button; mute uses `aria-pressed`.
- The timeline announces the time as 'm:ss of m:ss'.

## 11. Composition rules
- Top of the review screen, full width of the content column.
- Depends on: `Icon`.

## 12. Code examples
```tsx
<VideoPlayer src={clip.url} title="Frontside snap" poster={clip.thumbnail} />
```
More examples in [`VideoPlayer.examples.md`](./VideoPlayer.examples.md).

## 13. Anti-patterns
- Autoplay with sound.
- Custom controls without keyboard support.

## 14. Version, status and changelog
- Version: `1.1.0`
- Status: `stable`
- 2026-10-09 · 1.1.0 · First version, added for the Coach and Surfer redesign screens.
