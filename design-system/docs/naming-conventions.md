# Naming conventions

One convention for the whole system. If a name does not fit here, the name is wrong.

## Tokens
**Format:** `category.property.element.state` (levels that do not apply are omitted).

| Level | Values | Example |
|---|---|---|
| category | `color`, `size`, `typography`, `elevation`, `motion`, `layer`, `shadow`, `z-index`, `breakpoint`, or a component name in kebab-case | `button` |
| property | `background`, `text`, `border`, `icon`, `space`, `radius`, `layout`… | `background` |
| element | role or variant | `primary`, `surface-raised` |
| state | `hover`, `pressed`, `focus`, `checked`, `active`, `disabled`, `error` | `hover` |

**Valid:** `color.background.surface` · `color.text.primary` · `color.border.subtle` · `size.space.medium` · `size.radius.large` · `typography.weight.regular` · `button.primary.background-hover` · `input.border.focus`

**Not allowed:**
| Wrong | Why | Right |
|---|---|---|
| `color.bg.primary` | abbreviation | `color.background.primary` |
| `btn.txt` | abbreviations | `button.primary.foreground` |
| `color.blue-button` | mixes primitive and usage | `color.action.primary.background` |
| `tailwind.spacing.4`, `figma.fill` | tool name | `size.space.small` |
| `size.space.1`, `.2`, `.3` | numbers without a scale | `size.space.100` (×4px scale) |
| `color.text.gray` in the semantic layer | describes the value, not the intent | `color.text.secondary` |

**Numeric scales** (primitive layer only): colors 50–950; space and radius in hundreds where `100` = 4px; `typography.size` in sizes 2xs–4xl.
**Word scales** (semantic layer): `3xs · 2xs · xs · small · medium · large · xl · 2xl`. Never duplicate a primitive path (that is why the largest semantic radius is called `pill`, not `full`).

### Translation per platform
| Source (DTCG) | Figma variable | CSS |
|---|---|---|
| `color.text.primary` | `color/text/primary` | `--ds-color-text-primary` |
| `button.primary.background-hover` | `button/primary/background-hover` | `--ds-button-primary-background-hover` |

## Components
| Item | Convention | Example |
|---|---|---|
| Component | PascalCase, concrete noun | `Button`, `SearchField`, `SubmissionCard` |
| File | PascalCase = component name | `Button.tsx`, `Button.docs.md`, `Button.examples.md`, `Button.tokens.json` |
| Folder | kebab-case inside its level | `components/molecules/search-field/` |
| Props | camelCase | `variant`, `size`, `leadingIcon` |
| Booleans | `is` / `has` prefix | `isDisabled`, `isLoading`, `hasError`, `hasDivider` |
| Events | `on` + verb | `onPress`, `onChange`, `onDismiss`, `onPageChange` |
| Variants | prop with a string union | `variant: 'primary' \| 'secondary' \| 'ghost' \| 'danger'` |
| Sizes | `small` · `medium` · `large` | `size="small"` |
| CSS class | `ds-` + BEM in kebab-case | `.ds-button`, `.ds-button__label`, `.ds-button--primary` |
| CSS variable | `--ds-` + token path | `--ds-color-action-primary-background` |
| Figma | Component set = name; lowercase properties | `Button` → `variant=primary, size=medium, state=hover` |

**Banned names:** `Box`, `Wrapper`, `Container`, `Thing`, `Component1`, `NewButton`, `ButtonV2`, `CustomCard`. A name describes what the component is, not its history.

**States and variants** are explicit props. `<Button variant="danger">`, never `<DangerButton>`.

## Templates and pages
- Templates: `Template` suffix (`DashboardTemplate`, `AuthTemplate`), folder `templates/<kebab>/`.
- Example pages: `Page` suffix (`CoachQueuePage`), folder `pages/<kebab>/`.
