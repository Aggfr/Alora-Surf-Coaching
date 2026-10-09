# FormSection · Examples

## Do
```tsx
import { FormSection } from '@alora/design-system';

<FormSection onSubmit={login} primaryAction={{ label: "Login", icon: "log-in" }} secondaryAction={{ label: "Create new account", onPress: goSignup }}>…</FormSection>
```

## Don't
```tsx
<form><input/><input/><button>Go</button></form>
```
Why: Two primary actions.
