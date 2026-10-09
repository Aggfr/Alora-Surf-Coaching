# StatGroup · Examples

## Do
```tsx
import { StatGroup } from '@alora/design-system';

<StatGroup items={[{ label: "Submissions left", value: 3, tone: "brand" }, { label: "Clip time", value: "2:30" }]} />
```

## Don't
```tsx
<div className="stats"><b>3</b> left</div>
```
Why: More than four items; use a DataList.
