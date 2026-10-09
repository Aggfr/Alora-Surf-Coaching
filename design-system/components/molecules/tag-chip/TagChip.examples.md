# TagChip · Ejemplos

## Correcto
```tsx
import { TagChip } from '@alora/design-system';

<TagChip label="Advanced" isSelected onToggle={toggle} onRemove={remove} />
```

## Incorrecto
```tsx
<Badge onClick={toggle}>Advanced</Badge>
```
Por qué: Usar TagChip para estados del sistema.
