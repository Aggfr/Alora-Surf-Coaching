# PageHeader · Ejemplos

## Correcto
```tsx
import { PageHeader } from '@alora/design-system';

<PageHeader title="Welcome, Alejandro" subtitle="Connect with your surfers" actions={<Avatar name="Coach" tone="elite" />} />
```

## Incorrecto
```tsx
<h1 style={{ fontSize: 40 }}>Welcome</h1>
```
Por qué: Más de dos acciones; usar un menú.
