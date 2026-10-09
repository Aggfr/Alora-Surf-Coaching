import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { PeriodStepper } from '../../../design-system/components/molecules/period-stepper/PeriodStepper';
import docs from '../../../design-system/components/molecules/period-stepper/PeriodStepper.docs.md?raw';
import { docsFrom } from '../docs';

const meta = {
  title: 'Molecules/PeriodStepper',
  component: PeriodStepper,
  parameters: docsFrom(docs, 'components/molecules/period-stepper'),
  args: { label: 'Pay period', value: 'Sep 15 - Sep 30', onPrevious: fn(), onNext: fn(), isNextDisabled: true },
} satisfies Meta<typeof PeriodStepper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Week: Story = { args: { label: 'Week', value: 'Oct 6 - Oct 12', isNextDisabled: false } };
