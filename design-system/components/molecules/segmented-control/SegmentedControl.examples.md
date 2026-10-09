# SegmentedControl · Examples

## Do
```tsx
import { SegmentedControl } from '@alora/design-system';

<SegmentedControl label="Gender" tone="highlight" options={[{ label: "Male", value: "male" }, { label: "Female", value: "female" }, { label: "Other", value: "other" }]} value={gender} onChange={setGender} />
```

## Don't
```tsx
<div>{options.map(o => <button className={o === v ? "on" : ""}>{o}</button>)}</div>
```
Why: More than 6 options.
