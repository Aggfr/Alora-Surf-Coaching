import type { Meta, StoryObj } from '@storybook/react-vite';
import { OptionCard } from '../../../design-system/components/molecules/option-card/OptionCard';
import { useState } from 'react';
import docs from '../../../design-system/components/molecules/option-card/OptionCard.docs.md?raw';
import { docsFrom } from '../docs';

const meta = {
  title: 'Molecules/OptionCard',
  component: OptionCard,
  parameters: docsFrom(docs, 'components/molecules/option-card'),
  args: { name: 'level', value: 'intermediate', title: 'Intermediate', description: 'I catch green waves and trim along them.', isSelected: true },
} satisfies Meta<typeof OptionCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = { decorators: [(Story) => <div className="sb-narrow"><Story /></div>] };

const levels = [
  { value: 'beginner', title: 'Beginner', description: 'I stand up on white water.' },
  { value: 'intermediate', title: 'Intermediate', description: 'I catch green waves and trim along them.' },
  { value: 'advanced', title: 'Advanced', description: 'I link turns and pick my waves.' },
];

function LevelGroup() {
  const [level, setLevel] = useState('intermediate');
  return (
    <fieldset className="sb-column sb-stretch sb-narrow sb-fieldset">
      <legend>What is your surfing level?</legend>
      {levels.map((option) => <OptionCard key={option.value} name="level-group" {...option} isSelected={level === option.value} onChange={setLevel} />)}
    </fieldset>
  );
}

export const Group: Story = { render: () => <LevelGroup /> };

function StanceGroup() {
  const [stance, setStance] = useState('regular');
  return (
    <fieldset className="sb-narrow sb-fieldset">
      <legend>What is your stance?</legend>
      <div className="sb-columns">
        <OptionCard name="stance" value="regular" title="Regular" description="Left foot forward" hasIndicator={false} isSelected={stance === 'regular'} onChange={setStance} />
        <OptionCard name="stance" value="goofy" title="Goofy" description="Right foot forward" hasIndicator={false} isSelected={stance === 'goofy'} onChange={setStance} />
      </div>
    </fieldset>
  );
}

export const WithoutIndicator: Story = { render: () => <StanceGroup /> };
