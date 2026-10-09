import { cx } from '../../../lib/cx';
import { Avatar } from '../../atoms/avatar/Avatar';
import { Button } from '../../atoms/button/Button';
import { Icon } from '../../atoms/icon/Icon';
import { Text } from '../../atoms/text/Text';

export interface ListItemProps {
  type?: 'person' | 'definition' | 'navigation';
  title: string;
  description?: string;
  avatarName?: string;
  action?: { label: string; onPress: () => void; tone?: 'default' | 'danger' };
  href?: string;
  hasDivider?: boolean;
  className?: string;
}

/** Molecule · Fila de lista (persona, definición o navegación). Docs: ./ListItem.docs.md */
export function ListItem({ type = 'definition', title, description, avatarName, action, href, hasDivider = true, className }: ListItemProps) {
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
        {action && <Button variant={action.tone === 'danger' ? 'danger' : 'ghost'} size="small" onPress={action.onPress}>{action.label}</Button>}
      </li>
    );
  }

  return (
    <li className={classes}>
      <Avatar name={avatarName ?? title} size="medium" />
      <div className="ds-list-item__content">
        <span className="ds-list-item__title">{title}</span>
        {description && <Text role="body-small" tone="secondary">{description}</Text>}
      </div>
      {action && <Button variant={action.tone === 'danger' ? 'danger' : 'secondary'} size="small" onPress={action.onPress}>{action.label}</Button>}
    </li>
  );
}
