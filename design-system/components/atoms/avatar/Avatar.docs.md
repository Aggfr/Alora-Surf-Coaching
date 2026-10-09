# Avatar

**Categoría Atomic Design:** Atom · **Estado:** `stable` · **Versión:** 1.0.0
**Figma:** [Avatar](https://www.figma.com/design/GZRi3cvtWVfu0MTxPvPEcY/Design-System?node-id=12-119)

## 1. Nombre y categoría
`Avatar` — Atom.

## 2. Propósito
Representa a una persona con sus iniciales.

## 3. Cuándo usarlo
- Junto al nombre de un surfer o coach (listas, tarjetas, cabecera).

## 4. Cuándo no usarlo
- Como único identificador de una persona: mostrar siempre el nombre.

## 5. Anatomía
1. Círculo (`avatar.radius`)
2. Iniciales

## 6. Props
| Prop | Tipo | Por defecto | Obligatoria | Descripción |
|---|---|---|---|---|
| `name` | `string` | — | Sí | Nombre completo; se calculan las iniciales. |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | No | 24 / 32 / 64 px. |
| `tone` | `'brand' \| 'elite' \| 'progression' \| 'neutral'` | `'brand'` | No | Color de fondo; los tonos de plan van con Badge de plan. |

## 7. Variantes y estados
- **size:** `small`, `medium`, `large`
- **tone:** `brand`, `elite`, `progression`, `neutral`
- **Estados:** `—`

## 8. Tokens utilizados
- `avatar.background`
- `avatar.foreground`
- `avatar.radius`
- `color.plan.*.foreground`
- `color.text.inverse`

Los tokens propios del componente están en [`Avatar.tokens.json`](./Avatar.tokens.json). Nunca se usan primitivos directamente.

## 9. Comportamiento interactivo
- No interactivo; si abre el perfil, envolver en un enlace con el nombre.

## 10. Accesibilidad
- Iniciales con `aria-hidden`; el nombre visible al lado da el contexto.

## 11. Reglas de composición
- ListItem type=person, SubmissionCard, PageHeader.

## 12. Ejemplos de código
```tsx
<Avatar name="Khata Kraiwan" tone="elite" />
```
Más ejemplos en [`Avatar.examples.md`](./Avatar.examples.md).

## 13. Anti-patrones
- Comunicar el plan solo con el color del avatar.

## 14. Versión, estado y changelog
- Versión: `1.0.0`
- Estado: `stable`
- 2026-10-09 · 1.0.0 · Primera versión, extraída de Coach Platform y Surfer Platform.
