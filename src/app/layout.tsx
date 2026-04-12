import type { Metadata } from 'next';
import './globals.css';

const siteUrl = 'https://gerhartstudios.dev';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'GerhartStudios — Enterprise Grade Vibe Coding | Satirical Plugin Development',
    template: '%s | GerhartStudios (Satire)',
  },
  description:
    'GerhartStudios: The satirical home of DonutPlugins, Claudia the AI, and enterprise-grade vibecoding. 100% AI slop, 0% accountability. A clearly labeled parody/satire site about Minecraft plugin development.',
  keywords: [
    'GerhartStudios',
    'GerhartStudios satire',
    'Minecraft plugins satire',
    'Paper plugins parody',
    'DonutPlugins',
    'AI vibecoding',
    'satirical Minecraft plugin website',
    'Next.js parody site',
    'funny dev website',
    'plugin development satire',
    'Claude vibecoding',
    'AI slop',
    'vibecoding methodology',
    'Claudia AI',
  ],
  authors: [{ name: 'GerhartStudios (Satire Edition)' }],
  creator: 'GerhartStudios',
  publisher: 'GerhartStudios',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'GerhartStudios (Satire)',
    title: 'GerhartStudios — Enterprise Grade Vibe Coding Since The First Hallucination',
    description:
      'A satirical parody of AI-assisted Minecraft plugin development. Claudia writes the code. Nobody reviews it. We ship anyway. DonutPlugins inside.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'GerhartStudios — Satirical Plugin Development Brand',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GerhartStudios — Enterprise Grade Vibe Coding',
    description:
      'A satirical parody of AI-assisted Minecraft plugin development. 100% vibecoded. 0% reviewed. DonutPlugins inside. This is satire.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: '/logo.svg',
    shortcut: '/logo.svg',
    apple: '/logo.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-dark text-white antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
