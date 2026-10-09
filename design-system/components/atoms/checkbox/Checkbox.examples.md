# Checkbox · Ejemplos

## Correcto
```tsx
import { Checkbox } from '@alora/design-system';

<Checkbox label="Remember me" isChecked={remember} onChange={setRemember} />
```

## Incorrecto
```tsx
<div onClick={toggle} className="box" />
```
Por qué: Checkbox que dispara una acción inmediata.
