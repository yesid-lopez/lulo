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
  title: 'lulo - Dedicated sales & support for represented artists',
  description: 'lulo provides dedicated sales and support for represented artists',
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
