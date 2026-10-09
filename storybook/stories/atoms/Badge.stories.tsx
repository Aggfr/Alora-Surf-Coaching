import type { Meta, StoryObj } from '@storybook/react-vite';
import { Badge } from '../../../design-system/components/atoms/badge/Badge';
import docs from '../../../design-system/components/atoms/badge/Badge.docs.md?raw';
import { docsFrom } from '../docs';

const meta = {
  title: 'Atoms/Badge',
  component: Badge,
  parameters: docsFrom(docs, 'components/atoms/badge'),
  args: { children: 'Pending', tone: 'pending' },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Status: Story = {
  render: () => (
    <div className="sb-row">
      <Badge tone="pending">Pending</Badge>
      <Badge tone="in-review">In review</Badge>
      <Badge tone="review-ready">Review ready</Badge>
      <Badge tone="overdue">Overdue</Badge>
      <Badge tone="neutral">Draft</Badge>
    </div>
  ),
};

export const Plans: Story = {
  render: () => (
    <div className="sb-row">
      <Badge tone="plan-pay-as-you-go">Pay as you go</Badge>
      <Badge tone="plan-elite">Elite</Badge>
      <Badge tone="plan-progression">Progression</Badge>
      <Badge tone="plan-session">Session</Badge>
      <Badge tone="plan-performance">Performance</Badge>
    </div>
  ),
};

export const Solid: Story = {
  render: () => (
    <div className="sb-row">
      <Badge tone="pending" appearance="solid">Waiting</Badge>
      <Badge tone="in-review" appearance="solid">In review</Badge>
      <Badge tone="review-ready" appearance="solid" icon="check">Reviewed</Badge>
      <Badge tone="overdue" appearance="solid">Failed</Badge>
    </div>
  ),
};
