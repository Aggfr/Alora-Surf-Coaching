# Label · Ejemplos

## Correcto
```tsx
import { Label } from '@alora/design-system';

<Label htmlFor="email" isRequired>Email</Label>
```

## Incorrecto
```tsx
<span style={{ fontWeight: 600 }}>Email</span>
```
Por qué: Usar el placeholder como label.
