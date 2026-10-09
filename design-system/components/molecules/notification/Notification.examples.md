# Notification · Ejemplos

## Correcto
```tsx
import { Notification } from '@alora/design-system';

<Notification tone="success" title="Submission sent" description="Your coach has 48h to review your clip." />
```

## Incorrecto
```tsx
alert("Upload failed")
```
Por qué: Más de 3 notificaciones visibles.
