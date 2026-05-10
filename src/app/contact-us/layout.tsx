import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Contact Us",
  description:
    "Contact lulo to discuss AI development, machine learning consulting, NLP solutions, custom AI agents, or a new product idea.",
  path: "/contact-us",
});

export default function ContactUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
