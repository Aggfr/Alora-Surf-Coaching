import { create } from 'storybook/theming';

/** Storybook chrome in Alora colors (navy and ocean, from the dark theme tokens). */
export const aloraTheme = create({
  base: 'dark',
  brandTitle: 'Alora Design System',
  brandUrl: 'https://github.com/Aggfr/Alora-Surf-Coaching',
  brandTarget: '_blank',
  colorPrimary: '#f5c53a',
  colorSecondary: '#3b8eaa',
  appBg: '#0f1e30',
  appContentBg: '#08101f',
  appPreviewBg: '#08101f',
  appBorderColor: '#243a52',
  appBorderRadius: 8,
  textColor: '#e8f1f8',
  textMutedColor: '#a8c2d5',
  barBg: '#0f1e30',
  barTextColor: '#a8c2d5',
  barSelectedColor: '#5aaec8',
  inputBg: '#162438',
  inputBorder: '#243a52',
  inputTextColor: '#e8f1f8',
  fontBase: 'Inter, system-ui, sans-serif',
  fontCode: 'ui-monospace, Menlo, monospace',
});
