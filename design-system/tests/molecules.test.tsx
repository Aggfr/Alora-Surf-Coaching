import { useState } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { Breadcrumb, ClipItem, Dropzone, FormField, Input, Link, Notification, OptionCard, Pagination, PeriodStepper, SearchField, SectionHeader, SegmentedControl, StatGroup, Stepper, SummaryRow, TagChip } from '../index';
import { axeViolations } from './axe';

describe('FormField', () => {
  it('links the label, error and helper text to the control', async () => {
    const { container } = render(
      <FormField id="email" label="Email" helperText="We never share it" errorMessage="Enter a valid email" isRequired>
        <Input id="email" />
      </FormField>,
    );
    const input = screen.getByRole('textbox', { name: /Email/ });
    expect(input).toHaveAttribute('aria-invalid', 'true');
    expect(input).toHaveAttribute('aria-required', 'true');
    expect(input).toHaveAccessibleDescription('Enter a valid email We never share it');
    expect(await axeViolations(container)).toEqual([]);
  });
});

describe('SearchField', () => {
  function Controlled({ onClear }: { onClear: () => void }) {
    const [value, setValue] = useState('');
    return <SearchField value={value} onChange={setValue} onClear={onClear} placeholder="Search surfers" />;
  }

  it('clears with the button and with Escape, and keeps focus in the field', async () => {
    const onClear = vi.fn();
    render(<Controlled onClear={onClear} />);
    const input = screen.getByRole('searchbox', { name: 'Search surfers' });
    await userEvent.type(input, 'laia');
    await userEvent.click(screen.getByRole('button', { name: 'Clear search' }));
    expect(input).toHaveValue('');
    expect(input).toHaveFocus();
    await userEvent.type(input, 'marc{Escape}');
    expect(input).toHaveValue('');
    expect(onClear).toHaveBeenCalledTimes(2);
  });
});

describe('TagChip', () => {
  it('exposes the selected state with aria-pressed and names the remove button', async () => {
    const onToggle = vi.fn();
    const onRemove = vi.fn();
    render(<TagChip label="Elite" isSelected onToggle={onToggle} onRemove={onRemove} />);
    expect(screen.getByRole('button', { name: 'Elite' })).toHaveAttribute('aria-pressed', 'true');
    await userEvent.click(screen.getByRole('button', { name: 'Remove Elite' }));
    expect(onRemove).toHaveBeenCalled();
  });
});

describe('Pagination', () => {
  it('disables the previous page on the first page and moves forward', async () => {
    const onPageChange = vi.fn();
    render(<Pagination page={1} pageCount={3} onPageChange={onPageChange} />);
    await userEvent.click(screen.getByRole('button', { name: 'Previous page' }));
    expect(onPageChange).not.toHaveBeenCalled();
    await userEvent.click(screen.getByRole('button', { name: 'Next page' }));
    expect(onPageChange).toHaveBeenCalledWith(2);
    expect(screen.getByText('Page 1 of 3')).toBeInTheDocument();
  });
});

describe('Breadcrumb', () => {
  it('marks the last item as the current page', () => {
    render(<Breadcrumb items={[{ label: 'Queue', href: '/queue' }, { label: 'Laia Ferrer' }]} />);
    expect(screen.getByRole('navigation', { name: 'Breadcrumb' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Queue' })).toHaveAttribute('href', '/queue');
    expect(screen.getByText('Laia Ferrer')).toHaveAttribute('aria-current', 'page');
  });
});

describe('Notification', () => {
  it('uses role=alert only for danger', () => {
    const { rerender } = render(<Notification title="Clip uploaded" tone="success" />);
    expect(screen.getByRole('status')).toHaveTextContent('Clip uploaded');
    rerender(<Notification title="Upload failed" tone="danger" />);
    expect(screen.getByRole('alert')).toHaveTextContent('Upload failed');
  });
});

describe('OptionCard', () => {
  function Group() {
    const [level, setLevel] = useState('beginner');
    return (
      <fieldset>
        <legend>What is your level?</legend>
        <OptionCard name="level" value="beginner" title="Beginner" description="I stand up on white water." isSelected={level === 'beginner'} onChange={setLevel} />
        <OptionCard name="level" value="intermediate" title="Intermediate" isSelected={level === 'intermediate'} onChange={setLevel} />
      </fieldset>
    );
  }

  it('behaves as a radio group and links the description', async () => {
    const { container } = render(<Group />);
    const beginner = screen.getByRole('radio', { name: 'Beginner' });
    expect(beginner).toBeChecked();
    expect(beginner).toHaveAccessibleDescription('I stand up on white water.');
    await userEvent.click(screen.getByText('Intermediate'));
    expect(screen.getByRole('radio', { name: 'Intermediate' })).toBeChecked();
    expect(beginner).not.toBeChecked();
    expect(await axeViolations(container)).toEqual([]);
  });
});

describe('SegmentedControl', () => {
  function Controlled() {
    const [value, setValue] = useState('male');
    return <SegmentedControl label="Gender" tone="highlight" options={[{ label: 'Male', value: 'male' }, { label: 'Female', value: 'female' }]} value={value} onChange={setValue} />;
  }

  it('is a named radio group', async () => {
    const { container } = render(<Controlled />);
    expect(screen.getByRole('radiogroup', { name: 'Gender' })).toBeInTheDocument();
    await userEvent.click(screen.getByText('Female'));
    expect(screen.getByRole('radio', { name: 'Female' })).toBeChecked();
    expect(await axeViolations(container)).toEqual([]);
  });
});

describe('Stepper', () => {
  it('marks the current step and reports progress', async () => {
    const { container } = render(<Stepper steps={['Skill level', 'Stance', 'Goal']} currentStep={1} />);
    expect(screen.getByRole('navigation', { name: 'Progress' })).toBeInTheDocument();
    expect(screen.getByText('Stance').closest('li')).toHaveAttribute('aria-current', 'step');
    expect(screen.getByText('Skill level, completed')).toBeInTheDocument();
    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuetext', 'Step 2 of 3');
    expect(await axeViolations(container)).toEqual([]);
  });
});

describe('Dropzone', () => {
  it('opens the picker through a labelled file input and reports files', async () => {
    const onFiles = vi.fn();
    const { container } = render(<Dropzone label="Tap to add surf clips" hint="MP4 or MOV" accept="video/*" isMultiple onFiles={onFiles} />);
    const input = screen.getByLabelText('Tap to add surf clips');
    expect(input).toHaveAccessibleDescription('MP4 or MOV');
    const file = new File(['clip'], 'wave.mp4', { type: 'video/mp4' });
    await userEvent.upload(input, file);
    expect(onFiles).toHaveBeenCalledWith([file]);
    expect(await axeViolations(container)).toEqual([]);
  });

  it('shows the error as the name of the control', () => {
    render(<Dropzone label="Tap to add surf clips" errorMessage="Upload failed. Try again." />);
    expect(screen.getByLabelText('Upload failed. Try again.')).toHaveAttribute('aria-invalid', 'true');
  });
});

describe('ClipItem', () => {
  it('shows the status and runs its action', async () => {
    const onPress = vi.fn();
    const { container } = render(
      <ul><li><ClipItem title="Surf clip" meta="1 clip · 0:11" isPlayable status={{ label: 'Waiting', tone: 'pending' }} action={{ label: 'Delete clip', icon: 'trash', tone: 'danger', onPress }} /></li></ul>,
    );
    expect(screen.getByText('Waiting')).toBeInTheDocument();
    await userEvent.click(screen.getByRole('button', { name: 'Delete clip' }));
    expect(onPress).toHaveBeenCalled();
    expect(await axeViolations(container)).toEqual([]);
  });
});

describe('SummaryRow and StatGroup', () => {
  it('pair each label with its value', async () => {
    const { container } = render(
      <>
        <SummaryRow icon="video" label="Clips" value="2 clips · 1:46" />
        <StatGroup items={[{ label: 'Submissions left', value: 3, tone: 'brand' }, { label: 'Clip time', value: '2:30' }]} />
      </>,
    );
    expect(screen.getByText('Clips').tagName).toBe('DT');
    expect(screen.getByText('2 clips · 1:46').tagName).toBe('DD');
    expect(screen.getByText('Submissions left').nextElementSibling).toHaveTextContent('3');
    expect(await axeViolations(container)).toEqual([]);
  });
});

describe('SectionHeader', () => {
  it('renders a heading with its action', () => {
    render(<SectionHeader title="Assigned surfers" subtitle="12 surfers" size="small" action={<Link href="/surfers">See all</Link>} />);
    expect(screen.getByRole('heading', { level: 2, name: 'Assigned surfers' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'See all' })).toBeInTheDocument();
  });
});

describe('PeriodStepper', () => {
  it('names the arrows after the period and respects the limits', async () => {
    const onPrevious = vi.fn();
    const onNext = vi.fn();
    const { container } = render(<PeriodStepper label="Pay period" value="Sep 15 - Sep 30" onPrevious={onPrevious} onNext={onNext} isNextDisabled />);
    await userEvent.click(screen.getByRole('button', { name: 'Previous pay period' }));
    await userEvent.click(screen.getByRole('button', { name: 'Next pay period' }));
    expect(onPrevious).toHaveBeenCalledTimes(1);
    expect(onNext).not.toHaveBeenCalled();
    expect(await axeViolations(container)).toEqual([]);
  });
});
