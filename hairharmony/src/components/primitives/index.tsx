import React, { type CSSProperties, type InputHTMLAttributes, type HTMLAttributes } from 'react';
import { colors, fonts, radii, shadows, transitions, fontSizes } from '../../tokens';

/* ═══════════════════════════════════════════════════════
   BUTTON
   ═══════════════════════════════════════════════════════ */
export type ButtonVariant = 'primary' | 'secondary' | 'dark' | 'ghost' | 'accent';

export interface ButtonProps extends HTMLAttributes<HTMLElement> {
  variant?: ButtonVariant;
  href?: string;
  children: React.ReactNode;
  style?: CSSProperties;
}

const buttonBase: CSSProperties = {
  padding: '14px 32px',
  borderRadius: radii.pill,
  fontFamily: fonts.body,
  fontSize: fontSizes.sm,
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  fontWeight: 600,
  cursor: 'pointer',
  border: 'none',
  transition: `all ${transitions.normal}`,
  textDecoration: 'none',
  display: 'inline-block',
  textAlign: 'center',
};

const buttonVariants: Record<ButtonVariant, CSSProperties> = {
  primary:   { background: colors.primary, color: 'white' },
  secondary: { background: 'transparent', border: `1.5px solid ${colors.primary}`, color: colors.primary },
  dark:      { background: colors.deep, color: colors.white },
  ghost:     { background: 'transparent', border: `1.5px solid ${colors.muted}`, color: colors.muted },
  accent:    { background: 'transparent', border: `1.5px solid ${colors.accent}`, color: colors.accent },
};

const buttonHoverClass: Partial<Record<ButtonVariant, string>> = {
  primary:   'btn-primary',
  secondary: 'btn-secondary',
};

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', href, children, style, className, ...props }) => {
  const mergedStyle: CSSProperties = { ...buttonBase, ...buttonVariants[variant], ...style };
  const mergedClass = [buttonHoverClass[variant], className].filter(Boolean).join(' ') || undefined;

  if (href) {
    return <a href={href} style={mergedStyle} className={mergedClass} {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>{children}</a>;
  }
  return <button style={mergedStyle} className={mergedClass} {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}>{children}</button>;
};


/* ═══════════════════════════════════════════════════════
   TAG
   ═══════════════════════════════════════════════════════ */
export type TagVariant = 'primary' | 'accent' | 'surface' | 'outline';

export interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: TagVariant;
  children: React.ReactNode;
  style?: CSSProperties;
}

const tagVariants: Record<TagVariant, CSSProperties> = {
  primary: { background: colors.primary, color: 'white' },
  accent:  { background: colors.accent, color: colors.deep },
  surface: { background: colors.surface, color: colors.muted },
  outline: { background: 'transparent', border: `1px solid ${colors.primary}`, color: colors.primary },
};

export const Tag: React.FC<TagProps> = ({ variant = 'primary', children, style, ...props }) => {
  const tagStyle: CSSProperties = {
    display: 'inline-block',
    padding: '5px 14px',
    borderRadius: radii.pill,
    fontSize: '0.68rem',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    fontWeight: 500,
    fontFamily: fonts.body,
    ...tagVariants[variant],
    ...style,
  };
  return <span style={tagStyle} {...props}>{children}</span>;
};


/* ═══════════════════════════════════════════════════════
   INPUT
   ═══════════════════════════════════════════════════════ */
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  style?: CSSProperties;
}

export const Input: React.FC<InputProps> = ({ style, ...props }) => {
  const inputStyle: CSSProperties = {
    padding: '12px 18px',
    border: `1.5px solid ${colors.accent}`,
    borderRadius: radii.sm,
    fontFamily: fonts.body,
    fontSize: '0.85rem',
    background: colors.white,
    color: colors.deep,
    outline: 'none',
    width: '100%',
    transition: `border ${transitions.fast}`,
    ...style,
  };
  return <input style={inputStyle} {...props} />;
};


/* ═══════════════════════════════════════════════════════
   CARD
   ═══════════════════════════════════════════════════════ */
export type CardVariant = 'default' | 'surface' | 'dark';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  padding?: string;
  radius?: string;
  children: React.ReactNode;
  style?: CSSProperties;
}

const cardVariants: Record<CardVariant, CSSProperties> = {
  default: { background: colors.white, color: colors.deep },
  surface: { background: colors.surface, color: colors.deep },
  dark:    { background: colors.deep, color: colors.white },
};

export const Card: React.FC<CardProps> = ({
  variant = 'default',
  padding = '24px',
  radius = radii.lg,
  children,
  style,
  className,
  ...props
}) => {
  const cardStyle: CSSProperties = {
    borderRadius: radius,
    padding,
    boxShadow: shadows.sm,
    ...cardVariants[variant],
    ...style,
  };
  return <div style={cardStyle} className={className} {...props}>{children}</div>;
};


/* ═══════════════════════════════════════════════════════
   SECTION HEADER
   ═══════════════════════════════════════════════════════ */
export interface SectionHeaderProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  center?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  subtitle,
  center = false,
  className,
  ...props
}) => {
  const wrapStyle: CSSProperties = { textAlign: center ? 'center' : 'left' };
  const eyebrowStyle: CSSProperties = {
    fontSize: fontSizes.xs,
    fontWeight: 600,
    letterSpacing: '0.2em',
    textTransform: 'uppercase',
    color: colors.primary,
    marginBottom: '16px',
    fontFamily: fonts.body,
  };
  const titleStyle: CSSProperties = {
    fontFamily: fonts.display,
    fontSize: fontSizes['3xl'],
    fontWeight: 400,
    color: 'inherit',
    lineHeight: 1.1,
    marginBottom: subtitle ? '16px' : 0,
  };
  const subtitleStyle: CSSProperties = {
    fontSize: fontSizes.md,
    color: colors.muted,
    lineHeight: 1.7,
    maxWidth: '520px',
    margin: center ? '0 auto' : undefined,
    fontFamily: fonts.body,
  };

  return (
    <div style={wrapStyle} className={className} {...props}>
      {eyebrow && <div style={eyebrowStyle}>{eyebrow}</div>}
      <h2 style={titleStyle}>{title}</h2>
      {subtitle && <p style={subtitleStyle}>{subtitle}</p>}
    </div>
  );
};


/* ═══════════════════════════════════════════════════════
   IMAGE PLACEHOLDER
   ═══════════════════════════════════════════════════════ */
export interface ImagePlaceholderProps extends HTMLAttributes<HTMLDivElement> {
  label?: string;
  note?: string;
  aspectRatio?: string;
  background?: string;
}

export const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  label,
  note,
  aspectRatio = '1/1',
  background,
  style,
  ...props
}) => {
  const wrapStyle: CSSProperties = {
    width: '100%',
    aspectRatio,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    textAlign: 'center',
    padding: '24px',
    background: background || `linear-gradient(135deg, ${colors.accent}, ${colors.surface})`,
    borderRadius: 'inherit',
    ...style,
  };

  return (
    <div style={wrapStyle} {...props}>
      <svg width="48" height="48" fill="none" stroke={colors.primary} strokeWidth="1.5" viewBox="0 0 24 24" style={{ opacity: 0.4 }}>
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="m21 15-5-5L5 21" />
      </svg>
      {label && (
        <span style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase' as const, opacity: 0.5, color: colors.deep }}>
          {label}
        </span>
      )}
      {note && (
        <span style={{ fontSize: '0.6rem', opacity: 0.35, maxWidth: '180px', lineHeight: 1.4, color: colors.deep }}>
          {note}
        </span>
      )}
    </div>
  );
};
