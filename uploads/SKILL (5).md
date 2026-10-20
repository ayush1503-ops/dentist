---
name: design-system-endurosat
description: >
  Apply the EnduroSat design system when building or updating UI.
  Use when creating components, choosing colors or typography,
  or reviewing designs for marketing interfaces.
---

# EnduroSat — Design System Skill

## When to Use

- Building new UI components for EnduroSat.
- Reviewing or updating existing component styles.
- Choosing colors, typography, or spacing for marketing pages.
- Checking designs against the extracted token set.

## Context

- **Product:** EnduroSat — https://www.endurosat.com/space-service/
- **Surface:** marketing
- **Audience:** Developers and technical decision-makers
- **Character:** Conversion-focused marketing presence with a rich, diverse color palette and a complementary two-font typographic system.

## Tokens

### Colors

| Token | Value | Role |
|-------|-------|------|
| color-8 | `#DAF2FF` | Background |
| color-2 | `#66717E` | Text Secondary |
| color-3 | `#68717D` | Text Secondary |
| color-4 | `#808080` | Text Secondary |
| color-5 | `#FC6A18` | Accent |
| color-6 | `#00A1FF` | Accent |
| color-1 | `#1A1D23` | Border |
| color-7 | `#A7B2BF` | Text Light |
| color-9 | `#FFFFFF` | Text Light |

### Typography

**Font stack:** Magnetik, Times New Roman

| Level | Size | Usage |
|-------|------|-------|
| text-xs | 0px | Captions, metadata |
| text-sm | 6px | Labels, secondary text |
| text-base | 7px | Body text (default) |
| text-lg | 10px | Subheadings, emphasis |
| text-xl | 11px | Section headings |
| text-2xl | 12px | Section headings |
| text-3xl | 13px | Section headings |
| text-4xl | 15px | Section headings |
| text-9 | 16px | General use |
| text-10 | 19px | General use |
| text-11 | 26px | General use |
| text-12 | 27px | General use |
| text-13 | 31px | General use |
| text-14 | 33px | General use |
| text-15 | 34px | General use |
| text-16 | 44px | General use |
| text-17 | 53px | General use |
| text-18 | 54px | General use |
| text-19 | 60px | General use |
| text-20 | 68px | General use |
| text-21 | 73px | General use |
| text-22 | 78px | General use |
| text-23 | 87px | General use |
| text-24 | 91px | General use |

**Weight scale:** 300 · 400 · 500 · 600 · 700
**Line heights:** 74.8611px · 53.0833px · 23.8194px · 68.0556px · 32.6646px · 27.2205px · 24.4984px · 31.3036px · 29.95px · 50.915px · 15.6518px · 12.2492px · 16.3323px · 39.1294px · 54.441px · 11.5687px · 6.80512px · 6.12461px · 68.0512px · 15.652px · 20.2162px · 14.2262px · 13.6102px · 9.52717px · 8.16614px · 58.7962px

### Spacing

**Base unit:** 4px

`space-1: 0px` · `space-2: 1px` · `space-3: 2px` · `space-4: 3px` · `space-5: 4px` · `space-6: 7px` · `space-7: 8px` · `space-8: 10px` · `space-9: 13px` · `space-10: 14px` · `space-11: 15px` · `space-12: 20px` · `space-13: 24px` · `space-14: 25px` · `space-15: 27px` · `space-16: 34px` · `space-17: 39px` · `space-18: 41px` · `space-19: 48px` · `space-20: 58px` · `space-21: 61px` · `space-22: 68px` · `space-23: 88px` · `space-24: 105px` · `space-25: 182px`

### Shapes

**Border radius:** `radius-sm: 1px` · `radius-md: 1.36102px` · `radius-lg: 999px`

### Elevation

_None detected._

### Motion

- **duration-fast:** `all`
- **duration-fast:** `none`
- **duration-base:** `color 0.3s linear, opacity 0.2s linear`
- **duration-base:** `opacity 0.3s`
- **duration-base:** `color 0.3s cubic-bezier(0.51, 0.01, 0.2, 1)`
- **duration-base:** `background-color 0.3s linear, opacity 0.2s linear`
- **duration-slow:** `transform 0.45s cubic-bezier(0.51, 0.01, 0.2, 1) 0.1s`
- **duration-slow:** `transform 0.45s cubic-bezier(0.51, 0.01, 0.2, 1), background-color 0.45s cubic-bezier(0.51, 0.01, 0.2, 1)`
- **duration-slow:** `color 0.45s cubic-bezier(0.51, 0.01, 0.2, 1)`
- **duration-slow:** `opacity 0.45s cubic-bezier(0.51, 0.01, 0.2, 1), transform 0.45s cubic-bezier(0.51, 0.01, 0.2, 1), border-color 0.45s cubic-bezier(0.51, 0.01, 0.2, 1), color 0.45s cubic-bezier(0.51, 0.01, 0.2, 1), padding 0.45s cubic-bezier(0.51, 0.01, 0.2, 1)`
- **duration-slow:** `transform 0.45s cubic-bezier(0.51, 0.01, 0.2, 1), opacity 0.45s cubic-bezier(0.51, 0.01, 0.2, 1), padding 0.45s cubic-bezier(0.51, 0.01, 0.2, 1), background-color 0.45s cubic-bezier(0.51, 0.01, 0.2, 1)`
- **duration-slow:** `opacity 0.45s cubic-bezier(0.51, 0.01, 0.2, 1), transform 0.45s cubic-bezier(0.51, 0.01, 0.2, 1)`
- **duration-slow:** `opacity 1s linear`

## Component Inventory

- **Buttons:** 13 detected
- **Links:** 57 detected
- **Inputs:** 3 detected
- **Lists:** 2 detected
- **Forms:** 1 detected
- **Images:** 37 detected

## Constraints

### Always

- Use tokens from the tables above — do not introduce new values.
- Include hover, focus-visible, and disabled states for interactive elements.
- Follow the 4px spacing grid.
- Meet WCAG 2.2 AA contrast minimums.

### Never

- Do not introduce colors outside the extracted palette.
- Do not use arbitrary spacing values — stick to the scale.
- Do not mix border-radius values. Pin to the detected set (1px, 1.36102px, 999px).
- Do not use full-uppercase text for body or paragraph content.
- Do not nest interactive elements (e.g. buttons inside links).
- Do not ship components without defining hover, focus-visible, and disabled states.

## Tone

Concise, confident, implementation-focused. Avoid filler preambles.

## Authoring Workflow

When creating or documenting a component for this system:

1. State intent — one sentence on purpose.
2. Map tokens — list every token the component uses.
3. Define anatomy — named parts with token assignments.
4. Specify states — default, hover, focus-visible, active, disabled, loading, error, empty.
5. Describe interactions — keyboard, pointer, touch, edge cases.
6. Add a11y criteria — testable pass/fail checks.
7. List anti-patterns — concrete misuse examples.
8. Close with the Definition of Done checklist.

## Output Structure

Component guidelines must contain, in order:

1. Overview (purpose, when to use, when not to use)
2. Tokens and foundations
3. Anatomy, variants, responsive behavior
4. States and interactions
5. Accessibility (ARIA, contrast, focus, screen reader)
6. Content guidelines (copy rules, tone)
7. Anti-patterns with reasoning

## Component Requirements

- Reference only tokens from the tables above.
- Define all states: default, hover, focus-visible, active, disabled, loading, error.
- Handle edge cases: empty, overflow, truncation, max content.
- Include keyboard navigation behavior.
- Document ARIA roles and labels.

## Definition of Done

- Default state renders (smoke test).
- All states visually verified.
- Zero hardcoded visual values — tokens only.
- Keyboard navigation works without pointer.
- No critical a11y violations.
- Tested at min and max breakpoint.
- At least one anti-pattern documented.
- Purpose, usage, and limitations documented.
