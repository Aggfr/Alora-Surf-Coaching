import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { Avatar, Badge, Button, Checkbox, Divider, Icon, IconButton, IconTile, Illustration, Input, Link, Logo, ProgressBar, Radio, Spinner, Switch, Tooltip } from '../index';
import { axeViolations } from './axe';

describe('Button', () => {
  it('calls onPress on click, Enter and Space', async () => {
    const onPress = vi.fn();
    render(<Button onPress={onPress}>Upload clip</Button>);
    const button = screen.getByRole('button', { name: 'Upload clip' });
    await userEvent.click(button);
    button.focus();
    await userEvent.keyboard('{Enter}');
    await userEvent.keyboard(' ');
    expect(onPress).toHaveBeenCalledTimes(3);
  });

  it('stays focusable but inert when disabled', async () => {
    const onPress = vi.fn();
    render(<Button isDisabled onPress={onPress}>Send</Button>);
    const button = screen.getByRole('button', { name: 'Send' });
    expect(button).toHaveAttribute('aria-disabled', 'true');
    expect(button).not.toBeDisabled();
    await userEvent.click(button);
    expect(onPress).not.toHaveBeenCalled();
  });

  it('announces loading and blocks presses', async () => {
    const onPress = vi.fn();
    render(<Button isLoading onPress={onPress}>Send</Button>);
    const button = screen.getByRole('button', { name: /Send/ });
    expect(button).toHaveAttribute('aria-busy', 'true');
    expect(screen.getByRole('status', { name: 'Loading' })).toBeInTheDocument();
    await userEvent.click(button);
    expect(onPress).not.toHaveBeenCalled();
  });

  it('defaults to type="button" so it never submits a form by accident', () => {
    render(<Button>Save</Button>);
    expect(screen.getByRole('button')).toHaveAttribute('type', 'button');
  });

  it('has no axe violations', async () => {
    const { container } = render(<Button variant="secondary" leadingIcon="upload">Upload</Button>);
    expect(await axeViolations(container)).toEqual([]);
  });
});

describe('Icon', () => {
  it('is hidden from assistive technology unless it has a label', () => {
    const { container, rerender } = render(<Icon name="bell" />);
    expect(container.querySelector('svg')).toHaveAttribute('aria-hidden', 'true');
    rerender(<Icon name="bell" label="Notifications" />);
    expect(screen.getByRole('img', { name: 'Notifications' })).toBeInTheDocument();
  });
});

describe('Input', () => {
  it('reports the value and marks errors with aria-invalid', async () => {
    const onChange = vi.fn();
    render(<Input id="email" aria-label="Email" hasError onChange={onChange} />);
    const input = screen.getByRole('textbox', { name: 'Email' });
    expect(input).toHaveAttribute('aria-invalid', 'true');
    await userEvent.type(input, 'a');
    expect(onChange).toHaveBeenLastCalledWith('a');
  });
});

describe('Checkbox', () => {
  it('toggles with the label and with Space', async () => {
    const onChange = vi.fn();
    render(<Checkbox label="Remember me" onChange={onChange} />);
    await userEvent.click(screen.getByText('Remember me'));
    expect(onChange).toHaveBeenLastCalledWith(true);
    screen.getByRole('checkbox', { name: 'Remember me' }).focus();
    await userEvent.keyboard(' ');
    expect(onChange).toHaveBeenCalledTimes(2);
  });

  it('exposes the indeterminate state', () => {
    render(<Checkbox label="All clips" isChecked="indeterminate" />);
    expect(screen.getByRole('checkbox', { name: 'All clips' })).toBePartiallyChecked();
  });
});

describe('Radio', () => {
  it('reports its value when chosen', async () => {
    const onChange = vi.fn();
    render(<fieldset><legend>Stance</legend><Radio name="stance" value="regular" label="Regular" onChange={onChange} /><Radio name="stance" value="goofy" label="Goofy" onChange={onChange} /></fieldset>);
    await userEvent.click(screen.getByRole('radio', { name: 'Goofy' }));
    expect(onChange).toHaveBeenCalledWith('goofy');
  });
});

describe('Switch', () => {
  it('uses role=switch with aria-checked and toggles', async () => {
    const onChange = vi.fn();
    render(<Switch label="Email notifications" isOn={false} onChange={onChange} />);
    const control = screen.getByRole('switch', { name: 'Email notifications' });
    expect(control).toHaveAttribute('aria-checked', 'false');
    await userEvent.click(control);
    expect(onChange).toHaveBeenCalledWith(true);
  });
});

describe('Avatar', () => {
  it('is decorative and shows initials', () => {
    const { container } = render(<Avatar name="Laia Ferrer" size="large" />);
    const avatar = container.firstElementChild;
    expect(avatar).toHaveAttribute('aria-hidden', 'true');
    expect(avatar).toHaveTextContent('LF');
  });
});

describe('Spinner', () => {
  it('is a status with an accessible name', () => {
    render(<Spinner label="Uploading" />);
    expect(screen.getByRole('status', { name: 'Uploading' })).toBeInTheDocument();
  });
});

describe('Tooltip', () => {
  it('shows on focus, describes the trigger and closes with Escape', async () => {
    render(<Tooltip content="Delete clip"><button type="button" aria-label="Delete">x</button></Tooltip>);
    const trigger = screen.getByRole('button', { name: 'Delete' });
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
    await userEvent.tab();
    expect(trigger).toHaveFocus();
    expect(screen.getByRole('tooltip')).toHaveTextContent('Delete clip');
    expect(trigger).toHaveAccessibleDescription('Delete clip');
    await userEvent.keyboard('{Escape}');
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
  });
});

describe('Logo', () => {
  it('is one image named Alora', async () => {
    const { container } = render(<Logo size="large" />);
    expect(screen.getByRole('img', { name: 'Alora' })).toBeInTheDocument();
    expect(screen.getAllByRole('img')).toHaveLength(1);
    expect(await axeViolations(container)).toEqual([]);
  });
});

describe('Link', () => {
  it('renders an anchor with href and a button without it', async () => {
    const onPress = vi.fn();
    const { container } = render(<><Link href="/terms">Terms</Link><Link tone="danger" onPress={onPress}>Delete clip</Link></>);
    expect(screen.getByRole('link', { name: 'Terms' })).toHaveAttribute('href', '/terms');
    const button = screen.getByRole('button', { name: 'Delete clip' });
    button.focus();
    await userEvent.keyboard('{Enter}');
    expect(onPress).toHaveBeenCalledTimes(1);
    expect(await axeViolations(container)).toEqual([]);
  });
});

describe('IconButton', () => {
  it('is named by its label and ignores presses when disabled', async () => {
    const onPress = vi.fn();
    const { container, rerender } = render(<IconButton icon="chevron-left" label="Back" onPress={onPress} />);
    await userEvent.click(screen.getByRole('button', { name: 'Back' }));
    expect(onPress).toHaveBeenCalledTimes(1);
    rerender(<IconButton icon="chevron-left" label="Back" onPress={onPress} isDisabled />);
    await userEvent.click(screen.getByRole('button', { name: 'Back' }));
    expect(onPress).toHaveBeenCalledTimes(1);
    expect(screen.getByRole('button', { name: 'Back' })).toHaveAttribute('aria-disabled', 'true');
    expect(await axeViolations(container)).toEqual([]);
  });
});

describe('IconTile', () => {
  it('is decorative unless it has a label', () => {
    const { rerender } = render(<IconTile icon="check" />);
    expect(screen.queryByRole('img')).not.toBeInTheDocument();
    rerender(<IconTile icon="check" label="Sent" tone="solid" shape="circle" size="xlarge" hasHalo />);
    expect(screen.getByRole('img', { name: 'Sent' })).toBeInTheDocument();
  });
});

describe('ProgressBar', () => {
  it('exposes its value and readable text', async () => {
    const { container } = render(<ProgressBar value={11} max={150} label="Clip time used" valueText="0:11 of 2:30" />);
    const bar = screen.getByRole('progressbar', { name: 'Clip time used' });
    expect(bar).toHaveAttribute('aria-valuetext', '0:11 of 2:30');
    expect(bar).toHaveAttribute('value', '11');
    expect(await axeViolations(container)).toEqual([]);
  });
});

describe('Illustration', () => {
  it('is hidden by default and named when labelled', () => {
    const { container, rerender } = render(<Illustration name="surfers" />);
    expect(container.querySelector('svg')).toHaveAttribute('aria-hidden', 'true');
    rerender(<Illustration name="nothing-reviewed" label="No reviews yet" />);
    expect(screen.getByRole('img', { name: 'No reviews yet' })).toBeInTheDocument();
  });
});

describe('Badge', () => {
  it('renders the solid appearance with its text', () => {
    render(<Badge tone="review-ready" appearance="solid" icon="check">Reviewed</Badge>);
    expect(screen.getByText('Reviewed').closest('.ds-badge')).toHaveClass('ds-badge--solid', 'ds-badge--review-ready');
  });
});

describe('Divider', () => {
  it('becomes a named separator when it has a label', () => {
    render(<Divider label="OR" />);
    expect(screen.getByRole('separator', { name: 'OR' })).toBeInTheDocument();
  });
});
