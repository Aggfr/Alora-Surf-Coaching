# Modal · Ejemplos

## Correcto
```tsx
import { Modal } from '@alora/design-system';

<Modal isOpen tone="danger" title="Cancel your plan?" primaryAction={{ label: "Cancel plan", onPress: cancel }} secondaryAction={{ label: "Keep my plan", onPress: close }} onClose={close} />
```

## Incorrecto
```tsx
<div className="popup" style={{ zIndex: 9999 }}>…</div>
```
Por qué: Modales encadenados.
