# Divider

**Categoría Atomic Design:** Atom · **Estado:** `stable` · **Versión:** 1.0.0
**Figma:** [Divider](https://www.figma.com/design/GZRi3cvtWVfu0MTxPvPEcY/Design-System?node-id=12-186)

## 1. Nombre y categoría
`Divider` — Atom.

## 2. Propósito
Separa grupos de contenido.

## 3. Cuándo usarlo
- Entre el bloque de stats y la lista de envíos; entre filas de lista.

## 4. Cuándo no usarlo
- Para crear espacio: usar tokens `size.space.*`.

## 5. Anatomía
1. Línea de 1px (`divider.color`)

## 6. Props
| Prop | Tipo | Por defecto | Obligatoria | Descripción |
|---|---|---|---|---|
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` | No | Dirección. |
| `isDecorative` | `boolean` | `true` | No | Si es false, `role=separator`. |

## 7. Variantes y estados
- **orientation:** `horizontal`, `vertical`
- **Estados:** `—`

## 8. Tokens utilizados
- `divider.color`
- `size.border.default`

Los tokens propios del componente están en [`Divider.tokens.json`](./Divider.tokens.json). Nunca se usan primitivos directamente.

## 9. Comportamiento interactivo
- No interactivo.

## 10. Accesibilidad
- Decorativo por defecto (`aria-hidden`).

## 11. Reglas de composición
- Libre.

## 12. Ejemplos de código
```tsx
<Divider />
```
Más ejemplos en [`Divider.examples.md`](./Divider.examples.md).

## 13. Anti-patrones
- Bordes dibujados a mano con otros colores.

## 14. Versión, estado y changelog
- Versión: `1.0.0`
- Estado: `stable`
- 2026-10-09 · 1.0.0 · Primera versión, extraída de Coach Platform y Surfer Platform.
