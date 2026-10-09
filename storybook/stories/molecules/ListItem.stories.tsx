import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { ListItem } from '../../../design-system/components/molecules/list-item/ListItem';
import docs from '../../../design-system/components/molecules/list-item/ListItem.docs.md?raw';
import { docsFrom } from '../docs';

const meta = {
  title: 'Molecules/ListItem',
  component: ListItem,
  parameters: docsFrom(docs, 'components/molecules/list-item'),
  args: { type: 'person', title: 'Lucía Marín', description: 'Elite · Goofy · Intermediate', action: { label: 'View', onPress: fn() } },
  decorators: [(Story) => <ul className="ds-data-list__items sb-medium"><Story /></ul>],
} satisfies Meta<typeof ListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Person: Story = {};

export const Definition: Story = {
  args: { type: 'definition', title: 'Home break', description: 'Zurriola, Donostia', action: { label: 'Edit', onPress: fn() } },
};

export const Navigation: Story = { args: { type: 'navigation', title: 'Notification settings', href: '#settings', action: undefined } };

export const DangerAction: Story = {
  args: { type: 'definition', title: 'Account', description: 'lucia@example.com', action: { label: 'Delete', tone: 'danger', onPress: fn() } },
};

export const LinkedPerson: Story = {
  args: { type: 'person', title: 'Lucía Marín', description: 'Last clip 2 days ago', avatarName: 'Lucía Marín', avatarTone: 'session', badge: { label: 'Session', tone: 'plan-session' }, href: '#lucia', action: undefined },
};
