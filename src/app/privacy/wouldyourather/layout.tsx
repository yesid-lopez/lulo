import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Would You Rather Privacy Policy",
  description: "Privacy policy for the Would You Rather app by lulo.",
  path: "/privacy/wouldyourather",
  noIndex: true,
});

export default function WouldYouRatherPrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
