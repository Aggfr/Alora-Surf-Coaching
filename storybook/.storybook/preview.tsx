import type { Preview } from '@storybook/react-vite';
import { Controls, Description, Primary, Stories, Subtitle, Title } from '@storybook/addon-docs/blocks';
import { withThemeByDataAttribute } from '@storybook/addon-themes';
import '../../design-system/dist/tokens.css';
import '../../design-system/styles/components.css';
import './preview.css';
import { aloraTheme } from './theme';

const preview: Preview = {
  tags: ['autodocs'],
  decorators: [
    withThemeByDataAttribute({
      themes: { Dark: 'dark', Light: 'light' },
      defaultTheme: 'Dark',
      attributeName: 'data-theme',
    }),
    (Story, { parameters }) => (
      <div className={parameters.layout === 'fullscreen' ? 'ds-root sb-canvas sb-canvas--fullscreen' : 'ds-root sb-canvas'}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'padded',
    controls: { expanded: true, sort: 'requiredFirst' },
    options: {
      storySort: {
        order: ['Introduction', 'Foundations', ['Colors', 'Typography', 'Spacing', 'Radius', 'Shadows', 'Icons'], 'Atoms', 'Molecules', 'Organisms', 'Templates'],
      },
    },
    docs: {
      theme: aloraTheme,
      // Live examples first, then the full guidelines from the component's .docs.md.
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Primary />
          <Controls />
          <Stories includePrimary={false} />
          <Description />
        </>
      ),
    },
    a11y: { test: 'todo' },
  },
};

export default preview;
