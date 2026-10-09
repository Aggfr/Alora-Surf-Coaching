import { cx } from '../../../lib/cx';
import { Avatar, type AvatarTone } from '../../atoms/avatar/Avatar';
import { Badge, type BadgeTone } from '../../atoms/badge/Badge';
import { Button } from '../../atoms/button/Button';
import { Icon } from '../../atoms/icon/Icon';
import { Link } from '../../atoms/link/Link';
import { Text } from '../../atoms/text/Text';

export interface ListItemProps {
  type?: 'person' | 'definition' | 'navigation';
  title: string;
  description?: string;
  avatarName?: string;
  avatarTone?: AvatarTone;
  /** person: plan or status next to the description. */
  badge?: { label: string; tone: BadgeTone };
  /** definition: a text action after the value ("Cancel your plan"). person: a button. */
  action?: { label: string; onPress: () => void; tone?: 'default' | 'danger' };
  /** navigation, or person: the whole row links here and shows a chevron. */
  href?: string;
  hasDivider?: boolean;
  className?: string;
}

/** Molecule · List row (person, definition or navigation). Docs: ./ListItem.docs.md */
export function ListItem({ type = 'definition', title, description, avatarName, avatarTone, badge, action, href, hasDivider = true, className }: ListItemProps) {
  const classes = cx('ds-list-item', `ds-list-item--${type}`, hasDivider && 'ds-list-item--divider', className);

  if (type === 'navigation') {
    return (
      <li className={classes}>
        <a href={href} className="ds-list-item__link">
          <span className="ds-list-item__title">{title}</span>
          <Icon name="chevron-right" size="sm" tone="secondary" />
        </a>
      </li>
    );
  }

  if (type === 'definition') {
    return (
      <li className={classes}>
        <dl className="ds-list-item__definition">
          <Text as="dt" role="overline" tone="secondary">{title}</Text>
          <Text as="dd" role="body-medium">{description}</Text>
        </dl>
        {action && <Link tone={action.tone === 'danger' ? 'danger' : 'brand'} size="small" onPress={action.onPress}>{action.label}</Link>}
      </li>
    );
  }

  const person = (
    <>
      <Avatar name={avatarName ?? title} size="medium" tone={avatarTone} />
      <div className="ds-list-item__content">
        <span className="ds-list-item__title">{title}</span>
        {(badge || description) && (
          <span className="ds-list-item__meta">
            {badge && <Badge tone={badge.tone}>{badge.label}</Badge>}
            {description && <Text as="span" role="body-small" tone="secondary">{description}</Text>}
          </span>
        )}
      </div>
    </>
  );

  if (href) {
    return (
      <li className={classes}>
        <a href={href} className="ds-list-item__link">
          {person}
          <Icon name="chevron-right" size="sm" tone="secondary" />
        </a>
      </li>
    );
  }

  return (
    <li className={classes}>
      {person}
      {action && <Button variant={action.tone === 'danger' ? 'danger' : 'secondary'} size="small" onPress={action.onPress}>{action.label}</Button>}
    </li>
  );
}
