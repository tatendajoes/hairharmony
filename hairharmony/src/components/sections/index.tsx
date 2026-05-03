import React from 'react';
import Image from 'next/image';
import { colors, fonts, radii, shadows, fontSizes, spacing } from '../../tokens';
import { Button, Tag, SectionHeader, ImagePlaceholder } from '../primitives';
import { IconEdit, IconUserPlus, IconCheckCircle, IconChat, IconCheck, IconX, IconDollar, IconFrown, IconShield, type IconProps } from '../icons';
import { useScrollRevealGroup } from '../../hooks/useScrollReveal';

/* ═══════════════════════════════════════════════════════
   HERO SECTION
   ═══════════════════════════════════════════════════════ */
export interface HeroSectionProps {
  /** URL for the hero image. Shows placeholder if omitted. */
  heroImage?: string;
  onClientClick?: () => void;
  onStylistClick?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ heroImage, onClientClick, onStylistClick }) => (
  <section style={{
    minHeight: '100vh', display: 'flex', alignItems: 'center',
    padding: '120px 24px 80px', background: colors.white,
    position: 'relative', overflow: 'hidden',
  }}>
    <div style={{
      position: 'absolute', top: '-200px', right: '-200px',
      width: '600px', height: '600px',
      background: 'radial-gradient(circle, rgba(196,112,74,0.06) 0%, transparent 70%)',
      borderRadius: '50%', pointerEvents: 'none',
    }} />

    {/* hero-grid: CSS class handles responsive collapse */}
    <div className="hero-grid" style={{ maxWidth: '1120px', margin: '0 auto', width: '100%' }}>
      <div style={{ position: 'relative', zIndex: 2 }}>
        <div style={{
          fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.2em',
          textTransform: 'uppercase' as const, color: colors.primary, marginBottom: '20px', fontFamily: fonts.body,
        }}>
          Compatibility-First Matching
        </div>
        <h1 style={{
          fontFamily: fonts.display, fontSize: fontSizes.hero, fontWeight: 300,
          lineHeight: 1.05, color: colors.deep, marginBottom: '24px',
        }}>
          Find the stylist who <em style={{ color: colors.primary, fontStyle: 'italic', fontWeight: 400 }}>actually</em> gets your hair.
        </h1>
        <p style={{
          fontSize: '1.05rem', color: colors.muted, lineHeight: 1.75,
          maxWidth: '460px', marginBottom: '40px', fontFamily: fonts.body,
        }}>
          Not a directory. Not just a booking app. Hair Harmony matches you with stylists based on real compatibility — hair type, budget, vibe, and specialty — before any appointment is booked.
        </p>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' as const }}>
          <Button variant="primary" href="#join" onClick={onClientClick}>I'm a Client</Button>
          <Button variant="secondary" href="#stylists" onClick={onStylistClick}>I'm a Stylist</Button>
        </div>
      </div>

      {/* hero-visual: CSS class handles order:-1 on mobile */}
      <div className="hero-visual" style={{ position: 'relative' }}>
        <div style={{ borderRadius: radii.xl, overflow: 'hidden', boxShadow: shadows.xl, position: 'relative', aspectRatio: '4/5' }}>
          {heroImage ? (
            <Image src={heroImage} alt="Client with beautifully styled textured hair" fill priority sizes="(max-width: 900px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
          ) : (
            <ImagePlaceholder label="Hero Image" note="Diverse client in stylist chair — textured hair, confident expression" aspectRatio="4/5" />
          )}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 60%, rgba(42,26,14,0.3) 100%)' }} />
        </div>

        {/* hero-match-card: CSS class handles responsive repositioning */}
        <div className="hero-match-card" style={{
          position: 'absolute', bottom: '-20px', left: '-30px',
          background: colors.white, borderRadius: radii.md,
          padding: '20px 24px', boxShadow: shadows.lg, zIndex: 3,
          minWidth: '240px', animation: 'float 4s ease-in-out infinite',
        }}>
          <Tag variant="primary" style={{ fontSize: '0.6rem', padding: '4px 12px', marginBottom: '12px' }}>Mutual Match</Tag>
          <div style={{ fontFamily: fonts.display, fontSize: '1.2rem', fontWeight: 500, color: colors.deep, marginBottom: '4px' }}>Tasha W.</div>
          <div style={{ fontSize: '0.75rem', color: colors.muted, lineHeight: 1.5 }}>4C Specialist · Protective Styles</div>
          <div style={{ display: 'flex', gap: '6px', marginTop: '12px', flexWrap: 'wrap' as const }}>
            {(['Locs', 'Braids', 'Twists'] as const).map((s) => (
              <span key={s} style={{
                background: colors.surface, color: colors.muted,
                fontSize: '0.62rem', fontWeight: 500, letterSpacing: '0.08em',
                textTransform: 'uppercase' as const, padding: '4px 10px', borderRadius: radii.pill,
              }}>{s}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);


/* ═══════════════════════════════════════════════════════
   HOW IT WORKS
   ═══════════════════════════════════════════════════════ */
interface Step {
  num: string;
  icon: React.FC<IconProps>;
  title: string;
  body: string;
}

const steps: Step[] = [
  { num: '01', icon: IconEdit,       title: 'Share Your Needs',       body: 'Post your hair type, desired style, budget, timing, and vibe preference.' },
  { num: '02', icon: IconUserPlus,   title: 'Stylists Select You',    body: 'Qualified stylists browse requests and accept the ones that fit their expertise.' },
  { num: '03', icon: IconCheckCircle, title: 'You Confirm the Match', body: 'Review your matches and accept the stylist who feels right. Both sides must say yes.' },
  { num: '04', icon: IconChat,       title: 'Chat & Book',            body: "Messaging unlocks. Discuss your vision, then schedule when you're both ready." },
];

export const HowItWorksSection: React.FC = () => {
  const ref = useScrollRevealGroup();

  return (
    <section id="how-it-works" style={{ padding: `${spacing['5xl']} 24px`, background: colors.base }}>
      <div ref={ref} style={{ maxWidth: '1120px', margin: '0 auto' }}>
        <SectionHeader
          center
          eyebrow="How It Works"
          title={<>Both sides choose. <em style={{ color: colors.primary, fontStyle: 'italic' }}>That's the point.</em></>}
          subtitle="Hair Harmony is a mutual selection system. You don't just book — you match. Both client and stylist opt in before anything begins."
          className="reveal"
        />
        {/* steps-grid: CSS class handles responsive columns */}
        <div className="steps-grid">
          {steps.map((step, i) => {
            const StepIcon = step.icon;
            return (
              /* step-card: CSS class handles ::after connector + hover; reveal for scroll animation */
              <div key={step.num} className={`step-card reveal reveal-d${i}`}>
                <div style={{ fontFamily: fonts.display, fontSize: '3.5rem', fontWeight: 300, color: colors.accent, lineHeight: 1, marginBottom: '20px' }}>
                  {step.num}
                </div>
                {/* step-icon-wrap: CSS class handles hover color transition */}
                <div className="step-icon-wrap" style={{
                  width: '56px', height: '56px', borderRadius: '50%',
                  background: colors.white, border: `1.5px solid ${colors.accent}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 20px',
                }}>
                  <StepIcon size={22} color={colors.primary} />
                </div>
                <div style={{ fontFamily: fonts.display, fontSize: fontSizes.lg, fontWeight: 500, color: colors.deep, marginBottom: '10px' }}>
                  {step.title}
                </div>
                <div style={{ fontSize: '0.82rem', color: colors.muted, lineHeight: 1.65, maxWidth: '220px', margin: '0 auto', fontFamily: fonts.body }}>
                  {step.body}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};


/* ═══════════════════════════════════════════════════════
   THE PROBLEM
   ═══════════════════════════════════════════════════════ */
interface PainPoint {
  icon: React.FC<IconProps>;
  text: React.ReactNode;
}

const painPoints: PainPoint[] = [
  { icon: IconDollar,  text: <><strong>$100+ at risk</strong> every time a client books a stylist who doesn't specialize in their hair texture.</> },
  { icon: IconFrown,   text: <><strong>Stylists get unqualified inquiries</strong> — clients booking styles they don't actually specialize in.</> },
  { icon: IconShield,  text: <><strong>No way to gauge vibe</strong> — will this be a relaxing chair experience, or awkward silence?</> },
];

export interface ProblemSectionProps {
  /** Array of 3 image URLs: [tall portrait, curly texture, braids close-up] */
  images?: string[];
}

export const ProblemSection: React.FC<ProblemSectionProps> = ({ images = [] }) => {
  const ref = useScrollRevealGroup();

  return (
    <section style={{ padding: `${spacing['5xl']} 24px`, background: colors.deep, position: 'relative', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute', top: '-100px', left: '-100px',
        width: '400px', height: '400px',
        background: 'radial-gradient(circle, rgba(196,112,74,0.08) 0%, transparent 70%)',
        borderRadius: '50%',
      }} />
      {/* two-col-grid: CSS class handles responsive collapse */}
      <div ref={ref} className="two-col-grid" style={{ maxWidth: '1120px', margin: '0 auto' }}>
        <div className="reveal">
          <SectionHeader
            eyebrow="The Real Problem"
            title={<span style={{ color: colors.white }}>Finding a stylist isn't hard. Finding the <em style={{ color: colors.primary, fontStyle: 'italic' }}>right</em> one is.</span>}
            subtitle="The issue isn't availability — it's compatibility. Both sides lose when the fit is wrong."
          />
          <ul style={{ listStyle: 'none', marginTop: '36px', display: 'flex', flexDirection: 'column', gap: '20px', padding: 0 }}>
            {painPoints.map((p, i) => {
              const PainIcon = p.icon;
              return (
                <li key={i} className={`reveal reveal-d${i + 1}`} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '36px', height: '36px', borderRadius: '50%',
                    background: 'rgba(196,112,74,0.15)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0, marginTop: '2px',
                  }}>
                    <PainIcon size={16} color={colors.primary} />
                  </div>
                  <div style={{ fontSize: '0.88rem', color: 'rgba(253,250,246,0.8)', lineHeight: 1.6, fontFamily: fonts.body }}>
                    {p.text}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        {/* pain-mosaic: CSS class handles grid layout + responsive height */}
        <div className="pain-mosaic reveal">
          <div style={{ gridRow: '1 / 3', borderRadius: radii.md, overflow: 'hidden', position: 'relative' }}>
            {images[0] ? (
              <Image src={images[0]} alt="Natural hair portrait" fill sizes="(max-width: 900px) 50vw, 25vw" style={{ objectFit: 'cover' }} />
            ) : (
              <ImagePlaceholder label="Tall portrait" note="Client with natural locs or twists" background="rgba(196,112,74,0.12)" />
            )}
          </div>
          <div style={{ borderRadius: radii.md, overflow: 'hidden', position: 'relative' }}>
            {images[1] ? (
              <Image src={images[1]} alt="Curly hair texture" fill sizes="(max-width: 900px) 50vw, 25vw" style={{ objectFit: 'cover' }} />
            ) : (
              <ImagePlaceholder label="Curly texture" background="rgba(196,112,74,0.08)" />
            )}
          </div>
          <div style={{ borderRadius: radii.md, overflow: 'hidden', position: 'relative' }}>
            {images[2] ? (
              <Image src={images[2]} alt="Braids close up" fill sizes="(max-width: 900px) 50vw, 25vw" style={{ objectFit: 'cover' }} />
            ) : (
              <ImagePlaceholder label="Braids close-up" background="rgba(196,112,74,0.06)" />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};


/* ═══════════════════════════════════════════════════════
   THE DIFFERENCE
   ═══════════════════════════════════════════════════════ */
const otherPlatform: string[] = [
  'Client searches, client books, stylist accepts',
  'No way to know if stylist fits your specific texture',
  "Pricing surprises after you're already in the chair",
  'Vibe is a complete gamble every time',
];

const ourApproach: string[] = [
  'Client requests, stylist selects, client confirms — mutual opt-in',
  'Matched by hair type, specialty, and confidence level',
  'Budget aligned before either side commits',
  'Vibe preferences matched — talkative, quiet, or either',
];

export const DifferenceSection: React.FC = () => {
  const ref = useScrollRevealGroup();

  return (
    <section id="difference" style={{ padding: `${spacing['5xl']} 24px`, background: colors.base }}>
      <div ref={ref} style={{ maxWidth: '1120px', margin: '0 auto' }}>
        <SectionHeader
          center
          eyebrow="The Difference"
          title={<>A compatibility marketplace, <em style={{ color: colors.primary, fontStyle: 'italic' }}>not</em> an availability one.</>}
          className="reveal"
        />
        {/* diff-grid: CSS class handles responsive collapse + margin-top */}
        <div className="diff-grid">
          <div className="reveal" style={{
            borderRadius: radii.lg, padding: '40px',
            background: colors.surface, border: `1px solid ${colors.border}`,
          }}>
            <div style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase' as const, color: colors.muted, marginBottom: '28px' }}>
              Typical Booking Platforms
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '20px', padding: 0, margin: 0 }}>
              {otherPlatform.map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '14px', fontSize: '0.88rem', color: 'rgba(138,112,96,0.6)', fontFamily: fonts.body }}>
                  <span style={{
                    width: '24px', height: '24px', borderRadius: '50%',
                    background: 'rgba(180,100,90,0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>
                    <IconX size={12} color="#c47a6b" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal reveal-d1" style={{
            borderRadius: radii.lg, padding: '40px', position: 'relative',
            background: colors.white, border: `2px solid ${colors.primary}`,
            boxShadow: '0 12px 40px rgba(196,112,74,0.1)',
          }}>
            <span style={{
              position: 'absolute', top: '-12px', right: '24px',
              background: colors.primary, color: 'white',
              fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.15em',
              textTransform: 'uppercase' as const, padding: '6px 16px', borderRadius: radii.pill,
            }}>
              Hair Harmony
            </span>
            <div style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase' as const, color: colors.primary, marginBottom: '28px' }}>
              Our Approach
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '20px', padding: 0, margin: 0 }}>
              {ourApproach.map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '14px', fontSize: '0.88rem', color: colors.deep, fontWeight: 500, fontFamily: fonts.body }}>
                  <span style={{
                    width: '24px', height: '24px', borderRadius: '50%',
                    background: 'rgba(196,112,74,0.12)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>
                    <IconCheck size={12} color={colors.primary} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};


/* ═══════════════════════════════════════════════════════
   FOR STYLISTS
   ═══════════════════════════════════════════════════════ */
interface StylistBenefit {
  num: string;
  text: React.ReactNode;
}

const stylistBenefits: StylistBenefit[] = [
  { num: '01', text: <><strong>Define what you do best.</strong> Set your specialties, excluded styles, price range, and weekly availability.</> },
  { num: '02', text: <><strong>Browse compatible requests.</strong> Only see client cards that match your skills and capacity.</> },
  { num: '03', text: <><strong>Accept on your terms.</strong> Choose the clients you want. Skip the rest. No pressure.</> },
  { num: '04', text: <><strong>Chat before committing.</strong> Messaging unlocks only after mutual match — real conversation before any booking.</> },
];

export interface ForStylistsSectionProps {
  /** URL for the stylist portrait image. */
  stylistImage?: string;
}

export const ForStylistsSection: React.FC<ForStylistsSectionProps> = ({ stylistImage }) => {
  const ref = useScrollRevealGroup();

  return (
    <section id="stylists" style={{ padding: `${spacing['5xl']} 24px`, background: colors.white }}>
      {/* two-col-grid: CSS class handles responsive collapse */}
      <div ref={ref} className="two-col-grid" style={{ maxWidth: '1120px', margin: '0 auto' }}>
        <div className="reveal">
          <SectionHeader
            eyebrow="For Stylists"
            title={<>Stop getting bookings you <em style={{ color: colors.primary, fontStyle: 'italic' }}>don't want.</em></>}
            subtitle="Hair Harmony sends you pre-qualified clients who actually match your specialty, budget range, and working style."
          />
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '24px', marginTop: '36px', padding: 0 }}>
            {stylistBenefits.map((b) => (
              <li key={b.num} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <span style={{ fontFamily: fonts.display, fontSize: '1.6rem', fontWeight: 300, color: colors.accent, lineHeight: 1, minWidth: '28px' }}>
                  {b.num}
                </span>
                <div style={{ fontSize: '0.88rem', color: colors.muted, lineHeight: 1.6, fontFamily: fonts.body }}>
                  {b.text}
                </div>
              </li>
            ))}
          </ul>
          <div style={{ marginTop: '40px' }}>
            <Button variant="primary" href="#join">Join as a Stylist</Button>
          </div>
        </div>
        {/* stylist-img: CSS class handles order:-1 on mobile */}
        <div className="stylist-img reveal reveal-d2">
          <div style={{ borderRadius: radii.lg, overflow: 'hidden', boxShadow: shadows.lg, position: 'relative', aspectRatio: '3/4' }}>
            {stylistImage ? (
              <Image src={stylistImage} alt="Professional stylist at work" fill sizes="(max-width: 900px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
            ) : (
              <ImagePlaceholder label="Stylist Portrait" note="Professional stylist working on a client — diverse representation" aspectRatio="3/4" />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};


/* ═══════════════════════════════════════════════════════
   PILOT STATS
   ═══════════════════════════════════════════════════════ */
interface PilotCard {
  stat: string;
  label: string;
  desc: string;
}

const pilotCards: PilotCard[] = [
  { stat: '25', label: 'Matches Made', desc: 'Tracking every pairing to measure satisfaction rates and booking confidence.' },
  { stat: '88%', label: 'Booking Confidence', desc: 'Do clients feel more confident booking when given fewer, qualified options?' },
  { stat: '4.6/5', label: 'Vibe Impact', desc: 'Does matching appointment vibe preferences actually improve satisfaction?' },
];

export const PilotStatsSection: React.FC = () => {
  const ref = useScrollRevealGroup();

  return (
    <section id="pilot" style={{ padding: `${spacing['5xl']} 24px`, background: colors.white }}>
      <div ref={ref} style={{ maxWidth: '1120px', margin: '0 auto' }}>
        <SectionHeader
          center
          eyebrow="Currently in Pilot"
          title={<>We're testing this <em style={{ color: colors.primary, fontStyle: 'italic' }}>right now.</em></>}
          subtitle="Hair Harmony is in a data-driven validation phase. We're manually matching clients with stylists to prove that compatibility creates measurably better outcomes."
          className="reveal"
        />
        {/* pilot-grid: CSS class handles responsive columns + hover via .pilot-card */}
        <div className="pilot-grid">
          {pilotCards.map((card, i) => (
            <div key={card.label} className={`pilot-card reveal reveal-d${i}`} style={{
              background: colors.base, borderRadius: radii.lg, padding: '36px',
              border: `1px solid ${colors.border}`,
            }}>
              <div style={{ fontFamily: fonts.display, fontSize: '2.8rem', fontWeight: 400, color: colors.primary, lineHeight: 1, marginBottom: '8px' }}>
                {card.stat}
              </div>
              <div style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: colors.muted, marginBottom: '12px', fontFamily: fonts.body }}>
                {card.label}
              </div>
              <div style={{ fontSize: '0.82rem', color: colors.muted, lineHeight: 1.6, fontFamily: fonts.body }}>
                {card.desc}
              </div>
            </div>
          ))}
        </div>
        <div className="reveal reveal-d3" style={{ textAlign: 'center', marginTop: '40px' }}>
          <p style={{ fontSize: '0.85rem', color: colors.muted, fontStyle: 'italic', fontFamily: fonts.body }}>
            We'll share real numbers as the pilot progresses. No inflated stats — just honest data.
          </p>
        </div>
      </div>
    </section>
  );
};


/* ═══════════════════════════════════════════════════════
   CTA BANNER
   ═══════════════════════════════════════════════════════ */
export const CtaBannerSection: React.FC = () => {
  const ref = useScrollRevealGroup();

  return (
    <section id="join" style={{
      padding: `${spacing['5xl']} 24px`,
      background: colors.deep, position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', bottom: '-200px', right: '-200px',
        width: '500px', height: '500px',
        background: 'radial-gradient(circle, rgba(196,112,74,0.1) 0%, transparent 70%)',
        borderRadius: '50%',
      }} />
      <div ref={ref} style={{ maxWidth: '1120px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 2 }}>
        <div className="reveal">
          <div style={{ fontSize: fontSizes.xs, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase' as const, color: colors.primary, marginBottom: '16px', fontFamily: fonts.body }}>
            Join the Pilot
          </div>
          <h2 style={{ fontFamily: fonts.display, fontSize: fontSizes['3xl'], fontWeight: 400, color: colors.white, lineHeight: 1.1, marginBottom: '12px' }}>
            Compatibility over <em style={{ color: colors.primary, fontStyle: 'italic' }}>convenience.</em>
          </h2>
          <p style={{ fontSize: '1rem', color: colors.muted, lineHeight: 1.7, maxWidth: '480px', margin: '0 auto 40px', fontFamily: fonts.body }}>
            We're starting on campus and expanding. Whether you're a client looking for the right fit or a stylist tired of mismatched bookings — we want you in.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' as const }}>
            <Button variant="primary" href="#">I'm a Client</Button>
            <Button variant="accent" href="#">I'm a Stylist</Button>
          </div>
          <p style={{ fontSize: '0.72rem', color: colors.muted, marginTop: '24px', fontFamily: fonts.body }}>
            Currently collecting interest via intake form. App coming soon.
          </p>
        </div>
      </div>
    </section>
  );
};
