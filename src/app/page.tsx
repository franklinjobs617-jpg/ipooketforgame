import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GuideArticle } from "@/components/GuideArticle";
import { JsonLd } from "@/components/JsonLd";
import { getGuideBySlug } from "@/lib/guides";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";

const guide = getGuideBySlug("");

export const metadata: Metadata = guide
  ? {
      title: guide.title,
      description: guide.metaDescription,
    alternates: {
      canonical: "/",
    },
    openGraph: {
      title: guide.title,
      description: guide.metaDescription,
      url: "/",
      type: "article",
      images: [guide.image],
    },
    twitter: {
      card: "summary_large_image",
      title: guide.title,
      description: guide.metaDescription,
      images: [guide.image],
    },
  }
: {};

export default function HomePage() {
  if (!guide) notFound();

  return (
    <>
      <JsonLd data={articleSchema(guide)} />
      <JsonLd data={breadcrumbSchema(guide)} />
      <GuideArticle guide={guide} />
    </>
  );
}
