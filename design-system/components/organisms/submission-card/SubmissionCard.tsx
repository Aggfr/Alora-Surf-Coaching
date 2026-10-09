import { useId } from 'react';
import { cx } from '../../../lib/cx';
import { Avatar } from '../../atoms/avatar/Avatar';
import { Badge, type BadgeTone } from '../../atoms/badge/Badge';
import { Button } from '../../atoms/button/Button';
import { Heading } from '../../atoms/heading/Heading';
import type { IconName } from '../../atoms/icon/icons';
import { Tag, type TagTone } from '../../atoms/tag/Tag';
import { Text } from '../../atoms/text/Text';

type Plan = 'pay-as-you-go' | 'elite' | 'progression';
type Status = 'pending' | 'in-review' | 'review-ready' | 'overdue';

const planLabel: Record<Plan, string> = { 'pay-as-you-go': 'Pay as you go', elite: 'Elite', progression: 'Progression' };
const statusLabel: Record<Status, string> = { pending: 'Pending', 'in-review': 'In review', 'review-ready': 'Review ready', overdue: 'Overdue' };
const deadlineTone: Record<'on-track' | 'due-soon' | 'overdue', TagTone> = { 'on-track': 'neutral', 'due-soon': 'warning', overdue: 'danger' };

export interface SubmissionCardProps {
  surfer: { name: string; plan: Plan };
  status: Status;
  clipTitle: string;
  submittedAt: string;
  meta?: string;
  note?: string;
  deadline: { label: string; tone: 'on-track' | 'due-soon' | 'overdue' };
  action: { label: string; icon?: IconName; onPress: () => void };
  className?: string;
}

/** Organism · Envío de un surfer en la cola del coach. Docs: ./SubmissionCard.docs.md */
export function SubmissionCard({ surfer, status, clipTitle, submittedAt, meta, note, deadline, action, className }: SubmissionCardProps) {
  const titleId = useId();
  return (
    <article aria-labelledby={titleId} className={cx('ds-card', 'ds-submission-card', className)}>
      <header className="ds-submission-card__header">
        <Avatar name={surfer.name} size="large" />
        <div className="ds-submission-card__identity">
          <Heading level="small" as="h3" id={titleId}>{surfer.name}</Heading>
          <Badge tone={`plan-${surfer.plan}` as BadgeTone}>{planLabel[surfer.plan]}</Badge>
        </div>
        <Badge tone={status}>{statusLabel[status]}</Badge>
      </header>
      <div className="ds-submission-card__body">
        <Text role="body-large">{clipTitle}</Text>
        <Text role="body-small" tone="secondary">{[submittedAt, meta].filter(Boolean).join(' · ')}</Text>
        {note && <blockquote className="ds-submission-card__note">{note}</blockquote>}
      </div>
      <footer className="ds-submission-card__footer">
        <Tag tone={deadlineTone[deadline.tone]} icon="clock">{deadline.label}</Tag>
        <Button variant="primary" size="medium" leadingIcon={action.icon} onPress={action.onPress}>{action.label}</Button>
      </footer>
    </article>
  );
}
