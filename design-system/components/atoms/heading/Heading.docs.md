# Heading

**Categoría Atomic Design:** Atom · **Estado:** `stable` · **Versión:** 1.0.0
**Figma:** [Heading](https://www.figma.com/design/GZRi3cvtWVfu0MTxPvPEcY/Design-System?node-id=9-77)

## 1. Nombre y categoría
`Heading` — Atom.

## 2. Propósito
Titula una vista, sección o tarjeta respetando la jerarquía del documento.

## 3. Cuándo usarlo
- Saludo de la vista (display, h1).
- Títulos de sección (medium, h2) y de tarjeta (small, h3).

## 4. Cuándo no usarlo
- Para destacar texto dentro de un párrafo: usar Text.

## 5. Anatomía
1. Texto (`typography.display` o `typography.heading-*`)

## 6. Props
| Prop | Tipo | Por defecto | Obligatoria | Descripción |
|---|---|---|---|---|
| `children` | `ReactNode` | — | Sí | Texto del título. |
| `level` | `'display' \| 'large' \| 'medium' \| 'small'` | `'medium'` | No | Estilo visual. |
| `as` | `'h1' \| 'h2' \| 'h3' \| 'h4' \| 'h5' \| 'h6'` | `según level` | No | Nivel semántico; no saltar niveles. |

## 7. Variantes y estados
- **level:** `display`, `large`, `medium`, `small`
- **Estados:** `—`

## 8. Tokens utilizados
- `typography.display`
- `typography.heading-large`
- `typography.heading-medium`
- `typography.heading-small`
- `color.text.primary`

Los tokens propios del componente están en [`Heading.tokens.json`](./Heading.tokens.json). Nunca se usan primitivos directamente.

## 9. Comportamiento interactivo
- No interactivo.

## 10. Accesibilidad
- Un solo h1 por vista.
- El orden de niveles refleja la estructura, no el tamaño.

## 11. Reglas de composición
- PageHeader usa display; DataList usa medium; SubmissionCard usa small.

## 12. Ejemplos de código
```tsx
<Heading level="display" as="h1">Welcome, Alejandro</Heading>
```
Más ejemplos en [`Heading.examples.md`](./Heading.examples.md).

## 13. Anti-patrones
- Usar Heading para texto en negrita sin función de título.
- Saltar de h1 a h4.

## 14. Versión, estado y changelog
- Versión: `1.0.0`
- Estado: `stable`
- 2026-10-09 · 1.0.0 · Primera versión, extraída de Coach Platform y Surfer Platform.
