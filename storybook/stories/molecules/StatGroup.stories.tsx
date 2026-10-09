import type { Meta, StoryObj } from '@storybook/react-vite';
import { StatGroup } from '../../../design-system/components/molecules/stat-group/StatGroup';
import docs from '../../../design-system/components/molecules/stat-group/StatGroup.docs.md?raw';
import { docsFrom } from '../docs';

const meta = {
  title: 'Molecules/StatGroup',
  component: StatGroup,
  parameters: docsFrom(docs, 'components/molecules/stat-group'),
  args: { items: [{ label: 'Submissions left', value: 3, tone: 'brand' }, { label: 'Clip time', value: '2:30' }, { label: 'Reviews', value: 12, tone: 'highlight' }] },
} satisfies Meta<typeof StatGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = { decorators: [(Story) => <div className="sb-medium"><Story /></div>] };

export const Small: Story = { args: { size: 'small' }, decorators: [(Story) => <div className="sb-medium"><Story /></div>] };
