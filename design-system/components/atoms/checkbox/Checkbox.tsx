import { useEffect, useId, useRef, type ReactNode } from 'react';
import { cx } from '../../../lib/cx';
import { Icon } from '../icon/Icon';

export interface CheckboxProps {
  label: ReactNode;
  isChecked?: boolean | 'indeterminate';
  isDisabled?: boolean;
  onChange?: (checked: boolean) => void;
  className?: string;
}

/** Atom · Selección múltiple o confirmación. Docs: ./Checkbox.docs.md */
export function Checkbox({ label, isChecked = false, isDisabled = false, onChange, className }: CheckboxProps) {
  const id = useId();
  const ref = useRef<HTMLInputElement>(null);
  useEffect(() => { if (ref.current) ref.current.indeterminate = isChecked === 'indeterminate'; }, [isChecked]);
  return (
    <label htmlFor={id} className={cx('ds-checkbox', isDisabled && 'ds-checkbox--disabled', className)}>
      <input ref={ref} id={id} type="checkbox" className="ds-checkbox__control" checked={isChecked === true} disabled={isDisabled}
        onChange={(event) => onChange?.(event.target.checked)} />
      <span className="ds-checkbox__box" aria-hidden="true">
        {isChecked === true && <Icon name="check" size="xs" />}
        {isChecked === 'indeterminate' && <span className="ds-checkbox__dash" />}
      </span>
      <span className="ds-checkbox__label">{label}</span>
    </label>
  );
}
