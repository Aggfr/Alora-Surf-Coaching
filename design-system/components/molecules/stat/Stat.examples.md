# Stat · Ejemplos

## Correcto
```tsx
import { Stat } from '@alora/design-system';

<Stat label="Pending" value={3} />
```

## Incorrecto
```tsx
<div className="stat"><b>3</b></div>
```
Por qué: Tendencia solo con color.
