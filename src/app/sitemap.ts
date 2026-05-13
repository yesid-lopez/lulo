import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";
import { getCmsCaseStudies } from "@/utils/cmsCaseStudies";

const staticRoutes = [
  "",
  "/about-us",
  "/case-studies",
  "/contact-us",
  "/privacy/derdiedas",
  "/privacy/wouldyourather",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const caseStudies = await getCmsCaseStudies();
  const routes = [
    ...staticRoutes,
    ...caseStudies.map((study) => `/case-studies/${study.slug}`),
  ];

  return routes.map((route) => ({
    url: new URL(route, siteUrl).toString(),
    lastModified: now,
    changeFrequency: route.startsWith("/privacy") ? "yearly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/privacy") ? 0.2 : 0.8,
  }));
}
