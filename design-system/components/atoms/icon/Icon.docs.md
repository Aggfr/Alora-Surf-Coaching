# Icon

**Categoría Atomic Design:** Atom · **Estado:** `stable` · **Versión:** 1.0.0
**Figma:** [Icon](https://www.figma.com/design/GZRi3cvtWVfu0MTxPvPEcY/Design-System?node-id=7-6)

## 1. Nombre y categoría
`Icon` — Atom.

## 2. Propósito
Muestra un pictograma de línea del set de Alora.

## 3. Cuándo usarlo
- Reforzar el significado de un texto (botones, tags, navegación).
- Botones solo con icono cuando el espacio es mínimo y el significado universal (cerrar, buscar).

## 4. Cuándo no usarlo
- Como única forma de comunicar un estado: añadir texto.
- Para ilustraciones o logotipos: usar imágenes o el Logo del Sidebar.

## 5. Anatomía
1. Caja 24×24
2. Trazo 2px con remates redondeados (estilo Lucide)

## 6. Props
| Prop | Tipo | Por defecto | Obligatoria | Descripción |
|---|---|---|---|---|
| `name` | `IconName` | — | Sí | home, list, user, users, calendar, play-circle, bell, eye, clock, check, close, chevron-right, chevron-left, search, info, plus, upload, log-in, log-out, edit, repeat, warning, check-circle, star, trending-up, mail, lock, trash, video. |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'lg'` | No | 12 / 16 / 20 / 24 / 32 px (`size.icon.*`). |
| `tone` | `'primary' \| 'secondary' \| 'brand' \| 'inherit'` | `'inherit'` | No | Color `color.icon.*`; inherit usa currentColor. |
| `label` | `string` | — | No | Si se indica, el icono es significativo (`role=img` + `aria-label`). Si no, `aria-hidden`. |

## 7. Variantes y estados
- **size:** `xs`, `sm`, `md`, `lg`, `xl`
- **tone:** `primary`, `secondary`, `brand`, `inherit`
- **Estados:** `—`

## 8. Tokens utilizados
- `color.icon.primary`
- `color.icon.secondary`
- `color.icon.brand`
- `size.icon.*`

Los tokens propios del componente están en [`Icon.tokens.json`](./Icon.tokens.json). Nunca se usan primitivos directamente.

## 9. Comportamiento interactivo
- No es interactivo por sí mismo.

## 10. Accesibilidad
- Decorativo por defecto (`aria-hidden=true`).
- Con `label` pasa a `role=img`.
- Contraste ≥ 3:1 con el fondo cuando transmite información.

## 11. Reglas de composición
- Dentro de Button, Tag, NavigationItem, Notification, Input.
- El color lo decide el componente padre (`tone=inherit`).

## 12. Ejemplos de código
```tsx
<Icon name="clock" size="sm" tone="inherit" />
```
Más ejemplos en [`Icon.examples.md`](./Icon.examples.md).

## 13. Anti-patrones
- Iconos de otras librerías mezclados con el set.
- Cambiar el grosor del trazo.
- Icono sin texto ni aria-label en un control.

## 14. Versión, estado y changelog
- Versión: `1.0.0`
- Estado: `stable`
- 2026-10-09 · 1.0.0 · Primera versión, extraída de Coach Platform y Surfer Platform.
