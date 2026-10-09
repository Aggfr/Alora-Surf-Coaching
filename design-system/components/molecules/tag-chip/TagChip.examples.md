# TagChip · Examples

## Do
```tsx
import { TagChip } from '@alora/design-system';

<TagChip label="Advanced" isSelected onToggle={toggle} onRemove={remove} />
```

## Don't
```tsx
<Badge onClick={toggle}>Advanced</Badge>
```
Why: Using TagChip for system states.
