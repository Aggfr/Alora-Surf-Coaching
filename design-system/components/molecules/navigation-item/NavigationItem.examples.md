# NavigationItem · Ejemplos

## Correcto
```tsx
import { NavigationItem } from '@alora/design-system';

<NavigationItem label="Queue" icon="play-circle" href="/queue" isActive />
```

## Incorrecto
```tsx
<div onClick={go}>Queue</div>
```
Por qué: Más de un activo a la vez.
