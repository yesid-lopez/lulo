import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "About Us",
  description:
    "Meet the lulo founders and learn how we combine AI engineering, product thinking, and practical delivery to help teams build better digital solutions.",
  path: "/about-us",
});

export default function AboutUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
