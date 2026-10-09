import type { CSSProperties, ReactNode } from 'react';
import resolved from '../../../design-system/dist/tokens.resolved.json';
import { Icon } from '../../../design-system/components/atoms/icon/Icon';
import { icons, type IconName } from '../../../design-system/components/atoms/icon/icons';

type Token = { type: string; value: unknown };
type Theme = 'dark' | 'light';
const themes = resolved as Record<Theme, Record<string, Token>>;

export const themeOf = (globals: Record<string, unknown>): Theme => (globals.theme === 'Light' ? 'light' : 'dark');
export const cssVar = (name: string) => `--ds-${name.replaceAll('.', '-')}`;

function format(token: Token): string {
  const { value } = token;
  if (Array.isArray(value)) return value.join(', ');
  if (value && typeof value === 'object') {
    const v = value as Record<string, unknown>;
    if ('offsetX' in v) return `${v.offsetX} ${v.offsetY} ${v.blur} ${v.spread} ${v.color}`;
    if ('fontSize' in v) return `${v.fontSize} / ${v.lineHeight} · ${v.fontWeight}`;
    return JSON.stringify(value);
  }
  return String(value);
}

/** Tokens whose name starts with one of the prefixes, resolved for the active theme. */
export function tokens(theme: Theme, prefixes: string[], type?: string) {
  return Object.entries(themes[theme])
    .filter(([name, token]) => prefixes.some((p) => name.startsWith(p)) && (!type || token.type === type))
    .map(([name, token]) => ({ name, token, value: format(token) }));
}

function Section({ title, description, children }: { title: string; description?: string; children: ReactNode }) {
  return (
    <section className="sb-foundation">
      <h2 className="ds-heading ds-heading--medium">{title}</h2>
      {description && <p className="ds-text ds-text--body-medium ds-text--secondary">{description}</p>}
      {children}
    </section>
  );
}

function Table({ rows, preview }: { rows: ReturnType<typeof tokens>; preview: (name: string) => ReactNode }) {
  return (
    <table className="sb-token-table">
      <thead>
        <tr><th>Preview</th><th>Token</th><th>CSS variable</th><th>Value</th></tr>
      </thead>
      <tbody>
        {rows.map(({ name, value }) => (
          <tr key={name}>
            <td>{preview(name)}</td>
            <td><code>{name}</code></td>
            <td><code>var({cssVar(name)})</code></td>
            <td><code>{value}</code></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

const swatch = (name: string) => <span className="sb-swatch" style={{ background: `var(${cssVar(name)})` }} />;

const palettes = ['navy', 'ocean', 'sun', 'coral', 'amber', 'violet', 'green', 'gray'];
const semanticGroups: Array<[string, string]> = [
  ['Background', 'color.background.'], ['Text', 'color.text.'], ['Icon', 'color.icon.'], ['Border', 'color.border.'],
  ['Action', 'color.action.'], ['Feedback', 'color.feedback.'], ['Status', 'color.status.'], ['Plan', 'color.plan.'],
  ['Disabled', 'color.disabled.'],
];

export function Colors({ theme }: { theme: Theme }) {
  return (
    <div className="sb-foundations">
      <Section title="Semantic colors" description="Layer 2. Components read these (or their own component tokens), never the primitives. Values change with the theme toolbar.">
        {semanticGroups.map(([label, prefix]) => (
          <div key={prefix}>
            <h3 className="ds-heading ds-heading--small">{label}</h3>
            <Table rows={tokens(theme, [prefix], 'color')} preview={swatch} />
          </div>
        ))}
      </Section>
      <Section title="Primitive palettes" description="Layer 1. Raw values that the semantic layer points at.">
        {palettes.map((palette) => (
          <div key={palette}>
            <h3 className="ds-heading ds-heading--small">{palette.charAt(0).toUpperCase() + palette.slice(1)}</h3>
            <div className="sb-palette">
              {tokens(theme, [`color.${palette}.`]).map(({ name, value }) => (
                <div key={name} className="sb-palette__step">
                  {swatch(name)}
                  <code>{name.split('.').pop()}</code>
                  <code>{value}</code>
                </div>
              ))}
            </div>
          </div>
        ))}
      </Section>
    </div>
  );
}

const typeStyles = ['display', 'heading-large', 'heading-medium', 'heading-small', 'body-large', 'body-medium', 'body-small', 'caption', 'label', 'button', 'overline'];

export function Typography({ theme }: { theme: Theme }) {
  const styles = tokens(theme, typeStyles.map((s) => `typography.${s}`), 'typography').filter(({ name }) => typeStyles.includes(name.slice(11)));
  return (
    <div className="sb-foundations">
      <Section title="Type styles" description="Outfit for display, headings, labels and buttons. Inter for reading text.">
        <table className="sb-token-table">
          <thead><tr><th>Sample</th><th>Token</th><th>Value</th></tr></thead>
          <tbody>
            {styles.map(({ name, value }) => {
              const base = cssVar(name);
              const style: CSSProperties = {
                fontFamily: `var(${base}-font-family)`, fontSize: `var(${base}-font-size)`, fontWeight: `var(${base}-font-weight)`,
                lineHeight: `var(${base}-line-height)`, letterSpacing: `var(${base}-letter-spacing)`,
              };
              return (
                <tr key={name}>
                  <td><span style={style}>Ride better waves</span></td>
                  <td><code>{name}</code></td>
                  <td><code>{value}</code></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Section>
      <Section title="Scale">
        <Table rows={tokens(theme, ['typography.size.'])} preview={(name) => <span style={{ fontSize: `var(${cssVar(name)})` }}>Aa</span>} />
        <Table rows={tokens(theme, ['typography.weight.'])} preview={(name) => <span style={{ fontWeight: `var(${cssVar(name)})` }}>Aa</span>} />
      </Section>
    </div>
  );
}

export function Spacing({ theme }: { theme: Theme }) {
  const bar = (name: string) => <span className="sb-space" style={{ width: `var(${cssVar(name)})` }} />;
  return (
    <div className="sb-foundations">
      <Section title="Semantic spacing" description="Use these names in components: small, medium, large, xl.">
        <Table rows={tokens(theme, ['size.space.']).filter(({ name }) => !/\.\d+$/.test(name))} preview={bar} />
      </Section>
      <Section title="Spacing scale" description="Primitive steps on a 4px grid.">
        <Table rows={tokens(theme, ['size.space.']).filter(({ name }) => /\.\d+$/.test(name))} preview={bar} />
      </Section>
      <Section title="Layout">
        <Table rows={tokens(theme, ['size.layout.', 'size.icon.', 'size.border.'])} preview={() => null} />
      </Section>
    </div>
  );
}

export function Radius({ theme }: { theme: Theme }) {
  const box = (name: string) => <span className="sb-radius" style={{ borderRadius: `var(${cssVar(name)})` }} />;
  return (
    <div className="sb-foundations">
      <Section title="Radius">
        <Table rows={tokens(theme, ['size.radius.'])} preview={box} />
      </Section>
    </div>
  );
}

export function Shadows({ theme }: { theme: Theme }) {
  const box = (name: string) => <span className="sb-radius" style={{ boxShadow: `var(${cssVar(name)})` }} />;
  return (
    <div className="sb-foundations">
      <Section title="Elevation" description="Semantic shadows. Use these in components.">
        <Table rows={tokens(theme, ['elevation.'])} preview={box} />
      </Section>
      <Section title="Shadow primitives">
        <Table rows={tokens(theme, ['shadow.'])} preview={box} />
      </Section>
      <Section title="Motion">
        <Table rows={tokens(theme, ['motion.'])} preview={() => null} />
      </Section>
    </div>
  );
}

export function Icons() {
  return (
    <div className="sb-foundations">
      <Section title="Icon set" description="24×24 line icons with a 2px stroke. Use the Icon atom with one of these names.">
        <div className="sb-icon-grid">
          {(Object.keys(icons) as IconName[]).map((name) => (
            <div key={name} className="sb-icon-grid__item">
              <Icon name={name} size="lg" />
              <code>{name}</code>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
