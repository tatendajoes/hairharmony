import React from 'react';
import { Navbar, Footer } from '../components/layout';
import {
  HeroSection,
  HowItWorksSection,
  ProblemSection,
  DifferenceSection,
  ForStylistsSection,
  PilotStatsSection,
  CtaBannerSection,
} from '../components/sections';

export interface LandingPageProps {
  /** URL for the hero image. Shows placeholder if omitted. */
  heroImage?: string;
  /** Array of 3 image URLs for the problem mosaic: [tall portrait, curly, braids] */
  problemImages?: string[];
  /** URL for the stylist portrait image. */
  stylistImage?: string;
}

const LandingPage: React.FC<LandingPageProps> = ({
  heroImage,
  problemImages,
  stylistImage,
}) => (
  <>
    <Navbar />
    <main>
      <HeroSection heroImage={heroImage} />
      <HowItWorksSection />
      <ProblemSection images={problemImages} />
      <DifferenceSection />
      <ForStylistsSection stylistImage={stylistImage} />
      <PilotStatsSection />
      <CtaBannerSection />
    </main>
    <Footer />
  </>
);

export default LandingPage;
