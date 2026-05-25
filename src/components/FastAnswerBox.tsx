import type { GuideBrief } from "@/lib/guides";
import { StatusBadge } from "@/components/StatusBadge";

export function FastAnswerBox({ guide }: { guide: GuideBrief }) {
  return (
    <section className="fast-answer" aria-labelledby="fast-answer-heading">
      <div>
        <p className="eyebrow">Fast answer</p>
        <h2 id="fast-answer-heading">{guide.h1.replace("Romestead ", "")}</h2>
      </div>
      <p>{guide.fastAnswer}</p>
      <StatusBadge status={guide.status} />
    </section>
  );
}
