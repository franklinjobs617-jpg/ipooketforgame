import Link from "next/link";
import type { GuideBrief } from "@/lib/guides";
import { getGuidePath, getRelatedGuides } from "@/lib/guides";

export function RelatedGuides({ guide }: { guide: GuideBrief }) {
  const related = getRelatedGuides(guide);

  return (
    <section className="related-guides" aria-labelledby="related-heading">
      <p className="eyebrow">Next routes</p>
      <h2 id="related-heading">Related Romestead guides</h2>
      <div className="guide-card-grid">
        {related.map((item) => (
          <Link className="guide-card" href={getGuidePath(item.slug)} key={item.slug || "home"}>
            <span>{item.status}</span>
            <h3>{item.h1}</h3>
            <p>{item.fastAnswer}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
