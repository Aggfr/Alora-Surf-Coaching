# Spinner

**Categoría Atomic Design:** Atom · **Estado:** `stable` · **Versión:** 1.0.0
**Figma:** [Spinner](https://www.figma.com/design/GZRi3cvtWVfu0MTxPvPEcY/Design-System?node-id=12-180)

## 1. Nombre y categoría
`Spinner` — Atom.

## 2. Propósito
Indica una espera de duración indeterminada.

## 3. Cuándo usarlo
- Subida de vídeo, envío de revisión, carga de la cola.

## 4. Cuándo no usarlo
- Progreso medible: barra de progreso (planificado).
- Carga de una vista completa: skeletons (planificado).

## 5. Anatomía
1. Pista circular (`spinner.track`)
2. Arco animado (`spinner.indicator`)

## 6. Props
| Prop | Tipo | Por defecto | Obligatoria | Descripción |
|---|---|---|---|---|
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | No | 16 / 24 / 32 px. |
| `label` | `string` | `'Loading'` | No | Texto para lectores de pantalla. |

## 7. Variantes y estados
- **size:** `small`, `medium`, `large`
- **Estados:** `—`

## 8. Tokens utilizados
- `spinner.track`
- `spinner.indicator`
- `size.border.focus`
- `motion.duration.slow`

Los tokens propios del componente están en [`Spinner.tokens.json`](./Spinner.tokens.json). Nunca se usan primitivos directamente.

## 9. Comportamiento interactivo
- Rota de forma continua; con `prefers-reduced-motion` pulsa la opacidad.

## 10. Accesibilidad
- `role=status` con `aria-label`.
- Respeta `prefers-reduced-motion`.

## 11. Reglas de composición
- Dentro de Button (isLoading) o centrado en un EmptyState de carga.

## 12. Ejemplos de código
```tsx
<Spinner size="small" label="Uploading video" />
```
Más ejemplos en [`Spinner.examples.md`](./Spinner.examples.md).

## 13. Anti-patrones
- Varios spinners simultáneos en una vista.

## 14. Versión, estado y changelog
- Versión: `1.0.0`
- Estado: `stable`
- 2026-10-09 · 1.0.0 · Primera versión, extraída de Coach Platform y Surfer Platform.
