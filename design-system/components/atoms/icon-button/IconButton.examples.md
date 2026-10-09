# IconButton · Examples

## Do
```tsx
import { IconButton } from '@alora/design-system';

<IconButton icon="chevron-left" label="Back" onPress={goBack} />
```

## Don't
```tsx
<button><Icon name="chevron-left" /></button>
```
Why: An icon-only Button without `label`.
