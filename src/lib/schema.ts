import { absoluteUrl, siteConfig } from "@/lib/site";
import type { GuideBrief } from "@/lib/guides";
import { getGuidePath } from "@/lib/guides";

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
  };
}

export function videoGameSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    name: siteConfig.game.name,
    url: siteConfig.game.steamUrl,
    gamePlatform: siteConfig.game.platforms,
    genre: siteConfig.game.genres,
    developer: {
      "@type": "Organization",
      name: siteConfig.game.developer,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.game.publisher,
    },
    datePublished: siteConfig.game.releaseDate,
  };
}

export function articleSchema(guide: GuideBrief) {
  const path = getGuidePath(guide.slug);

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.metaDescription,
    image: absoluteUrl(guide.image),
    url: absoluteUrl(path),
    datePublished: guide.updatedAt,
    dateModified: guide.updatedAt,
    author: {
      "@type": "Organization",
      name: siteConfig.author,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    mainEntityOfPage: absoluteUrl(path),
  };
}

export function breadcrumbSchema(guide: GuideBrief) {
  const path = getGuidePath(guide.slug);
  const items = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: siteConfig.url,
    },
  ];

  if (guide.slug) {
    items.push({
      "@type": "ListItem",
      position: 2,
      name: guide.h1,
      item: absoluteUrl(path),
    });
  }

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items,
  };
}
