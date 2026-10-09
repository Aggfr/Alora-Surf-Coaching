# Changelog

All notable changes to `@aggfr/alora-design-system`. The package follows [Semantic Versioning](https://semver.org):

- **Major:** a token or component is removed or renamed, a prop changes meaning, or a default changes how existing screens look.
- **Minor:** a new token, component, variant or prop, or a deprecation (with its alias kept).
- **Patch:** a bug fix, a docs fix, or a visual fix that brings code back in line with Figma.

## Unreleased
- Installable npm package (`@aggfr/alora-design-system`) published to GitHub Packages, with CSS and token entry points.
- CI checks that tokens, docs and MANIFEST are regenerated, that no value bypasses the tokens, and runs the type check and the component tests.
- Component tests for behavior, keyboard use and axe rules; Storybook suite that audits accessibility (including contrast) and compares screenshots for every story in both themes.

## 1.0.0 (2026-10-09)
- First version, extracted from Coach Platform and Surfer Platform.
