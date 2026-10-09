import type { Meta, StoryObj } from '@storybook/react-vite';
import { Stat } from '../../../design-system/components/molecules/stat/Stat';
import { EmptyState } from '../../../design-system/components/organisms/empty-state/EmptyState';
import { PageHeader } from '../../../design-system/components/organisms/page-header/PageHeader';
import { DashboardTemplate } from '../../../design-system/templates/dashboard/DashboardTemplate';
import docs from '../../../design-system/templates/dashboard/DashboardTemplate.docs.md?raw';
import { docsFrom } from '../docs';

const meta = {
  title: 'Templates/DashboardTemplate',
  component: DashboardTemplate,
  parameters: { ...docsFrom(docs, 'templates/dashboard'), layout: 'fullscreen' },
  args: {
    navigation: { product: 'surfer', activeHref: '/' },
    header: <PageHeader title="Hi, Lucía" subtitle="Your last clip has feedback ready." />,
    children: (
      <>
        <div className="ds-stat-row">
          <Stat label="Clips this month" value={6} />
          <Stat label="Reviews ready" value={2} trend={{ direction: 'up', label: '+1 this week' }} />
        </div>
        <EmptyState message="Upload your next session to keep progressing." icon="video" />
      </>
    ),
  },
  argTypes: { header: { control: false }, children: { control: false } },
} satisfies Meta<typeof DashboardTemplate>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Surfer: Story = {};

export const Coach: Story = {
  args: {
    navigation: { product: 'coach', activeHref: '/surfers' },
    header: <PageHeader title="Surfers" subtitle="12 active surfers on your plans." />,
    children: <EmptyState message="Slot Content: stats, lists and cards stacked in one column." icon="list" />,
  },
};
