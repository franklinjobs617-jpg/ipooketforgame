"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

const plannerRoutes = [
  {
    id: "first-save",
    label: "First save",
    title: "45-minute launch run",
    context: "Best for new solo players or a first co-op host.",
    payoff:
      "Verify the current build, learn the loop, and end with a compact settlement instead of a scattered test world.",
    steps: [
      "Check graphics, text readability, controls, and the latest patch notes.",
      "Gather only nearby food and core materials before placing distant structures.",
      "Build storage, first workstations, and a small protected food route.",
      "Stop after one night and decide whether the next issue is layout, food, or co-op roles.",
    ],
    links: [
      { href: "/beginner-guide", label: "Beginner route" },
      { href: "/system-requirements", label: "PC check" },
      { href: "/base-building", label: "Base core" },
    ],
  },
  {
    id: "coop-host",
    label: "Co-op host",
    title: "Group setup before a long world",
    context: "Best for 2-8 player groups that want fewer restart saves.",
    payoff:
      "Turn the first session into a clean role test: host, food lead, builder, scout, storage keeper, and defense support.",
    steps: [
      "Confirm every player is on the same PC build before creating a permanent world.",
      "Run a short reconnect, save, and storage-sharing test.",
      "Assign one food lead and one base builder before scouts leave town.",
      "Use the first night to test defense timing instead of spreading the base wider.",
    ],
    links: [
      { href: "/multiplayer-coop", label: "Co-op setup" },
      { href: "/best-base-layout", label: "Group layout" },
      { href: "/farming", label: "Food lead" },
    ],
  },
  {
    id: "stalled-town",
    label: "Stalled town",
    title: "Fix the bottleneck you can see",
    context: "Best when the settlement works, but progress feels slow.",
    payoff:
      "Name the blocker before changing everything. Most stalls are storage, food, workers, or defense, not a need to restart.",
    steps: [
      "Write down the first shortage that appears twice in one session.",
      "Move storage or farms closer before expanding the footprint.",
      "Assign survivors around one bottleneck instead of every possible task.",
      "After the fix, run one short trip and check whether the same shortage returns.",
    ],
    links: [
      { href: "/survivors", label: "Survivors" },
      { href: "/farming", label: "Food loop" },
      { href: "/base-building", label: "Storage flow" },
    ],
  },
  {
    id: "build-choice",
    label: "Build choice",
    title: "Pick a blessing by problem",
    context: "Best when gods, weapons, or trinkets feel like a vague tier list.",
    payoff:
      "Choose the support that changes your next session, then retest after patches instead of locking into a fake final meta.",
    steps: [
      "Choose one pressure: food, night defense, crafting speed, exploration risk, or combat.",
      "Keep the same base route while testing the blessing or gear choice.",
      "Record what changed in one sentence before recommending it.",
      "Recheck after major patches, new biomes, or a larger settlement.",
    ],
    links: [
      { href: "/gods-blessings", label: "Gods guide" },
      { href: "/beginner-guide", label: "Defense basics" },
      { href: "/best-base-layout", label: "Layout check" },
    ],
  },
];

export function SettlementPlanner() {
  const [activeRouteId, setActiveRouteId] = useState(plannerRoutes[0].id);
  const activeRoute = useMemo(
    () =>
      plannerRoutes.find((route) => route.id === activeRouteId) ??
      plannerRoutes[0],
    [activeRouteId],
  );

  return (
    <section className="settlement-planner" aria-labelledby="planner-heading">
      <div className="section-heading-row planner-heading">
        <div>
          <p className="eyebrow">Run planner</p>
          <h2 id="planner-heading">Choose the next session, not another blog post</h2>
        </div>
        <p>
          Romestead players come back when the page gives them a next run to try. Pick the
          current problem and follow a short route into the deeper guide.
        </p>
      </div>

      <div className="planner-tabs" aria-label="Choose a Romestead session route">
        {plannerRoutes.map((route) => (
          <button
            aria-pressed={activeRoute.id === route.id}
            className="planner-tab"
            key={route.id}
            onClick={() => setActiveRouteId(route.id)}
            type="button"
          >
            {route.label}
          </button>
        ))}
      </div>

      <div className="planner-card">
        <div className="planner-summary">
          <span>Current route</span>
          <h3>{activeRoute.title}</h3>
          <p>{activeRoute.context}</p>
          <strong>{activeRoute.payoff}</strong>
        </div>
        <ol className="planner-steps">
          {activeRoute.steps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
        <div className="planner-links" aria-label="Continue this route">
          {activeRoute.links.map((link) => (
            <Link href={link.href} key={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
