import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { SurferLoginPage } from '../../../design-system/pages/surfer-login/SurferLoginPage';
import docs from '../../../design-system/pages/surfer-login/SurferLoginPage.docs.md?raw';
import { docsFrom } from '../docs';

const meta = {
  title: 'Pages/SurferLoginPage',
  component: SurferLoginPage,
  parameters: { ...docsFrom(docs, 'pages/surfer-login'), layout: 'fullscreen' },
  args: {
    onLogIn: fn(() => new Promise<void>((resolve) => setTimeout(resolve, 1500))),
    onSignUp: fn(),
  },
} satisfies Meta<typeof SurferLoginPage>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Submit empty to see validation, or a valid email and 8+ characters to see the loading state. */
export const Default: Story = {};
