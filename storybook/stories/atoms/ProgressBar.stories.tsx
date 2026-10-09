import type { Meta, StoryObj } from '@storybook/react-vite';
import { ProgressBar } from '../../../design-system/components/atoms/progress-bar/ProgressBar';
import docs from '../../../design-system/components/atoms/progress-bar/ProgressBar.docs.md?raw';
import { docsFrom } from '../docs';

const meta = {
  title: 'Atoms/ProgressBar',
  component: ProgressBar,
  parameters: docsFrom(docs, 'components/atoms/progress-bar'),
  args: { value: 11, max: 150, label: 'Clip time used', valueText: '0:11 of 2:30' },
} satisfies Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = { decorators: [(Story) => <div className="sb-narrow"><Story /></div>] };

export const Steps: Story = {
  render: () => (
    <div className="sb-column sb-stretch sb-narrow">
      <ProgressBar value={0} max={4} label="Steps completed" />
      <ProgressBar value={2} max={4} label="Steps completed" />
      <ProgressBar value={4} max={4} label="Steps completed" />
    </div>
  ),
};
