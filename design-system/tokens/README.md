# Tokens

The single source of truth for every visual decision in Alora. Format: [W3C Design Tokens (DTCG)](https://design-tokens.github.io/community-group/format/). Every token has `$type`, `$value` and `$description`; references are written as `{path.to.token}`.

## Hierarchy

```
primitives.tokens.json      Layer 1 · WHAT values exist          color.ocean.700 = #2f7189
        ▲ references
semantic.tokens.json        Layer 2 · WHAT THEY ARE FOR (dark)   color.action.primary.background → {color.ocean.700}
semantic.light.tokens.json            same paths, light theme    color.text.primary → {color.navy.950}
        ▲ references
component.tokens.json       Layer 3 · WHERE THEY APPLY          button.primary.background → {color.action.primary.background-start}
```

| Layer | File | Contains | Used by |
|---|---|---|---|
| Primitive | `primitives.tokens.json` | Scales with no intent: colors 50–950, `size.space.100` (= 4px), `typography.size.md`, shadows, motion, z-index, breakpoints. | **Only** the semantic layer. |
| Semantic | `semantic.tokens.json` + `semantic.light.tokens.json` | Usage intent: `color.background.surface`, `color.text.secondary`, `color.feedback.danger.*`, `size.space.medium`, type roles, `elevation.*`, `layer.*`. | Components and layouts. |
| Component | `component.tokens.json` | Decisions for one specific component: `button.radius`, `input.border.focus`, `card.padding`. | That component only. |

### When to use each layer
- **Building a new component:** use component tokens if they exist; otherwise semantic tokens. Never primitives.
- **Composing a page or layout:** semantic tokens only (`size.space.*`, `size.layout.*`, `color.background.*`).
- **Changing the brand or theme:** only primitives or the semantic mapping change. Components stay the same.
- **Documented exceptions:** none in v1.0.0. `scripts/check_hardcoded.py` fails if the CSS reads a primitive.

## Themes
- **Dark** is the default theme (the Coach and Surfer designs are dark): `:root` or `[data-theme="dark"]`.
- **Light** only redefines the `color.*` paths of the semantic layer: `[data-theme="light"]`.
- Component tokens do not change per theme: they point to semantic tokens and inherit the theme automatically.
- In Figma: the **Semantic** collection has *Dark* and *Light* modes; the **Component** collection has a single mode.

## Scales
| Scale | Rule | Example |
|---|---|---|
| `size.space.*` | Key / 100 × 4px | `size.space.400` = 16px |
| `size.radius.*` | Same as space; `full` = 9999px | `size.radius.300` = 12px |
| `color.<hue>.*` | 50 (lightest) → 950 (darkest) | `color.navy.900` |
| `color.alpha.<hue>.<pct>` | Opacity in % | `color.alpha.ocean.18` |
| `typography.size.*` | T-shirt sizes 2xs–4xl | `typography.size.md` = 16px |

Semantic names use words (`small`, `medium`, `large`) so the intent does not depend on the value.

## How to add a token without breaking anything
1. **Does it already exist?** Search `MANIFEST.json` (`tokens[].name`) and the three layers. Reuse always wins.
2. **Add a primitive only if the value is missing.** Put it in its scale (do not invent `size.space.350` when `300` or `400` works).
3. **Give a semantic token an intent.** Name it `category.property.element.state`, with no abbreviations (`background`, not `bg`). Write a `$description` that says *when* to use it.
4. **If it is a color, define it in both themes** (`semantic.tokens.json` and `semantic.light.tokens.json`) and check AA contrast (see `docs/accessibility.md`).
5. **Add a component token only if the component needs to differ from the semantic token**, or you want a stable tuning point for it. It must reference a semantic token.
6. Run `python3 scripts/build_tokens.py` (validates references and layers, writes `dist/`) and `python3 scripts/build_docs.py` (updates `MANIFEST.json`).
7. Add the variable in Figma to the matching collection, with the same name using `/` (`color/text/primary`) and the code syntax `var(--ds-color-text-primary)`.

## Renaming or removing (deprecation)
Never delete or rename a published token in a single release:
1. Create the new token.
2. Turn the old one into an alias of the new one and add `$deprecated` with migration instructions:
   ```json
   "muted": {
     "$type": "color",
     "$value": "{color.text.tertiary}",
     "$deprecated": "Use color.text.tertiary. 'muted' was this color's name in Coach Platform; kept as an alias until v2.0.0."
   }
   ```
3. `MANIFEST.json` marks it `status: "deprecated"`. Remove it in the next major release.

## Generated output (`dist/`, do not edit by hand)
- `dist/tokens.css`: `--ds-*` variables for the web, with theme blocks.
- `dist/tokens.resolved.json`: every token with its final value per theme, for other platforms.
