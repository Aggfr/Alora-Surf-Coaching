import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { DataList } from '../../../design-system/components/organisms/data-list/DataList';
import docs from '../../../design-system/components/organisms/data-list/DataList.docs.md?raw';
import { docsFrom } from '../docs';

const meta = {
  title: 'Organisms/DataList',
  component: DataList,
  parameters: docsFrom(docs, 'components/organisms/data-list'),
  args: {
    title: 'Surf profile',
    icon: 'user',
    items: [
      { type: 'definition', title: 'Stance', description: 'Goofy', action: { label: 'Edit', onPress: fn() } },
      { type: 'definition', title: 'Level', description: 'Intermediate' },
      { type: 'definition', title: 'Home break', description: 'Zurriola, Donostia' },
    ],
  },
  decorators: [(Story) => <div className="sb-medium"><Story /></div>],
} satisfies Meta<typeof DataList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Definitions: Story = {};

export const People: Story = {
  args: {
    title: 'Your surfers',
    icon: 'users',
    items: [
      { type: 'person', title: 'Lucía Marín', description: 'Elite · 2 clips this week', action: { label: 'View', onPress: fn() } },
      { type: 'person', title: 'Marco Ruiz', description: 'Progression · 1 clip this week', action: { label: 'View', onPress: fn() } },
      { type: 'person', title: 'Ane Etxeberria', description: 'Pay as you go · 1 overdue', action: { label: 'View', onPress: fn() } },
    ],
  },
};

export const Navigation: Story = {
  args: {
    title: 'Settings',
    icon: 'edit',
    items: [
      { type: 'navigation', title: 'Account', href: '#account' },
      { type: 'navigation', title: 'Notifications', href: '#notifications' },
      { type: 'navigation', title: 'Plan and billing', href: '#billing' },
    ],
  },
};

export const StripedInline: Story = {
  args: {
    title: undefined,
    icon: undefined,
    layout: 'inline',
    isStriped: true,
    items: [
      { type: 'definition', title: 'Stance', description: 'Goofy' },
      { type: 'definition', title: 'Level', description: 'Intermediate' },
      { type: 'definition', title: 'Board', description: 'Shortboard' },
      { type: 'definition', title: 'Home break', description: 'Zurriola' },
    ],
  },
};
