# Convenciones de nombres

Una sola convención para todo el sistema. Si un nombre no encaja aquí, el nombre está mal.

## Tokens
**Formato:** `categoria.propiedad.elemento.estado` (se omiten los niveles que no aplican).

| Nivel | Valores | Ejemplo |
|---|---|---|
| categoría | `color`, `size`, `typography`, `elevation`, `motion`, `layer`, `shadow`, `z-index`, `breakpoint`, o el nombre de un componente en kebab-case | `button` |
| propiedad | `background`, `text`, `border`, `icon`, `space`, `radius`, `layout`… | `background` |
| elemento | rol o variante | `primary`, `surface-raised` |
| estado | `hover`, `pressed`, `focus`, `checked`, `active`, `disabled`, `error` | `hover` |

**Válidos:** `color.background.surface` · `color.text.primary` · `color.border.subtle` · `size.space.medium` · `size.radius.large` · `typography.weight.regular` · `button.primary.background-hover` · `input.border.focus`

**Prohibido:**
| Mal | Por qué | Bien |
|---|---|---|
| `color.bg.primary` | abreviatura | `color.background.primary` |
| `btn.txt` | abreviaturas | `button.primary.foreground` |
| `color.blue-button` | mezcla primitivo y uso | `color.action.primary.background` |
| `tailwind.spacing.4`, `figma.fill` | nombre de herramienta | `size.space.small` |
| `size.space.1`, `.2`, `.3` | números sin escala | `size.space.100` (escala ×4px) |
| `color.text.gray` en la capa semántica | describe el valor, no la intención | `color.text.secondary` |

**Escalas numéricas** (solo capa primitiva): colores 50–950; espacio y radio en centenas donde `100` = 4px; `typography.size` en tallas 2xs–4xl.
**Escalas con palabras** (capa semántica): `3xs · 2xs · xs · small · medium · large · xl · 2xl`. Nunca duplicar una ruta primitiva (por eso el radio semántico máximo se llama `pill` y no `full`).

### Traducción por plataforma
| Fuente (DTCG) | Figma variable | CSS |
|---|---|---|
| `color.text.primary` | `color/text/primary` | `--ds-color-text-primary` |
| `button.primary.background-hover` | `button/primary/background-hover` | `--ds-button-primary-background-hover` |

## Componentes
| Elemento | Convención | Ejemplo |
|---|---|---|
| Componente | PascalCase, sustantivo concreto | `Button`, `SearchField`, `SubmissionCard` |
| Archivo | PascalCase = nombre del componente | `Button.tsx`, `Button.docs.md`, `Button.examples.md`, `Button.tokens.json` |
| Carpeta | kebab-case dentro de su nivel | `components/molecules/search-field/` |
| Props | camelCase | `variant`, `size`, `leadingIcon` |
| Booleanos | prefijo `is` / `has` | `isDisabled`, `isLoading`, `hasError`, `hasDivider` |
| Eventos | prefijo `on` + verbo | `onPress`, `onChange`, `onDismiss`, `onPageChange` |
| Variantes | prop con unión de strings | `variant: 'primary' \| 'secondary' \| 'ghost' \| 'danger'` |
| Tamaños | `small` · `medium` · `large` | `size="small"` |
| Clase CSS | `ds-` + BEM en kebab-case | `.ds-button`, `.ds-button__label`, `.ds-button--primary` |
| Variable CSS | `--ds-` + ruta del token | `--ds-color-action-primary-background` |
| Figma | Component set = nombre; propiedades en minúscula | `Button` → `variant=primary, size=medium, state=hover` |

**Nombres prohibidos:** `Box`, `Wrapper`, `Container`, `Thing`, `Component1`, `NewButton`, `ButtonV2`, `CustomCard`. Un nombre describe qué es el componente, no su historia.

**Estados y variantes** son props explícitos. `<Button variant="danger">`, nunca `<DangerButton>`.

## Templates y páginas
- Templates: sufijo `Template` (`DashboardTemplate`, `AuthTemplate`), carpeta `templates/<kebab>/`.
- Páginas de ejemplo: sufijo `Page` (`CoachQueuePage`), carpeta `pages/<kebab>/`.
