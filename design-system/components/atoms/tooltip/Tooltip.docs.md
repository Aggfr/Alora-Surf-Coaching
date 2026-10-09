# Tooltip

**Categoría Atomic Design:** Atom · **Estado:** `beta` · **Versión:** 1.0.0
**Figma:** [Tooltip](https://www.figma.com/design/GZRi3cvtWVfu0MTxPvPEcY/Design-System?node-id=12-200)

## 1. Nombre y categoría
`Tooltip` — Atom.

## 2. Propósito
Describe brevemente un control al hacer hover o focus.

## 3. Cuándo usarlo
- Botones solo con icono, abreviaturas.

## 4. Cuándo no usarlo
- Información esencial o acciones: usar texto visible o Notification.

## 5. Anatomía
1. Burbuja (`tooltip.background`, `tooltip.radius`)
2. Flecha
3. Texto (`typography.body-small`)

## 6. Props
| Prop | Tipo | Por defecto | Obligatoria | Descripción |
|---|---|---|---|---|
| `content` | `string` | — | Sí | Texto breve (≤ 60 caracteres). |
| `placement` | `'top' \| 'bottom'` | `'top'` | No | Posición. |
| `children` | `ReactElement` | — | Sí | Elemento disparador enfocable. |

## 7. Variantes y estados
- **placement:** `top`, `bottom`
- **Estados:** `hidden`, `visible`

## 8. Tokens utilizados
- `tooltip.background`
- `tooltip.foreground`
- `tooltip.radius`
- `tooltip.padding`
- `z-index.tooltip`

Los tokens propios del componente están en [`Tooltip.tokens.json`](./Tooltip.tokens.json). Nunca se usan primitivos directamente.

## 9. Comportamiento interactivo
- Aparece tras 300ms de hover o al instante con foco; Escape lo cierra.

## 10. Accesibilidad
- `role=tooltip` enlazado con `aria-describedby`.
- No desaparece mientras el puntero está encima (WCAG 1.4.13).

## 11. Reglas de composición
- Envuelve Button icon-only.

## 12. Ejemplos de código
```tsx
<Tooltip content="Close"><Button variant="ghost" leadingIcon="close" aria-label="Close" /></Tooltip>
```
Más ejemplos en [`Tooltip.examples.md`](./Tooltip.examples.md).

## 13. Anti-patrones
- Tooltips con enlaces o botones dentro.

## 14. Versión, estado y changelog
- Versión: `1.0.0`
- Estado: `beta`
- 2026-10-09 · 1.0.0 · Primera versión, extraída de Coach Platform y Surfer Platform.
