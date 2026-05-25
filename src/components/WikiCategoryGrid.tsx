import Image from "next/image";
import Link from "next/link";
import { wikiCategories } from "@/lib/wiki";

export function WikiCategoryGrid() {
  return (
    <section className="wiki-categories" id="wiki-map" aria-labelledby="wiki-categories-heading">
      <p className="eyebrow">Choose your problem</p>
      <h2 id="wiki-categories-heading">What are you trying to solve?</h2>
      <p className="wiki-intro">
        Pick the system slowing your settlement right now. Each card sends you to the closest
        guide for your next decision.
      </p>
      <div className="wiki-grid">
        {wikiCategories.map((category) => (
          <Link className="wiki-tile" href={category.href} key={category.label}>
            <span className="wiki-icon">
              <Image src={category.iconSrc} alt={category.iconAlt} width={42} height={42} />
            </span>
            <span className="wiki-label">{category.label}</span>
            <span className="wiki-description">{category.description}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
