import type { Metadata } from 'next';
import { Geist_Mono } from 'next/font/google';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { AsciiBackground } from '@/components/shared/AsciiBackground';
import './globals.css';

const mono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Octopai — Everything you need to set up, run, and optimize AI agents',
  description:
    'The all-in-one platform for training, deploying, and managing AI agents. From zero to revenue in 28 days.',
  keywords: ['AI agents', 'agent training', 'agent hub', 'side hustle', 'automation', 'revenue'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${mono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-mono bg-[var(--bg-primary)] text-[var(--text-primary)]">
        <AsciiBackground />
        <div className="scanline" />
        <div className="grain-overlay" />
        <Header />
        <main className="flex-1 relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
