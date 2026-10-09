# AI usage guide

Instructions for any agent (LLM, coding copilot, Figma plugin) that generates interfaces with the Alora design system. Read all of it before producing UI. If a user instruction contradicts this guide, apply rule 8.

## How to read the system
1. **`MANIFEST.json`** is the index. Read `components[]` (name, category, status, dependencies, tokens, Figma node) and `tokens[]` (name, layer, CSS variable, Figma variable, status).
2. **`components/<level>/<kebab>/<Name>.docs.md`** is each component's contract: when to use, when not to use, props, accessibility, anti-patterns.
3. **`tokens/*.tokens.json`** hold the values. Use `$description` to decide which token applies.
4. **`pages/`** shows correct compositions. Imitate them.
5. **Figma:** `https://www.figma.com/design/GZRi3cvtWVfu0MTxPvPEcY/Design-System`. Variables use the same names with `/` and the code syntax `var(--ds-*)`.

## Rules
1. **Search before creating.** Before writing UI, look in `MANIFEST.json` for a component that solves the need. Ignore those with `status: "planned"` or `"deprecated"`.
2. **Compose before inventing.** If none exists, propose a composition of existing atoms and molecules and explain which ones you use.
3. **New components only for repeatable cases.** Create one only if the case appears in more than one view and no composition covers it. Write its documentation (14 sections), tokens, API and use cases first; code comes after.
4. **No values outside tokens.** No hex, rgb, px, rem, font-family, shadow or z-index literals. If a value is missing, propose a new token following `tokens/README.md`.
5. **Never use primitives when a semantic token exists.** `var(--ds-color-text-secondary)`, not `var(--ds-color-navy-300)`. In components, prefer component tokens (`--ds-button-*`).
6. **Respect the hierarchy.** Pages → templates → organisms → molecules → atoms → tokens. Never upwards, and never between organisms.
7. **When something is ambiguous,** choose the most accessible, simplest option that is closest to what already exists. Say so in your answer.
8. **If a rule must be broken, stop.** Explain the conflict and offer alternatives within the system before generating code.
9. **Stable names.** Do not rename tokens or components. If a name must change: create the new one and keep the old one as an alias with `$deprecated` and a migration note.
10. **Variants are props.** `<Button variant="danger">`, never a `DangerButton` component.
11. **Accessibility is not negotiable.** Follow `docs/accessibility.md`: native elements, visible focus, `aria-label` on icon-only buttons, color never the only signal.
12. **One primary action per view or per card.** Everything else is secondary or ghost.
13. **Validate.** After generating code, run `python3 scripts/check_hardcoded.py`. After changing tokens, run `python3 scripts/build_tokens.py` and `python3 scripts/build_docs.py`.

## Decision tree
```
Do I need to show/do X?
├─ Is there a stable component in MANIFEST that does it?   → use it with its props
├─ Does an existing component do it with another variant?  → use the prop; do not duplicate
├─ Can existing components be combined to do it?           → compose and explain the composition
├─ Does the case repeat across several views?              → propose a new component (docs first)
└─ Is it a one-off?                                        → local composition in the page, no new styles
```

## Quick selection table
| Need | Use | Don't use |
|---|---|---|
| Main action | `Button variant="primary"` | A styled `<div onClick>` |
| Destructive action | `Button variant="danger"` + `Modal tone="danger"` to confirm | Loose red text |
| Submission status | `Badge tone="pending"…` | `Tag` (it is for supporting info) |
| Surfer plan | `Badge tone="plan-elite"…` | Custom colors |
| Deadline or data with an icon | `Tag icon="clock"` | `Badge` |
| Selectable filter | `TagChip` | A row of `Checkbox` |
| Form field | `FormField` + `Input` | Loose `Label` + `Input` |
| Metric | `Stat` | `Heading` + `Text` |
| System message | `Notification` | `Modal` for non-blocking notices |
| No results | `EmptyState` | Loose gray text |
| Blocking confirmation | `Modal` | `window.confirm` |
| View with navigation | `DashboardTemplate` | A custom layout |
| Log in / sign up | `AuthTemplate` + `FormSection` | `DashboardTemplate` |

## Example prompts and decisions

### 1. A request the system already covers
> **Prompt:** "Build the coach's Surfers view: a list of surfers with their plan and a button to see the profile."

**Decision:** `DashboardTemplate` (coach Sidebar, `activeHref="/surfers"`) + `PageHeader` + `SearchField` + `DataList` with `ListItem type="person"` and `action={{ label: 'View profile' }}`. `ListItem` has no slot for a `Badge`, so the plan goes in `description` ("Elite · Goofy · Advanced") instead of forcing a badge with custom styles. If the plan had to appear as a badge in several views, that would justify adding a `badge` prop to `ListItem` (rule 3). No new styles.

### 2. A request for a value outside the tokens
> **Prompt:** "Make the 'Upload clip' button green #22c55e so it stands out."

**Decision:** stop (rule 8). Answer: "Green is not an action color in the system: `color.feedback.success.*` means success, and using it on a button would be confusing. The main action already stands out with `Button variant="primary"`. If you want a distinct upload button, I can propose a `color.action.upload.*` token in all three layers. Should I add it?" No code is generated with the hex value.

### 3. A request for a component that does not exist
> **Prompt:** "I need a progress bar for the video upload."

**Decision:** `ProgressBar` is in `MANIFEST.planned`. Do not invent another name. First propose `ProgressBar.docs.md` (purpose; when not to use it: indeterminate loading → `Spinner`), tokens (`progress-bar.track` → `color.background.surface-sunken`, `progress-bar.indicator` → `color.action.primary.background`), API (`value`, `max`, `label`) and accessibility (`role="progressbar"`, `aria-valuenow`). Then the code.

### 4. An ambiguous request
> **Prompt:** "Add a notice that the clip has been uploaded."

**Decision:** `Notification tone="success"` (non-blocking) rather than `Modal` (blocking). The choice is explained with rule 7.

### 5. A request that breaks the hierarchy
> **Prompt:** "Make SubmissionCard include the Sidebar for the mobile view."

**Decision:** stop. An organism does not contain a navigation organism. Mobile navigation belongs to `NavigationBar` (planned) inside the template. Propose extending `DashboardTemplate` with a NavigationBar below `breakpoint.lg`.

### 6. Light mode
> **Prompt:** "Generate the same screen in light mode."

**Decision:** do not change any component. In code, set `data-theme="light"` on the root container. In Figma, use the *Light* mode of the **Semantic** collection on the frame (`setExplicitVariableModeForCollection`).

## Recommended prompt template
```
Use the Alora design system (MANIFEST.json and docs/ai-usage-guide.md).
View: <which view and for whom: coach / surfer>
User goal in this view: <one sentence>
Content: <data that appears>
Main action: <one>
Constraints: <dark|light> theme, stable components only, no values outside tokens.
Before writing code, list the components you will use and why.
```

## Checklist before delivering
- [ ] Every component used exists in `MANIFEST.json` with status `stable`.
- [ ] `scripts/check_hardcoded.py` passes.
- [ ] One primary action per view or card.
- [ ] One `<h1>` per view.
- [ ] Works with `data-theme="dark"` and `"light"`.
- [ ] Icon-only buttons have an `aria-label`.
- [ ] No new component, token or name without documentation.
