# Text

**Categoría Atomic Design:** Atom · **Estado:** `stable` · **Versión:** 1.0.0
**Figma:** [Text](https://www.figma.com/design/GZRi3cvtWVfu0MTxPvPEcY/Design-System?node-id=9-65)

## 1. Nombre y categoría
`Text` — Atom.

## 2. Propósito
Muestra texto de lectura y metadatos con un rol tipográfico y un tono semántico.

## 3. Cuándo usarlo
- Párrafos, descripciones, metadatos, fechas y overlines.

## 4. Cuándo no usarlo
- Títulos: usar Heading.
- Etiquetas de formulario: usar Label.

## 5. Anatomía
1. Texto

## 6. Props
| Prop | Tipo | Por defecto | Obligatoria | Descripción |
|---|---|---|---|---|
| `children` | `ReactNode` | — | Sí | Contenido. |
| `role` | `'body-large' \| 'body-medium' \| 'body-small' \| 'caption' \| 'overline'` | `'body-medium'` | No | Estilo tipográfico (`typography.*`). |
| `tone` | `'primary' \| 'secondary' \| 'tertiary' \| 'brand' \| 'danger'` | `'primary'` | No | Color semántico. |
| `as` | `'p' \| 'span' \| 'div' \| 'dd' \| 'dt'` | `'p'` | No | Elemento HTML. |

## 7. Variantes y estados
- **role:** `body-large`, `body-medium`, `body-small`, `caption`, `overline`
- **tone:** `primary`, `secondary`, `tertiary`, `brand`, `danger`
- **Estados:** `—`

## 8. Tokens utilizados
- `typography.body-*`
- `typography.caption`
- `typography.overline`
- `color.text.*`
- `color.feedback.danger.foreground`

Los tokens propios del componente están en [`Text.tokens.json`](./Text.tokens.json). Nunca se usan primitivos directamente.

## 9. Comportamiento interactivo
- No interactivo.

## 10. Accesibilidad
- `tertiary` cumple 4.5:1 sobre surface-raised, pero no se usa para información crítica.
- `overline` se escribe en mayúsculas en el contenido; no usar text-transform para siglas.

## 11. Reglas de composición
- Libre dentro de moléculas y organismos.

## 12. Ejemplos de código
```tsx
<Text role="body-small" tone="tertiary">Submitted 31 ago 2026, 18:01</Text>
```
Más ejemplos en [`Text.examples.md`](./Text.examples.md).

## 13. Anti-patrones
- Combinar tamaño y peso sueltos en vez de `role`.
- Usar `brand` para texto no enlazable de forma masiva.

## 14. Versión, estado y changelog
- Versión: `1.0.0`
- Estado: `stable`
- 2026-10-09 · 1.0.0 · Primera versión, extraída de Coach Platform y Surfer Platform.
