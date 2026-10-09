# Heading · Ejemplos

## Correcto
```tsx
import { Heading } from '@alora/design-system';

<Heading level="display" as="h1">Welcome, Alejandro</Heading>
```

## Incorrecto
```tsx
<div className="big-bold">Welcome</div>
```
Por qué: Usar Heading para texto en negrita sin función de título.
