import { cx } from '../../../lib/cx';
import { Icon } from '../../atoms/icon/Icon';
import { ProgressBar } from '../../atoms/progress-bar/ProgressBar';

export interface StepperProps {
  /** Step names, read by screen readers ("Skill level", "Stance"…). */
  steps: string[];
  /** Index of the current step, from 0. */
  currentStep: number;
  className?: string;
}

/** Molecule · Progress through a multi-step flow (onboarding). Docs: ./Stepper.docs.md */
export function Stepper({ steps, currentStep, className }: StepperProps) {
  const last = Math.max(steps.length - 1, 1);
  return (
    <nav aria-label="Progress" className={cx('ds-stepper', className)}>
      <ol className="ds-stepper__list">
        {steps.map((step, index) => {
          const state = index < currentStep ? 'complete' : index === currentStep ? 'current' : 'upcoming';
          return (
            <li key={step} className={cx('ds-stepper__step', `ds-stepper__step--${state}`)} aria-current={state === 'current' ? 'step' : undefined}>
              <span className="ds-stepper__marker" aria-hidden="true">
                {state === 'complete' ? <Icon name="check" size="xs" /> : index + 1}
              </span>
              <span className="ds-visually-hidden">{`${step}${state === 'complete' ? ', completed' : ''}`}</span>
            </li>
          );
        })}
      </ol>
      <ProgressBar value={Math.min(currentStep, last)} max={last} label="Steps completed" valueText={`Step ${currentStep + 1} of ${steps.length}`} />
    </nav>
  );
}
