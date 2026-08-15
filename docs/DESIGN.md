# Design System

Design tokens and component specs for mettalent. The token file is the single source of truth. Build UI with semantic tokens (`bg-brand`, `text-primary`, `border-subtle`), never raw hex. The system ships light and dark themes; switching is handled by `[data-theme="dark"]` on a root element, so components never hardcode a theme.

## Tokens

Keep this file at `frontend/src/styles/tokens.css` and import it once at the app entry. Reference the semantic layer (`--color-bg-*`, `--color-text-*`, `--color-border-*`, `--color-icon-*`), not the raw scales, in components.

```css
:root {
  --color-green-50: #F0F7F2;
  --color-green-100: #DCECDF;
  --color-green-200: #B9D8C0;
  --color-green-300: #8CBC99;
  --color-green-400: #5E9C72;
  --color-green-500: #347B4E;
  --color-green-600: #1C4D2D;
  --color-green-700: #173F26;
  --color-green-800: #143321;
  --color-green-900: #102A1B;
  --color-green-950: #08170E;

  --color-neutral-0: #FFFFFF;
  --color-neutral-50: #F8FAF9;
  --color-neutral-100: #F0F3F1;
  --color-neutral-200: #E1E7E3;
  --color-neutral-300: #C9D2CC;
  --color-neutral-400: #9AA9A0;
  --color-neutral-500: #6F8176;
  --color-neutral-600: #536258;
  --color-neutral-700: #3D4941;
  --color-neutral-800: #27312B;
  --color-neutral-900: #18201B;
  --color-neutral-950: #0D120F;
  --color-neutral-1000: #000000;

  --color-red-100: #FEE2E2;
  --color-red-600: #DC2626;
  --color-red-900: #7F1D1D;
  --color-amber-100: #FEF3C7;
  --color-amber-600: #D97706;
  --color-amber-900: #78350F;
  --color-blue-100: #DBEAFE;
  --color-blue-600: #2563EB;
  --color-blue-900: #1E3A8A;

  --color-bg-canvas: var(--color-neutral-50);
  --color-bg-surface: var(--color-neutral-0);
  --color-bg-subtle: var(--color-neutral-100);
  --color-bg-strong: var(--color-neutral-900);
  --color-bg-brand: var(--color-green-600);
  --color-bg-brand-hover: var(--color-green-700);
  --color-bg-brand-subtle: var(--color-green-100);
  --color-bg-disabled: var(--color-neutral-200);
  --color-bg-success: var(--color-green-100);
  --color-bg-warning: var(--color-amber-100);
  --color-bg-danger: var(--color-red-100);
  --color-bg-info: var(--color-blue-100);

  --color-text-primary: var(--color-neutral-900);
  --color-text-secondary: var(--color-neutral-600);
  --color-text-muted: var(--color-neutral-500);
  --color-text-disabled: var(--color-neutral-400);
  --color-text-brand: var(--color-green-700);
  --color-text-on-brand: var(--color-neutral-0);
  --color-text-inverse: var(--color-neutral-0);
  --color-text-success: var(--color-green-700);
  --color-text-warning: var(--color-amber-900);
  --color-text-danger: var(--color-red-900);
  --color-text-info: var(--color-blue-600);

  --color-icon-primary: var(--color-neutral-800);
  --color-icon-secondary: var(--color-neutral-500);
  --color-icon-brand: var(--color-green-600);
  --color-icon-on-brand: var(--color-neutral-0);

  --color-border-default: var(--color-neutral-300);
  --color-border-subtle: var(--color-neutral-200);
  --color-border-strong: var(--color-neutral-500);
  --color-border-brand: var(--color-green-600);
  --color-border-focus: var(--color-green-500);
  --color-border-disabled: var(--color-neutral-300);
  --color-border-success: var(--color-green-600);
  --color-border-warning: var(--color-amber-600);
  --color-border-danger: var(--color-red-600);
  --color-border-info: var(--color-blue-600);
}

[data-theme="dark"] {
  --color-bg-canvas: var(--color-neutral-950);
  --color-bg-surface: var(--color-neutral-900);
  --color-bg-subtle: var(--color-neutral-800);
  --color-bg-strong: var(--color-neutral-100);
  --color-bg-brand: var(--color-green-400);
  --color-bg-brand-hover: var(--color-green-300);
  --color-bg-brand-subtle: var(--color-green-900);
  --color-bg-disabled: var(--color-neutral-700);
  --color-bg-success: var(--color-green-900);
  --color-bg-warning: var(--color-amber-900);
  --color-bg-danger: var(--color-red-900);
  --color-bg-info: var(--color-blue-900);

  --color-text-primary: var(--color-neutral-50);
  --color-text-secondary: var(--color-neutral-300);
  --color-text-muted: var(--color-neutral-400);
  --color-text-disabled: var(--color-neutral-600);
  --color-text-brand: var(--color-green-300);
  --color-text-on-brand: var(--color-green-950);
  --color-text-inverse: var(--color-neutral-950);
  --color-text-success: var(--color-green-300);
  --color-text-warning: var(--color-amber-100);
  --color-text-danger: var(--color-red-100);
  --color-text-info: var(--color-blue-100);

  --color-icon-primary: var(--color-neutral-100);
  --color-icon-secondary: var(--color-neutral-400);
  --color-icon-brand: var(--color-green-300);
  --color-icon-on-brand: var(--color-green-950);

  --color-border-default: var(--color-neutral-700);
  --color-border-subtle: var(--color-neutral-800);
  --color-border-strong: var(--color-neutral-400);
  --color-border-brand: var(--color-green-400);
  --color-border-focus: var(--color-green-300);
  --color-border-disabled: var(--color-neutral-700);
  --color-border-success: var(--color-green-400);
  --color-border-warning: var(--color-amber-100);
  --color-border-danger: var(--color-red-100);
  --color-border-info: var(--color-blue-100);
}
```

## Color usage

Backgrounds: `bg-canvas` for the page, `bg-surface` for cards and inputs, `bg-subtle` for muted panels and hover fills, `bg-brand` for the primary action, `bg-brand-subtle` for tinted areas and selected chips.

Text: `text-primary` for body and headings, `text-secondary` for supporting copy, `text-muted` for placeholders and metadata, `text-on-brand` for anything sitting on a brand surface.

Borders: `border-subtle` for dividers, `border-default` for cards and inputs, `border-focus` for the focus state, `border-brand` for brand outlines.

Status: pair the matching background and text tokens (`bg-success` with `text-success`, `bg-danger` with `text-danger`, and so on) for alerts, badges, and inline validation.

Rules: one brand action per view; everything else is secondary or ghost. Never place `text-muted` on `bg-brand`. Do not hardcode hex values or theme-specific colors in components; the tokens resolve light and dark automatically.

## Typography

Poppins throughout, loaded from Google Fonts. Weights in use: 400, 500, 600, 700.

| Style | Size / line-height | Weight | Use |
| --- | --- | --- | --- |
| Display | 40 / 48 | 600 | Landing hero |
| H1 | 32 / 40 | 600 | Page titles |
| H2 | 24 / 32 | 600 | Section headings |
| H3 | 20 / 28 | 600 | Card titles |
| Body large | 18 / 28 | 400 | Lead paragraphs |
| Body | 16 / 24 | 400 | Default text |
| Small | 14 / 20 | 400 | Secondary text |
| Caption | 12 / 16 | 500 | Labels, metadata |

Headings use 600. Buttons use 500 (large buttons 600). Body stays 400.

## Spacing

A 4px base scale. Use only these steps: `4, 8, 12, 16, 24, 32, 48, 64`. Card padding is 24. Section gaps are 32 to 48.

## Radius

| Token | Value | Applied to |
| --- | --- | --- |
| `sm` | 8px | Chips, small tags, compact inputs |
| `md` | 12px | Buttons, inputs, dropdowns |
| `lg` | 16px | Cards, modals, panels |
| `pill` | 9999px | Toggles, avatars, badge pills |

Defaults: buttons 12px, inputs 12px, cards 16px, badges pill.

## Elevation

| Token | Shadow |
| --- | --- |
| `sm` | `0 1px 2px rgba(13,18,15,0.06)` |
| `md` | `0 4px 12px rgba(13,18,15,0.08)` |
| `lg` | `0 12px 32px rgba(13,18,15,0.12)` |

Cards rest at `sm` and lift to `md` on hover. Modals use `lg`. In dark mode, lean on `bg-surface` against `bg-canvas` for separation rather than heavy shadows.

## Buttons

Radius 12px. Font weight 500 (large 600). Transition 150ms on background and shadow. Focus ring: `0 0 0 3px rgba(52,123,78,0.35)` using the focus green.

### Sizes

| Size | Height | Padding (x) | Font |
| --- | --- | --- | --- |
| sm | 36px | 14px | 14 / 500 |
| md | 44px | 20px | 15 / 500 |
| lg | 52px | 28px | 16 / 600 |

### Variants

| Variant | Default | Hover | Disabled |
| --- | --- | --- | --- |
| Primary | `bg-brand`, `text-on-brand` | `bg-brand-hover` | `bg-disabled`, `text-disabled` |
| Secondary | `bg-surface`, `text-primary`, `border-default` | `bg-subtle` | `bg-disabled`, `text-disabled` |
| Ghost | transparent, `text-primary` | `bg-subtle` | `text-disabled` |
| Danger | `--color-red-600` background, `text-on-brand` | darken 6% | `bg-disabled`, `text-disabled` |

## Cards

- `bg-surface`, radius 16px, padding 24px.
- Border `1px solid border-subtle`, or shadow `sm`. Use one, not both.
- Interactive cards lift to shadow `md` on hover with a 150ms transition.
- Title uses H3 in `text-primary`; supporting text uses Small in `text-muted`.

## Inputs

- Height 44px, radius 12px, padding 0 14px, `bg-surface`, `1px solid border-default`.
- Placeholder in `text-muted`.
- Focus: `border-focus` plus the focus ring.
- Error: `border-danger`, helper text below in `text-danger` at 14px.
- Label above the field in Caption weight 500, `text-primary`.

## Badges and chips

- Pill radius, height 24px, padding 0 10px, 12 / 500.
- Neutral: `bg-subtle`, `text-secondary`.
- Selected or active: `bg-brand-subtle`, `text-brand`.
- Status: matching `bg-*` and `text-*` status pair.

## Charts

Use `--color-green-500` for the candidate's held skills and `--color-neutral-400` for the required baseline on the readiness radar or bar chart. Keep to two series so the gap reads at a glance. These read on both themes; verify contrast in dark mode.

## Tailwind tokens

Map the semantic tokens to Tailwind utilities through the CSS variables so light and dark resolve automatically. Split across `backgroundColor`, `textColor`, and `borderColor` to keep utility names unambiguous (`bg-brand`, `text-primary`, `border-focus`).

```js
// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: { sans: ['"Poppins"', "system-ui", "sans-serif"] },
      borderRadius: { sm: "8px", md: "12px", lg: "16px", pill: "9999px" },
      boxShadow: {
        sm: "0 1px 2px rgba(13,18,15,0.06)",
        md: "0 4px 12px rgba(13,18,15,0.08)",
        lg: "0 12px 32px rgba(13,18,15,0.12)",
      },
      backgroundColor: {
        canvas: "var(--color-bg-canvas)",
        surface: "var(--color-bg-surface)",
        subtle: "var(--color-bg-subtle)",
        strong: "var(--color-bg-strong)",
        brand: "var(--color-bg-brand)",
        "brand-hover": "var(--color-bg-brand-hover)",
        "brand-subtle": "var(--color-bg-brand-subtle)",
        disabled: "var(--color-bg-disabled)",
        success: "var(--color-bg-success)",
        warning: "var(--color-bg-warning)",
        danger: "var(--color-bg-danger)",
        info: "var(--color-bg-info)",
      },
      textColor: {
        primary: "var(--color-text-primary)",
        secondary: "var(--color-text-secondary)",
        muted: "var(--color-text-muted)",
        disabled: "var(--color-text-disabled)",
        brand: "var(--color-text-brand)",
        "on-brand": "var(--color-text-on-brand)",
        inverse: "var(--color-text-inverse)",
        success: "var(--color-text-success)",
        warning: "var(--color-text-warning)",
        danger: "var(--color-text-danger)",
        info: "var(--color-text-info)",
      },
      borderColor: {
        DEFAULT: "var(--color-border-default)",
        subtle: "var(--color-border-subtle)",
        strong: "var(--color-border-strong)",
        brand: "var(--color-border-brand)",
        focus: "var(--color-border-focus)",
        disabled: "var(--color-border-disabled)",
        success: "var(--color-border-success)",
        warning: "var(--color-border-warning)",
        danger: "var(--color-border-danger)",
        info: "var(--color-border-info)",
      },
    },
  },
  plugins: [],
};
```

Load the tokens and Poppins at the app entry:

```js
// main.jsx
import "./styles/tokens.css";
```

```html
<!-- index.html -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
  rel="stylesheet"
/>
```

Set `document.documentElement.dataset.theme = "dark"` to switch themes; leave it unset for light.
