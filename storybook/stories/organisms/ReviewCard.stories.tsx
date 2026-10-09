import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { ReviewCard } from '../../../design-system/components/organisms/review-card/ReviewCard';
import docs from '../../../design-system/components/organisms/review-card/ReviewCard.docs.md?raw';
import { docsFrom } from '../docs';

const meta = {
  title: 'Organisms/ReviewCard',
  component: ReviewCard,
  parameters: docsFrom(docs, 'components/organisms/review-card'),
  args: { clipTitle: 'Frontside snap', submittedAt: 'Submitted Sep 2', reviewedAt: 'Reviewed Sep 3', coach: { name: 'Coach Alejandro' }, note: 'Great speed through the bottom turn. Open your shoulders earlier to finish the snap.', action: { label: 'Watch review', icon: 'play-circle', onPress: fn() } },
} satisfies Meta<typeof ReviewCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Collapsed: Story = { decorators: [(Story) => <div className="sb-medium"><Story /></div>] };

export const Expanded: Story = { args: { defaultExpanded: true }, decorators: [(Story) => <div className="sb-medium"><Story /></div>] };
