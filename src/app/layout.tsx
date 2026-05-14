import type { Metadata, Viewport } from "next";
import { Poppins, Sora } from "next/font/google";
import { TranslationProvider } from "../hooks/TranslationProvider";
import "./globals.css";
import Script from "next/script";
import { createPageMetadata, siteName, siteUrl } from "@/lib/seo";
import { getServerLocale } from "@/utils/serverLocale";

// Initialize the Poppins font
const poppins = Poppins({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

// Initialize the Sora font
const sora = Sora({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sora",
});

export const metadata: Metadata = {
  metadataBase: siteUrl,
  ...createPageMetadata(),
  applicationName: siteName,
  keywords: [
    "lulo",
    "AI development",
    "machine learning consulting",
    "AI agents",
    "product innovation",
    "automation",
  ],
  authors: [{ name: "lulo" }],
  creator: "lulo",
  publisher: "lulo",
  category: "technology",
  icons: {
    icon: "/lulo.png",
    apple: "/lulo.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#F5F5F5",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isProd = process.env.NODE_ENV === "production";
  const locale = await getServerLocale();

  return (
    <html lang={locale} className={`${poppins.variable} ${sora.variable}`}>
      {isProd && (
        <Script
          defer
          src="https://umami.yesidlopez.de/umami"
          data-website-id="61e825b7-f77b-49e5-a284-8338b1059e31"
        />
      )}
      <body suppressHydrationWarning={true}>
        <TranslationProvider initialLanguage={locale}>{children}</TranslationProvider>
      </body>
    </html>
  );
}
