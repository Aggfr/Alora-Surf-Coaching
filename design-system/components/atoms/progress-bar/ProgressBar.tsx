import { cx } from '../../../lib/cx';

export interface ProgressBarProps {
  value: number;
  max?: number;
  /** Accessible name, e.g. "Clip time used". */
  label: string;
  /** Text read by screen readers instead of the percentage, e.g. "0:11 of 2:30". */
  valueText?: string;
  className?: string;
}

/** Atom · Measurable progress (clip time used, onboarding steps). Docs: ./ProgressBar.docs.md */
export function ProgressBar({ value, max = 100, label, valueText, className }: ProgressBarProps) {
  return (
    <progress
      className={cx('ds-progress-bar', className)}
      aria-label={label}
      aria-valuetext={valueText}
      value={Math.min(Math.max(value, 0), max)}
      max={max}
    />
  );
}
