# AvailabilityGrid · Examples

## Do
```tsx
import { AvailabilityGrid } from '@alora/design-system';

<AvailabilityGrid label="Weekly availability" value={slots} onChange={setSlots} actions={<Button onPress={save}>Save availability</Button>} />
```

## Don't
```tsx
<table>{hours.map(h => <tr><td onClick={…} /></tr>)}</table>
```
Why: Saving on every click: keep an explicit Save action.
