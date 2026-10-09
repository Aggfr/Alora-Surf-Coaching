import type { Meta, StoryObj } from '@storybook/react-vite';
import { Breadcrumb } from '../../../design-system/components/molecules/breadcrumb/Breadcrumb';
import docs from '../../../design-system/components/molecules/breadcrumb/Breadcrumb.docs.md?raw';
import { docsFrom } from '../docs';

const meta = {
  title: 'Molecules/Breadcrumb',
  component: Breadcrumb,
  parameters: docsFrom(docs, 'components/molecules/breadcrumb'),
  args: { items: [{ label: 'Queue', href: '#queue' }, { label: 'Lucía Marín', href: '#surfer' }, { label: 'Frontside snap' }] },
} satisfies Meta<typeof Breadcrumb>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const TwoLevels: Story = { args: { items: [{ label: 'Sessions', href: '#sessions' }, { label: 'Upload' }] } };
