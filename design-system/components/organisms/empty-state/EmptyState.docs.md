# EmptyState

**Categoría Atomic Design:** Organism · **Estado:** `stable` · **Versión:** 1.0.0
**Figma:** [EmptyState](https://www.figma.com/design/GZRi3cvtWVfu0MTxPvPEcY/Design-System?node-id=14-277)

## 1. Nombre y categoría
`EmptyState` — Organism.

## 2. Propósito
Explica por qué una zona está vacía y ofrece la siguiente acción.

## 3. Cuándo usarlo
- Cola vacía, historial vacío, sin surfers.

## 4. Cuándo no usarlo
- Errores: Notification danger.

## 5. Anatomía
1. Icono decorativo
2. Mensaje
3. Acción opcional (Button)

## 6. Props
| Prop | Tipo | Por defecto | Obligatoria | Descripción |
|---|---|---|---|---|
| `message` | `string` | — | Sí | Estado actual en lenguaje del usuario. |
| `icon` | `IconName` | `'info'` | No | Icono. |
| `action` | `{ label: string; icon?: IconName; onPress: () => void }` | — | No | Siguiente paso. |

## 7. Variantes y estados
- **action:** `false`, `true`
- **Estados:** `—`

## 8. Tokens utilizados
- `card.background`
- `card.radius`
- `color.background.canvas`
- `color.text.tertiary`
- `size.space.xl`

Los tokens propios del componente están en [`EmptyState.tokens.json`](./EmptyState.tokens.json). Nunca se usan primitivos directamente.

## 9. Comportamiento interactivo
- Solo la acción es interactiva.

## 10. Accesibilidad
- Icono `aria-hidden`; el mensaje es texto real.

## 11. Reglas de composición
- Ocupa el lugar de la lista vacía.
- Depende de: `Icon`, `Text`, `Button`.

## 12. Ejemplos de código
```tsx
<EmptyState message="No submissions waiting for review." />
```
Más ejemplos en [`EmptyState.examples.md`](./EmptyState.examples.md).

## 13. Anti-patrones
- Mensajes que culpan al usuario.

## 14. Versión, estado y changelog
- Versión: `1.0.0`
- Estado: `stable`
- 2026-10-09 · 1.0.0 · Primera versión, extraída de Coach Platform y Surfer Platform.
