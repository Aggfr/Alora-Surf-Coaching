# FormSection

**Categoría Atomic Design:** Organism · **Estado:** `stable` · **Versión:** 1.0.0
**Figma:** [FormSection](https://www.figma.com/design/GZRi3cvtWVfu0MTxPvPEcY/Design-System?node-id=14-349)

## 1. Nombre y categoría
`FormSection` — Organism.

## 2. Propósito
Formulario completo con campos y acciones.

## 3. Cuándo usarlo
- Log in, Create account, pasos de onboarding, editar perfil.

## 4. Cuándo no usarlo
- Un único campo en línea: FormField.

## 5. Anatomía
1. Tarjeta con FormFields
2. Enlaces auxiliares
3. Acción primary a ancho completo
4. Acción secondary opcional

## 6. Props
| Prop | Tipo | Por defecto | Obligatoria | Descripción |
|---|---|---|---|---|
| `onSubmit` | `(event: FormEvent) => void` | — | Sí | Envío. |
| `children` | `ReactNode` | — | Sí | FormFields. |
| `primaryAction` | `{ label: string; icon?: IconName; isLoading?: boolean }` | — | Sí | Envío. |
| `secondaryAction` | `{ label: string; onPress: () => void }` | — | No | Alternativa. |
| `errorSummary` | `string[]` | — | No | Resumen si hay más de un error. |

## 7. Variantes y estados
- Sin variantes visuales: el comportamiento se controla con props.
- **Estados:** `default`, `submitting`, `error`

## 8. Tokens utilizados
- `card.*`
- `size.layout.form-width`
- `size.space.large`
- `size.space.medium`

Los tokens propios del componente están en [`FormSection.tokens.json`](./FormSection.tokens.json). Nunca se usan primitivos directamente.

## 9. Comportamiento interactivo
- Enter envía; el botón entra en loading mientras se envía.

## 10. Accesibilidad
- `<form>` con `aria-describedby` al resumen de errores; el foco va al primer error.

## 11. Reglas de composición
- Slot Form de AuthTemplate o columna de contenido.
- Depende de: `FormField`, `Button`, `Notification`.

## 12. Ejemplos de código
```tsx
<FormSection onSubmit={login} primaryAction={{ label: "Login", icon: "log-in" }} secondaryAction={{ label: "Create new account", onPress: goSignup }}>…</FormSection>
```
Más ejemplos en [`FormSection.examples.md`](./FormSection.examples.md).

## 13. Anti-patrones
- Dos acciones primary.
- Validar mientras se escribe.

## 14. Versión, estado y changelog
- Versión: `1.0.0`
- Estado: `stable`
- 2026-10-09 · 1.0.0 · Primera versión, extraída de Coach Platform y Surfer Platform.
