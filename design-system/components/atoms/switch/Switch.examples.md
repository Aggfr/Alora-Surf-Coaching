# Switch · Examples

## Do
```tsx
import { Switch } from '@alora/design-system';

<Switch label="Email notifications" isOn={notify} onChange={setNotify} />
```

## Don't
```tsx
<Switch label="Accept terms" />
```
Why: A Switch inside a form with a Save button.
