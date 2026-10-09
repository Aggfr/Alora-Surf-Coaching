# Spinner · Ejemplos

## Correcto
```tsx
import { Spinner } from '@alora/design-system';

<Spinner size="small" label="Uploading video" />
```

## Incorrecto
```tsx
<img src="loader.gif" />
```
Por qué: Varios spinners simultáneos en una vista.
