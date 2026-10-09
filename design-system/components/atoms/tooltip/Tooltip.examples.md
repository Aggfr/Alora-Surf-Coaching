# Tooltip · Examples

## Do
```tsx
import { Tooltip } from '@alora/design-system';

<Tooltip content="Close"><Button variant="ghost" leadingIcon="close" aria-label="Close" /></Tooltip>
```

## Don't
```tsx
<Tooltip content="Your plan renews on 26 sept and you will be charged…">
```
Why: Tooltips containing links or buttons.
