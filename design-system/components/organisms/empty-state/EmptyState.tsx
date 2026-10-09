import { cx } from '../../../lib/cx';
import { Button } from '../../atoms/button/Button';
import { Icon } from '../../atoms/icon/Icon';
import type { IconName } from '../../atoms/icon/icons';
import { Illustration } from '../../atoms/illustration/Illustration';
import type { IllustrationName } from '../../atoms/illustration/illustrations';
import { Text } from '../../atoms/text/Text';

export interface EmptyStateProps {
  /** Bold line above the message ("No surfers yet"). */
  title?: string;
  message: string;
  /** Small line under the message ("Surfers are assigned by the ALORA team."). */
  hint?: string;
  icon?: IconName;
  /** Replaces the icon with a larger illustration. */
  illustration?: IllustrationName;
  action?: { label: string; icon?: IconName; variant?: 'primary' | 'secondary'; onPress: () => void };
  /** card: centered in a card. inline: left-aligned text with no card ("All caught up!"). */
  variant?: 'card' | 'inline';
  className?: string;
}

/** Organism · Explains an empty area and offers the next step. Docs: ./EmptyState.docs.md */
export function EmptyState({ title, message, hint, icon = 'info', illustration, action, variant = 'card', className }: EmptyStateProps) {
  return (
    <section className={cx(variant === 'card' && 'ds-card', 'ds-empty-state', `ds-empty-state--${variant}`, className)}>
      {variant === 'card' && (illustration
        ? <Illustration name={illustration} className="ds-empty-state__illustration" />
        : <span className="ds-empty-state__icon"><Icon name={icon} size="md" tone="secondary" /></span>)}
      <div className="ds-empty-state__text">
        {title && <Text role="body-large" className="ds-empty-state__title">{title}</Text>}
        <Text role={title ? 'body-small' : 'body-medium'} tone="secondary">{message}</Text>
        {hint && <Text role="caption" tone="tertiary">{hint}</Text>}
      </div>
      {action && (
        <Button variant={action.variant ?? 'secondary'} size={action.variant === 'primary' ? 'small' : 'medium'} leadingIcon={action.icon} onPress={action.onPress}>
          {action.label}
        </Button>
      )}
    </section>
  );
}
