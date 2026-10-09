import { useState } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { AvailabilityGrid, Button, DataList, EmptyState, ListItem, Modal, ResultState, ReviewCard, Sidebar, SubmissionCard, SummaryRow, TopBar, VideoPlayer, slotId } from '../index';
import { axeViolations } from './axe';

describe('Modal', () => {
  const actions = { primaryAction: { label: 'Delete', onPress: vi.fn() }, secondaryAction: { label: 'Cancel', onPress: vi.fn() } };

  it('opens as a labelled dialog and closes with the close button', async () => {
    const onClose = vi.fn();
    const { rerender } = render(<Modal isOpen={false} title="Delete clip?" onClose={onClose} {...actions} />);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    rerender(<Modal isOpen title="Delete clip?" description="This cannot be undone." tone="danger" onClose={onClose} {...actions} />);
    const dialog = screen.getByRole('dialog', { name: 'Delete clip?' });
    expect(dialog).toHaveAccessibleDescription('This cannot be undone.');
    await userEvent.click(screen.getByRole('button', { name: 'Close' }));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('calls onClose instead of closing itself on Escape', () => {
    const onClose = vi.fn();
    render(<Modal isOpen title="Delete clip?" onClose={onClose} {...actions} />);
    const dialog = screen.getByRole('dialog');
    const cancel = new Event('cancel', { cancelable: true });
    dialog.dispatchEvent(cancel);
    expect(cancel.defaultPrevented).toBe(true);
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});

describe('Modal with icon', () => {
  it('centers the dialog and keeps both actions', async () => {
    render(<Modal isOpen icon="warning" tone="danger" title="Cancel your plan?" onClose={vi.fn()} primaryAction={{ label: 'Cancel plan', onPress: vi.fn() }} secondaryAction={{ label: 'Keep my plan', onPress: vi.fn() }} />);
    expect(screen.getByRole('dialog', { name: 'Cancel your plan?' })).toHaveClass('ds-modal--centered');
    expect(screen.getByRole('button', { name: 'Keep my plan' })).toBeInTheDocument();
  });
});

describe('TopBar', () => {
  it('has one h1 and a named back button', async () => {
    const onBack = vi.fn();
    const { container } = render(<TopBar title="New submission" onBack={onBack} />);
    expect(screen.getByRole('heading', { level: 1, name: 'New submission' })).toBeInTheDocument();
    await userEvent.click(screen.getByRole('button', { name: 'Back' }));
    expect(onBack).toHaveBeenCalled();
    expect(await axeViolations(container)).toEqual([]);
  });
});

describe('ResultState', () => {
  it('shows the outcome, the summary and the actions', async () => {
    const onHome = vi.fn();
    const { container } = render(
      <main>
        <ResultState tone="success" title="Submission sent!" description="Your coach will review your clips." primaryAction={{ label: 'Back to home', onPress: onHome }} secondaryAction={{ label: 'View submission', onPress: vi.fn() }}>
          <SummaryRow icon="video" label="Clips" value="2 clips · 1:46" />
        </ResultState>
      </main>,
    );
    expect(screen.getByRole('heading', { level: 1, name: 'Submission sent!' })).toBeInTheDocument();
    await userEvent.click(screen.getByRole('button', { name: 'Back to home' }));
    expect(onHome).toHaveBeenCalled();
    expect(await axeViolations(container)).toEqual([]);
  });
});

describe('ReviewCard', () => {
  const props = { clipTitle: 'Frontside snap', submittedAt: 'Sep 2', reviewedAt: 'Sep 3', coach: { name: 'Alejandro' }, note: 'Open your shoulders earlier.', action: { label: 'Watch review', onPress: vi.fn() } };

  it('discloses the coach note with aria-expanded', async () => {
    const { container } = render(<ReviewCard {...props} />);
    const toggle = screen.getByRole('button', { name: /Frontside snap/ });
    expect(toggle).toHaveAttribute('aria-expanded', 'false');
    expect(screen.queryByRole('button', { name: 'Watch review' })).not.toBeInTheDocument();
    toggle.focus();
    await userEvent.keyboard('{Enter}');
    expect(toggle).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByText('Open your shoulders earlier.')).toBeVisible();
    expect(screen.getByRole('button', { name: 'Watch review' })).toBeInTheDocument();
    expect(await axeViolations(container)).toEqual([]);
  });
});

describe('VideoPlayer', () => {
  it('names the player and its controls', async () => {
    const { container } = render(<VideoPlayer src="clip.mp4" title="Frontside snap" />);
    expect(screen.getByRole('figure', { name: 'Frontside snap' })).toBeInTheDocument();
    expect(screen.getAllByRole('button', { name: 'Play' })).toHaveLength(1);
    expect(screen.getByRole('slider', { name: 'Seek' })).toHaveAttribute('aria-valuetext', '0:00 of 0:00');
    const mute = screen.getByRole('button', { name: 'Mute' });
    await userEvent.click(mute);
    expect(mute).toHaveAttribute('aria-pressed', 'true');
    expect(await axeViolations(container)).toEqual([]);
  });
});

describe('AvailabilityGrid', () => {
  function Controlled({ onSave }: { onSave?: () => void }) {
    const [slots, setSlots] = useState<string[]>([slotId(0, 9)]);
    return <AvailabilityGrid label="Weekly availability" value={slots} onChange={setSlots} hours={[8, 9, 10]} actions={<Button onPress={onSave}>Save availability</Button>} />;
  }

  it('toggles cells with the keyboard and moves with arrow keys', async () => {
    const { container } = render(<Controlled />);
    const grid = screen.getByRole('grid', { name: 'Weekly availability' });
    expect(grid).toBeInTheDocument();
    const first = screen.getByRole('button', { name: 'Monday 8:00' });
    expect(first).toHaveAttribute('tabindex', '0');
    expect(screen.getByRole('button', { name: 'Monday 9:00' })).toHaveAttribute('aria-pressed', 'true');
    first.focus();
    await userEvent.keyboard('{ArrowRight}');
    const tuesday = screen.getByRole('button', { name: 'Tuesday 8:00' });
    expect(tuesday).toHaveFocus();
    await userEvent.keyboard('{Enter}');
    expect(tuesday).toHaveAttribute('aria-pressed', 'true');
    await userEvent.keyboard('{End}');
    expect(screen.getByRole('button', { name: 'Sunday 8:00' })).toHaveFocus();
    expect(await axeViolations(container)).toEqual([]);
  });

  it('paints every cell crossed while dragging', () => {
    render(<Controlled />);
    const start = screen.getByRole('button', { name: 'Monday 10:00' });
    fireEvent.pointerDown(start, { button: 0 });
    fireEvent.pointerEnter(screen.getByRole('button', { name: 'Tuesday 10:00' }));
    fireEvent.pointerUp(window);
    fireEvent.pointerEnter(screen.getByRole('button', { name: 'Wednesday 10:00' }));
    expect(start).toHaveAttribute('aria-pressed', 'true');
    expect(screen.getByRole('button', { name: 'Tuesday 10:00' })).toHaveAttribute('aria-pressed', 'true');
    expect(screen.getByRole('button', { name: 'Wednesday 10:00' })).toHaveAttribute('aria-pressed', 'false');
  });
});

describe('Extended organisms', () => {
  it('renders the surfer-side SubmissionCard without a surfer', async () => {
    const { container } = render(
      <SubmissionCard status="pending" statusText="Waiting for review" clipTitle="Frontside snap" submittedAt="Sep 2" note="Look at my bottom turn" noteLabel="Your note" footnote="2 clips · 1:46" action={{ label: 'View', onPress: vi.fn() }} secondaryAction={{ label: 'Edit', onPress: vi.fn() }} />,
    );
    expect(screen.getByRole('heading', { level: 3, name: 'Frontside snap' })).toBeInTheDocument();
    expect(screen.getByText('Waiting for review')).toBeInTheDocument();
    expect(screen.getByText('Your note')).toBeInTheDocument();
    expect(await axeViolations(container)).toEqual([]);
  });

  it('renders a striped inline DataList, a linked person row, an inline EmptyState and the Sidebar logo', async () => {
    const { container } = render(
      <>
        <DataList layout="inline" isStriped items={[{ title: 'Stance', description: 'Goofy' }, { title: 'Board', description: 'Shortboard' }]} />
        <ul><ListItem type="person" title="Lucía Marín" description="Last clip 2 days ago" avatarTone="session" badge={{ label: 'Session', tone: 'plan-session' }} href="/surfers/lucia" /></ul>
        <EmptyState variant="inline" title="Nothing reviewed yet" message="Your reviews will show up here." illustration="nothing-reviewed" />
        <Sidebar product="surfer" activeHref="/history" />
      </>,
    );
    expect(screen.getByRole('link', { name: /Lucía Marín/ })).toHaveAttribute('href', '/surfers/lucia');
    expect(screen.getByRole('link', { name: 'History' })).toHaveAttribute('aria-current', 'page');
    expect(screen.getByRole('img', { name: 'Alora' })).toBeInTheDocument();
    expect(await axeViolations(container)).toEqual([]);
  });
});
