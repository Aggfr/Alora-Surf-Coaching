# NavigationItem · Examples

## Do
```tsx
import { NavigationItem } from '@alora/design-system';

<NavigationItem label="Queue" icon="play-circle" href="/queue" isActive />
```

## Don't
```tsx
<div onClick={go}>Queue</div>
```
Why: More than one active item at once.
