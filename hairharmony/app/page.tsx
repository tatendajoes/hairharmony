import LandingPageWrapper from './_components/LandingPageWrapper';

export default function Home() {
  return (
    <LandingPageWrapper
      heroImage="/images/hero.jpg"
      problemImages={[
        '/images/portrait.jpg',
        '/images/curly.jpg',
        '/images/braids.jpg',
      ]}
      stylistImage="/images/stylist.jpg"
    />
  );
}


