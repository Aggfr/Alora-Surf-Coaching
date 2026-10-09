import type { ReactNode } from 'react';
import { cx } from '../../../lib/cx';
import { Badge, type BadgeSolidTone } from '../../atoms/badge/Badge';
import { Icon } from '../../atoms/icon/Icon';
import type { IconName } from '../../atoms/icon/icons';
import { Link } from '../../atoms/link/Link';

export interface ClipItemProps {
  title: string;
  /** Short facts under the title: "1 clip · 0:11". */
  meta?: string;
  /** Extra lines: coach, expected date or a review note. */
  details?: ReactNode;
  thumbnailSrc?: string;
  thumbnailAlt?: string;
  /** Status label shown on the thumbnail. */
  status?: { label: string; tone: BadgeSolidTone };
  /** Shows a play button on the thumbnail. */
  isPlayable?: boolean;
  action?: { label: string; icon?: IconName; tone?: 'brand' | 'danger'; onPress: () => void };
  size?: 'small' | 'medium';
  className?: string;
}

/** Molecule · One clip or submission with its thumbnail (surfer queue, new submission). Docs: ./ClipItem.docs.md */
export function ClipItem({ title, meta, details, thumbnailSrc, thumbnailAlt = '', status, isPlayable = false, action, size = 'medium', className }: ClipItemProps) {
  return (
    <article className={cx('ds-clip-item', `ds-clip-item--${size}`, className)}>
      <div className="ds-clip-item__media">
        {thumbnailSrc ? <img className="ds-clip-item__thumbnail" src={thumbnailSrc} alt={thumbnailAlt} /> : <span className="ds-clip-item__thumbnail" />}
        {isPlayable && <span className="ds-clip-item__play" aria-hidden="true"><Icon name="play-circle" size="lg" /></span>}
        {status && <Badge tone={status.tone} appearance="solid" className="ds-clip-item__status">{status.label}</Badge>}
      </div>
      <div className="ds-clip-item__content">
        <h3 className="ds-clip-item__title">{title}</h3>
        {meta && <span className="ds-clip-item__meta">{meta}</span>}
        {details && <div className="ds-clip-item__details">{details}</div>}
      </div>
      {action && (
        <Link tone={action.tone ?? 'brand'} leadingIcon={action.icon} onPress={action.onPress} className="ds-clip-item__action">
          {action.label}
        </Link>
      )}
    </article>
  );
}
