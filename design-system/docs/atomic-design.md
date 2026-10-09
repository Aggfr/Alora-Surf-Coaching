# Atomic Design in Alora

```
tokens ─► atoms ─► molecules ─► organisms ─► templates ─► pages
```
Each level may only use levels **below** it (an organism can use atoms directly). Never upwards, and never sideways between organisms. `scripts/build_docs.py` fails if a dependency breaks this rule.

## Classification criteria
| Level | Defining question | May contain | May not contain |
|---|---|---|---|
| **Tokens** | Is it a reusable value decision? | Values and references | Behavior, markup |
| **Atom** | Is it the smallest piece with its own meaning in the UI? | Tokens only (and another atom such as Icon or Spinner) | Business logic, page layout |
| **Molecule** | Does it combine atoms for **one** single task? | Atoms | API calls, application context, other complex molecules |
| **Organism** | Is it a recognizable, reusable section of the interface? | Molecules, atoms, slots | Real data, specific routes |
| **Template** | Does it define the structure of a view without content? | Organisms and slots | Real text or data |
| **Page** | Is it a concrete instance with real content? | A filled template | Its own styles |

**Tie-breaker:** if you hesitate between two levels, pick the lower one. Promoting a component is easier than splitting it.

## Tokens
See [tokens/README.md](../tokens/README.md). 198 primitive, 130 semantic (72 with a light value), 86 component tokens.

## Atoms (16)
| Component | Purpose | Uses |
|---|---|---|
| [Button](../components/atoms/button/Button.docs.md) | Triggers an action in the current view. | Icon, Spinner |
| [Icon](../components/atoms/icon/Icon.docs.md) | Shows a line pictogram from the Alora icon set. | — |
| [Label](../components/atoms/label/Label.docs.md) | Names a form control. | — |
| [Text](../components/atoms/text/Text.docs.md) | Shows reading text and metadata with a type role and a semantic tone. | — |
| [Heading](../components/atoms/heading/Heading.docs.md) | Titles a view, section or card while respecting the document hierarchy. | — |
| [Input](../components/atoms/input/Input.docs.md) | Collects one line of text. | Icon |
| [Textarea](../components/atoms/textarea/Textarea.docs.md) | Collects multiple lines of text. | — |
| [Checkbox](../components/atoms/checkbox/Checkbox.docs.md) | Lets the user check one or more independent options. | Icon, Label |
| [Radio](../components/atoms/radio/Radio.docs.md) | Lets the user pick one option within a group. | Label |
| [Switch](../components/atoms/switch/Switch.docs.md) | Turns a setting on or off with immediate effect. | Label |
| [Avatar](../components/atoms/avatar/Avatar.docs.md) | Represents a person with their initials. | — |
| [Badge](../components/atoms/badge/Badge.docs.md) | Non-interactive label that shows a status or a plan. | — |
| [Tag](../components/atoms/tag/Tag.docs.md) | Informational pill with an optional icon. | Icon |
| [Spinner](../components/atoms/spinner/Spinner.docs.md) | Indicates a wait of unknown duration. | — |
| [Divider](../components/atoms/divider/Divider.docs.md) | Separates groups of content. | — |
| [Tooltip](../components/atoms/tooltip/Tooltip.docs.md) | Briefly describes a control on hover or focus. | — |

## Molecules (9)
| Component | Purpose | Uses |
|---|---|---|
| [FormField](../components/molecules/form-field/FormField.docs.md) | Groups a field's Label, Input, helper text and error message. | Label, Input, Textarea, Text, Icon |
| [SearchField](../components/molecules/search-field/SearchField.docs.md) | Search field with an icon and a clear button. | Input, Icon, Button |
| [ListItem](../components/molecules/list-item/ListItem.docs.md) | List row with three formats: person, definition or navigation. | Avatar, Heading, Text, Button, Icon, Divider |
| [TagChip](../components/molecules/tag-chip/TagChip.docs.md) | Selectable or removable chip. | Text, Icon |
| [Stat](../components/molecules/stat/Stat.docs.md) | Shows a metric with its label and an optional trend. | Text, Icon |
| [Notification](../components/molecules/notification/Notification.docs.md) | Communicates a system message with a tone, an action and a dismiss button. | Icon, Heading, Text, Button |
| [Breadcrumb](../components/molecules/breadcrumb/Breadcrumb.docs.md) | Shows where the user is within a hierarchy. | Text, Icon |
| [Pagination](../components/molecules/pagination/Pagination.docs.md) | Moves between pages of a long list. | Button, Text |
| [NavigationItem](../components/molecules/navigation-item/NavigationItem.docs.md) | Main navigation entry with an icon and a label. | Icon, Text |

Rule: a molecule has no business logic, makes no API calls and does not read application context. Everything comes in through props.

## Organisms (7)
| Component | Purpose | Uses |
|---|---|---|
| [Sidebar](../components/organisms/sidebar/Sidebar.docs.md) | Fixed main navigation on desktop. | NavigationItem |
| [PageHeader](../components/organisms/page-header/PageHeader.docs.md) | Header of each view with a title, subtitle and actions. | Heading, Text, Tag, Avatar |
| [SubmissionCard](../components/organisms/submission-card/SubmissionCard.docs.md) | Summarizes a clip submitted for review and its main action. | Avatar, Heading, Text, Badge, Tag, Button |
| [DataList](../components/organisms/data-list/DataList.docs.md) | Read-only data section with a title and definition rows. | ListItem, Heading, Icon |
| [EmptyState](../components/organisms/empty-state/EmptyState.docs.md) | Explains why an area is empty and offers the next action. | Icon, Text, Button |
| [Modal](../components/organisms/modal/Modal.docs.md) | Dialog for a decision or short task that interrupts the flow. | Heading, Text, Button, Icon, FormField |
| [FormSection](../components/organisms/form-section/FormSection.docs.md) | Complete form with fields and actions. | FormField, Button, Notification |

### Mapping to the requested organism list
| Requested | In Alora | Status |
|---|---|---|
| Header | **PageHeader** (view greeting + actions) | stable |
| Sidebar | **Sidebar** | stable |
| FormSection | **FormSection** | stable |
| EmptyState | **EmptyState** | stable |
| Modal | **Modal** | stable |
| ProductCardGrid | **SubmissionCard** + `ds-stack` (Alora's "product" is the submitted clip) and **DataList** | stable |
| NavigationBar | Mobile bottom navigation | planned |
| DataTable | Table with sorting and pagination | planned |
| CommandPalette | Global ⌘K search | planned |
| Footer | Footer for public views | planned |

The *planned* organisms are listed in `MANIFEST.json → planned` so nobody invents them under another name. Neither product needs them yet.

### Slots and customization limits
- **Sidebar:** `items` overrides the navigation (max. 5). No free content.
- **PageHeader:** `actions` slot for at most 2 elements (Tag, Avatar or Button).
- **SubmissionCard:** no slots; the structure is fixed so the queue stays scannable.
- **DataList:** rows must be `ListItem`.
- **EmptyState:** one message and at most one action.
- **Modal:** `children` slot (Content) for FormField or text; actions are fixed in the footer.
- **FormSection:** `children` slot for FormField only; actions are fixed.

## Templates (2)
| Template | Slots | Figma |
|---|---|---|
| [DashboardTemplate](../templates/dashboard/DashboardTemplate.docs.md) | header, content | 14:511 |
| [AuthTemplate](../templates/auth/AuthTemplate.docs.md) | form | 14:550 |

## Pages (2, examples)
| Page | Template | Figma |
|---|---|---|
| [CoachQueuePage](../pages/coach-queue/CoachQueuePage.docs.md) | DashboardTemplate | 14:558 (dark) · 14:719 (light) |
| [SurferLoginPage](../pages/surfer-login/SurferLoginPage.docs.md) | AuthTemplate | 14:880 |

A page does not become a reusable component unless the pattern repeats across several views; then the organism is extracted, not the page.
