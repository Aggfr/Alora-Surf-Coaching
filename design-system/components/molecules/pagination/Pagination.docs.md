# Pagination

**Categoría Atomic Design:** Molecule · **Estado:** `beta` · **Versión:** 1.0.0
**Figma:** [Pagination](https://www.figma.com/design/GZRi3cvtWVfu0MTxPvPEcY/Design-System?node-id=13-221)

## 1. Nombre y categoría
`Pagination` — Molecule.

## 2. Propósito
Navega entre páginas de una lista larga.

## 3. Cuándo usarlo
- History con más de 20 revisiones.

## 4. Cuándo no usarlo
- Listas cortas o feeds continuos.

## 5. Anatomía
1. Anterior
2. Páginas
3. Elipsis
4. Siguiente

## 6. Props
| Prop | Tipo | Por defecto | Obligatoria | Descripción |
|---|---|---|---|---|
| `page` | `number` | — | Sí | Página actual (1-based). |
| `pageCount` | `number` | — | Sí | Total. |
| `onPageChange` | `(page: number) => void` | — | Sí | Cambio. |

## 7. Variantes y estados
- Sin variantes visuales: el comportamiento se controla con props.
- **Estados:** `first`, `middle`, `last`

## 8. Tokens utilizados
- `button.*`
- `size.space.xs`

Los tokens propios del componente están en [`Pagination.tokens.json`](./Pagination.tokens.json). Nunca se usan primitivos directamente.

## 9. Comportamiento interactivo
- Anterior se deshabilita en la primera página y Siguiente en la última.

## 10. Accesibilidad
- `<nav aria-label="Pagination">`; página actual con `aria-current=page`.

## 11. Reglas de composición
- Debajo de la lista que pagina.
- Depende de: `Button`, `Text`.

## 12. Ejemplos de código
```tsx
<Pagination page={2} pageCount={8} onPageChange={setPage} />
```
Más ejemplos en [`Pagination.examples.md`](./Pagination.examples.md).

## 13. Anti-patrones
- Paginación con 1 página.

## 14. Versión, estado y changelog
- Versión: `1.0.0`
- Estado: `beta`
- 2026-10-09 · 1.0.0 · Primera versión, extraída de Coach Platform y Surfer Platform.
