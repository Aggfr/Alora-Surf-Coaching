import { useEffect, useRef, useState, type KeyboardEvent, type ReactNode } from 'react';
import { cx } from '../../../lib/cx';

const DEFAULT_DAYS = [
  { short: 'Mon', long: 'Monday' }, { short: 'Tue', long: 'Tuesday' }, { short: 'Wed', long: 'Wednesday' },
  { short: 'Thu', long: 'Thursday' }, { short: 'Fri', long: 'Friday' }, { short: 'Sat', long: 'Saturday' }, { short: 'Sun', long: 'Sunday' },
];
const DEFAULT_HOURS = Array.from({ length: 16 }, (_, index) => index + 6);

/** Identifies one slot: day index (0 = first column) and hour. */
export const slotId = (day: number, hour: number) => `${day}-${hour}`;

export interface AvailabilityGridProps {
  /** Accessible name of the grid. */
  label: string;
  /** Selected slots, as slotId(day, hour). */
  value: string[];
  onChange: (value: string[]) => void;
  days?: { short: string; long: string }[];
  /** Start hours of the one-hour rows, 24-hour clock. */
  hours?: number[];
  /** Buttons on the right of the footer (Save availability, Clear all). */
  actions?: ReactNode;
  legend?: { selected: string; unselected: string };
  className?: string;
}

/** Organism · Weekly grid where a coach taps or drags to mark available hours. Docs: ./AvailabilityGrid.docs.md */
export function AvailabilityGrid({
  label, value, onChange, days = DEFAULT_DAYS, hours = DEFAULT_HOURS, actions,
  legend = { selected: 'Available', unselected: 'Unavailable' }, className,
}: AvailabilityGridProps) {
  const selected = new Set(value);
  const [focus, setFocus] = useState({ row: 0, column: 0 });
  const paint = useRef<{ mode: 'add' | 'remove'; slots: Set<string> } | null>(null);
  const cells = useRef(new Map<string, HTMLButtonElement>());

  useEffect(() => {
    const stop = () => { paint.current = null; };
    window.addEventListener('pointerup', stop);
    return () => window.removeEventListener('pointerup', stop);
  }, []);

  const apply = (id: string) => {
    const state = paint.current;
    if (!state) return;
    if (state.mode === 'add') state.slots.add(id); else state.slots.delete(id);
    onChange(Array.from(state.slots));
  };

  const toggle = (id: string) => {
    const next = new Set(selected);
    if (next.has(id)) next.delete(id); else next.add(id);
    onChange(Array.from(next));
  };

  const move = (event: KeyboardEvent<HTMLTableElement>) => {
    const deltas: Record<string, [number, number]> = { ArrowUp: [-1, 0], ArrowDown: [1, 0], ArrowLeft: [0, -1], ArrowRight: [0, 1] };
    let { row, column } = focus;
    if (event.key in deltas) {
      const [dr, dc] = deltas[event.key];
      row = Math.min(Math.max(row + dr, 0), hours.length - 1);
      column = Math.min(Math.max(column + dc, 0), days.length - 1);
    } else if (event.key === 'Home') column = 0;
    else if (event.key === 'End') column = days.length - 1;
    else return;
    event.preventDefault();
    setFocus({ row, column });
    cells.current.get(slotId(column, hours[row]))?.focus();
  };

  return (
    <div className={cx('ds-availability-grid', className)}>
      <div className="ds-availability-grid__scroller">
        <table role="grid" aria-label={label} className="ds-availability-grid__table" onKeyDown={move}>
          <thead>
            <tr>
              <td className="ds-availability-grid__corner" />
              {days.map((day) => (
                <th key={day.short} scope="col" abbr={day.long} className="ds-availability-grid__day">{day.short}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {hours.map((hour, row) => (
              <tr key={hour} className="ds-availability-grid__row">
                <th scope="row" className="ds-availability-grid__hour">{`${hour}:00`}</th>
                {days.map((day, column) => {
                  const id = slotId(column, hour);
                  const isSelected = selected.has(id);
                  return (
                    <td key={id} className="ds-availability-grid__cell">
                      <button
                        ref={(node) => { if (node) cells.current.set(id, node); else cells.current.delete(id); }}
                        type="button"
                        tabIndex={focus.row === row && focus.column === column ? 0 : -1}
                        aria-pressed={isSelected}
                        aria-label={`${day.long} ${hour}:00`}
                        className={cx('ds-availability-grid__slot', isSelected && 'ds-availability-grid__slot--selected')}
                        onFocus={() => setFocus({ row, column })}
                        onPointerDown={(event) => {
                          if (event.button !== 0) return;
                          paint.current = { mode: isSelected ? 'remove' : 'add', slots: new Set(selected) };
                          apply(id);
                        }}
                        onPointerEnter={() => apply(id)}
                        onClick={(event) => { if (event.detail === 0) toggle(id); }}
                      />
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <footer className="ds-availability-grid__footer">
        <ul className="ds-availability-grid__legend">
          <li><span className="ds-availability-grid__swatch ds-availability-grid__swatch--selected" aria-hidden="true" />{legend.selected}</li>
          <li><span className="ds-availability-grid__swatch" aria-hidden="true" />{legend.unselected}</li>
        </ul>
        {actions && <div className="ds-availability-grid__actions">{actions}</div>}
      </footer>
    </div>
  );
}
