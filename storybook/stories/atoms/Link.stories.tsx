import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Link } from '../../../design-system/components/atoms/link/Link';
import docs from '../../../design-system/components/atoms/link/Link.docs.md?raw';
import { docsFrom } from '../docs';

const meta = {
  title: 'Atoms/Link',
  component: Link,
  parameters: docsFrom(docs, 'components/atoms/link'),
  args: { children: 'Forgot your password?', href: '#reset' },
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Tones: Story = {
  render: () => (
    <div className="sb-row">
      <Link href="#signup">Sign up</Link>
      <Link tone="danger" size="small" leadingIcon="trash" onPress={fn()}>Delete clip</Link>
      <Link tone="neutral" href="#terms">Terms of service</Link>
      <Link trailingIcon="chevron-right" href="#coach">Talk to your coach</Link>
    </div>
  ),
};
