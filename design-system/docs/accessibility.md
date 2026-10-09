# Accesibilidad

Objetivo: **WCAG 2.2 nivel AA** en ambos temas, sin configuración por parte de quien usa el componente.

## Contraste verificado
Calculado sobre `color.background.surface-raised` (tarjetas), componiendo los fondos translúcidos. Recalcular tras tocar cualquier color.

| Par | Oscuro | Claro | Mínimo |
|---|---|---|---|
| `text.primary` | 15.6:1 | 19.0:1 | 4.5 |
| `text.secondary` | 5.9:1 | 8.0:1 | 4.5 |
| `text.tertiary` | 4.6:1 | 5.4:1 | 4.5 |
| `text.brand` | 6.2:1 | 5.5:1 | 4.5 |
| Botón primary: blanco sobre degradado `ocean.800 → ocean.700` | 8.1 → 5.5:1 | igual | 4.5 |
| Botón danger: blanco sobre `coral.600` | 6.5:1 | 6.5:1 | 4.5 |
| Badges de estado (pending / in review / ready / overdue) | 7.4 · 5.3 · 6.7 · 5.2 | 4.9 · 5.0 · 5.2 · 5.8 | 4.5 |
| Badges de plan (elite / progression / pay as you go) | 5.3 · 4.7 · 4.9 | 4.8 · 6.5 · 6.9 | 4.5 |
| `border.focus` sobre `background.canvas` | 7.5:1 | 3.3:1 | 3.0 |

### Cambios respecto a los diseños originales
| Elemento | Original | Ahora | Motivo |
|---|---|---|---|
| Degradado del botón primario | `#3b8eaa → #5aaec8` (2.5–3.7:1) | `ocean.800 → ocean.700` (≥ 5.4:1) | Texto blanco de 14px necesita 4.5:1 |
| Texto terciario (oscuro) | más claro | `navy.400 #6b8fa9` (4.6:1) | Metadatos ilegibles |
| Texto de error | coral base | `coral.300 #ea8282` | 4.5:1 sobre tarjeta oscura |
| Fondo del botón danger | coral base | `coral.600` | 4.5:1 con texto blanco |

## Foco
- Todo elemento interactivo muestra un contorno de `size.border.focus` (2px) en `color.border.focus` con separación de 2px, solo con teclado (`:focus-visible`).
- Nunca `outline: none` sin sustituto. En Figma el estado `focus` de cada componente lo muestra.

## Teclado
| Componente | Teclas |
|---|---|
| Button, TagChip, NavigationItem | Tab · Enter / Espacio |
| Checkbox, Switch | Tab · Espacio |
| Radio | Tab al grupo · flechas entre opciones |
| SearchField | Escape limpia y mantiene el foco |
| Tooltip | Aparece con foco, Escape lo cierra |
| Modal | Foco atrapado (`<dialog>` nativo), Escape cierra, el foco vuelve al disparador |

## Semántica
- Usar el elemento HTML nativo antes que ARIA: `<button>`, `<a>`, `<input type="checkbox">`, `<dialog>`, `<nav>`.
- Un único `<h1>` por vista (lo pone `PageHeader` o `AuthTemplate`).
- Iconos decorativos con `aria-hidden`; iconos con significado con `label`.
- Botones solo con icono requieren `aria-label`.
- `Notification` usa `role="status"`, o `role="alert"` en tono danger.
- Los errores de formulario se enlazan con `aria-describedby` e `aria-invalid` (lo hace `FormField`).

## Color nunca como único indicador
Estados y planes siempre llevan texto (`Overdue`, `Elite`). El plazo vencido combina Badge, Tag con icono de reloj y texto.

## Movimiento
Con `prefers-reduced-motion: reduce` todas las transiciones usan `motion.reduced-duration` (0ms).

## Objetivos táctiles
Altura mínima de control `size.layout.control-height` = 44px. Las variantes `small` (32px) solo en zonas densas de escritorio, nunca como único control de una tarjeta móvil.
