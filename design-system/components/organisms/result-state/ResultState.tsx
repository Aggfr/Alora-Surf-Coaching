import { useId, type ReactNode } from 'react';
import { cx } from '../../../lib/cx';
import { Button } from '../../atoms/button/Button';
import { Heading } from '../../atoms/heading/Heading';
import { IconTile } from '../../atoms/icon-tile/IconTile';
import { Text } from '../../atoms/text/Text';

export interface ResultStateProps {
  tone: 'success' | 'danger';
  title: string;
  description?: ReactNode;
  /** Small line under the description ("You'll be notified when feedback is ready."). */
  hint?: string;
  /** Summary of what happened: SummaryRow list or StatGroup. */
  children?: ReactNode;
  primaryAction: { label: string; onPress: () => void };
  secondaryAction?: { label: string; onPress: () => void };
  className?: string;
}

/** Organism · Full-screen outcome of a flow: success or failure, with what to do next. Docs: ./ResultState.docs.md */
export function ResultState({ tone, title, description, hint, children, primaryAction, secondaryAction, className }: ResultStateProps) {
  const titleId = useId();
  return (
    <section aria-labelledby={titleId} className={cx('ds-result-state', `ds-result-state--${tone}`, className)}>
      {tone === 'success'
        ? <IconTile icon="check" tone="solid" shape="circle" size="xlarge" hasHalo />
        : <IconTile icon="alert-circle" tone="danger" shape="circle" size="large" hasHalo />}
      <div className="ds-result-state__text">
        <Heading level={tone === 'success' ? 'display' : 'large'} as="h1" id={titleId}>{title}</Heading>
        {description && <Text role="body-large" tone={tone === 'success' ? 'primary' : 'secondary'}>{description}</Text>}
        {hint && <Text role="body-small" tone="tertiary">{hint}</Text>}
      </div>
      {children && <div className="ds-result-state__summary">{children}</div>}
      <div className="ds-result-state__actions">
        <Button variant="primary" size="large" isFullWidth onPress={primaryAction.onPress}>{primaryAction.label}</Button>
        {secondaryAction && <Button variant="secondary" size="large" isFullWidth onPress={secondaryAction.onPress}>{secondaryAction.label}</Button>}
      </div>
    </section>
  );
}
