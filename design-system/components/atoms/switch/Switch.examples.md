# Switch · Ejemplos

## Correcto
```tsx
import { Switch } from '@alora/design-system';

<Switch label="Email notifications" isOn={notify} onChange={setNotify} />
```

## Incorrecto
```tsx
<Switch label="Accept terms" />
```
Por qué: Switch dentro de un formulario con botón Guardar.
