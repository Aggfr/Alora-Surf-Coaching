import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '../../../design-system/components/atoms/button/Button';
import { Tooltip } from '../../../design-system/components/atoms/tooltip/Tooltip';
import docs from '../../../design-system/components/atoms/tooltip/Tooltip.docs.md?raw';
import { docsFrom } from '../docs';

const meta = {
  title: 'Atoms/Tooltip',
  component: Tooltip,
  parameters: docsFrom(docs, 'components/atoms/tooltip'),
  args: { content: 'Download the clip', placement: 'top', children: <Button variant="secondary" leadingIcon="eye" aria-label="View clip" /> },
  argTypes: { children: { control: false } },
  decorators: [(Story) => <div className="sb-row sb-tooltip-stage"><Story /></div>],
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Hover or focus the button to show the tooltip. */
export const Playground: Story = {};

export const Bottom: Story = { args: { placement: 'bottom' } };
