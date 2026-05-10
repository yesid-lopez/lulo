import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Der Die Das Privacy Policy",
  description: "Privacy policy for the Der Die Das app by lulo.",
  path: "/privacy/derdiedas",
  noIndex: true,
});

export default function DerDieDasPrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
