import type { ReactNode } from 'react';
import { cx } from '../../../lib/cx';
import { Heading } from '../../atoms/heading/Heading';
import { IconButton } from '../../atoms/icon-button/IconButton';

export interface TopBarProps {
  title: string;
  /** Shows the back button. */
  onBack?: () => void;
  backLabel?: string;
  actions?: ReactNode;
  className?: string;
}

/** Organism · Bar at the top of a focused flow, with back and title (Create account, New submission). Docs: ./TopBar.docs.md */
export function TopBar({ title, onBack, backLabel = 'Back', actions, className }: TopBarProps) {
  return (
    <header className={cx('ds-top-bar', className)}>
      {onBack && <IconButton icon="chevron-left" label={backLabel} onPress={onBack} />}
      <Heading level="medium" as="h1" className="ds-top-bar__title">{title}</Heading>
      {actions && <div className="ds-top-bar__actions">{actions}</div>}
    </header>
  );
}
