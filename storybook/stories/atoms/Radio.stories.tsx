import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Radio } from '../../../design-system/components/atoms/radio/Radio';
import docs from '../../../design-system/components/atoms/radio/Radio.docs.md?raw';
import { docsFrom } from '../docs';

const meta = {
  title: 'Atoms/Radio',
  component: Radio,
  parameters: docsFrom(docs, 'components/atoms/radio'),
  args: { label: 'Regular', value: 'regular', name: 'stance', isSelected: true, onChange: fn() },
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Group: Story = {
  render: function Render(args) {
    const [stance, setStance] = useState('regular');
    return (
      <div role="radiogroup" aria-label="Stance" className="sb-column">
        {['Regular', 'Goofy', 'Not sure yet'].map((label) => {
          const value = label.toLowerCase();
          return <Radio key={value} name="stance-group" label={label} value={value} isSelected={stance === value}
            onChange={(next) => { setStance(next); args.onChange?.(next); }} />;
        })}
        <Radio name="stance-group" label="Switch (disabled)" value="switch" isDisabled />
      </div>
    );
  },
};
