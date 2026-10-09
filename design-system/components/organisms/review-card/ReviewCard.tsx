import { useId, useState } from 'react';
import { cx } from '../../../lib/cx';
import { Badge } from '../../atoms/badge/Badge';
import { Button } from '../../atoms/button/Button';
import { Icon } from '../../atoms/icon/Icon';
import type { IconName } from '../../atoms/icon/icons';
import { IconTile } from '../../atoms/icon-tile/IconTile';
import { Text } from '../../atoms/text/Text';

export interface ReviewCardProps {
  clipTitle: string;
  submittedAt: string;
  reviewedAt: string;
  statusLabel?: string;
  coach: { name: string };
  note: string;
  action: { label: string; icon?: IconName; onPress: () => void };
  /** Controlled open state. Leave undefined to let the card manage it. */
  isExpanded?: boolean;
  defaultExpanded?: boolean;
  onToggle?: (isExpanded: boolean) => void;
  className?: string;
}

/** Organism · A reviewed clip in the surfer History, expandable to show the coach feedback. Docs: ./ReviewCard.docs.md */
export function ReviewCard({
  clipTitle, submittedAt, reviewedAt, statusLabel = 'Reviewed', coach, note, action,
  isExpanded, defaultExpanded = false, onToggle, className,
}: ReviewCardProps) {
  const [ownExpanded, setOwnExpanded] = useState(defaultExpanded);
  const expanded = isExpanded ?? ownExpanded;
  const panelId = useId();

  const toggle = () => {
    setOwnExpanded(!expanded);
    onToggle?.(!expanded);
  };

  return (
    <article className={cx('ds-review-card', expanded && 'ds-review-card--expanded', className)}>
      <h3 className="ds-review-card__heading">
        <button type="button" className="ds-review-card__toggle" aria-expanded={expanded} aria-controls={panelId} onClick={toggle}>
          <IconTile icon="play" size="medium" />
          <span className="ds-review-card__titles">
            <span className="ds-review-card__title">{clipTitle}</span>
            <span className="ds-review-card__dates">
              <span>{submittedAt}</span>
              <span>{reviewedAt}</span>
            </span>
          </span>
          <Badge tone="in-review" icon="check">{statusLabel}</Badge>
          <Icon name="chevron-right" size="sm" tone="secondary" className="ds-review-card__chevron" />
        </button>
      </h3>
      <div id={panelId} className="ds-review-card__panel" hidden={!expanded}>
        <IconTile tone="highlight" size="medium">{coach.name.replace(/^coach\s+/i, '').charAt(0).toUpperCase()}</IconTile>
        <div className="ds-review-card__feedback">
          <span className="ds-review-card__coach">{coach.name}</span>
          <Text role="body-medium" tone="secondary">{note}</Text>
        </div>
        <Button variant="primary" leadingIcon={action.icon} onPress={action.onPress}>{action.label}</Button>
      </div>
    </article>
  );
}
