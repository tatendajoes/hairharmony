/* ═══════════════════════════════════════════════════════
   Hair Harmony — Component Library (TypeScript)
   
   Single import point:
     import { Button, Tag, Navbar, HeroSection, colors } from './';
   ═══════════════════════════════════════════════════════ */

// Design tokens + types
export * from './tokens';

// Hooks
export { useScrollReveal, useScrollRevealGroup } from './hooks/useScrollReveal';

// Icons + types
export {
  IconEdit,
  IconUserPlus,
  IconCheckCircle,
  IconChat,
  IconCheck,
  IconX,
  IconDollar,
  IconFrown,
  IconShield,
  IconImage,
} from './components/icons';
export type { IconProps } from './components/icons';

// Primitives + types
export {
  Button,
  Tag,
  Input,
  Card,
  SectionHeader,
  ImagePlaceholder,
} from './components/primitives';
export type {
  ButtonVariant,
  ButtonProps,
  TagVariant,
  TagProps,
  InputProps,
  CardVariant,
  CardProps,
  SectionHeaderProps,
  ImagePlaceholderProps,
} from './components/primitives';

// Layout
export {
  Navbar,
  Footer,
} from './components/layout';
export type { NavLink, NavbarProps } from './components/layout';

// Sections + types
export {
  HeroSection,
  HowItWorksSection,
  ProblemSection,
  DifferenceSection,
  ForStylistsSection,
  PilotStatsSection,
  CtaBannerSection,
} from './components/sections';
export type {
  HeroSectionProps,
  ProblemSectionProps,
  ForStylistsSectionProps,
} from './components/sections';

// Views (named 'views' to avoid conflict with Next.js app/ or pages/ routing)
export { default as LandingPage } from './views/LandingPage';
export type { LandingPageProps } from './views/LandingPage';
