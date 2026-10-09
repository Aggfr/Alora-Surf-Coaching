# ProgressBar · Examples

## Do
```tsx
import { ProgressBar } from '@alora/design-system';

<ProgressBar value={11} max={150} label="Clip time used" valueText="0:11 of 2:30" />
```

## Don't
```tsx
<div className="bar"><div style={{ width: "7%" }} /></div>
```
Why: Using it for unknown durations.
