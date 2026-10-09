import { useId, type ReactNode } from 'react';
import { cx } from '../../../lib/cx';

export interface SwitchProps {
  label: ReactNode;
  isOn?: boolean;
  isDisabled?: boolean;
  onChange?: (on: boolean) => void;
  className?: string;
}

/** Atom · On/off setting with immediate effect. Docs: ./Switch.docs.md */
export function Switch({ label, isOn = false, isDisabled = false, onChange, className }: SwitchProps) {
  const id = useId();
  return (
    <div className={cx('ds-switch', isDisabled && 'ds-switch--disabled', className)}>
      <button id={id} type="button" role="switch" aria-checked={isOn} disabled={isDisabled}
        className={cx('ds-switch__track', isOn && 'ds-switch__track--on')} onClick={() => onChange?.(!isOn)}>
        <span className="ds-switch__thumb" />
      </button>
      <label htmlFor={id} className="ds-switch__label">{label}</label>
    </div>
  );
}
