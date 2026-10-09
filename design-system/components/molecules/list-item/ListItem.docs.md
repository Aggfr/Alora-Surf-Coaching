# ListItem

**Categoría Atomic Design:** Molecule · **Estado:** `stable` · **Versión:** 1.0.0
**Figma:** [ListItem](https://www.figma.com/design/GZRi3cvtWVfu0MTxPvPEcY/Design-System?node-id=13-120)

## 1. Nombre y categoría
`ListItem` — Molecule.

## 2. Propósito
Fila de una lista con tres formatos: persona, definición o navegación.

## 3. Cuándo usarlo
- Lista de surfers (person).
- Datos de cuenta (definition).
- Enlaces legales (navigation).

## 4. Cuándo no usarlo
- Contenido rico con acciones múltiples: SubmissionCard.

## 5. Anatomía
1. person: Avatar + título + descripción + acción
2. definition: etiqueta + valor + acción opcional
3. navigation: título + chevron

## 6. Props
| Prop | Tipo | Por defecto | Obligatoria | Descripción |
|---|---|---|---|---|
| `type` | `'person' \| 'definition' \| 'navigation'` | `'definition'` | No | Formato. |
| `title` | `string` | — | Sí | Título o etiqueta. |
| `description` | `string` | — | No | Descripción (person) o valor (definition). |
| `avatarName` | `string` | — | No | Solo person. |
| `action` | `{ label: string; onPress: () => void; tone?: 'default' \| 'danger' }` | — | No | Acción a la derecha. |
| `href` | `string` | — | No | Solo navigation: destino. |
| `hasDivider` | `boolean` | `true` | No | Línea inferior. |

## 7. Variantes y estados
- **type:** `person`, `definition`, `navigation`
- **Estados:** `default`, `hover (navigation)`

## 8. Tokens utilizados
- `size.space.large`
- `size.space.medium`
- `divider.color`
- `typography.overline`
- `typography.body-small`
- `typography.heading-small`

Los tokens propios del componente están en [`ListItem.tokens.json`](./ListItem.tokens.json). Nunca se usan primitivos directamente.

## 9. Comportamiento interactivo
- navigation: toda la fila es clicable.

## 10. Accesibilidad
- Listas con `<ul>`; definition dentro de `<dl>` con `<dt>`/`<dd>`.

## 11. Reglas de composición
- DataList, listas de surfers.
- Depende de: `Avatar`, `Heading`, `Text`, `Button`, `Icon`, `Divider`.

## 12. Ejemplos de código
```tsx
<ListItem type="definition" title="PLAN RENEWS" description="26 sept 2026" action={{ label: "Cancel your plan", tone: "danger", onPress: openCancel }} />
```
Más ejemplos en [`ListItem.examples.md`](./ListItem.examples.md).

## 13. Anti-patrones
- Mezclar tipos dentro de la misma lista.

## 14. Versión, estado y changelog
- Versión: `1.0.0`
- Estado: `stable`
- 2026-10-09 · 1.0.0 · Primera versión, extraída de Coach Platform y Surfer Platform.
