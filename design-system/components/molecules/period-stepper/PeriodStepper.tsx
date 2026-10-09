import { cx } from '../../../lib/cx';
import { IconButton } from '../../atoms/icon-button/IconButton';

export interface PeriodStepperProps {
  /** Small caption above the period ("Pay period"). */
  label: string;
  /** Current period ("Sep 15 - Sep 30"). */
  value: string;
  onPrevious?: () => void;
  onNext?: () => void;
  isPreviousDisabled?: boolean;
  isNextDisabled?: boolean;
  className?: string;
}

/** Molecule · Moves between consecutive periods (pay periods, weeks). Docs: ./PeriodStepper.docs.md */
export function PeriodStepper({ label, value, onPrevious, onNext, isPreviousDisabled = false, isNextDisabled = false, className }: PeriodStepperProps) {
  return (
    <div role="group" aria-label={label} className={cx('ds-period-stepper', className)}>
      <IconButton icon="chevron-left" label={`Previous ${label.toLowerCase()}`} isDisabled={isPreviousDisabled} onPress={onPrevious} />
      <div className="ds-period-stepper__current" aria-live="polite">
        <span className="ds-period-stepper__label">{label}</span>
        <span className="ds-period-stepper__value">{value}</span>
      </div>
      <IconButton icon="chevron-right" label={`Next ${label.toLowerCase()}`} isDisabled={isNextDisabled} onPress={onNext} />
    </div>
  );
}
