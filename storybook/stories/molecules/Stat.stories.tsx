import type { Meta, StoryObj } from '@storybook/react-vite';
import { Stat } from '../../../design-system/components/molecules/stat/Stat';
import docs from '../../../design-system/components/molecules/stat/Stat.docs.md?raw';
import { docsFrom } from '../docs';

const meta = {
  title: 'Molecules/Stat',
  component: Stat,
  parameters: docsFrom(docs, 'components/molecules/stat'),
  args: { label: 'Reviewed this week', value: 14, trend: { direction: 'up', label: '+4 vs last week' } },
} satisfies Meta<typeof Stat>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const TrendDown: Story = { args: { label: 'Average response', value: '9h', trend: { direction: 'down', label: '−2h vs last week' } } };

export const Row: Story = {
  render: () => (
    <div className="ds-stat-row">
      <Stat label="Pending" value={1} />
      <Stat label="In review" value={1} />
      <Stat label="Reviewed this week" value={14} trend={{ direction: 'up', label: '+4 vs last week' }} />
    </div>
  ),
};

export const Featured: Story = { args: { variant: 'featured', label: 'Total earnings', value: '€1,240', caption: 'Sep 15 - Sep 30', trend: undefined } };

export const Compact: Story = { args: { variant: 'compact', label: 'Reviews this period', value: 31, trend: undefined }, decorators: [(Story) => <div className="sb-narrow"><Story /></div>] };
