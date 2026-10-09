import { fileURLToPath } from 'node:url';
import type { StorybookConfig } from '@storybook/react-vite';

const repoRoot = fileURLToPath(new URL('../..', import.meta.url));

const config: StorybookConfig = {
  framework: '@storybook/react-vite',
  stories: ['../stories/**/*.mdx', '../stories/**/*.stories.@(ts|tsx)'],
  addons: ['@storybook/addon-docs', '@storybook/addon-themes', '@storybook/addon-a11y'],
  core: { disableTelemetry: true },
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      include: ['../design-system/**/*.tsx'],
      shouldExtractLiteralValuesFromEnum: true,
      shouldRemoveUndefinedFromOptional: true,
      propFilter: (prop) => !prop.parent || !/node_modules/.test(prop.parent.fileName),
    },
  },
  viteFinal: async (viteConfig) => ({
    ...viteConfig,
    // The design system lives outside this folder and has no node_modules of its own.
    resolve: { ...viteConfig.resolve, dedupe: ['react', 'react-dom'] },
    server: { ...viteConfig.server, fs: { ...viteConfig.server?.fs, allow: [repoRoot] } },
  }),
};

export default config;
