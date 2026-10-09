import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { EmptyState } from '../../../design-system/components/organisms/empty-state/EmptyState';
import { icons } from '../../../design-system/components/atoms/icon/icons';
import docs from '../../../design-system/components/organisms/empty-state/EmptyState.docs.md?raw';
import { docsFrom } from '../docs';

const meta = {
  title: 'Organisms/EmptyState',
  component: EmptyState,
  parameters: docsFrom(docs, 'components/organisms/empty-state'),
  args: { message: 'You have not uploaded any clips yet.', icon: 'video', action: { label: 'Upload clip', icon: 'upload', onPress: fn() } },
  argTypes: { icon: { control: 'select', options: Object.keys(icons) } },
  decorators: [(Story) => <div className="sb-medium"><Story /></div>],
} satisfies Meta<typeof EmptyState>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const NoResults: Story = { args: { message: 'No clips match these filters.', icon: 'search', action: { label: 'Clear filters', onPress: fn() } } };

export const WithoutAction: Story = { args: { message: 'Nothing to review. Enjoy the waves.', icon: 'check-circle', action: undefined } };
