import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";
import { getCmsCaseStudies } from "@/utils/cmsCaseStudies";

const staticRoutes = [
  "",
  "/about-us",
  "/case-studies",
  "/contact-us",
  "/privacy",
  "/terms",
  "/cookies",
  "/privacy/derdiedas",
  "/privacy/wouldyourather",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const caseStudies = (await getCmsCaseStudies()).filter(
    (study) => study.type !== "psychologist-demo",
  );
  const routes = [
    ...staticRoutes,
    ...caseStudies.map((study) => `/case-studies/${study.slug}`),
  ];

  const isLegal = (route: string) =>
    route.startsWith("/privacy") ||
    route === "/terms" ||
    route === "/cookies";

  return routes.map((route) => ({
    url: new URL(route, siteUrl).toString(),
    lastModified: now,
    changeFrequency: isLegal(route) ? "yearly" : "monthly",
    priority: route === "" ? 1 : isLegal(route) ? 0.2 : 0.8,
  }));
}
