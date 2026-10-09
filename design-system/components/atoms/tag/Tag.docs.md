# Tag

**Categoría Atomic Design:** Atom · **Estado:** `stable` · **Versión:** 1.0.0
**Figma:** [Tag](https://www.figma.com/design/GZRi3cvtWVfu0MTxPvPEcY/Design-System?node-id=12-167)

## 1. Nombre y categoría
`Tag` — Atom.

## 2. Propósito
Píldora informativa con icono opcional.

## 3. Cuándo usarlo
- Tiempo restante de una revisión, plan destacado, contexto (Surf park).

## 4. Cuándo no usarlo
- Estados cortos sin icono: Badge.
- Elementos seleccionables o eliminables: TagChip.

## 5. Anatomía
1. Contenedor píldora (`tag.radius`)
2. Icono opcional
3. Texto (`typography.body-small`)

## 6. Props
| Prop | Tipo | Por defecto | Obligatoria | Descripción |
|---|---|---|---|---|
| `children` | `ReactNode` | — | Sí | Texto. |
| `tone` | `'brand' \| 'highlight' \| 'warning' \| 'danger' \| 'neutral'` | `'brand'` | No | Tono semántico. |
| `icon` | `IconName` | — | No | Icono inicial. |

## 7. Variantes y estados
- **tone:** `brand`, `highlight`, `warning`, `danger`, `neutral`
- **Estados:** `—`

## 8. Tokens utilizados
- `tag.background`
- `tag.foreground`
- `tag.border`
- `tag.radius`
- `tag.padding-horizontal`
- `color.background.highlight-subtle`
- `color.text.highlight`
- `color.feedback.*`

Los tokens propios del componente están en [`Tag.tokens.json`](./Tag.tokens.json). Nunca se usan primitivos directamente.

## 9. Comportamiento interactivo
- No interactivo.

## 10. Accesibilidad
- Si el Tag comunica urgencia (warning/danger), el texto lo dice ('1h 9m left', 'Overdue').

## 11. Reglas de composición
- SubmissionCard (plazo), PageHeader (plan, notificaciones).
- Depende de: `Icon`.

## 12. Ejemplos de código
```tsx
<Tag tone="warning" icon="clock">1h 9m left</Tag>
```
Más ejemplos en [`Tag.examples.md`](./Tag.examples.md).

## 13. Anti-patrones
- Usar Tag como botón.

## 14. Versión, estado y changelog
- Versión: `1.0.0`
- Estado: `stable`
- 2026-10-09 · 1.0.0 · Primera versión, extraída de Coach Platform y Surfer Platform.
