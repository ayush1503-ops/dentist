---
name: design-system-klaas-webflow-html-website-template
description: >
  Apply the Klaas - Webflow HTML website template design system when building or updating UI.
  Use when creating components, choosing colors or typography,
  or reviewing designs for e-commerce interfaces.
---

# Klaas - Webflow HTML website template — Design System Skill

## When to Use

- Building new UI components for Klaas - Webflow HTML website template.
- Reviewing or updating existing component styles.
- Choosing colors, typography, or spacing for e-commerce pages.
- Checking designs against the extracted token set.

## Context

- **Product:** Klaas - Webflow HTML website template — https://klaas-dentist-template.webflow.io/
- **Surface:** e-commerce
- **Audience:** Consumers and shoppers
- **Character:** Product-focused shopping experience with a rich, diverse color palette and a complementary two-font typographic system.

## Tokens

### Colors

| Token | Value | Role |
|-------|-------|------|
| color-8 | `#FFFFFF` | Background |
| color-1 | `#382E27` | Text Primary |
| color-3 | `#B69F8F` | Border |
| color-2 | `#927E70` | Background Dark |
| color-4 | `#C9B4A7` | Background Dark |
| color-5 | `#C9B5A7` | Background Dark |
| color-6 | `#EBE3DE` | Text Light |
| color-7 | `#FAF7F5` | Text Light |

### Typography

**Font stack:** Inter, sans-serif

| Level | Size | Usage |
|-------|------|-------|
| text-xs | 8px | Captions, metadata |
| text-sm | 10px | Labels, secondary text |
| text-base | 11px | Body text (default) |
| text-lg | 12px | Subheadings, emphasis |
| text-xl | 13px | Section headings |
| text-2xl | 16px | Section headings |
| text-3xl | 20px | Section headings |
| text-4xl | 26px | Section headings |

**Weight scale:** 400 · 600 · 700
**Line heights:** 29.04px · 19.8px · 9.24px · 14.4px · 9px · 10.8px

### Spacing

**Base unit:** 4px

`space-1: 4px` · `space-2: 12px` · `space-3: 18px` · `space-4: 24px` · `space-5: 36px` · `space-6: 48px` · `space-7: 96px` · `space-8: 108px` · `space-9: 144px`

### Shapes

**Border radius:** _None detected._

### Elevation

_None detected._

### Motion

- **duration-fast:** `all`
- **duration-fast:** `none`
- **duration-base:** `color 0.2s, background-color 0.2s`
- **duration-base:** `color 0.2s, border-color 0.2s`
- **duration-base:** `color 0.2s, background-position 0.2s, letter-spacing 0.6s cubic-bezier(0.075, 0.82, 0.165, 1), opacity 0.2s`
- **duration-base:** `background-color 0.2s`
- **duration-slow:** `letter-spacing 0.6s cubic-bezier(0.075, 0.82, 0.165, 1)`

## Component Inventory

- **Buttons:** 7 detected
- **Links:** 157 detected
- **Inputs:** 1 detected
- **Navigation:** 6 elements
- **Forms:** 1 detected
- **Images:** 144 detected

## Constraints

### Always

- Use tokens from the tables above — do not introduce new values.
- Include hover, focus-visible, and disabled states for interactive elements.
- Follow the 4px spacing grid.
- Meet WCAG 2.2 AA contrast minimums.

### Never

- Do not introduce colors outside the extracted palette.
- Do not use arbitrary spacing values — stick to the scale.
- Do not stack more than one primary CTA per viewport.
- Do not use red for non-error UI — reserve it for destructive actions and warnings.
- Do not ship components without defining hover, focus-visible, and disabled states.

## Tone

Persuasive, benefit-driven, trustworthy. Active voice, urgency without pressure.

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
