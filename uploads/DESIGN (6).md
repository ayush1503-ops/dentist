# Klaas - Webflow HTML website template

## Overview

**Product:** Klaas - Webflow HTML website template
**URL:** https://klaas-dentist-template.webflow.io/
**Surface type:** e-commerce
**Audience:** Consumers and shoppers
**Brand character:** Product-focused shopping experience with a rich, diverse color palette and a complementary two-font typographic system.

> **Note:** Surface detection confidence is low. Verify the inferred audience and brand context before relying on this file.

### Design Principles

- Trust signals first — credibility reduces friction more than clever copy.
- Clear path to action — one primary CTA per view, never stacked.
- Speed over polish — perceived performance is part of the design system.

## Colors

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

## Typography

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

## Spacing

**Base unit:** 4px

`space-1: 4px` · `space-2: 12px` · `space-3: 18px` · `space-4: 24px` · `space-5: 36px` · `space-6: 48px` · `space-7: 96px` · `space-8: 108px` · `space-9: 144px`

## Shapes

**Border radius:** _None detected._

## Elevation

_None detected._

## Motion

- **duration-fast:** `all`
- **duration-fast:** `none`
- **duration-base:** `color 0.2s, background-color 0.2s`
- **duration-base:** `color 0.2s, border-color 0.2s`
- **duration-base:** `color 0.2s, background-position 0.2s, letter-spacing 0.6s cubic-bezier(0.075, 0.82, 0.165, 1), opacity 0.2s`
- **duration-base:** `background-color 0.2s`
- **duration-slow:** `letter-spacing 0.6s cubic-bezier(0.075, 0.82, 0.165, 1)`

## Components

- **Buttons:** 7 detected
- **Links:** 157 detected
- **Inputs:** 1 detected
- **Navigation:** 6 elements
- **Forms:** 1 detected
- **Images:** 144 detected

## Do's and Don'ts

### Do

- Reference tokens by name, not raw values — agents and developers should use `color.text.primary`, not `#171717`.
- Define all interactive states: default, hover, focus-visible, active, disabled.
- Use the spacing scale for all padding, margin, and gap values.
- Write content in sentence case. Reserve ALL CAPS for acronyms only.
- Test every component at the smallest and largest breakpoint before shipping.

### Don't

- Do not introduce colors outside the extracted palette.
- Do not use arbitrary spacing values — stick to the scale.
- Do not stack more than one primary CTA per viewport.
- Do not use red for non-error UI — reserve it for destructive actions and warnings.
- Do not ship components without defining hover, focus-visible, and disabled states.

## Writing Tone

Persuasive, benefit-driven, trustworthy. Active voice, urgency without pressure.

## Authoring Workflow

When creating or updating a component guideline for this system, follow this sequence:

1. **State the intent** — one sentence on what the component does and why it exists.
2. **Map tokens** — list every color, spacing, typography, and radius token the component uses. No raw values.
3. **Define anatomy** — break the component into named parts (container, label, icon, etc.) with their token assignments.
4. **Specify states** — document every state: default, hover, focus-visible, active, disabled, loading, error, empty.
5. **Describe interactions** — keyboard, pointer, and touch behavior, including edge cases (long content, overflow, truncation).
6. **Add accessibility criteria** — write testable pass/fail checks (e.g. "focus ring must be visible at 3:1 contrast").
7. **List anti-patterns** — concrete examples of misuse with a brief explanation of why each is wrong.
8. **Close with a QA checklist** — a mechanical list of verifiable items (see Definition of Done below).

## Required Output Structure

Every component guideline produced from this system must contain these sections, in order:

1. Overview — purpose, when to use, when not to use.
2. Tokens and foundations — all referenced tokens from the tables above.
3. Anatomy and variants — named parts, variant matrix, responsive behavior.
4. States and interactions — full state table, keyboard/pointer/touch behavior.
5. Accessibility — ARIA attributes, contrast requirements, focus management, screen reader behavior.
6. Content guidelines — copy length, tone, capitalisation, placeholder text rules.
7. Anti-patterns — explicit examples of what not to build, with reasoning.

## Component Requirements

Every component built against this system must:

- Reference only tokens defined in the tables above — no hardcoded hex, px, or font values.
- Define all interactive states: default, hover, focus-visible, active, disabled, loading, error.
- Specify responsive behavior at the smallest and largest supported breakpoint.
- Handle edge cases: empty state, overflow / truncation, maximum content length.
- Include keyboard navigation (Tab, Enter, Escape, Arrow keys where applicable).
- Document ARIA roles, labels, and live-region behavior where relevant.
- Include known page component density: - **Buttons:** 7 detected
- **Links:** 157 detected
- **Inputs:** 1 detected
- **Navigation:** 6 elements
- **Forms:** 1 detected
- **Images:** 144 detected

## Definition of Done

A component is not complete until every item below is checked:

- Renders correctly in its default state (smoke test).
- All states documented and visually verified (hover, focus, disabled, loading, error, empty).
- All visual values use design tokens — zero hardcoded values.
- Keyboard navigation works without a pointer.
- No critical accessibility violations (contrast, ARIA, focus order).
- Tested at smallest and largest breakpoint.
- Anti-patterns section lists at least one concrete misuse example.
- Documentation covers purpose, usage, props/API, and limitations.
