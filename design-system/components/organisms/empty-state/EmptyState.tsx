import { cx } from '../../../lib/cx';
import { Button } from '../../atoms/button/Button';
import { Icon } from '../../atoms/icon/Icon';
import type { IconName } from '../../atoms/icon/icons';
import { Text } from '../../atoms/text/Text';

export interface EmptyStateProps {
  message: string;
  icon?: IconName;
  action?: { label: string; icon?: IconName; onPress: () => void };
  className?: string;
}

/** Organism · Explica un área sin contenido y ofrece el siguiente paso. Docs: ./EmptyState.docs.md */
export function EmptyState({ message, icon = 'info', action, className }: EmptyStateProps) {
  return (
    <section className={cx('ds-card', 'ds-empty-state', className)}>
      <Icon name={icon} size="xl" tone="brand" />
      <Text role="body-medium" tone="secondary">{message}</Text>
      {action && <Button variant="secondary" leadingIcon={action.icon} onPress={action.onPress}>{action.label}</Button>}
    </section>
  );
}
