import axe from 'axe-core';

/**
 * Runs axe-core on a rendered container and returns the violations.
 * Color contrast is checked against the real CSS in the Storybook suite (storybook/tests),
 * because jsdom does not compute styles.
 */
export async function axeViolations(container: Element) {
  const results = await axe.run(container, { rules: { 'color-contrast': { enabled: false } } });
  return results.violations.map((violation) => `${violation.id}: ${violation.help}`);
}
