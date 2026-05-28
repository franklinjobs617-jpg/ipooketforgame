import type { GuideBrief } from "@/lib/guides";
import { ActionChecklist } from "@/components/ActionChecklist";

export function ActionSteps({ guide }: { guide: GuideBrief }) {
  const pageKey = guide.slug || "home";

  return (
    <section className="action-steps" aria-labelledby="action-steps-heading">
      <p className="eyebrow">Player route</p>
      <h2 id="action-steps-heading">What to do next</h2>
      <ActionChecklist
        storageKey={`guide:${pageKey}`}
        steps={guide.actionSteps}
        title="Complete this page route"
      />
    </section>
  );
}
