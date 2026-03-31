import type { Metadata } from 'next';
import { Geist_Mono } from 'next/font/google';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { AsciiBackground } from '@/components/shared/AsciiBackground';
import { ThemeProvider } from '@/lib/theme-context';
import './globals.css';

const mono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Octopai — Train your AI agent. Launch a business.',
  description:
    'The 28-day system that turns AI agents into revenue machines. Set up, train, deploy, and earn. Your agent does the work.',
  keywords: ['AI agents', 'agent training', 'agent hub', 'side hustle', 'automation', 'revenue'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${mono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-mono">
        <ThemeProvider>
          <AsciiBackground />
          <Header />
          <main className="flex-1 relative z-10">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
