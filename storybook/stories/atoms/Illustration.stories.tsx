import type { Meta, StoryObj } from '@storybook/react-vite';
import { Illustration } from '../../../design-system/components/atoms/illustration/Illustration';
import docs from '../../../design-system/components/atoms/illustration/Illustration.docs.md?raw';
import { docsFrom } from '../docs';

const meta = {
  title: 'Atoms/Illustration',
  component: Illustration,
  parameters: docsFrom(docs, 'components/atoms/illustration'),
  args: { name: 'nothing-reviewed' },
} satisfies Meta<typeof Illustration>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const All: Story = {
  render: () => (
    <div className="sb-row">
      <Illustration name="surfers" />
      <Illustration name="nothing-reviewed" />
    </div>
  ),
};

export const AuthBackground: Story = {
  args: { name: 'auth-background' },
  parameters: { layout: 'fullscreen' },
  decorators: [(Story) => <div className="sb-illustration-stage"><Story /></div>],
};
