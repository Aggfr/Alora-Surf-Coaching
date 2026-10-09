# FormField · Ejemplos

## Correcto
```tsx
import { FormField } from '@alora/design-system';

<FormField id="email" label="Email" errorMessage={error}>
  <Input id="email" type="email" />
</FormField>
```

## Incorrecto
```tsx
<Label>Email</Label><Input /><span className="red">Error</span>
```
Por qué: Mostrar ayuda y error a la vez.
