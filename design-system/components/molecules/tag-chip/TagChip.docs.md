# TagChip

**Categoría Atomic Design:** Molecule · **Estado:** `beta` · **Versión:** 1.0.0
**Figma:** [TagChip](https://www.figma.com/design/GZRi3cvtWVfu0MTxPvPEcY/Design-System?node-id=13-139)

## 1. Nombre y categoría
`TagChip` — Molecule.

## 2. Propósito
Chip seleccionable o eliminable.

## 3. Cuándo usarlo
- Filtros (nivel, tipo de ola), etiquetas que el usuario añade o quita.

## 4. Cuándo no usarlo
- Información estática: Tag o Badge.

## 5. Anatomía
1. Contenedor píldora
2. Label
3. Botón quitar opcional

## 6. Props
| Prop | Tipo | Por defecto | Obligatoria | Descripción |
|---|---|---|---|---|
| `label` | `string` | — | Sí | Texto. |
| `isSelected` | `boolean` | `false` | No | Seleccionado. |
| `onToggle` | `() => void` | — | No | Selección. |
| `onRemove` | `() => void` | — | No | Muestra botón quitar. |

## 7. Variantes y estados
- Sin variantes visuales: el comportamiento se controla con props.
- **Estados:** `default`, `hover`, `selected`

## 8. Tokens utilizados
- `tag.radius`
- `tag.padding-horizontal`
- `color.action.secondary.*`
- `color.background.brand-subtle`
- `color.border.brand`
- `color.text.brand`

Los tokens propios del componente están en [`TagChip.tokens.json`](./TagChip.tokens.json). Nunca se usan primitivos directamente.

## 9. Comportamiento interactivo
- Clic alterna; el botón quitar no alterna.

## 10. Accesibilidad
- `<button aria-pressed>`; quitar es otro botón con `aria-label="Remove {label}"`.

## 11. Reglas de composición
- Grupos horizontales con wrap y gap `size.space.small`.
- Depende de: `Text`, `Icon`.

## 12. Ejemplos de código
```tsx
<TagChip label="Advanced" isSelected onToggle={toggle} onRemove={remove} />
```
Más ejemplos en [`TagChip.examples.md`](./TagChip.examples.md).

## 13. Anti-patrones
- Usar TagChip para estados del sistema.

## 14. Versión, estado y changelog
- Versión: `1.0.0`
- Estado: `beta`
- 2026-10-09 · 1.0.0 · Primera versión, extraída de Coach Platform y Surfer Platform.
