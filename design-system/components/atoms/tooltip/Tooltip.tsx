import { cloneElement, useId, useState, type ReactElement } from 'react';
import { cx } from '../../../lib/cx';

export interface TooltipProps {
  content: string;
  placement?: 'top' | 'bottom';
  children: ReactElement<{ 'aria-describedby'?: string }>;
}

/** Atom · Short description on hover/focus. Docs: ./Tooltip.docs.md */
export function Tooltip({ content, placement = 'top', children }: TooltipProps) {
  const id = useId();
  const [isVisible, setIsVisible] = useState(false);
  const show = () => setIsVisible(true);
  const hide = () => setIsVisible(false);
  return (
    <span className="ds-tooltip" onMouseEnter={show} onMouseLeave={hide} onFocus={show} onBlur={hide}
      onKeyDown={(event) => event.key === 'Escape' && hide()}>
      {cloneElement(children, { 'aria-describedby': id })}
      <span id={id} role="tooltip" hidden={!isVisible} className={cx('ds-tooltip__bubble', `ds-tooltip__bubble--${placement}`)}>
        {content}
      </span>
    </span>
  );
}
