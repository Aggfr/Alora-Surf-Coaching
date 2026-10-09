# Tag · Ejemplos

## Correcto
```tsx
import { Tag } from '@alora/design-system';

<Tag tone="warning" icon="clock">1h 9m left</Tag>
```

## Incorrecto
```tsx
<Tag onClick={…}>Filter</Tag>
```
Por qué: Usar Tag como botón.
