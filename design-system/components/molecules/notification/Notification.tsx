import { cx } from '../../../lib/cx';
import { Button } from '../../atoms/button/Button';
import { Icon } from '../../atoms/icon/Icon';
import type { IconName } from '../../atoms/icon/icons';
import { Text } from '../../atoms/text/Text';

export type NotificationTone = 'info' | 'success' | 'warning' | 'danger';

const toneIcon: Record<NotificationTone, IconName> = { info: 'info', success: 'check-circle', warning: 'warning', danger: 'alert-circle' };

export interface NotificationProps {
  tone?: NotificationTone;
  title: string;
  description?: string;
  action?: { label: string; onPress: () => void };
  onDismiss?: () => void;
  /** compact: one line, title only ("Your availability has been saved."). */
  density?: 'default' | 'compact';
  className?: string;
}

/** Molecule · Inline or toast system message. Docs: ./Notification.docs.md */
export function Notification({ tone = 'info', title, description, action, onDismiss, density = 'default', className }: NotificationProps) {
  return (
    <div role={tone === 'danger' ? 'alert' : 'status'} className={cx('ds-notification', `ds-notification--${tone}`, `ds-notification--${density}`, className)}>
      <Icon name={toneIcon[tone]} size={density === 'compact' ? 'sm' : 'md'} className="ds-notification__icon" />
      <div className="ds-notification__content">
        <span className="ds-notification__title">{title}</span>
        {description && density === 'default' && <Text role="body-small" tone="secondary">{description}</Text>}
      </div>
      {action && <Button variant="ghost" size="small" onPress={action.onPress}>{action.label}</Button>}
      {onDismiss && (
        <button type="button" className="ds-notification__dismiss" aria-label="Dismiss" onClick={onDismiss}>
          <Icon name="close" size="sm" />
        </button>
      )}
    </div>
  );
}
