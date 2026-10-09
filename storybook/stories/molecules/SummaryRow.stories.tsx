import type { Meta, StoryObj } from '@storybook/react-vite';
import { SummaryRow } from '../../../design-system/components/molecules/summary-row/SummaryRow';
import docs from '../../../design-system/components/molecules/summary-row/SummaryRow.docs.md?raw';
import { docsFrom } from '../docs';

const meta = {
  title: 'Molecules/SummaryRow',
  component: SummaryRow,
  parameters: docsFrom(docs, 'components/molecules/summary-row'),
  args: { icon: 'video', label: 'Clips', value: '2 clips · 1:46' },
} satisfies Meta<typeof SummaryRow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const List: Story = {
  render: () => (
    <div className="sb-column sb-stretch sb-narrow">
      <SummaryRow icon="video" label="Clips" value="2 clips · 1:46" />
      <SummaryRow icon="user" label="Coach" value="Alejandro Ortiz" />
      <SummaryRow icon="clock" label="Expected review" value="Within 48 hours" />
    </div>
  ),
};
