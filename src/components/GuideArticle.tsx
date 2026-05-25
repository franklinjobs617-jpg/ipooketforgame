import type { GuideBrief } from "@/lib/guides";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQSection } from "@/components/FAQSection";
import { FastAnswerBox } from "@/components/FastAnswerBox";
import { GuideTable } from "@/components/GuideTable";
import { ImagePanel } from "@/components/ImagePanel";
import { PixelHero } from "@/components/PixelHero";
import { RelatedGuides } from "@/components/RelatedGuides";
import { WikiCategoryGrid } from "@/components/WikiCategoryGrid";
import { ActionSteps } from "@/components/ActionSteps";
import { PlayerGoalGrid } from "@/components/PlayerGoalGrid";
import { SourcePanel } from "@/components/SourcePanel";
import { TableOfContents } from "@/components/TableOfContents";
import Link from "next/link";
import { getGuideBySlug, getGuidePath } from "@/lib/guides";

export function GuideArticle({ guide }: { guide: GuideBrief }) {
  const playerCopy = getPlayerCopy(guide.slug);

  return (
    <main>
      <div className="site-shell">
        <Breadcrumbs guide={guide} />
        <PixelHero guide={guide} />
        <FastAnswerBox guide={guide} />
        <TableOfContents guide={guide} />
        {!guide.slug ? <PlayerGoalGrid /> : null}
        {!guide.slug ? <WikiCategoryGrid /> : null}

        <section className="content-band">
          <div className="article-grid">
            <article className="article-body">
              <p className="source-note">{playerCopy.note}</p>
              <ImagePanel guide={guide} />
              {guide.sections.map((section) => (
                <section key={section.heading}>
                  <h2>{section.heading}</h2>
                  <p>{section.body}</p>
                  {section.bullets ? (
                    <ul>
                      {section.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  ) : null}
                  {section.links ? (
                    <div className="section-links">
                      {section.links.map((slug) => {
                        const linkedGuide = getGuideBySlug(slug);
                        if (!linkedGuide) return null;
                        return (
                          <Link href={getGuidePath(slug)} key={slug || "home"}>
                            Continue with {linkedGuide.h1.replace("Romestead ", "")}
                          </Link>
                        );
                      })}
                    </div>
                  ) : null}
                </section>
              ))}
            </article>
            <aside className="route-card">
              <p className="eyebrow">Use this when</p>
              <h2>Your next move</h2>
              <p>{playerCopy.goal}</p>
              <h3>Before you continue</h3>
              <p>{playerCopy.caution}</p>
              <h3>Jump to</h3>
              <div className="route-chip-list">
                {playerCopy.links.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </aside>
          </div>
        </section>

        {guide.tables.map((table) => (
          <GuideTable table={table} key={table.title} />
        ))}

        <ActionSteps guide={guide} />
        {guide.slug ? <WikiCategoryGrid /> : null}
        <FAQSection faqs={guide.faqs} />
        <SourcePanel />
        <RelatedGuides guide={guide} />
      </div>
    </main>
  );
}

function getPlayerCopy(slug: string) {
  const defaultCopy = {
    note:
      "Start with the answer box, check the table, then use the next steps to decide what to build, test, or read next.",
    goal:
      "Use this page when you need a clear next action instead of a long wiki lookup.",
    caution:
      "Romestead is in Early Access, so check current in-game values before committing rare materials or a long co-op session.",
    links: ["Fast answer", "Next steps", "FAQ"],
  };

  const copyBySlug: Record<string, typeof defaultCopy> = {
    "": {
      note:
        "New to Romestead? Pick the problem in front of you: buying, first day, co-op, base layout, food, survivors, or blessings.",
      goal:
        "Choose a guide based on what is blocking your settlement right now, then follow the route into the related pages.",
      caution:
        "If you have not played yet, check release status and system requirements before planning a long run.",
      links: ["Start guide", "Co-op setup", "Base plan", "Food loop"],
    },
    "release-date": {
      note:
        "Use this page before buying or organizing a group session so everyone knows the current Steam and platform status.",
      goal:
        "Confirm whether Romestead is available for your platform, then decide whether to buy now, try a demo, or wait.",
      caution:
        "Store buttons, demo access, and Early Access notes can change around launch.",
      links: ["Steam status", "Demo check", "Console status", "Worth it"],
    },
    "beginner-guide": {
      note:
        "Follow this route during your first hour: gather nearby supplies, build core stations, protect food, then explore.",
      goal:
        "Use this page when you are starting a settlement and need a safe first-day order.",
      caution:
        "Do not push deep exploration until food, storage, and defense can recover from mistakes.",
      links: ["First day", "Storage", "Defense", "Exploration"],
    },
    "multiplayer-coop": {
      note:
        "Before a long co-op world, assign roles and test saves, reconnects, storage sharing, and group pacing.",
      goal:
        "Use this page when your group needs a clean co-op setup instead of everyone doing the same job.",
      caution:
        "Crossplay, split-screen, and host-save behavior should be checked in the current build.",
      links: ["Player count", "Group roles", "Host checks", "Shared storage"],
    },
    "system-requirements": {
      note:
        "Check requirements before buying, especially if you plan to host co-op or play on older hardware.",
      goal:
        "Use this page to decide whether your PC is ready and what to check if performance feels rough.",
      caution:
        "Large settlements and co-op sessions can feel different from early solo play.",
      links: ["Minimum specs", "Recommended checks", "Performance", "Co-op PC"],
    },
    "steam-deck": {
      note:
        "Use this as a handheld checklist: controls, text size, battery, performance, cloud saves, and co-op comfort.",
      goal:
        "Decide whether to play on Steam Deck now or wait for stronger compatibility reports.",
      caution:
        "Handheld comfort can change after patches and Valve compatibility updates.",
      links: ["Deck status", "Controls", "Text size", "Performance"],
    },
    "is-it-worth-it": {
      note:
        "Use this page if you are choosing between buying now, trying a demo, waiting for patches, or playing with friends.",
      goal:
        "Match Romestead's strengths to what you actually enjoy: building, co-op, farming, gods, or survival pressure.",
      caution:
        "Early Access value depends on your tolerance for changes, rough edges, and unfinished systems.",
      links: ["Buy now", "Wait", "Demo first", "Co-op value"],
    },
    "base-building": {
      note:
        "Keep the first base compact: storage near workstations, food protected, paths readable, and expansion space open.",
      goal:
        "Use this page when your town feels messy, slow, or hard to defend.",
      caution:
        "Avoid decorative sprawl until the settlement can handle nights and resource movement.",
      links: ["Storage core", "Workstations", "Farms", "Defense"],
    },
    "best-base-layout": {
      note:
        "Start with a flexible hub layout, then adapt when recipes, enemies, survivors, and co-op needs become clearer.",
      goal:
        "Use this page when you want a practical layout direction without copying a rigid blueprint.",
      caution:
        "No layout should be treated as the final best choice while Early Access balance is changing.",
      links: ["Central storage", "Work zones", "Farms", "Expansion"],
    },
    survivors: {
      note:
        "Recruit around problems: food, gathering, crafting, defense, and upkeep. More people only help if the town supports them.",
      goal:
        "Use this page when survivors are adding confusion instead of making the settlement smoother.",
      caution:
        "Check current job behavior before calling any role the best.",
      links: ["Recruitment", "Jobs", "Food pressure", "Defense"],
    },
    farming: {
      note:
        "Build food around the base plan: crops near storage, protected paths, and enough supply for workers and trips.",
      goal:
        "Use this page when food, crops, animals, or resource loops are slowing your settlement.",
      caution:
        "Crop values and animal usefulness can change, so scale carefully.",
      links: ["Crops", "Food storage", "Animals", "Resource loops"],
    },
    "gods-blessings": {
      note:
        "Pick blessings by problem: food pressure, defense, crafting speed, exploration risk, or combat difficulty.",
      goal:
        "Use this page when you want Roman god choices to support your current build instead of chasing a vague tier list.",
      caution:
        "Blessing rankings need real testing after patches, so avoid spending around unverified claims.",
      links: ["Gods", "Blessings", "Build direction", "Tier caution"],
    },
  };

  return copyBySlug[slug] ?? defaultCopy;
}
