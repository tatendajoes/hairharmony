import './global.css';

export const metadata = {
  title: 'Hair Harmony | Compatibility-First Stylist Matching',
  description: 'Find the stylist who actually gets your hair.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
