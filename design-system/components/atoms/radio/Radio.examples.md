# Radio · Examples

## Do
```tsx
import { Radio } from '@alora/design-system';

<Radio name="stance" value="goofy" label="Goofy" isSelected={stance === "goofy"} />
```

## Don't
```tsx
<Radio label="Accept terms" />
```
Why: A lone radio button.
