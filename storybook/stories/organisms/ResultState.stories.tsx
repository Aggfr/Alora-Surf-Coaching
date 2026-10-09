import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { ResultState } from '../../../design-system/components/organisms/result-state/ResultState';
import { SummaryRow } from '../../../design-system/components/molecules/summary-row/SummaryRow';
import docs from '../../../design-system/components/organisms/result-state/ResultState.docs.md?raw';
import { docsFrom } from '../docs';

const meta = {
  title: 'Organisms/ResultState',
  component: ResultState,
  parameters: docsFrom(docs, 'components/organisms/result-state'),
  args: { tone: 'success', title: 'Submission sent!', description: 'Your coach will review your clips and send feedback.', hint: "You'll be notified when feedback is ready.", primaryAction: { label: 'Back to home', onPress: fn() }, secondaryAction: { label: 'View submission', onPress: fn() } },
} satisfies Meta<typeof ResultState>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {
  render: (args) => (
    <div className="sb-narrow">
      <ResultState {...args}>
        <SummaryRow icon="video" label="Clips" value="2 clips · 1:46" />
        <SummaryRow icon="user" label="Coach" value="Alejandro Ortiz" />
      </ResultState>
    </div>
  ),
};

export const Failed: Story = {
  args: {
    tone: 'danger',
    title: 'Submission failed',
    description: 'We could not send your clips. Your submission was not used.',
    hint: undefined,
    primaryAction: { label: 'Try again', onPress: fn() },
    secondaryAction: { label: 'Back to home', onPress: fn() },
  },
  decorators: [(Story) => <div className="sb-narrow"><Story /></div>],
};
