# ListItem · Ejemplos

## Correcto
```tsx
import { ListItem } from '@alora/design-system';

<ListItem type="definition" title="PLAN RENEWS" description="26 sept 2026" action={{ label: "Cancel your plan", tone: "danger", onPress: openCancel }} />
```

## Incorrecto
```tsx
<div className="row">…</div>
```
Por qué: Mezclar tipos dentro de la misma lista.
