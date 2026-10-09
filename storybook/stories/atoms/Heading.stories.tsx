import type { Meta, StoryObj } from '@storybook/react-vite';
import { Heading } from '../../../design-system/components/atoms/heading/Heading';
import docs from '../../../design-system/components/atoms/heading/Heading.docs.md?raw';
import { docsFrom } from '../docs';

const meta = {
  title: 'Atoms/Heading',
  component: Heading,
  parameters: docsFrom(docs, 'components/atoms/heading'),
  args: { children: 'Welcome back, Lucía', level: 'medium' },
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Levels: Story = {
  render: () => (
    <div className="sb-column">
      <Heading level="display">Display · Ride better waves</Heading>
      <Heading level="large">Large · Welcome, Alejandro</Heading>
      <Heading level="medium" as="h2">Medium · Review queue</Heading>
      <Heading level="small" as="h3">Small · Frontside snap</Heading>
    </div>
  ),
};
