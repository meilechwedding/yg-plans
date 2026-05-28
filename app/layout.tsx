import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-serif' });

export const metadata: Metadata = {
  metadataBase: new URL('https://ygplans.com'),
  title: {
    default: 'YG plan | Architectural Design Studio in Monsey, NY',
    template: '%s | YG plan'
  },
  description:
    'YG plan is a Monsey architectural design studio creating beautiful, buildable plans for homes, shuls, semi-attached residences, apartment buildings, renovations, and permit filing.',
  alternates: { canonical: '/' },
  keywords: [
    'Monsey architect',
    'Monsey architectural design',
    'Rockland County home plans',
    'custom home plans',
    'shul design',
    'permit filing'
  ],
  openGraph: {
    title: 'YG plan | Architectural Design Studio in Monsey, NY',
    description:
      'Premium architectural planning for homes, shuls, semi-attached residences, apartment buildings, renovations, and permit filing in Monsey and Rockland County.',
    url: 'https://ygplans.com/',
    siteName: 'YG plan',
    images: [{ url: '/yg-architecture-set.png', width: 1254, height: 1254, alt: 'YG plan architectural studies' }],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'YG plan | Architectural Design Studio in Monsey, NY',
    description:
      'Premium architectural planning for homes, shuls, semi-attached residences, apartment buildings, renovations, and permit filing.',
    images: ['/yg-architecture-set.png']
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ProfessionalService',
              name: 'YG plan',
              url: 'https://ygplans.com/',
              image: 'https://ygplans.com/yg-architecture-set.png',
              telephone: '+1-845-263-6855',
              email: 'tuli@ygplans.com',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Monsey',
                addressRegion: 'NY',
                addressCountry: 'US'
              },
              areaServed: ['Monsey', 'Ramapo', 'Rockland County', 'Spring Valley'],
              serviceType: [
                'Architectural design',
                'Custom home plans',
                'Shul planning',
                'Apartment building plans',
                'Renovation plans',
                'Permit filing'
              ]
            })
          }}
        />
        <ScrollProgress />
        <Header />
        <main>
          <div className="seoContext srOnly">
            YG plan provides architectural design, residential planning, shul and community building design, apartment
            building planning, renovation plans, semi-attached home design, and permit filing support for Monsey,
            Ramapo, Spring Valley, Rockland County, and nearby New York communities.
          </div>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
