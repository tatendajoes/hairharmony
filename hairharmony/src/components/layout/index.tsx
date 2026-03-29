import React, { type CSSProperties } from 'react';
import { colors, fonts, radii, zIndex } from '../../tokens';
import { Button } from '../primitives';

/* ═══════════════════════════════════════════════════════
   NAVBAR
   ═══════════════════════════════════════════════════════ */
export interface NavLink {
  label: string;
  href: string;
}

export interface NavbarProps {
  links?: NavLink[];
  ctaLabel?: string;
  ctaHref?: string;
}

const defaultLinks: NavLink[] = [
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'The Difference', href: '#difference' },
  { label: 'For Stylists', href: '#stylists' },
];

export const Navbar: React.FC<NavbarProps> = ({
  links = defaultLinks,
  ctaLabel = 'Join the Pilot',
  ctaHref = '#join',
}) => {
  const navStyle: CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: zIndex.nav,
    padding: '16px 24px',
  };
  const innerStyle: CSSProperties = {
    maxWidth: '1120px',
    margin: '0 auto',
    background: 'rgba(253, 250, 246, 0.88)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    border: `1px solid ${colors.border}`,
    borderRadius: radii.pill,
    padding: '14px 32px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  };
  const brandStyle: CSSProperties = {
    fontFamily: fonts.display,
    fontSize: '1.5rem',
    fontWeight: 500,
    color: colors.deep,
    textDecoration: 'none',
    letterSpacing: '-0.01em',
  };
  const linksStyle: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '32px',
    listStyle: 'none',
    margin: 0,
    padding: 0,
  };
  const linkStyle: CSSProperties = {
    fontSize: '0.78rem',
    fontWeight: 500,
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
    color: colors.muted,
    textDecoration: 'none',
    fontFamily: fonts.body,
    transition: 'color 0.2s',
  };

  return (
    <nav style={navStyle}>
      <div style={innerStyle}>
        <a href="#" style={brandStyle}>
          <img 
            src="/favicon.ico" 
            alt="Hair Harmony Logo" 
            className="brand-logo-icon"
            style={{ width: '24px', height: '24px', marginRight: '8px', verticalAlign: 'middle' }}
          />
          Hair <em style={{ color: colors.primary, fontStyle: 'italic' }}>Harmony</em>
        </a>
        {/* nav-links-desktop: CSS class hides this below 900px */}
        <ul style={linksStyle} className="nav-links-desktop">
          {links.map((link) => (
            <li key={link.href}>
              {/* nav-link: CSS class handles hover color */}
              <a href={link.href} style={linkStyle} className="nav-link">{link.label}</a>
            </li>
          ))}
        </ul>
        <Button variant="primary" href={ctaHref} style={{ padding: '10px 24px', fontSize: '0.75rem' }}>
          {ctaLabel}
        </Button>
      </div>
    </nav>
  );
};


/* ═══════════════════════════════════════════════════════
   FOOTER
   ═══════════════════════════════════════════════════════ */
interface FooterLink {
  label: string;
  href: string;
}

const platformLinks: FooterLink[] = [
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'The Difference', href: '#difference' },
  { label: 'For Stylists', href: '#stylists' },
  { label: 'Join the Pilot', href: '#join' },
];

const connectLinks: FooterLink[] = [
  { label: 'Contact Us', href: '#' },
  { label: 'Instagram', href: '#' },
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
];

const paletteDots: string[] = [colors.primary, colors.deep, colors.accent, colors.surface, colors.muted];

export const Footer: React.FC = () => {
  const footerStyle: CSSProperties = {
    padding: '64px 24px 32px',
    background: colors.white,
    borderTop: `1px solid ${colors.border}`,
    fontFamily: fonts.body,
  };
  const innerStyle: CSSProperties = { maxWidth: '1120px', margin: '0 auto' };
  const colTitleStyle: CSSProperties = {
    fontSize: '0.65rem',
    fontWeight: 600,
    letterSpacing: '0.18em',
    textTransform: 'uppercase',
    color: colors.deep,
    marginBottom: '20px',
  };
  const linkListStyle: CSSProperties = {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    margin: 0,
    padding: 0,
  };
  const linkStyle: CSSProperties = {
    fontSize: '0.82rem',
    color: colors.muted,
    textDecoration: 'none',
    transition: 'color 0.2s',
  };
  const bottomStyle: CSSProperties = {
    borderTop: '1px solid rgba(232, 196, 174, 0.2)',
    paddingTop: '24px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  return (
    <footer style={footerStyle}>
      <div style={innerStyle}>
        {/* footer-top-grid: CSS class handles responsive collapse */}
        <div className="footer-top-grid">
          <div>
            <div style={{ fontFamily: fonts.display, fontSize: '1.4rem', fontWeight: 500, color: colors.deep, marginBottom: '12px' }}>
              Hair <em style={{ color: colors.primary, fontStyle: 'italic' }}>Harmony</em>
            </div>
            <p style={{ fontSize: '0.85rem', color: colors.muted, lineHeight: 1.65, maxWidth: '320px' }}>
              A compatibility layer between clients and stylists. Better fit. Better outcomes. Better hair days.
            </p>
          </div>
          <div>
            <div style={colTitleStyle}>Platform</div>
            <ul style={linkListStyle}>
              {platformLinks.map((l) => (
                <li key={l.href}><a href={l.href} style={linkStyle} className="footer-link">{l.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <div style={colTitleStyle}>Connect</div>
            <ul style={linkListStyle}>
              {connectLinks.map((l) => (
                <li key={l.label}><a href={l.href} style={linkStyle} className="footer-link">{l.label}</a></li>
              ))}
            </ul>
          </div>
        </div>
        <div style={bottomStyle}>
          <span style={{ fontSize: '0.72rem', color: 'rgba(138, 112, 96, 0.6)' }}>
            © {new Date().getFullYear()} Hair Harmony. All rights reserved.
          </span>
          <div style={{ display: 'flex', gap: '6px' }}>
            {paletteDots.map((c) => (
              <div key={c} style={{ width: '12px', height: '12px', borderRadius: '50%', background: c }} />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
