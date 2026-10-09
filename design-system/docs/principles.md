# Principios

Siete principios, en orden de prioridad. Cuando dos chocan, gana el que está más arriba.

## 1. Accesible por defecto
Todo componente cumple WCAG 2.2 AA sin configuración extra: contraste de texto ≥ 4.5:1 (≥ 3:1 en texto grande y bordes de control), foco visible, área táctil ≥ 44px y semántica HTML correcta.
**Decisión derivada:** el degradado del botón primario y el gris terciario se oscurecieron respecto a los diseños originales porque no llegaban a 4.5:1 (ver `docs/accessibility.md`).

## 2. Una sola fuente de verdad
Cada valor visual existe una vez, en `tokens/`. Figma (variables), CSS (`--ds-*`) y cualquier otra plataforma se generan o se sincronizan desde ahí. Si un valor no está en los tokens, no existe.

## 3. Capas que no se mezclan
- **Primitivos** dicen *qué valores hay*.
- **Semánticos** dicen *para qué sirven*.
- **Tokens de componente** dicen *dónde se aplican*.
Un componente nunca lee un primitivo; una página nunca define estilos propios. `scripts/check_hardcoded.py` lo verifica.

## 4. Reutilizar antes que crear
Orden de búsqueda ante una necesidad nueva: componente existente → variante/prop de un componente existente → composición de existentes → componente nuevo (solo si el caso se repite y está documentado).

## 5. Claridad sobre brevedad
`color.background.surface-raised` antes que `bg2`. `isDisabled` antes que `dis`. Un nombre largo y obvio cuesta menos que una conversación para entenderlo.

## 6. Estados y variantes son props, no componentes
`<Button variant="danger" isLoading />`, nunca `<DangerButton>` ni `<LoadingButton>`. En Figma lo mismo: un component set con propiedades de variante.

## 7. Documentado para personas y para IA
Cada componente tiene propósito, cuándo sí, cuándo no, anatomía, API, tokens, accesibilidad, composición, ejemplos, anti-patrones y changelog. `MANIFEST.json` indexa todo en un formato que una IA puede leer sin abrir cada carpeta.

## Origen de las decisiones
El sistema se extrajo de dos archivos de producto:
- **Coach Platform** (`9JVeHRxUaDyilE6aLVFpQp`): cola de revisión, perfiles de surfers, calendario.
- **Surfer Platform** (`MfvlEJ8gZ4WPdNDXETjHRD`): login, subida de clips, sesiones e historial.

Ambos comparten tema oscuro navy, acento ocean, Outfit para display y un lenguaje de tarjetas con radio 16px. Donde los dos archivos divergían se eligió el valor más repetido; donde ambos fallaban en accesibilidad se corrigió y se documentó en el `$description` del token.
