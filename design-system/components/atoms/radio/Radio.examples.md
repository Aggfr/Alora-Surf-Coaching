# Radio · Ejemplos

## Correcto
```tsx
import { Radio } from '@alora/design-system';

<Radio name="stance" value="goofy" label="Goofy" isSelected={stance === "goofy"} />
```

## Incorrecto
```tsx
<Radio label="Accept terms" />
```
Por qué: Un radio suelto.
