import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useArgs } from 'storybook/preview-api';
import { fn } from 'storybook/test';
import { TagChip, type TagChipProps } from '../../../design-system/components/molecules/tag-chip/TagChip';
import docs from '../../../design-system/components/molecules/tag-chip/TagChip.docs.md?raw';
import { docsFrom } from '../docs';

function Controlled(args: TagChipProps) {
  const [, updateArgs] = useArgs<TagChipProps>();
  return <TagChip {...args} onToggle={() => { updateArgs({ isSelected: !args.isSelected }); args.onToggle?.(); }} />;
}

const meta = {
  title: 'Molecules/TagChip',
  component: TagChip,
  parameters: docsFrom(docs, 'components/molecules/tag-chip'),
  args: { label: 'Pending', isSelected: false, onToggle: fn() },
  render: Controlled,
} satisfies Meta<typeof TagChip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Removable: Story = { args: { label: 'Zurriola', isSelected: true, onRemove: fn() } };

export const FilterGroup: Story = {
  render: function Render() {
    const filters = ['All', 'Pending', 'In review', 'Overdue'];
    const [active, setActive] = useState('All');
    return (
      <div className="sb-row">
        {filters.map((name) => <TagChip key={name} label={name} isSelected={active === name} onToggle={() => setActive(name)} />)}
      </div>
    );
  },
};
