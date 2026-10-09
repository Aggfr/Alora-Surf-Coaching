import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { AvailabilityGrid } from '../../../design-system/components/organisms/availability-grid/AvailabilityGrid';
import { useState } from 'react';
import { Button } from '../../../design-system/components/atoms/button/Button';
import { slotId } from '../../../design-system/components/organisms/availability-grid/AvailabilityGrid';
import docs from '../../../design-system/components/organisms/availability-grid/AvailabilityGrid.docs.md?raw';
import { docsFrom } from '../docs';

const meta = {
  title: 'Organisms/AvailabilityGrid',
  component: AvailabilityGrid,
  parameters: docsFrom(docs, 'components/organisms/availability-grid'),
  args: { label: 'Weekly availability', value: [], onChange: fn() },
} satisfies Meta<typeof AvailabilityGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

const initial = [0, 1, 2].flatMap((day) => [9, 10, 11].map((hour) => slotId(day, hour)));

function Controlled(args: Parameters<typeof AvailabilityGrid>[0]) {
  const [slots, setSlots] = useState(initial);
  return (
    <AvailabilityGrid
      {...args}
      value={slots}
      onChange={setSlots}
      actions={<><Button variant="secondary" size="small" onPress={() => setSlots([])}>Clear all</Button><Button size="small" onPress={fn()}>Save availability</Button></>}
    />
  );
}

export const Playground: Story = { render: (args) => <Controlled {...args} /> };

export const ShortDay: Story = { args: { hours: [8, 9, 10, 11, 12] }, render: (args) => <Controlled {...args} /> };
