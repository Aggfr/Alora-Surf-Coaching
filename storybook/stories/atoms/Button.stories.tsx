import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Button } from '../../../design-system/components/atoms/button/Button';
import { icons } from '../../../design-system/components/atoms/icon/icons';
import docs from '../../../design-system/components/atoms/button/Button.docs.md?raw';
import { docsFrom } from '../docs';

const iconOptions = [undefined, ...Object.keys(icons)];

const meta = {
  title: 'Atoms/Button',
  component: Button,
  parameters: docsFrom(docs, 'components/atoms/button'),
  args: { children: 'Upload clip', variant: 'primary', size: 'medium', onPress: fn() },
  argTypes: {
    leadingIcon: { control: 'select', options: iconOptions },
    trailingIcon: { control: 'select', options: iconOptions },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = { args: { leadingIcon: 'upload' } };

export const Variants: Story = {
  render: (args) => (
    <div className="sb-row">
      <Button {...args} variant="primary">Primary</Button>
      <Button {...args} variant="secondary">Secondary</Button>
      <Button {...args} variant="ghost">Ghost</Button>
      <Button {...args} variant="danger">Danger</Button>
    </div>
  ),
};

export const Sizes: Story = {
  render: (args) => (
    <div className="sb-row">
      <Button {...args} size="small">Small</Button>
      <Button {...args} size="medium">Medium</Button>
      <Button {...args} size="large">Large</Button>
    </div>
  ),
};

export const WithIcons: Story = {
  render: (args) => (
    <div className="sb-row">
      <Button {...args} leadingIcon="eye">View & Download</Button>
      <Button {...args} variant="secondary" trailingIcon="chevron-right">Next</Button>
      <Button {...args} variant="ghost" leadingIcon="close" aria-label="Close" children={undefined} />
    </div>
  ),
};

export const Loading: Story = { args: { isLoading: true, children: 'Sending' } };

export const Disabled: Story = { args: { isDisabled: true } };

export const FullWidth: Story = {
  args: { isFullWidth: true, size: 'large', leadingIcon: 'log-in', children: 'Log in' },
  decorators: [(Story) => <div className="sb-narrow"><Story /></div>],
};
