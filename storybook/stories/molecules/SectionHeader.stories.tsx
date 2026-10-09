import type { Meta, StoryObj } from '@storybook/react-vite';
import { SectionHeader } from '../../../design-system/components/molecules/section-header/SectionHeader';
import { Link } from '../../../design-system/components/atoms/link/Link';
import docs from '../../../design-system/components/molecules/section-header/SectionHeader.docs.md?raw';
import { docsFrom } from '../docs';

const meta = {
  title: 'Molecules/SectionHeader',
  component: SectionHeader,
  parameters: docsFrom(docs, 'components/molecules/section-header'),
  args: { title: 'Assigned surfers', subtitle: '12 surfers', as: 'h2' },
} satisfies Meta<typeof SectionHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const WithAction: Story = { args: { action: <Link href="#coach" trailingIcon="chevron-right">Talk to your coach</Link> } };

export const Small: Story = { args: { size: 'small', title: 'Account & Billing', subtitle: undefined, icon: 'user' } };

export const WithEmphasis: Story = {
  args: { title: 'Weekly availability', subtitle: <><strong>9 slots selected</strong>, tap or drag to change them.</> },
};
