import type { Meta, StoryObj } from '@storybook/react-vite';
import { Colors as ColorsView, Icons as IconsView, Radius as RadiusView, Shadows as ShadowsView, Spacing as SpacingView, Typography as TypographyView, themeOf } from './tokens';

/** Generated from design-system/dist/tokens.resolved.json, so it always matches the tokens in the repo. */
const meta = {
  title: 'Foundations',
  tags: ['!autodocs'],
  parameters: { controls: { disable: true }, a11y: { disable: true } },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Colors: Story = { render: (_, { globals }) => <ColorsView theme={themeOf(globals)} /> };
export const Typography: Story = { render: (_, { globals }) => <TypographyView theme={themeOf(globals)} /> };
export const Spacing: Story = { render: (_, { globals }) => <SpacingView theme={themeOf(globals)} /> };
export const Radius: Story = { render: (_, { globals }) => <RadiusView theme={themeOf(globals)} /> };
export const Shadows: Story = { name: 'Shadows & motion', render: (_, { globals }) => <ShadowsView theme={themeOf(globals)} /> };
export const Icons: Story = { render: () => <IconsView /> };
