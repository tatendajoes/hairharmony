import './global.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://hairharmonyus.com'),
  title: {
    default: 'Hair Harmony | Compatibility-First Stylist Matching',
    template: '%s | Hair Harmony',
  },
  description:
    'Find the stylist who actually gets your hair. Hair Harmony matches clients with stylists based on hair type, texture, and cultural expertise.',
  keywords: [
    'natural hair stylist',
    'curly hair stylist',
    'textured hair salon',
    'black hair care',
    'hair stylist matching',
    'braids near me',
    'loc stylist',
    'natural hair salon',
  ],
  authors: [{ name: 'Hair Harmony' }],
  creator: 'Hair Harmony',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://hairharmonyus.com',
    siteName: 'Hair Harmony',
    title: 'Hair Harmony | Find the Stylist Who Gets Your Hair',
    description:
      'Compatibility-first stylist matching for natural, curly, and textured hair. Stop settling for stylists who don\'t understand your hair.',
    images: [
      {
        url: '/images/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Hair Harmony – Stylist Matching for Natural Hair',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hair Harmony | Find the Stylist Who Gets Your Hair',
    description:
      'Compatibility-first stylist matching for natural, curly, and textured hair. Stop settling for stylists who don\'t understand your hair.',
    images: ['/images/hero.jpg'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Hair Harmony',
  url: 'https://hairharmonyus.com',
  logo: 'https://hairharmonyus.com/images/hero.jpg',
  description:
    'Compatibility-first stylist matching platform for natural, curly, and textured hair.',
  sameAs: ['https://instagram.com/hairharmonyus'],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer support',
    url: 'https://hairharmonyus.com',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
