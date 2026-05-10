import type { Metadata } from "next";

export const siteUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL || "https://luloai.com",
);

export const siteName = "lulo";
export const defaultTitle = "lulo - Innovation Made Simple";
export const defaultDescription =
  "AI-powered product development, automation, and innovation support for teams turning ideas into practical digital solutions.";

const defaultOgImage = {
  url: "/lulo.png",
  width: 512,
  height: 512,
  alt: "lulo logo",
};

type SeoMetadataOptions = {
  title?: string;
  description?: string;
  path?: string;
  image?: typeof defaultOgImage;
  noIndex?: boolean;
};

export function createPageMetadata({
  title,
  description = defaultDescription,
  path = "/",
  image = defaultOgImage,
  noIndex = false,
}: SeoMetadataOptions = {}): Metadata {
  const canonicalPath = path.startsWith("/") ? path : `/${path}`;
  const pageTitle = title ? `${title} | ${siteName}` : defaultTitle;

  return {
    title: pageTitle,
    description,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      type: "website",
      siteName,
      title: pageTitle,
      description,
      url: canonicalPath,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: [image.url],
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : undefined,
  };
}
