# Switch

**Categoría Atomic Design:** Atom · **Estado:** `stable` · **Versión:** 1.0.0
**Figma:** [Switch](https://www.figma.com/design/GZRi3cvtWVfu0MTxPvPEcY/Design-System?node-id=12-91)

## 1. Nombre y categoría
`Switch` — Atom.

## 2. Propósito
Activa o desactiva un ajuste con efecto inmediato.

## 3. Cuándo usarlo
- Preferencias que se guardan al instante (notificaciones).

## 4. Cuándo no usarlo
- Cuando el cambio requiere pulsar Guardar: Checkbox.

## 5. Anatomía
1. Pista 36×20 (`switch.radius`)
2. Thumb 16×16
3. Label

## 6. Props
| Prop | Tipo | Por defecto | Obligatoria | Descripción |
|---|---|---|---|---|
| `label` | `ReactNode` | — | Sí | Texto visible. |
| `isOn` | `boolean` | `false` | No | Estado. |
| `isDisabled` | `boolean` | `false` | No | Deshabilitado. |
| `onChange` | `(on: boolean) => void` | — | No | Cambio. |

## 7. Variantes y estados
- **on:** `false`, `true`
- **Estados:** `default`, `disabled`

## 8. Tokens utilizados
- `switch.track-off`
- `switch.track-on`
- `switch.thumb`
- `switch.radius`
- `color.border.default`

Los tokens propios del componente están en [`Switch.tokens.json`](./Switch.tokens.json). Nunca se usan primitivos directamente.

## 9. Comportamiento interactivo
- El thumb se desplaza con `motion.transition-base`.

## 10. Accesibilidad
- `role=switch` + `aria-checked`.
- El estado no depende solo del color: la posición del thumb cambia.

## 11. Reglas de composición
- Listas de ajustes, una por fila.
- Depende de: `Label`.

## 12. Ejemplos de código
```tsx
<Switch label="Email notifications" isOn={notify} onChange={setNotify} />
```
Más ejemplos en [`Switch.examples.md`](./Switch.examples.md).

## 13. Anti-patrones
- Switch dentro de un formulario con botón Guardar.

## 14. Versión, estado y changelog
- Versión: `1.0.0`
- Estado: `stable`
- 2026-10-09 · 1.0.0 · Primera versión, extraída de Coach Platform y Surfer Platform.
