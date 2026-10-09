import type { Meta, StoryObj } from '@storybook/react-vite';
import { useArgs } from 'storybook/preview-api';
import { fn } from 'storybook/test';
import { Button } from '../../../design-system/components/atoms/button/Button';
import { Modal, type ModalProps } from '../../../design-system/components/organisms/modal/Modal';
import docs from '../../../design-system/components/organisms/modal/Modal.docs.md?raw';
import { docsFrom } from '../docs';

function Controlled(args: ModalProps) {
  const [, updateArgs] = useArgs<ModalProps>();
  const close = () => updateArgs({ isOpen: false });
  return (
    <>
      <Button variant="secondary" onPress={() => updateArgs({ isOpen: true })}>Open modal</Button>
      <Modal
        {...args}
        onClose={() => { close(); args.onClose(); }}
        primaryAction={{ ...args.primaryAction, onPress: () => { close(); args.primaryAction.onPress(); } }}
        secondaryAction={args.secondaryAction && { ...args.secondaryAction, onPress: () => { close(); args.secondaryAction?.onPress(); } }}
      />
    </>
  );
}

const meta = {
  title: 'Organisms/Modal',
  component: Modal,
  parameters: {
    ...docsFrom(docs, 'components/organisms/modal'),
    // Render in its own frame so the dialog stays inside the example.
    docs: { ...docsFrom(docs, 'components/organisms/modal').docs, story: { inline: false, height: '420px' } },
  },
  args: {
    isOpen: true,
    title: 'Send this clip for review?',
    description: 'Your coach will get it now and reply within 24 hours.',
    primaryAction: { label: 'Send for review', onPress: fn() },
    secondaryAction: { label: 'Cancel', onPress: fn() },
    onClose: fn(),
  },
  argTypes: { children: { control: false } },
  render: Controlled,
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Danger: Story = {
  args: {
    tone: 'danger',
    title: 'Delete this clip?',
    description: 'The clip and its feedback will be removed. This cannot be undone.',
    primaryAction: { label: 'Delete clip', onPress: fn() },
  },
};

export const WithIcon: Story = {
  args: {
    tone: 'danger',
    icon: 'alert-circle',
    title: 'Cancel your plan?',
    description: 'You keep your plan until Sep 26. After that, your coach stops reviewing new clips.',
    primaryAction: { label: 'Cancel plan', onPress: fn() },
    secondaryAction: { label: 'Keep my plan', onPress: fn() },
  },
};
