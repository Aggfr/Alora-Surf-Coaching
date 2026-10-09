# Tooltip · Ejemplos

## Correcto
```tsx
import { Tooltip } from '@alora/design-system';

<Tooltip content="Close"><Button variant="ghost" leadingIcon="close" aria-label="Close" /></Tooltip>
```

## Incorrecto
```tsx
<Tooltip content="Your plan renews on 26 sept and you will be charged…">
```
Por qué: Tooltips con enlaces o botones dentro.
