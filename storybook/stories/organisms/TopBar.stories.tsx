import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { TopBar } from '../../../design-system/components/organisms/top-bar/TopBar';
import { Link } from '../../../design-system/components/atoms/link/Link';
import docs from '../../../design-system/components/organisms/top-bar/TopBar.docs.md?raw';
import { docsFrom } from '../docs';

const meta = {
  title: 'Organisms/TopBar',
  component: TopBar,
  parameters: docsFrom(docs, 'components/organisms/top-bar'),
  args: { title: 'New submission', onBack: fn() },
} satisfies Meta<typeof TopBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const WithAction: Story = { args: { title: 'Edit profile', actions: <Link onPress={fn()}>Cancel</Link> } };

export const WithoutBack: Story = { args: { title: 'Change coach', onBack: undefined } };
