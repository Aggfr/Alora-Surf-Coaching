import type { TextareaHTMLAttributes } from 'react';
import { cx } from '../../../lib/cx';

export interface TextareaProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'onChange' | 'disabled'> {
  id: string;
  value?: string;
  maxLength?: number;
  hasError?: boolean;
  isDisabled?: boolean;
  onChange?: (value: string) => void;
}

/** Atom · Multi-line field. Use inside FormField. Docs: ./Textarea.docs.md */
export function Textarea({ id, value = '', maxLength, rows = 4, hasError = false, isDisabled = false, onChange, className, ...rest }: TextareaProps) {
  const counterId = `${id}-counter`;
  return (
    <div className={cx('ds-textarea', hasError && 'ds-textarea--error', isDisabled && 'ds-textarea--disabled', className)}>
      <textarea
        {...rest}
        id={id}
        rows={rows}
        value={value}
        maxLength={maxLength}
        disabled={isDisabled}
        className="ds-textarea__control"
        aria-invalid={hasError || undefined}
        aria-describedby={maxLength ? counterId : undefined}
        onChange={(event) => onChange?.(event.target.value)}
      />
      {maxLength && <span id={counterId} className="ds-textarea__counter">{value.length} / {maxLength}</span>}
    </div>
  );
}
