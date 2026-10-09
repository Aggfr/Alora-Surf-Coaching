# Stat

**Categoría Atomic Design:** Molecule · **Estado:** `stable` · **Versión:** 1.0.0
**Figma:** [Stat](https://www.figma.com/design/GZRi3cvtWVfu0MTxPvPEcY/Design-System?node-id=13-154)

## 1. Nombre y categoría
`Stat` — Molecule.

## 2. Propósito
Muestra una métrica con su etiqueta y una tendencia opcional.

## 3. Cuándo usarlo
- Resumen de la cola (Pending, Reviewed) y del plan (Cycle submissions, Renews).

## 4. Cuándo no usarlo
- Series temporales: gráfico (planificado).

## 5. Anatomía
1. Etiqueta
2. Valor (`typography.metric`)
3. Tendencia opcional (icono + texto)

## 6. Props
| Prop | Tipo | Por defecto | Obligatoria | Descripción |
|---|---|---|---|---|
| `label` | `string` | — | Sí | Qué se mide. |
| `value` | `string \| number` | — | Sí | Valor formateado. |
| `trend` | `{ direction: 'up' \| 'down'; label: string }` | — | No | Variación. |

## 7. Variantes y estados
- **trend:** `none`, `up`
- **Estados:** `—`

## 8. Tokens utilizados
- `stat.background`
- `stat.label`
- `stat.value`
- `card.radius`
- `size.space.xl`
- `typography.metric`
- `color.feedback.success.foreground`

Los tokens propios del componente están en [`Stat.tokens.json`](./Stat.tokens.json). Nunca se usan primitivos directamente.

## 9. Comportamiento interactivo
- No interactivo.

## 10. Accesibilidad
- Etiqueta y valor en el mismo `<div role=group>` con `aria-label`.
- La tendencia se lee como texto.

## 11. Reglas de composición
- Rejilla de 2 columnas con gap `size.space.xl`.
- Depende de: `Text`, `Icon`.

## 12. Ejemplos de código
```tsx
<Stat label="Pending" value={3} />
```
Más ejemplos en [`Stat.examples.md`](./Stat.examples.md).

## 13. Anti-patrones
- Tendencia solo con color.

## 14. Versión, estado y changelog
- Versión: `1.0.0`
- Estado: `stable`
- 2026-10-09 · 1.0.0 · Primera versión, extraída de Coach Platform y Surfer Platform.
