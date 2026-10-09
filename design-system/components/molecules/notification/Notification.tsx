import { cx } from '../../../lib/cx';
import { Button } from '../../atoms/button/Button';
import { Icon } from '../../atoms/icon/Icon';
import type { IconName } from '../../atoms/icon/icons';
import { Text } from '../../atoms/text/Text';

export type NotificationTone = 'info' | 'success' | 'warning' | 'danger';

const toneIcon: Record<NotificationTone, IconName> = { info: 'info', success: 'check-circle', warning: 'warning', danger: 'warning' };

export interface NotificationProps {
  tone?: NotificationTone;
  title: string;
  description?: string;
  action?: { label: string; onPress: () => void };
  onDismiss?: () => void;
  className?: string;
}

/** Molecule · Mensaje de sistema inline o toast. Docs: ./Notification.docs.md */
export function Notification({ tone = 'info', title, description, action, onDismiss, className }: NotificationProps) {
  return (
    <div role={tone === 'danger' ? 'alert' : 'status'} className={cx('ds-notification', `ds-notification--${tone}`, className)}>
      <Icon name={toneIcon[tone]} size="md" className="ds-notification__icon" />
      <div className="ds-notification__content">
        <span className="ds-notification__title">{title}</span>
        {description && <Text role="body-small" tone="secondary">{description}</Text>}
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
