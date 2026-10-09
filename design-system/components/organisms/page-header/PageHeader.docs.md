# PageHeader

**Categoría Atomic Design:** Organism · **Estado:** `stable` · **Versión:** 1.0.0
**Figma:** [PageHeader](https://www.figma.com/design/GZRi3cvtWVfu0MTxPvPEcY/Design-System?node-id=14-116)

## 1. Nombre y categoría
`PageHeader` — Organism.

## 2. Propósito
Cabecera de cada vista con título, subtítulo y acciones.

## 3. Cuándo usarlo
- Primera sección de toda vista dentro de DashboardTemplate.

## 4. Cuándo no usarlo
- Títulos de sección internos: Heading medium.

## 5. Anatomía
1. Título (Heading display, h1)
2. Subtítulo opcional
3. Slot Actions (máx. 2)

## 6. Props
| Prop | Tipo | Por defecto | Obligatoria | Descripción |
|---|---|---|---|---|
| `title` | `string` | — | Sí | Saludo o título. |
| `subtitle` | `string` | — | No | Texto de apoyo. |
| `actions` | `ReactNode` | — | No | Tag, Avatar o Button (máx. 2). |

## 7. Variantes y estados
- **context:** `coach`, `surfer`
- **Estados:** `—`

## 8. Tokens utilizados
- `typography.display`
- `color.text.brand`
- `size.space.small`
- `size.space.medium`
- `size.layout.content-width`

Los tokens propios del componente están en [`PageHeader.tokens.json`](./PageHeader.tokens.json). Nunca se usan primitivos directamente.

## 9. Comportamiento interactivo
- No interactivo; las acciones lo son.

## 10. Accesibilidad
- Único h1 de la vista.

## 11. Reglas de composición
- Slot Header de DashboardTemplate.
- Depende de: `Heading`, `Text`, `Tag`, `Avatar`.

## 12. Ejemplos de código
```tsx
<PageHeader title="Welcome, Alejandro" subtitle="Connect with your surfers" actions={<Avatar name="Coach" tone="elite" />} />
```
Más ejemplos en [`PageHeader.examples.md`](./PageHeader.examples.md).

## 13. Anti-patrones
- Más de dos acciones; usar un menú.

## 14. Versión, estado y changelog
- Versión: `1.0.0`
- Estado: `stable`
- 2026-10-09 · 1.0.0 · Primera versión, extraída de Coach Platform y Surfer Platform.
