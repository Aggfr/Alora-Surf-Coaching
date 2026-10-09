import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { SubmissionCard } from '../../../design-system/components/organisms/submission-card/SubmissionCard';
import docs from '../../../design-system/components/organisms/submission-card/SubmissionCard.docs.md?raw';
import { docsFrom } from '../docs';

const meta = {
  title: 'Organisms/SubmissionCard',
  component: SubmissionCard,
  parameters: docsFrom(docs, 'components/organisms/submission-card'),
  args: {
    surfer: { name: 'Lucía Marín', plan: 'elite' },
    status: 'pending',
    clipTitle: 'Frontside snap',
    submittedAt: 'Today, 09:12',
    meta: 'Goofy · Intermediate · Zurriola',
    note: 'I keep losing speed after the bottom turn. Any tips?',
    deadline: { label: 'Due in 6h', tone: 'due-soon' },
    action: { label: 'Start review', icon: 'play-circle', onPress: fn() },
  },
  decorators: [(Story) => <div className="sb-medium"><Story /></div>],
} satisfies Meta<typeof SubmissionCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Pending: Story = {};

export const InReview: Story = {
  args: {
    surfer: { name: 'Marco Ruiz', plan: 'progression' },
    status: 'in-review',
    clipTitle: 'Cutback',
    submittedAt: 'Yesterday, 18:40',
    meta: 'Regular · Advanced · Mundaka',
    note: undefined,
    deadline: { label: 'Due tomorrow', tone: 'on-track' },
    action: { label: 'Continue review', icon: 'play-circle', onPress: fn() },
  },
};

export const Overdue: Story = {
  args: {
    surfer: { name: 'Ane Etxeberria', plan: 'pay-as-you-go' },
    status: 'overdue',
    clipTitle: 'Pop-up',
    submittedAt: 'Mon, 11:05',
    meta: 'Regular · Beginner · Sopelana',
    note: undefined,
    deadline: { label: 'Overdue 1 day', tone: 'overdue' },
  },
};

export const ReviewReady: Story = {
  args: { status: 'review-ready', deadline: { label: 'Sent today', tone: 'on-track' }, action: { label: 'View & Download', icon: 'eye', onPress: fn() } },
};

export const SurferSide: Story = {
  args: {
    surfer: undefined,
    status: 'pending',
    statusText: 'Waiting for review',
    clipTitle: 'Frontside snap',
    submittedAt: 'Submitted Sep 2',
    meta: undefined,
    note: 'I keep losing speed after the bottom turn.',
    noteLabel: 'Your note',
    deadline: undefined,
    footnote: '2 clips · 1:46',
    action: { label: 'View', icon: 'eye', onPress: fn() },
    secondaryAction: { label: 'Edit', icon: 'edit', onPress: fn() },
  },
};

export const SessionPlan: Story = { args: { surfer: { name: 'Lucía Marín', plan: 'session' } } };
