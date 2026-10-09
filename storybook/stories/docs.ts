const REPO = 'https://github.com/Aggfr/Alora-Surf-Coaching/blob/main/design-system';

/** The "Purpose" sentence of a .docs.md file, shown under the title. */
function purpose(markdown: string): string | undefined {
  return markdown.match(/## (?:\d+\. )?Purpose\n+([^\n]+)/)?.[1];
}

/** The full .docs.md without its H1, with relative links pointing at GitHub. */
function guidelines(markdown: string, folder: string): string {
  return markdown
    .replace(/^# .*\n/, '')
    .replace(/\]\((\.{1,2}\/[^)]+)\)/g, (_, path: string) => `](${new URL(path, `${REPO}/${folder}/`).href})`);
}

/** Docs parameters built from a component's own .docs.md, so Storybook never drifts from the repo. */
export function docsFrom(markdown: string, folder: string) {
  return {
    docs: {
      subtitle: purpose(markdown),
      description: { component: `## Guidelines\n\n${guidelines(markdown, folder)}` },
    },
  };
}
