import type { MetadataRoute } from "next";

const baseUrl = "https://www.reubax.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
    "/how-it-works",
    "/for-businesses",
    "/for-partners",
    "/about",
    "/contact",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));
}
