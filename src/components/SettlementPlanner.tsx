"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { ActionChecklist } from "@/components/ActionChecklist";

const ACTIVE_ROUTE_STORAGE_KEY = "romestead-next-run-route:v1";

const plannerRoutes = [
  {
    id: "performance-controls",
    label: "FPS / controls",
    title: "Current-build comfort check",
    context:
      "Best when controller behavior, FPS drops, or micro-stutter could decide whether you keep playing.",
    payoff:
      "Separate PC setup problems from Early Access issues before you abandon a save or miss a refund window.",
    steps: [
      "Verify files, set the high-performance GPU, and check display refresh rate.",
      "Test fullscreen/windowed, VSync, and one graphics setting at a time.",
      "Try keyboard/mouse and controller separately so input issues do not hide performance issues.",
      "Recheck after the latest hotfix before changing several settings again.",
    ],
    links: [
      { href: "/system-requirements", label: "PC fixes" },
      { href: "/steam-deck", label: "Deck check" },
      { href: "/release-date", label: "Build status" },
    ],
  },
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
    label: "Co-op",
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
    label: "Base stuck",
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
    id: "farming-workers",
    label: "Farm / workers",
    title: "Food, wells, NPC work, and assignments",
    context:
      "Best when villagers, watering, food demand, or repeated work orders are slowing the town.",
    payoff:
      "Turn vague worker frustration into one fixable loop: water, food storage, assignment, hauling, or Carpenter support.",
    steps: [
      "Check whether food storage and wells are close enough before adding more crops.",
      "Assign workers around the repeated shortage, not every possible chore.",
      "Review cancel-work and repeating-order behavior before assuming a worker is broken.",
      "Expand farms only after the town can harvest, store, and defend the food.",
    ],
    links: [
      { href: "/farming", label: "Farming route" },
      { href: "/survivors", label: "Worker roles" },
      { href: "/base-building", label: "Storage flow" },
    ],
  },
  {
    id: "build-choice",
    label: "Gods / build",
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
  {
    id: "boss-explore",
    label: "Boss / explore",
    title: "Prepare before pushing outward",
    context:
      "Best when you want bosses, biomes, weapons, or trinkets but the town may not survive the trip.",
    payoff:
      "Keep exploration from turning into a restart by checking food, gear, return paths, and settlement defense first.",
    steps: [
      "Build a food buffer before leaving town for a longer route.",
      "Upgrade gear only for the fight or biome you are actually attempting.",
      "Mark the return path and leave one base task running while you scout.",
      "After the trip, record whether the blocker was combat, food, storage, or defense.",
    ],
    links: [
      { href: "/gods-blessings", label: "Blessings" },
      { href: "/beginner-guide", label: "Defense basics" },
      { href: "/farming", label: "Food buffer" },
    ],
  },
];

const currentBuildChecks = [
  {
    label: "Controller, FPS, or micro-stutter",
    href: "/system-requirements",
    status: "Community-reported",
  },
  {
    label: "Co-op host, save, reconnect, or LAN",
    href: "/multiplayer-coop",
    status: "Current-build check",
  },
  {
    label: "NPC farming, well placement, or repeated work",
    href: "/farming",
    status: "Needs Testing",
  },
  {
    label: "Walls, raids, pathing, and base sprawl",
    href: "/best-base-layout",
    status: "Needs Testing",
  },
];

export function SettlementPlanner() {
  const [activeRouteId, setActiveRouteId] = useState(plannerRoutes[0].id);
  const [hasSavedRoute, setHasSavedRoute] = useState(false);
  const activeRoute = useMemo(
    () =>
      plannerRoutes.find((route) => route.id === activeRouteId) ??
      plannerRoutes[0],
    [activeRouteId],
  );

  useEffect(() => {
    const savedRoute = window.localStorage.getItem(ACTIVE_ROUTE_STORAGE_KEY);
    if (savedRoute && plannerRoutes.some((route) => route.id === savedRoute)) {
      setActiveRouteId(savedRoute);
      setHasSavedRoute(true);
    }
  }, []);

  function chooseRoute(routeId: string) {
    window.localStorage.setItem(ACTIVE_ROUTE_STORAGE_KEY, routeId);
    setActiveRouteId(routeId);
    setHasSavedRoute(true);
  }

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

      <div className="returning-player">
        <div>
          <p className="eyebrow">Returning player</p>
          <h3>{hasSavedRoute ? "Continue your saved next run" : "Pick a route once, then come back to it"}</h3>
        </div>
        <p>
          This browser remembers the selected route and checked tasks locally, so a player can
          return after a patch or a failed save and keep working from the same checklist.
        </p>
      </div>

      <div className="planner-tabs" aria-label="Choose a Romestead session route">
        {plannerRoutes.map((route) => (
          <button
            aria-pressed={activeRoute.id === route.id}
            className="planner-tab"
            key={route.id}
            onClick={() => chooseRoute(route.id)}
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
        <ActionChecklist
          compact
          storageKey={`planner:${activeRoute.id}`}
          steps={activeRoute.steps}
          title="Save this next run"
        />
        <div className="planner-links" aria-label="Continue this route">
          {activeRoute.links.map((link) => (
            <Link href={link.href} key={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="build-radar" aria-label="Current build checks">
        <div>
          <p className="eyebrow">Current build radar</p>
          <h3>Recheck these after hotfixes</h3>
        </div>
        <div className="build-radar-grid">
          {currentBuildChecks.map((check) => (
            <Link href={check.href} key={check.label}>
              <span>{check.status}</span>
              <strong>{check.label}</strong>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
