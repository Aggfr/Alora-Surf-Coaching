# Sidebar · Ejemplos

## Correcto
```tsx
import { Sidebar } from '@alora/design-system';

<Sidebar product="coach" activeHref="/queue" />
```

## Incorrecto
```tsx
<Sidebar style={{ width: 200 }} />
```
Por qué: Añadir acciones (botones) al Sidebar.
