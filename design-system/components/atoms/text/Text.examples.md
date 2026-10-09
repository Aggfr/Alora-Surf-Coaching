# Text · Ejemplos

## Correcto
```tsx
import { Text } from '@alora/design-system';

<Text role="body-small" tone="tertiary">Submitted 31 ago 2026, 18:01</Text>
```

## Incorrecto
```tsx
<p style={{ fontSize: 12, color: "#4d6e87" }}>Submitted…</p>
```
Por qué: Combinar tamaño y peso sueltos en vez de `role`.
