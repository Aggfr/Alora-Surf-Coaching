import { useId, type ReactNode } from 'react';
import { cx } from '../../../lib/cx';

export interface RadioProps {
  label: ReactNode;
  value: string;
  name: string;
  isSelected?: boolean;
  isDisabled?: boolean;
  onChange?: (value: string) => void;
  className?: string;
}

/** Atom · Selección única dentro de un grupo. Docs: ./Radio.docs.md */
export function Radio({ label, value, name, isSelected = false, isDisabled = false, onChange, className }: RadioProps) {
  const id = useId();
  return (
    <label htmlFor={id} className={cx('ds-radio', isDisabled && 'ds-radio--disabled', className)}>
      <input id={id} type="radio" name={name} value={value} className="ds-radio__control" checked={isSelected} disabled={isDisabled}
        onChange={() => onChange?.(value)} />
      <span className="ds-radio__circle" aria-hidden="true" />
      <span className="ds-radio__label">{label}</span>
    </label>
  );
}
