import type { Meta, StoryObj } from '@storybook/react-vite';
import { SegmentedControl } from '../../../design-system/components/molecules/segmented-control/SegmentedControl';
import { useState } from 'react';
import docs from '../../../design-system/components/molecules/segmented-control/SegmentedControl.docs.md?raw';
import { docsFrom } from '../docs';

const meta = {
  title: 'Molecules/SegmentedControl',
  component: SegmentedControl,
  parameters: docsFrom(docs, 'components/molecules/segmented-control'),
  args: { label: 'Gender', options: [{ label: 'Male', value: 'male' }, { label: 'Female', value: 'female' }, { label: 'Other', value: 'other' }], value: 'female' },
} satisfies Meta<typeof SegmentedControl>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = { decorators: [(Story) => <div className="sb-narrow"><Story /></div>] };

export const Highlight: Story = { args: { tone: 'highlight' }, decorators: [(Story) => <div className="sb-narrow"><Story /></div>] };

function Boards() {
  const [board, setBoard] = useState('shortboard');
  const boards = ['Shortboard', 'Funboard', 'Longboard', 'Fish', 'Soft top'].map((label) => ({ label, value: label.toLowerCase() }));
  return <SegmentedControl label="Board" layout="hug" size="small" options={boards} value={board} onChange={setBoard} />;
}

export const Hug: Story = { render: () => <div className="sb-narrow"><Boards /></div> };
