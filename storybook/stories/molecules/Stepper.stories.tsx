import type { Meta, StoryObj } from '@storybook/react-vite';
import { Stepper } from '../../../design-system/components/molecules/stepper/Stepper';
import docs from '../../../design-system/components/molecules/stepper/Stepper.docs.md?raw';
import { docsFrom } from '../docs';

const meta = {
  title: 'Molecules/Stepper',
  component: Stepper,
  parameters: docsFrom(docs, 'components/molecules/stepper'),
  args: { steps: ['Skill level', 'Stance', 'Goal', 'Coaching', 'About you'], currentStep: 1 },
} satisfies Meta<typeof Stepper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = { decorators: [(Story) => <div className="sb-narrow"><Story /></div>] };

export const FirstStep: Story = { args: { currentStep: 0 }, decorators: [(Story) => <div className="sb-narrow"><Story /></div>] };

export const LastStep: Story = { args: { currentStep: 4 }, decorators: [(Story) => <div className="sb-narrow"><Story /></div>] };
