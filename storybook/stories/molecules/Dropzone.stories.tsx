import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Dropzone } from '../../../design-system/components/molecules/dropzone/Dropzone';
import docs from '../../../design-system/components/molecules/dropzone/Dropzone.docs.md?raw';
import { docsFrom } from '../docs';

const meta = {
  title: 'Molecules/Dropzone',
  component: Dropzone,
  parameters: docsFrom(docs, 'components/molecules/dropzone'),
  args: { label: 'Tap to add surf clips', hint: 'MP4 or MOV · Max 2:30 per clip', accept: 'video/*', isMultiple: true, onFiles: fn() },
} satisfies Meta<typeof Dropzone>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = { decorators: [(Story) => <div className="sb-narrow"><Story /></div>] };

export const Error: Story = { args: { errorMessage: 'Upload failed. Tap to try again.' }, decorators: [(Story) => <div className="sb-narrow"><Story /></div>] };
