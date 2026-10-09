# Input · Ejemplos

## Correcto
```tsx
import { Input } from '@alora/design-system';

<Input id="email" type="email" value={email} onChange={setEmail} />
```

## Incorrecto
```tsx
<input style={{ border: "1px solid red" }} placeholder="Email" />
```
Por qué: Placeholder como única etiqueta.
