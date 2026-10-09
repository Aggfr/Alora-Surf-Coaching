import { defineConfig, devices } from '@playwright/test';

/**
 * Runs every story of the built Storybook (storybook-static/) in both themes:
 * an axe accessibility audit (including color contrast) and a screenshot comparison.
 * Build first: npm run build-storybook. Update baselines: npm run test:visual -- --update-snapshots
 */
export default defineConfig({
  testDir: 'tests',
  snapshotPathTemplate: '{testDir}/__screenshots__/{arg}{ext}',
  fullyParallel: true,
  forbidOnly: Boolean(process.env.CI),
  retries: 0,
  reporter: process.env.CI ? [['github'], ['html', { open: 'never' }]] : 'list',
  expect: { toHaveScreenshot: { maxDiffPixelRatio: 0.002, animations: 'disabled', caret: 'hide' } },
  use: {
    baseURL: 'http://127.0.0.1:6007',
    ...devices['Desktop Chrome'],
    viewport: { width: 1280, height: 800 },
    deviceScaleFactor: 1,
    // Lets the suite run with a Chromium that is already installed (set PW_CHROMIUM_PATH).
    launchOptions: process.env.PW_CHROMIUM_PATH ? { executablePath: process.env.PW_CHROMIUM_PATH } : {},
  },
  webServer: {
    command: 'python3 -m http.server 6007 --bind 127.0.0.1 --directory storybook-static',
    url: 'http://127.0.0.1:6007/index.json',
    reuseExistingServer: !process.env.CI,
    stdout: 'ignore',
    stderr: 'ignore',
  },
});
