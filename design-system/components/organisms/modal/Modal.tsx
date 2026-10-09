import { useEffect, useId, useRef, type ReactNode } from 'react';
import { cx } from '../../../lib/cx';
import { Button } from '../../atoms/button/Button';
import { Heading } from '../../atoms/heading/Heading';
import { Icon } from '../../atoms/icon/Icon';
import { Text } from '../../atoms/text/Text';

export interface ModalProps {
  isOpen: boolean;
  title: string;
  description?: string;
  tone?: 'default' | 'danger';
  primaryAction: { label: string; onPress: () => void };
  secondaryAction?: { label: string; onPress: () => void };
  onClose: () => void;
  children?: ReactNode;
  className?: string;
}

/** Organism · Modal dialog with trapped focus. Docs: ./Modal.docs.md */
export function Modal({ isOpen, title, description, tone = 'default', primaryAction, secondaryAction, onClose, children, className }: ModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const descriptionId = useId();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (isOpen && !dialog.open) dialog.showModal();
    if (!isOpen && dialog.open) dialog.close();
  }, [isOpen]);

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={titleId}
      aria-describedby={description ? descriptionId : undefined}
      className={cx('ds-modal', className)}
      onCancel={(event) => { event.preventDefault(); onClose(); }}
      onClick={(event) => event.target === dialogRef.current && onClose()}
    >
      <div className="ds-modal__panel">
        <header className="ds-modal__header">
          <Heading level="medium" as="h2" id={titleId}>{title}</Heading>
          <button type="button" className="ds-modal__close" aria-label="Close" onClick={onClose}>
            <Icon name="close" size="md" />
          </button>
        </header>
        {description && <Text id={descriptionId} role="body-medium" tone="secondary">{description}</Text>}
        {children && <div className="ds-modal__content">{children}</div>}
        <footer className="ds-modal__footer">
          {secondaryAction && <Button variant="ghost" onPress={secondaryAction.onPress}>{secondaryAction.label}</Button>}
          <Button variant={tone === 'danger' ? 'danger' : 'primary'} onPress={primaryAction.onPress}>{primaryAction.label}</Button>
        </footer>
      </div>
    </dialog>
  );
}
