import Link from "next/link";

const playerGoals = [
  {
    label: "I just started",
    href: "/beginner-guide",
    action: "Follow a safe first-day route before exploring too far.",
  },
  {
    label: "I play co-op",
    href: "/multiplayer-coop",
    action: "Split gathering, building, food, scouting, and defense roles.",
  },
  {
    label: "My base is messy",
    href: "/base-building",
    action: "Rebuild around storage, workstations, farms, and short paths.",
  },
  {
    label: "Food is slowing me down",
    href: "/farming",
    action: "Protect crops, storage, and worker routes before expanding.",
  },
  {
    label: "I need build direction",
    href: "/gods-blessings",
    action: "Pick blessings around your current settlement problem.",
  },
  {
    label: "Is the build ready?",
    href: "/release-date",
    action: "Check Steam status, patch notes, platform limits, and Early Access risk.",
  },
];

export function PlayerGoalGrid() {
  return (
    <section className="player-goals" aria-labelledby="player-goals-heading">
      <p className="eyebrow">Start here</p>
      <h2 id="player-goals-heading">Choose what you need next</h2>
      <div className="player-goal-grid">
        {playerGoals.map((goal) => (
          <Link className="player-goal-card" href={goal.href} key={goal.label}>
            <span>{goal.label}</span>
            <p>{goal.action}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
