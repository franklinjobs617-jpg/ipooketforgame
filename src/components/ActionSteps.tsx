import type { GuideBrief } from "@/lib/guides";

export function ActionSteps({ guide }: { guide: GuideBrief }) {
  return (
    <section className="action-steps" aria-labelledby="action-steps-heading">
      <p className="eyebrow">Player route</p>
      <h2 id="action-steps-heading">What to do next</h2>
      <ol>
        {guide.actionSteps.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>
    </section>
  );
}
