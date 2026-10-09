import type { Meta, StoryObj } from '@storybook/react-vite';
import { Icon } from '../../../design-system/components/atoms/icon/Icon';
import { icons, type IconName } from '../../../design-system/components/atoms/icon/icons';
import docs from '../../../design-system/components/atoms/icon/Icon.docs.md?raw';
import { docsFrom } from '../docs';

const meta = {
  title: 'Atoms/Icon',
  component: Icon,
  parameters: docsFrom(docs, 'components/atoms/icon'),
  args: { name: 'home', size: 'lg', tone: 'inherit' },
  argTypes: { name: { control: 'select', options: Object.keys(icons) } },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Sizes: Story = {
  render: (args) => (
    <div className="sb-row">
      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => <Icon key={size} {...args} size={size} />)}
    </div>
  ),
};

export const Tones: Story = {
  render: (args) => (
    <div className="sb-row">
      {(['primary', 'secondary', 'brand', 'inherit'] as const).map((tone) => <Icon key={tone} {...args} tone={tone} />)}
    </div>
  ),
};

export const AllIcons: Story = {
  render: (args) => (
    <div className="sb-row">
      {(Object.keys(icons) as IconName[]).map((name) => <Icon key={name} {...args} name={name} label={name} />)}
    </div>
  ),
};
