import type { GuideBrief } from "@/lib/guides";
import Image from "next/image";
import { PixelButton } from "@/components/PixelButton";
import { ResourceChip } from "@/components/ResourceChip";

export function PixelHero({ guide }: { guide: GuideBrief }) {
  return (
    <section className="pixel-hero">
      <div className="hero-copy">
        <p className="eyebrow">Romestead Early Access Guide</p>
        <h1>{guide.h1}</h1>
        <p>{guide.intro}</p>
        <div className="hero-actions">
          <PixelButton href="/beginner-guide">Read beginner guide</PixelButton>
          <PixelButton href="/base-building" variant="ghost">
            Plan a base
          </PixelButton>
        </div>
        <div className="resource-row" aria-label="Guide topics">
          {["Co-op", "Farming", "Survivors", "Gods", "Dungeons"].map((item) => (
            <ResourceChip key={item}>{item}</ResourceChip>
          ))}
        </div>
      </div>
      <div className="hero-art">
        <Image
          src={guide.image}
          alt={guide.imageAlt}
          fill
          priority={!guide.slug}
          sizes="(max-width: 900px) 100vw, 46vw"
        />
        <div className="hero-art-label">
          <span>Official screenshot</span>
          <strong>{guide.status}</strong>
        </div>
      </div>
    </section>
  );
}
