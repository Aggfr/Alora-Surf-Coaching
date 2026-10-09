# FormSection · Ejemplos

## Correcto
```tsx
import { FormSection } from '@alora/design-system';

<FormSection onSubmit={login} primaryAction={{ label: "Login", icon: "log-in" }} secondaryAction={{ label: "Create new account", onPress: goSignup }}>…</FormSection>
```

## Incorrecto
```tsx
<form><input/><input/><button>Go</button></form>
```
Por qué: Dos acciones primary.
