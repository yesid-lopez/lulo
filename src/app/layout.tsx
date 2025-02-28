import './globals.css';
import type { Metadata } from 'next';
import { Poppins, Sora } from 'next/font/google';
import { TranslationProvider } from '../hooks/TranslationProvider';

// Initialize the Poppins font
const poppins = Poppins({
  weight: ['300', '400', '500'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
});

// Initialize the Sora font
const sora = Sora({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sora',
});

export const metadata: Metadata = {
  title: 'lulo - Innovation Made Simple',
  description: 'How can we help bring your ideas to life? Share your vision with us, and we’ll get back to you shortly with AI-powered solutions designed for impact.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${sora.variable}`}>
      <body suppressHydrationWarning={true}>
        <TranslationProvider>
          {children}
        </TranslationProvider>
      </body>
    </html>
  );
}
