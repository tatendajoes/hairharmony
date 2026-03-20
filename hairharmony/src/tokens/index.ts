/* ═══════════════════════════════════════════════════════
   Hair Harmony — Design Tokens (TypeScript)
   Single source of truth for all design values.
   Maps directly to the brand design system v1.0
   ═══════════════════════════════════════════════════════ */

/* ── Colors ── */
export const colors = {
  base:        '#F7F2EA',
  primary:     '#C4704A',
  primaryDeep: '#A3522D',
  accent:      '#E8C4AE',
  deep:        '#2A1A0E',
  muted:       '#8A7060',
  surface:     '#EFE8DC',
  white:       '#FDFAF6',

  // Semantic aliases
  background:  '#F7F2EA',
  text:        '#2A1A0E',
  textMuted:   '#8A7060',
  border:      'rgba(232, 196, 174, 0.3)',
  error:       '#c47a6b',
  success:     '#6b8f71',
} as const;

export type ColorToken = keyof typeof colors;
export type ColorValue = (typeof colors)[ColorToken];

/* ── Typography ── */
export const fonts = {
  display: "'Cormorant Garamond', serif",
  body:    "'DM Sans', sans-serif",
} as const;

export type FontToken = keyof typeof fonts;

export const fontsImportUrl =
  'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500;1,600&family=DM+Sans:wght@300;400;500;600;700&display=swap';

export const fontSizes = {
  xs:    '0.65rem',
  sm:    '0.78rem',
  base:  '0.88rem',
  md:    '1rem',
  lg:    '1.25rem',
  xl:    '1.8rem',
  '2xl': '2.4rem',
  '3xl': 'clamp(2rem, 4vw, 3rem)',
  hero:  'clamp(2.8rem, 5vw, 4.2rem)',
} as const;

export type FontSizeToken = keyof typeof fontSizes;

export const fontWeights = {
  light:    300,
  regular:  400,
  medium:   500,
  semibold: 600,
  bold:     700,
} as const;

export type FontWeightToken = keyof typeof fontWeights;

/* ── Spacing ── */
export const spacing = {
  xs:    '4px',
  sm:    '8px',
  md:    '16px',
  lg:    '24px',
  xl:    '32px',
  '2xl': '48px',
  '3xl': '64px',
  '4xl': '80px',
  '5xl': '120px',
} as const;

export type SpacingToken = keyof typeof spacing;

/* ── Radii ── */
export const radii = {
  sm:   '10px',
  md:   '16px',
  lg:   '20px',
  xl:   '24px',
  pill: '50px',
  full: '50%',
} as const;

export type RadiusToken = keyof typeof radii;

/* ── Shadows ── */
export const shadows = {
  sm:   '0 2px 16px rgba(42, 26, 14, 0.06)',
  md:   '0 8px 24px rgba(42, 26, 14, 0.08)',
  lg:   '0 16px 48px rgba(42, 26, 14, 0.12)',
  xl:   '0 32px 64px rgba(42, 26, 14, 0.12)',
  glow: '0 8px 24px rgba(196, 112, 74, 0.25)',
} as const;

export type ShadowToken = keyof typeof shadows;

/* ── Transitions ── */
export const transitions = {
  fast:   '0.15s ease',
  normal: '0.25s ease',
  smooth: '0.7s cubic-bezier(0.22, 1, 0.36, 1)',
} as const;

/* ── Breakpoints ── */
export const breakpoints = {
  sm: '600px',
  md: '900px',
  lg: '1120px',
} as const;

export type BreakpointToken = keyof typeof breakpoints;

/* ── Z-Index ── */
export const zIndex = {
  base:  1,
  card:  10,
  nav:   100,
  modal: 200,
  toast: 300,
} as const;

/* ── CSS Custom Properties ── */
export const cssVariables = `
  :root {
    --base:         ${colors.base};
    --primary:      ${colors.primary};
    --primary-deep: ${colors.primaryDeep};
    --accent:       ${colors.accent};
    --deep:         ${colors.deep};
    --muted:        ${colors.muted};
    --surface:      ${colors.surface};
    --white:        ${colors.white};

    --font-display: ${fonts.display};
    --font-body:    ${fonts.body};
  }
`;
