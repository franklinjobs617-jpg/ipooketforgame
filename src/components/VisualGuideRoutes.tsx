import Image from "next/image";
import Link from "next/link";
import type { GuideBrief } from "@/lib/guides";
import { getGuidePath, getRelatedGuides } from "@/lib/guides";

export function VisualGuideRoutes({ guide }: { guide: GuideBrief }) {
  const routes = getRelatedGuides(guide).slice(0, 3);

  if (!routes.length) return null;

  return (
    <section className="visual-routes" aria-labelledby="visual-routes-heading">
      <div className="section-heading-row">
        <div>
          <p className="eyebrow">Visual routes</p>
          <h2 id="visual-routes-heading">Pick the next problem by screenshot</h2>
        </div>
        <p>
          Use these cards when the current page points to another system you need to solve:
          buying, first-day setup, base flow, food, workers, or blessings.
        </p>
      </div>
      <div className="visual-route-grid">
        {routes.map((item) => (
          <Link className="visual-route-card" href={getGuidePath(item.slug)} key={item.slug || "home"}>
            <div className="visual-route-image">
              <Image src={item.image} alt={item.imageAlt} fill sizes="(max-width: 900px) 100vw, 30vw" />
            </div>
            <div>
              <span>{item.status}</span>
              <h3>{item.h1}</h3>
              <p>{item.fastAnswer}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
