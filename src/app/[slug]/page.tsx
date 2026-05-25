import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GuideArticle } from "@/components/GuideArticle";
import { JsonLd } from "@/components/JsonLd";
import { getGuideBySlug, getGuidePath, guideBriefs } from "@/lib/guides";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return guideBriefs
    .filter((guide) => guide.slug)
    .map((guide) => ({
      slug: guide.slug,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) return {};

  return {
    title: guide.title,
    description: guide.metaDescription,
    alternates: {
      canonical: getGuidePath(guide.slug),
    },
    openGraph: {
      title: guide.title,
      description: guide.metaDescription,
      url: getGuidePath(guide.slug),
      type: "article",
      images: [guide.image],
    },
    twitter: {
      card: "summary_large_image",
      title: guide.title,
      description: guide.metaDescription,
      images: [guide.image],
    },
  };
}

export default async function GuidePage({ params }: PageProps) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) notFound();

  return (
    <>
      <JsonLd data={articleSchema(guide)} />
      <JsonLd data={breadcrumbSchema(guide)} />
      <GuideArticle guide={guide} />
    </>
  );
}
