import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";
import { cmsCaseStudiesData } from "@/utils/cmsCaseStudiesData";

const staticRoutes = [
  "",
  "/about-us",
  "/case-studies",
  "/contact-us",
  "/privacy/derdiedas",
  "/privacy/wouldyourather",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = [
    ...staticRoutes,
    ...cmsCaseStudiesData.map((study) => `/case-studies/${study.slug}`),
  ];

  return routes.map((route) => ({
    url: new URL(route, siteUrl).toString(),
    lastModified: now,
    changeFrequency: route.startsWith("/privacy") ? "yearly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/privacy") ? 0.2 : 0.8,
  }));
}

