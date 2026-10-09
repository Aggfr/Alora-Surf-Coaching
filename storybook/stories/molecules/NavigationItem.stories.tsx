import type { Meta, StoryObj } from '@storybook/react-vite';
import { NavigationItem } from '../../../design-system/components/molecules/navigation-item/NavigationItem';
import { icons } from '../../../design-system/components/atoms/icon/icons';
import docs from '../../../design-system/components/molecules/navigation-item/NavigationItem.docs.md?raw';
import { docsFrom } from '../docs';

const meta = {
  title: 'Molecules/NavigationItem',
  component: NavigationItem,
  parameters: docsFrom(docs, 'components/molecules/navigation-item'),
  args: { label: 'Queue', icon: 'list', href: '#queue', isActive: false },
  argTypes: { icon: { control: 'select', options: Object.keys(icons) } },
} satisfies Meta<typeof NavigationItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Active: Story = { args: { isActive: true } };
