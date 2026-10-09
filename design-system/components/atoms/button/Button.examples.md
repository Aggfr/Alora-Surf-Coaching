# Button · Ejemplos

## Correcto
```tsx
import { Button } from '@alora/design-system';

<Button variant="primary" leadingIcon="eye" onPress={openReview}>View & Download</Button>
```

## Incorrecto
```tsx
<Button style={{ background: "#3b8eaa" }}>OK</Button>
```
Por qué: Dos botones primary en la misma vista.
