import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { ClipItem } from '../../../design-system/components/molecules/clip-item/ClipItem';
import docs from '../../../design-system/components/molecules/clip-item/ClipItem.docs.md?raw';
import { docsFrom } from '../docs';

const meta = {
  title: 'Molecules/ClipItem',
  component: ClipItem,
  parameters: docsFrom(docs, 'components/molecules/clip-item'),
  args: { title: 'Surf clip', meta: '1 clip · 0:11', isPlayable: true, action: { label: 'Delete clip', icon: 'trash', tone: 'danger', onPress: fn() } },
} satisfies Meta<typeof ClipItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = { decorators: [(Story) => <div className="sb-medium"><Story /></div>] };

export const WithStatus: Story = {
  args: {
    title: 'Frontside snap',
    meta: '2 clips · 1:46',
    details: 'Coach Alejandro · Review expected Sep 4',
    status: { label: 'In review', tone: 'in-review' },
    action: undefined,
  },
  decorators: [(Story) => <div className="sb-medium"><Story /></div>],
};

export const Small: Story = { args: { size: 'small', action: undefined }, decorators: [(Story) => <div className="sb-medium"><Story /></div>] };
