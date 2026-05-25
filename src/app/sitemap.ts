import type { MetadataRoute } from "next";
import { getGuidePath, guideBriefs } from "@/lib/guides";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return guideBriefs.map((guide) => ({
    url: absoluteUrl(getGuidePath(guide.slug)),
    lastModified: guide.updatedAt,
    changeFrequency: guide.slug ? "weekly" : "daily",
    priority: guide.slug ? 0.8 : 1,
  }));
}
