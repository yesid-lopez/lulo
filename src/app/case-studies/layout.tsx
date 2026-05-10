import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Case Studies",
  description:
    "Explore lulo case studies and AI projects, including product prototypes, automation concepts, and practical solutions built for real-world needs.",
  path: "/case-studies",
});

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
