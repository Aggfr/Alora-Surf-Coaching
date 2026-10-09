import type { Meta, StoryObj } from '@storybook/react-vite';
import { useArgs } from 'storybook/preview-api';
import { fn } from 'storybook/test';
import { Switch, type SwitchProps } from '../../../design-system/components/atoms/switch/Switch';
import docs from '../../../design-system/components/atoms/switch/Switch.docs.md?raw';
import { docsFrom } from '../docs';

function Controlled(args: SwitchProps) {
  const [, updateArgs] = useArgs<SwitchProps>();
  return <Switch {...args} onChange={(on) => { updateArgs({ isOn: on }); args.onChange?.(on); }} />;
}

const meta = {
  title: 'Atoms/Switch',
  component: Switch,
  parameters: docsFrom(docs, 'components/atoms/switch'),
  args: { label: 'Push notifications', isOn: true, onChange: fn() },
  render: Controlled,
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const States: Story = {
  render: () => (
    <div className="sb-column">
      <Switch label="Off" />
      <Switch label="On" isOn />
      <Switch label="Disabled" isDisabled />
      <Switch label="Disabled and on" isOn isDisabled />
    </div>
  ),
};
