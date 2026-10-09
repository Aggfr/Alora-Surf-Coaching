#!/usr/bin/env python3
"""Generates component docs, examples, per-component token files and MANIFEST.json.

Usage: python3 scripts/build_docs.py
Reads:  scripts/component_specs.py, tokens/*.tokens.json
Writes: components/<layer>/<kebab-name>/{Name.docs.md, Name.examples.md, Name.tokens.json}
        MANIFEST.json
Fails if a dependency is unknown or breaks the Atomic Design hierarchy.
"""
import json, os, re, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(ROOT, "scripts"))
from component_specs import SPECS, FIGMA_FILE  # noqa: E402

VERSION = "1.0.0"
DATE = "2026-10-09"
LAYER_DIR = {"atom": "atoms", "molecule": "molecules", "organism": "organisms"}
LAYER_NAME = {"atom": "Atom", "molecule": "Molecule", "organism": "Organism"}
ALLOWED_DEPS = {"atom": {"atom"}, "molecule": {"atom"}, "organism": {"atom", "molecule"}}


def kebab(name):
    return re.sub(r"(?<!^)(?=[A-Z])", "-", name).lower()


def load(name):
    with open(os.path.join(ROOT, "tokens", name)) as f:
        return json.load(f)


def flatten(node, prefix=""):
    out = {}
    for k, v in node.items():
        if k.startswith("$"):
            continue
        p = f"{prefix}.{k}" if prefix else k
        if isinstance(v, dict) and "$value" in v:
            out[p] = v
        elif isinstance(v, dict):
            out.update(flatten(v, p))
    return out


primitives = flatten(load("primitives.tokens.json"))
semantic = flatten(load("semantic.tokens.json"))
semantic_light = flatten(load("semantic.light.tokens.json"))
component_tokens_raw = load("component.tokens.json")
component = flatten(component_tokens_raw)

by_name = {s["name"]: s for s in SPECS}
errors = []
for s in SPECS:
    for d in s["deps"]:
        if d not in by_name:
            errors.append(f"{s['name']}: unknown dependency {d}")
        elif by_name[d]["category"] not in ALLOWED_DEPS[s["category"]]:
            errors.append(f"{s['name']} ({s['category']}) cannot depend on {d} ({by_name[d]['category']})")
if errors:
    print("\n".join(errors))
    sys.exit(1)


def component_path(spec):
    return f"components/{LAYER_DIR[spec['category']]}/{kebab(spec['name'])}"


def own_tokens(spec):
    """Component-layer tokens whose first segment matches the component."""
    key = kebab(spec["name"])
    aliases = {"text-field": "input", "textarea": "input", "form-field": "input", "search-field": "input",
               "navigation-item": "navigation-item", "submission-card": "card", "data-list": "card",
               "empty-state": "card", "form-section": "card", "tag-chip": "tag", "page-header": None}
    group = aliases.get(key, key)
    if group and group in component_tokens_raw:
        return {group: component_tokens_raw[group]}
    return {}


def md_table(rows, header):
    out = ["| " + " | ".join(header) + " |", "|" + "|".join(["---"] * len(header)) + "|"]
    for r in rows:
        out.append("| " + " | ".join(str(c).replace("|", "\\|") for c in r) + " |")
    return "\n".join(out)


def docs_md(s):
    layer = LAYER_NAME[s["category"]]
    lines = [
        f"# {s['name']}",
        "",
        f"**Categoría Atomic Design:** {layer} · **Estado:** `{s['status']}` · **Versión:** {VERSION}",
        f"**Figma:** [{s['name']}]({FIGMA_FILE}?node-id={s['figma'].replace(':', '-')})",
        "",
        "## 1. Nombre y categoría",
        f"`{s['name']}` — {layer}.",
        "",
        "## 2. Propósito",
        s["purpose"],
        "",
        "## 3. Cuándo usarlo",
        *[f"- {x}" for x in s["when"]],
        "",
        "## 4. Cuándo no usarlo",
        *[f"- {x}" for x in s["when_not"]],
        "",
        "## 5. Anatomía",
        *[f"{i}. {x}" for i, x in enumerate(s["anatomy"], 1)],
        "",
        "## 6. Props",
        md_table([(f"`{p['name']}`", f"`{p['type']}`", f"`{p['default']}`" if p["default"] != "—" else "—", "Sí" if p["required"] else "No", p["desc"]) for p in s["props"]],
                 ["Prop", "Tipo", "Por defecto", "Obligatoria", "Descripción"]),
        "",
        "## 7. Variantes y estados",
    ]
    if s["variants"]:
        lines += [f"- **{k}:** {', '.join(f'`{v}`' for v in vals)}" for k, vals in s["variants"].items()]
    else:
        lines.append("- Sin variantes visuales: el comportamiento se controla con props.")
    lines += [f"- **Estados:** {', '.join(f'`{x}`' for x in s['states'])}", "",
              "## 8. Tokens utilizados",
              *[f"- `{t}`" for t in s["tokens"]],
              "",
              f"Los tokens propios del componente están en [`{s['name']}.tokens.json`](./{s['name']}.tokens.json). Nunca se usan primitivos directamente.",
              "",
              "## 9. Comportamiento interactivo",
              *[f"- {x}" for x in s["interaction"]],
              "",
              "## 10. Accesibilidad",
              *[f"- {x}" for x in s["a11y"]],
              "",
              "## 11. Reglas de composición",
              *[f"- {x}" for x in s["composition"]],
              ]
    if s["deps"]:
        lines.append(f"- Depende de: {', '.join(f'`{d}`' for d in s['deps'])}.")
    lines += ["",
              "## 12. Ejemplos de código",
              "```tsx",
              s["example"],
              "```",
              f"Más ejemplos en [`{s['name']}.examples.md`](./{s['name']}.examples.md).",
              "",
              "## 13. Anti-patrones",
              *[f"- {x}" for x in s["antipatterns"]],
              "",
              "## 14. Versión, estado y changelog",
              f"- Versión: `{VERSION}`",
              f"- Estado: `{s['status']}`",
              f"- {DATE} · {VERSION} · Primera versión, extraída de Coach Platform y Surfer Platform.",
              ""]
    return "\n".join(lines)


def examples_md(s):
    return "\n".join([
        f"# {s['name']} · Ejemplos",
        "",
        "## Correcto",
        "```tsx",
        f"import {{ {s['name']} }} from '@alora/design-system';",
        "",
        s["example"],
        "```",
        "",
        "## Incorrecto",
        "```tsx",
        s["examples_bad"],
        "```",
        "Por qué: " + s["antipatterns"][0],
        "",
    ])


manifest_components = []
for s in SPECS:
    path = component_path(s)
    os.makedirs(os.path.join(ROOT, path), exist_ok=True)
    with open(os.path.join(ROOT, path, f"{s['name']}.docs.md"), "w") as f:
        f.write(docs_md(s))
    with open(os.path.join(ROOT, path, f"{s['name']}.examples.md"), "w") as f:
        f.write(examples_md(s))
    tokens = own_tokens(s)
    with open(os.path.join(ROOT, path, f"{s['name']}.tokens.json"), "w") as f:
        json.dump({"$description": f"Tokens de {s['name']}. Fuente: tokens/component.tokens.json. Referencias semánticas adicionales que consume: {', '.join(s['tokens'])}.", **tokens},
                  f, ensure_ascii=False, indent=2)
        f.write("\n")
    manifest_components.append({
        "name": s["name"], "category": s["category"], "status": s["status"], "version": VERSION,
        "description": s["purpose"], "path": path,
        "files": {"component": f"{path}/{s['name']}.tsx", "docs": f"{path}/{s['name']}.docs.md",
                  "examples": f"{path}/{s['name']}.examples.md", "tokens": f"{path}/{s['name']}.tokens.json"},
        "dependencies": s["deps"], "tokens": s["tokens"],
        "variants": s["variants"], "states": s["states"],
        "figma": {"file": FIGMA_FILE, "nodeId": s["figma"]},
    })

templates = [
    {"name": "DashboardTemplate", "category": "template", "status": "stable", "version": VERSION,
     "description": "Vista autenticada: Sidebar + columna central de 810px con slots header y content.",
     "path": "templates/dashboard", "files": {"component": "templates/dashboard/DashboardTemplate.tsx", "docs": "templates/dashboard/DashboardTemplate.docs.md"},
     "dependencies": ["Sidebar"], "slots": ["header", "content"], "figma": {"file": FIGMA_FILE, "nodeId": "14:511"}},
    {"name": "AuthTemplate", "category": "template", "status": "stable", "version": VERSION,
     "description": "Autenticación y onboarding: canvas centrado con slot form de 400px.",
     "path": "templates/auth", "files": {"component": "templates/auth/AuthTemplate.tsx", "docs": "templates/auth/AuthTemplate.docs.md"},
     "dependencies": ["Heading", "Text"], "slots": ["form"], "figma": {"file": FIGMA_FILE, "nodeId": "14:550"}},
]
pages = [
    {"name": "CoachQueuePage", "category": "page", "status": "example", "version": VERSION,
     "description": "Cola del coach con contenido real: PageHeader, fila de Stat, búsqueda y filtros, SubmissionCard ×3 y EmptyState sin resultados.",
     "path": "pages/coach-queue", "files": {"component": "pages/coach-queue/CoachQueuePage.tsx", "docs": "pages/coach-queue/CoachQueuePage.docs.md"},
     "dependencies": ["DashboardTemplate", "PageHeader", "Tag", "Avatar", "Stat", "SearchField", "TagChip", "SubmissionCard", "EmptyState"],
     "figma": {"file": FIGMA_FILE, "nodeId": "14:558", "lightModeNodeId": "14:719"}},
    {"name": "SurferLoginPage", "category": "page", "status": "example", "version": VERSION,
     "description": "Log in del surfer: AuthTemplate + FormSection.",
     "path": "pages/surfer-login", "files": {"component": "pages/surfer-login/SurferLoginPage.tsx", "docs": "pages/surfer-login/SurferLoginPage.docs.md"},
     "dependencies": ["AuthTemplate", "FormSection", "FormField", "Input"],
     "figma": {"file": FIGMA_FILE, "nodeId": "14:880"}},
]
planned = [{"name": n, "category": c, "status": "planned", "description": d} for n, c, d in [
    ("NavigationBar", "organism", "Navegación inferior en móvil; sustituye a Sidebar por debajo de 1024px."),
    ("DataTable", "organism", "Tabla de datos comparables con orden y paginación."),
    ("CommandPalette", "organism", "Búsqueda global de acciones y surfers (⌘K)."),
    ("Footer", "organism", "Pie de las vistas públicas (landing, legal)."),
    ("Select", "atom", "Selección única entre más de 5 opciones."),
    ("ProgressBar", "atom", "Progreso medible de subida de vídeo."),
    ("ReviewCard", "organism", "Revisión entregada en History con vídeo y notas del coach."),
]]


def token_entries():
    rows = []
    for layer, table, file in [("primitive", primitives, "tokens/primitives.tokens.json"),
                               ("semantic", semantic, "tokens/semantic.tokens.json"),
                               ("component", component, "tokens/component.tokens.json")]:
        for path, tok in table.items():
            v = tok["$value"]
            m = re.match(r"^\{(.+)\}$", v) if isinstance(v, str) else None
            entry = {"name": path, "layer": layer, "type": tok["$type"], "file": file,
                     "cssVariable": "--ds-" + path.replace(".", "-"),
                     "figmaVariable": path.replace(".", "/"),
                     "status": "deprecated" if "$deprecated" in tok else "stable"}
            if m:
                entry["references"] = m.group(1)
            if tok.get("$description"):
                entry["description"] = tok["$description"]
            if layer == "semantic" and path in semantic_light:
                lv = semantic_light[path]["$value"]
                entry["themes"] = {"dark": v, "light": lv}
            rows.append(entry)
    return rows


manifest = {
    "$schema": "./docs/manifest.schema.json",
    "name": "Alora Design System",
    "version": VERSION,
    "updated": DATE,
    "figmaFile": FIGMA_FILE,
    "themes": ["dark", "light"],
    "defaultTheme": "dark",
    "hierarchy": ["tokens", "atom", "molecule", "organism", "template", "page"],
    "summary": {
        "tokens": {"primitive": len(primitives), "semantic": len(semantic), "semanticLightOverrides": len(semantic_light), "component": len(component)},
        "components": {c: sum(1 for s in SPECS if s["category"] == c) for c in ["atom", "molecule", "organism"]},
        "templates": len(templates), "pages": len(pages), "planned": len(planned),
    },
    "docs": {"readme": "README.md", "tokens": "tokens/README.md", "principles": "docs/principles.md",
             "naming": "docs/naming-conventions.md", "atomicDesign": "docs/atomic-design.md",
             "aiUsageGuide": "docs/ai-usage-guide.md", "accessibility": "docs/accessibility.md"},
    "components": manifest_components + templates + pages,
    "planned": planned,
    "tokens": token_entries(),
}
with open(os.path.join(ROOT, "MANIFEST.json"), "w") as f:
    json.dump(manifest, f, ensure_ascii=False, indent=2)
    f.write("\n")
print(f"OK: {len(SPECS)} components documented, MANIFEST with {len(manifest['tokens'])} tokens and {len(manifest['components'])} entries")
