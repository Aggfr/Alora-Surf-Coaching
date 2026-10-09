import { useId } from 'react';
import { cx } from '../../../lib/cx';
import { Avatar, type AvatarTone } from '../../atoms/avatar/Avatar';
import { Badge, type BadgeTone } from '../../atoms/badge/Badge';
import { Button } from '../../atoms/button/Button';
import { Heading } from '../../atoms/heading/Heading';
import { Icon } from '../../atoms/icon/Icon';
import type { IconName } from '../../atoms/icon/icons';
import { Tag, type TagTone } from '../../atoms/tag/Tag';
import { Text } from '../../atoms/text/Text';

type Plan = 'pay-as-you-go' | 'elite' | 'progression' | 'session' | 'performance';
type Status = 'pending' | 'in-review' | 'review-ready' | 'overdue';

const planLabel: Record<Plan, string> = { 'pay-as-you-go': 'Pay as you go', elite: 'Elite', progression: 'Progression', session: 'Session', performance: 'Performance' };
const planAvatar: Record<Plan, AvatarTone> = { 'pay-as-you-go': 'neutral', elite: 'elite', progression: 'progression', session: 'session', performance: 'performance' };
const statusLabel: Record<Status, string> = { pending: 'Pending', 'in-review': 'In review', 'review-ready': 'Review ready', overdue: 'Overdue' };
const deadlineTone: Record<'on-track' | 'due-soon' | 'overdue', TagTone> = { 'on-track': 'neutral', 'due-soon': 'warning', overdue: 'danger' };

type Action = { label: string; icon?: IconName; onPress: () => void };

export interface SubmissionCardProps {
  /** Who sent it. Omit on a surfer's own profile (Clip history). */
  surfer?: { name: string; plan: Plan };
  status: Status;
  /** Replaces the default status text ("Awaiting review"). */
  statusText?: string;
  clipTitle: string;
  submittedAt: string;
  meta?: string;
  note?: string;
  /** Label above the note. */
  noteLabel?: string;
  deadline?: { label: string; tone: 'on-track' | 'due-soon' | 'overdue' };
  /** Shown in the footer when there is no deadline ("1 clip in submission"). */
  footnote?: string;
  action: Action;
  /** Second, lower-emphasis action before the main one (View and download, next to Upload review). */
  secondaryAction?: Action;
  className?: string;
}

/** Organism · A surfer submission in the coach queue. Docs: ./SubmissionCard.docs.md */
export function SubmissionCard({
  surfer, status, statusText, clipTitle, submittedAt, meta, note, noteLabel = 'From surfer',
  deadline, footnote, action, secondaryAction, className,
}: SubmissionCardProps) {
  const titleId = useId();
  return (
    <article aria-labelledby={titleId} className={cx('ds-card', 'ds-submission-card', className)}>
      <header className="ds-submission-card__header">
        {surfer && (
          <>
            <Avatar name={surfer.name} size="medium" tone={planAvatar[surfer.plan]} />
            <div className="ds-submission-card__identity">
              <span className="ds-submission-card__surfer">{surfer.name}</span>
              <Badge tone={`plan-${surfer.plan}` as BadgeTone}>{planLabel[surfer.plan]}</Badge>
            </div>
          </>
        )}
        {!surfer && <Heading level="small" as="h3" id={titleId} className="ds-submission-card__clip">{clipTitle}</Heading>}
        <Badge tone={status}>{statusText ?? statusLabel[status]}</Badge>
      </header>
      <div className="ds-submission-card__body">
        {surfer && <Heading level="small" as="h3" id={titleId}>{clipTitle}</Heading>}
        <Text role="body-small" tone="tertiary">{submittedAt}</Text>
        {meta && <Text role="body-small" tone="secondary">{meta}</Text>}
        {note && (
          <figure className="ds-submission-card__note">
            <figcaption className="ds-submission-card__note-label">{noteLabel}</figcaption>
            <blockquote className="ds-submission-card__quote">{note}</blockquote>
          </figure>
        )}
      </div>
      <footer className="ds-submission-card__footer">
        {deadline && <Tag tone={deadlineTone[deadline.tone]} icon="clock">{deadline.label}</Tag>}
        {!deadline && footnote && (
          <span className="ds-submission-card__footnote"><Icon name="video" size="xs" />{footnote}</span>
        )}
        <div className="ds-submission-card__actions">
          {secondaryAction && <Button variant="secondary" size="small" leadingIcon={secondaryAction.icon} onPress={secondaryAction.onPress}>{secondaryAction.label}</Button>}
          <Button variant="primary" size="small" leadingIcon={action.icon} onPress={action.onPress}>{action.label}</Button>
        </div>
      </footer>
    </article>
  );
}
