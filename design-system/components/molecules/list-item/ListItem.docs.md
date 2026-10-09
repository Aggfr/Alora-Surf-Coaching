# ListItem

**Atomic Design category:** Molecule · **Status:** `stable` · **Version:** 1.0.0
**Figma:** [ListItem](https://www.figma.com/design/GZRi3cvtWVfu0MTxPvPEcY/Design-System?node-id=13-120)

## 1. Name and category
`ListItem` — Molecule.

## 2. Purpose
List row with three formats: person, definition or navigation.

## 3. When to use
- List of surfers (person).
- Account details (definition).
- Legal links (navigation).

## 4. When not to use
- Rich content with several actions: SubmissionCard.

## 5. Anatomy
1. person: Avatar + title + description + action
2. definition: label + value + optional action
3. navigation: title + chevron

## 6. Props
| Prop | Type | Default | Required | Description |
|---|---|---|---|---|
| `type` | `'person' \| 'definition' \| 'navigation'` | `'definition'` | No | Format. |
| `title` | `string` | — | Yes | Title or label. |
| `description` | `string` | — | No | Description (person) or value (definition). |
| `avatarName` | `string` | — | No | person only. |
| `action` | `{ label: string; onPress: () => void; tone?: 'default' \| 'danger' }` | — | No | Action on the right. |
| `href` | `string` | — | No | navigation only: destination. |
| `hasDivider` | `boolean` | `true` | No | Bottom divider. |

## 7. Variants and states
- **type:** `person`, `definition`, `navigation`
- **States:** `default`, `hover (navigation)`

## 8. Tokens used
- `size.space.large`
- `size.space.medium`
- `divider.color`
- `typography.overline`
- `typography.body-small`
- `typography.heading-small`

The component's own tokens live in [`ListItem.tokens.json`](./ListItem.tokens.json). Primitive tokens are never used directly.

## 9. Interaction
- navigation: the whole row is clickable.

## 10. Accessibility
- Lists use `<ul>`; definition rows use `<dl>` with `<dt>`/`<dd>`.

## 11. Composition rules
- DataList, surfer lists.
- Depends on: `Avatar`, `Heading`, `Text`, `Button`, `Icon`, `Divider`.

## 12. Code examples
```tsx
<ListItem type="definition" title="PLAN RENEWS" description="26 sept 2026" action={{ label: "Cancel your plan", tone: "danger", onPress: openCancel }} />
```
More examples in [`ListItem.examples.md`](./ListItem.examples.md).

## 13. Anti-patterns
- Mixing types within the same list.

## 14. Version, status and changelog
- Version: `1.0.0`
- Status: `stable`
- 2026-10-09 · 1.0.0 · First version, extracted from Coach Platform and Surfer Platform.
