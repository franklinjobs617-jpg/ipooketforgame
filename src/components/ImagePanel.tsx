import Image from "next/image";
import type { GuideBrief } from "@/lib/guides";

export function ImagePanel({ guide }: { guide: GuideBrief }) {
  const nextActions = guide.actionSteps.slice(0, 2);

  return (
    <figure className="image-panel">
      <Image
        src={guide.image}
        alt={guide.imageAlt}
        width={1280}
        height={720}
        className="cover-image"
        sizes="(max-width: 900px) 100vw, 50vw"
      />
      <figcaption>{guide.imageCaption}</figcaption>
      <div className="image-actions" aria-label="What to do from this scene">
        <strong>Next decisions</strong>
        {nextActions.map((action) => (
          <span key={action}>{action}</span>
        ))}
      </div>
    </figure>
  );
}
