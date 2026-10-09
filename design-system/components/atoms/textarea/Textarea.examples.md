# Textarea · Ejemplos

## Correcto
```tsx
import { Textarea } from '@alora/design-system';

<Textarea id="note" maxLength={280} value={note} onChange={setNote} />
```

## Incorrecto
```tsx
<textarea style={{ height: 112 }} />
```
Por qué: Usarlo para un único dato corto.
