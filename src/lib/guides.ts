export type GuideStatus = "Confirmed" | "Early Access" | "Needs Testing";

export interface FaqItem {
  question: string;
  answer: string;
}

export interface TableBlock {
  title: string;
  columns: string[];
  rows: string[][];
}

export interface GuideBrief {
  slug: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  title: string;
  metaDescription: string;
  h1: string;
  searchIntent: string;
  status: GuideStatus;
  updatedAt: string;
  fastAnswer: string;
  intro: string;
  playerNote: string;
  updateCaution: string;
  image: string;
  imageAlt: string;
  imageCaption: string;
  actionSteps: string[];
  sections: {
    heading: string;
    body: string;
    bullets?: string[];
    links?: string[];
  }[];
  tables: TableBlock[];
  faqs: FaqItem[];
  relatedSlugs: string[];
}

const updatedAt = "2026-05-25";

export const guideBriefs: GuideBrief[] = [
  {
    slug: "",
    primaryKeyword: "Romestead guide",
    secondaryKeywords: [
      "Romestead wiki",
      "Romestead beginner guide",
      "Romestead co-op",
      "Romestead base building",
      "Romestead Early Access",
    ],
    title: "Romestead Guide Hub: Beginner Tips, Co-op and Base Building",
    metaDescription:
      "Romestead guide hub for Early Access players: release date, co-op, beginner tips, base building, farming, survivors, gods, and PC setup.",
    h1: "Romestead Guide Hub",
    searchIntent:
      "Players want a central Romestead wiki-style hub that quickly points them to release facts, co-op setup, first-day priorities, and settlement systems.",
    status: "Early Access",
    updatedAt,
    fastAnswer:
      "Romestead is a PC Steam Early Access survival town-building game about rebuilding Rome with gathering, crafting, farming, survivor jobs, gods, dungeons, and 1-8 player co-op.",
    intro:
      "Use this hub to pick the right Romestead guide before starting a settlement. The first wave focuses on confirmed store facts and cautious launch-window advice, so you can avoid unsupported claims while Early Access systems are still changing.",
    playerNote:
      "Facts are based on the official Romestead site and Steam store page, with Early Access details treated as changeable.",
    updateCaution:
      "This hub does not present final builds, final layouts, or exact late-game systems as settled while the game is in Early Access.",
    image: "/images/romestead/screenshot-01.webp",
    imageAlt: "Romestead official screenshot showing a Roman-inspired settlement and farming area",
    imageCaption:
      "Official Romestead screenshots show why the site is organized like a wiki: settlement planning, resource loops, co-op tasks, and adventure systems all connect.",
    actionSteps: [
      "Check release and platform status before buying.",
      "Read the beginner guide before starting a first settlement.",
      "Use base building, farming, and survivors pages together because those systems support each other.",
      "Treat gods, best layouts, and Steam Deck advice as launch-window guidance until more player data is stable.",
    ],
    sections: [
      {
        heading: "Start With the Right Guide",
        body:
          "Romestead mixes survival crafting, colony planning, co-op roles, Roman god blessings, and dungeon pressure. Start with release and beginner pages if you have not played yet, then move into layout, farming, survivors, and blessings once your settlement is stable.",
      },
      {
        heading: "What Makes Romestead Different",
        body:
          "The hook is not only building a base. You are rebuilding a Roman-inspired settlement, assigning survivors to useful work, defending against night pressure, and pushing outward into biomes and dungeons when the town can support the risk.",
      },
      {
        heading: "How the Site Is Connected",
        body:
          "The guide structure follows the way a player actually learns Romestead. Release and worth-it pages answer whether to play, beginner and co-op pages answer how to start, then base building, farming, survivors, and blessings explain the systems that keep a settlement alive.",
      },
      {
        heading: "Pick Your Next Problem",
        body:
          "Use the system cards to move from a screenshot or item you recognize into a practical guide. If enemies are pressuring the town, start with beginner defense. If crafting is blocked, go to base building and resources. If a fight feels risky, check blessings and preparation first.",
      },
      {
        heading: "How to Use the Wiki Cards",
        body:
          "Each card is a shortcut to a player problem. Resources and Crafting point toward base-building and farming decisions, Bosses and Weapons point toward preparation, and Survivors point toward jobs, food, and town upkeep. Start with the card that matches what stopped your last run.",
      },
      {
        heading: "When to Stay on This Hub",
        body:
          "Stay on the hub if you are still deciding what kind of Romestead player you are: solo builder, co-op organizer, farming planner, boss hunter, or cautious Early Access buyer. Move into a guide once you know the problem you want solved.",
      },
      {
        heading: "What to Do After You Land Here",
        body:
          "If you came from search and are not sure where to start, make one decision first: are you buying, learning, building, organizing co-op, or fixing a settlement problem? That single choice should decide your next click, not a long list of disconnected wiki terms.",
        bullets: [
          "Buying decision: open Release Date, System Requirements, and Is It Worth It.",
          "First save: open Beginner Guide, then Base Building and Farming.",
          "Group save: open Multiplayer Co-op before anyone starts building randomly.",
          "Stalled town: open Survivors, Farming, or Gods and Blessings based on the bottleneck.",
        ],
      },
      {
        heading: "How This Hub Avoids Bad Early Access Advice",
        body:
          "Romestead is an Early Access game, so the useful answer is often a framework rather than a final meta. This hub separates confirmed facts from test-needed advice: player count, platform status, and broad systems are treated differently from best blessings, final layouts, exact recipes, and late-game performance.",
      },
    ],
    tables: [
      {
        title: "Romestead Quick Answers",
        columns: ["Question", "Best current answer", "Where to go next"],
        rows: [
          ["Is it out?", "Steam lists a May 25/26, 2026 Early Access launch window depending on timezone.", "Release Date"],
          ["Can I play co-op?", "Official information lists 1-8 players with Online Co-op and LAN Co-op.", "Multiplayer Co-op"],
          ["What should I do first?", "Gather food and resources, build core workstations, and keep the first settlement compact.", "Beginner Guide"],
          ["Is Steam Deck safe?", "Treat Steam Deck support as a launch test item until player reports are stable.", "Steam Deck"],
        ],
      },
      {
        title: "Choose the Right Romestead Guide",
        columns: ["If your problem is", "Start with", "Then read"],
        rows: [
          ["I do not know whether to buy", "Release Date", "Is It Worth It"],
          ["My first settlement keeps stalling", "Beginner Guide", "Base Building"],
          ["Food or workers are slowing progress", "Farming", "Survivors"],
          ["My co-op group is disorganized", "Multiplayer Co-op", "Best Base Layout"],
          ["I want stronger combat direction", "Gods and Blessings", "Beginner Guide"],
        ],
      },
    ],
    faqs: [
      {
        question: "What is Romestead?",
        answer:
          "Romestead is a Roman-inspired survival crafting and town-building game with settlement building, farming, survivor management, dungeons, undead pressure, gods, and co-op.",
      },
      {
        question: "Is Romestead a finished game?",
        answer:
          "No. Romestead is an Early Access game, so recipes, balance, performance, UI, and content depth can change during development.",
      },
      {
        question: "How many players can play Romestead?",
        answer:
          "Official information lists 1-8 players, with Online Co-op and LAN Co-op support on PC.",
      },
      {
        question: "What guide should beginners read first?",
        answer:
          "Start with the beginner guide, then read base building, survivors, farming, and gods blessings once the first settlement is stable.",
      },
    ],
    relatedSlugs: [
      "release-date",
      "beginner-guide",
      "multiplayer-coop",
      "base-building",
      "farming",
      "gods-blessings",
    ],
  },
  {
    slug: "release-date",
    primaryKeyword: "Romestead release date",
    secondaryKeywords: [
      "Romestead Early Access",
      "Romestead Steam",
      "Romestead demo",
      "Romestead console",
    ],
    title: "Romestead Release Date, Early Access & Console",
    metaDescription:
      "Romestead release date guide covering Steam Early Access, PC status, demo checks, console status, and what to verify before launch.",
    h1: "Romestead Release Date and Early Access",
    searchIntent:
      "Players want to know when Romestead is available, whether it is Early Access, where to play, and whether console or demo options are confirmed.",
    status: "Confirmed",
    updatedAt,
    fastAnswer:
      "Romestead is listed for PC on Steam with a May 25/26, 2026 Early Access launch window depending on timezone. Console versions are not confirmed by current official store information.",
    intro:
      "This page keeps release facts separate from launch assumptions. Use it to check the Steam date, Early Access status, demo availability, platform support, and what still needs confirmation after unlock.",
    playerNote:
      "Release and platform claims should be checked against Steam and the official site before publication updates.",
    updateCaution:
      "Do not promise a console version, final 1.0 content, or permanent demo access unless an official source confirms it.",
    image: "/images/romestead/screenshot-02.webp",
    imageAlt: "Romestead official screenshot for Early Access release and platform status",
    imageCaption:
      "Release pages should answer practical buying questions first: Steam access, Early Access risk, demo checks, console status, and what to verify before a group run.",
    actionSteps: [
      "Open the current Steam page and confirm the buy or demo button for your region.",
      "Check recent update notes because Early Access builds can change quickly.",
      "Confirm your group is playing on PC before planning co-op.",
      "Use the worth-it page if your decision depends on polish, reviews, or Steam Deck support.",
    ],
    sections: [
      {
        heading: "Current Release Status",
        body:
          "Romestead is presented as a Steam Early Access PC game. Early Access matters because the available content, balance, and polish can change before the full release.",
      },
      {
        heading: "What to Check Before Buying",
        body:
          "Check the Steam buy button in your region, read recent update notes, confirm whether a demo is available, and make sure your group is comfortable with an in-development survival town builder.",
      },
      {
        heading: "Why Release Status Affects Every Other Guide",
        body:
          "Early Access status changes how every page should be read. A base layout, blessing pick, farming loop, or Steam Deck setting can be useful today and need revision after a patch. The release page is the anchor for those update checks.",
      },
      {
        heading: "Platform Questions to Keep Separate",
        body:
          "PC Steam is the confirmed public path. Console, crossplay, and handheld comfort should stay separate from the core release answer so players do not confuse a future purchase with a verified platform.",
      },
      {
        heading: "Launch-Day Checklist",
        body:
          "Before planning a long save, check the Steam store button, the latest announcement, current demo access, and whether your group is all on PC. Do this on launch day rather than relying on older article dates, because store availability can change by region and timezone.",
        bullets: [
          "Confirm the Steam buy, demo, or wishlist button in your own region.",
          "Check whether the latest update notes mention launch timing or known issues.",
          "If you play co-op, confirm everyone owns or can access the same PC build.",
          "If you only play handheld, read the Steam Deck page before buying.",
        ],
      },
      {
        heading: "What Not to Assume From the Release Date",
        body:
          "A release date does not confirm console ports, crossplay, Steam Deck comfort, final balance, or full 1.0 content. Treat those as separate decisions. The release page should answer where and when you can play, while other pages explain whether the current build fits your setup.",
      },
      {
        heading: "What to Do After the Store Unlocks",
        body:
          "Once the Steam page changes from wishlist or demo access to purchase access, do not jump straight into a long co-op world. Confirm the build notes, install size, graphics options, multiplayer menu, and save behavior first. That short check prevents a group from building around assumptions that change after the first patch.",
        bullets: [
          "Solo players should verify controls, text readability, and performance before committing to a long save.",
          "Co-op groups should create a short test world before choosing roles or a permanent host.",
          "Handheld players should check the Steam Deck page before treating the launch build as comfortable.",
          "Buyers on the fence should read the worth-it page after early player reviews appear.",
        ],
        links: ["multiplayer-coop", "steam-deck", "is-it-worth-it"],
      },
    ],
    tables: [
      {
        title: "Release and Platform Status",
        columns: ["Item", "Current status", "Player note"],
        rows: [
          ["Steam PC", "Confirmed", "Use Steam as the main purchase and update source."],
          ["Early Access", "Confirmed", "Expect changes during development."],
          ["Demo", "Needs checking", "Demo availability can change around launch."],
          ["Xbox / PlayStation", "Not confirmed", "Do not plan around console support yet."],
          ["Full 1.0", "Not released", "Wait if you need a finished game."],
        ],
      },
      {
        title: "Why Steam Shows Different Dates",
        columns: ["Date shown", "Why it can differ", "What players should do"],
        rows: [
          ["May 25/26, 2026", "Steam unlock timing can appear differently by timezone.", "Check the Steam page in your own region before planning a session."],
          ["UTC unlock window", "A global launch can cross midnight for some players.", "Treat the UTC time as a reference, not your local clock."],
          ["Demo or buy button", "Store buttons can change around Early Access launch.", "Use the visible Steam button as the final availability signal."],
          ["Console dates", "No Xbox or PlayStation version is confirmed.", "Do not plan a console purchase until an official page appears."],
        ],
      },
      {
        title: "After-Unlock Check",
        columns: ["Check", "Why it matters", "Next page"],
        rows: [
          ["Can you buy or install it?", "Confirms the game is available in your region.", "System Requirements"],
          ["Does a demo still exist?", "Helps cautious players test before buying.", "Is It Worth It"],
          ["Does co-op connect cleanly?", "Prevents a group from losing time on a bad host setup.", "Multiplayer Co-op"],
          ["Does it feel readable on handheld?", "Steam Deck comfort depends on controls and UI, not only launch status.", "Steam Deck"],
        ],
      },
    ],
    faqs: [
      {
        question: "What is the Romestead release date?",
        answer:
          "Romestead is listed for a May 25/26, 2026 Steam Early Access launch window on PC, depending on timezone.",
      },
      {
        question: "Is Romestead Early Access?",
        answer:
          "Yes. Romestead is presented as an Early Access game, so the launch build should be treated as in development.",
      },
      {
        question: "Is Romestead on Xbox or PlayStation?",
        answer:
          "Xbox and PlayStation versions are not confirmed by current official store information.",
      },
      {
        question: "Does Romestead have a demo?",
        answer:
          "Demo availability should be checked directly on Steam because store options can change around release.",
      },
    ],
    relatedSlugs: ["", "beginner-guide", "system-requirements", "is-it-worth-it"],
  },
  {
    slug: "beginner-guide",
    primaryKeyword: "Romestead beginner guide",
    secondaryKeywords: [
      "Romestead first day",
      "Romestead starting tips",
      "Romestead resources",
      "Romestead night defense",
    ],
    title: "Romestead Beginner Guide: First Day, Resources and Defense",
    metaDescription:
      "Romestead beginner guide for first-day resources, workstations, storage, survivors, night defense, and safe exploration in Early Access.",
    h1: "Romestead Beginner Guide",
    searchIntent:
      "New players want a safe first-session route that avoids overextending before the settlement has food, storage, workstations, and defense.",
    status: "Early Access",
    updatedAt,
    fastAnswer:
      "For the first Romestead run, gather food and core resources, build essential workstations, organize storage, keep the base compact, and delay deep exploration until the settlement can survive night pressure.",
    intro:
      "Romestead rewards steady settlement foundations. A good first hour is not about chasing distant dungeons; it is about making sure food, crafting, storage, survivors, and defense support every later decision.",
    playerNote:
      "Beginner advice is based on confirmed survival crafting and town-building systems from official descriptions.",
    updateCaution:
      "Exact recipes, costs, and strongest routes can change during Early Access.",
    image: "/images/romestead/screenshot-03.webp",
    imageAlt: "Romestead official screenshot showing early settlement building and survival planning",
    imageCaption:
      "The safest first run is practical: gather close resources, build a compact core, then expand once food and defense are stable.",
    actionSteps: [
      "Gather nearby wood, stone, and food before leaving the starting area for long trips.",
      "Build storage and core workstations before decorative structures.",
      "Keep the first settlement compact enough to defend at night.",
      "Use survivors and co-op partners to reduce repeated chores instead of scattering work.",
    ],
    sections: [
      {
        heading: "First-Day Priorities",
        body:
          "Start close to home. Collect basic materials, identify food sources, build the first useful stations, and keep your settlement readable before adding distant structures.",
        bullets: [
          "Gather wood, stone, and food before long exploration.",
          "Build stations that unlock storage, tools, and cooking.",
          "Keep early buildings close enough to defend.",
          "Use survivors to reduce repeated chores.",
        ],
      },
      {
        heading: "Avoid Early Overextension",
        body:
          "The fastest way to weaken a settlement is to spread work across too many directions. Explore when the base has enough supplies to recover from a bad trip.",
      },
      {
        heading: "Beginner Route Through the Site",
        body:
          "After this page, read base building for layout, farming for food stability, survivors for job planning, and gods blessings for cautious build direction. Those four pages form the practical first-settlement path.",
      },
      {
        heading: "What Not to Optimize Too Early",
        body:
          "Do not chase a perfect blessing, weapon, or endgame layout before your town has food, storage, and defense. In survival builders, early fundamentals usually matter more than an unverified meta route.",
      },
      {
        heading: "Early Resources to Understand",
        body:
          "The Romestead wiki describes resources as building inputs that can also become materials for item crafting. Stone, lumber, clay, flint shards, and wood sticks matter because they feed tools, workstations, storage, and the first reliable town loop.",
        links: ["base-building", "farming"],
      },
      {
        heading: "When to Automate Resources",
        body:
          "Manual gathering is fine at the start, but the wiki notes that many resources can later be automated with a matching building, an assigned worker, logistics movement, and material storage. Automate the resource you keep running out of first.",
        links: ["survivors", "base-building"],
      },
      {
        heading: "First Hour Route",
        body:
          "A safe first hour should feel boring in a good way: gather close materials, make storage readable, build only what supports the next job, and return before a risky trip becomes expensive. Do not measure progress by distance explored; measure it by whether the town can recover.",
        bullets: [
          "Minutes 0-15: collect close food, stone, sticks, and lumber without starting distant fights.",
          "Minutes 15-30: place storage and the first useful workstation cluster.",
          "Minutes 30-45: secure food and identify the next missing material.",
          "Minutes 45-60: scout one nearby route, then return and repair the town loop.",
        ],
      },
      {
        heading: "Beginner Mistakes That Waste a Save",
        body:
          "The common early failure is not one bad fight. It is a chain of small planning mistakes: scattered resources, farms too far from storage, too many unfinished structures, and exploration that starts before the base has food and defense.",
      },
    ],
    tables: [
      {
        title: "Beginner Priority Table",
        columns: ["Priority", "Do this first", "Why it matters"],
        rows: [
          ["Food", "Secure nearby food sources", "Prevents the first settlement from stalling."],
          ["Storage", "Create a clear resource drop area", "Makes crafting and repairs easier."],
          ["Defense", "Keep the base compact", "Night pressure is easier to manage."],
          ["Exploration", "Scout after basics are stable", "Reduces recovery risk."],
        ],
      },
      {
        title: "Early Resource Use Table",
        columns: ["Resource or material", "What it helps with", "Beginner action"],
        rows: [
          ["Stone", "Early construction and tool progression", "Pick up loose stone first, then use pickaxes on larger rocks when available."],
          ["Lumber", "Structures, workstations, and wood planks", "Chop large trees with an axe and keep logs close to the build core."],
          ["Wood Plank", "Processed wood material", "Turn lumber into planks when a recipe or workstation needs refined wood."],
          ["Clay", "Building and later material chains", "Look for the distinct orange resource and move it with a bucket when needed."],
          ["Flint Shard", "Early tool or crafting inputs", "Break larger flintstones against hard surfaces or use a pickaxe when available."],
          ["Wood Stick", "Simple crafting and early utility", "Throw rocks into trees or cut small trees and bushes for quick sticks."],
        ],
      },
      {
        title: "Beginner Bottleneck Router",
        columns: ["If you feel stuck because", "Fix first", "Then read"],
        rows: [
          ["You cannot finish basic buildings", "Bring stone, lumber, clay, and sticks back to one storage area.", "Base Building"],
          ["Food keeps interrupting exploration", "Build a small protected food loop before scouting farther.", "Farming"],
          ["Workers are not saving time", "Assign them to the repeated job that blocks progress most often.", "Survivors"],
          ["Night pressure keeps undoing progress", "Shrink the working area and defend storage, farms, and stations first.", "Best Base Layout"],
        ],
      },
    ],
    faqs: [
      {
        question: "What should I do first in Romestead?",
        answer:
          "Gather food and resources, build core workstations, organize storage, and keep the first base compact before deep exploration.",
      },
      {
        question: "Should I explore dungeons early?",
        answer:
          "Scout carefully, but avoid serious dungeon pushes until food, storage, and defense are stable.",
      },
      {
        question: "Are there best beginner builds?",
        answer:
          "Treat launch builds as flexible. Early Access balance may change, so prioritize survival fundamentals before fixed builds.",
      },
    ],
    relatedSlugs: ["base-building", "survivors", "farming", "gods-blessings"],
  },
  {
    slug: "multiplayer-coop",
    primaryKeyword: "Romestead multiplayer co-op",
    secondaryKeywords: [
      "Romestead co-op",
      "Romestead 1-8 players",
      "Romestead online co-op",
      "Romestead LAN co-op",
    ],
    title: "Romestead Multiplayer Co-op: 1-8 Players, Online and LAN",
    metaDescription:
      "Romestead multiplayer co-op guide covering 1-8 players, online co-op, LAN co-op, group roles, host cautions, and launch testing.",
    h1: "Romestead Multiplayer Co-op Guide",
    searchIntent:
      "Players want to know how many people can play together, what co-op modes are confirmed, and how to divide work in a settlement.",
    status: "Confirmed",
    updatedAt,
    fastAnswer:
      "Romestead officially supports 1-8 players on PC, with Online Co-op and LAN Co-op listed. Split-screen, crossplay, and host-save behavior should be verified after launch.",
    intro:
      "Co-op is one of Romestead's strongest hooks because settlement work naturally splits into gathering, building, farming, defense, and exploration. The safest first group run uses clear roles instead of eight players doing the same job.",
    playerNote:
      "Player count and co-op feature claims come from official store information.",
    updateCaution:
      "Check the current build before relying on crossplay, dedicated servers, or permanent host-save behavior.",
    image: "/images/romestead/screenshot-04.webp",
    imageAlt: "Romestead official screenshot showing co-op exploration and settlement activity",
    imageCaption:
      "Co-op value comes from splitting meaningful work: gathering, building, farming, defense, and scouting each need different attention.",
    actionSteps: [
      "Start with 2-4 players while learning pacing, then scale up.",
      "Assign one player to resources, one to building, one to food, and one to scouting or defense.",
      "Test reconnects and host saves before committing a long group world.",
      "Keep shared storage readable so players do not duplicate chores.",
    ],
    sections: [
      {
        heading: "Best First Group Setup",
        body:
          "A small group should assign one player to resources, one to building, one to scouting, and one to defense. Larger groups should still keep a clear settlement plan so the town does not become scattered.",
      },
      {
        heading: "Co-op Risks to Test",
        body:
          "Before a long run, test reconnects, host saves, permissions, latency, and whether resource sharing feels stable.",
      },
      {
        heading: "How Co-op Connects to Settlement Systems",
        body:
          "Co-op works best when each player owns a clear system. One player can maintain food, another can gather building materials, another can scout, and another can prepare defense or crafting upgrades.",
      },
      {
        heading: "Large Group Caution",
        body:
          "Eight-player support is exciting, but a larger group can burn through resources and scatter work. Start smaller, learn the settlement rhythm, then scale the group when roles and storage are organized.",
      },
      {
        heading: "30, 60, and 120 Minute Co-op Plan",
        body:
          "A co-op group should not treat eight-player support as permission for eight separate plans. Use time boxes. The first 30 minutes should establish storage and food, the first hour should define work zones, and the second hour should test exploration without abandoning the town.",
        bullets: [
          "First 30 minutes: assign builder, gatherer, food lead, and scout.",
          "First 60 minutes: agree on shared storage names and base expansion direction.",
          "First 120 minutes: send only part of the group scouting while others keep food and defense stable.",
          "Before logging off: verify where the save lives and what the next session needs first.",
        ],
      },
      {
        heading: "How to Stop Co-op Chaos",
        body:
          "Most group problems come from invisible ownership. One player assumes someone else handled food, another drops materials away from storage, and a third starts a fight while the base is exposed. Give every player one recurring responsibility and one backup job.",
      },
      {
        heading: "Co-op Rules That Keep a World Alive",
        body:
          "A good group world needs a few simple rules. Decide who can move shared storage, where new structures go, when the group explores, and what must be repaired before logging off. These rules matter more than perfect builds because they keep the settlement understandable between sessions.",
        bullets: [
          "Do not move central storage without telling the group.",
          "Mark one expansion direction so workstations and farms do not block each other.",
          "Send a scout pair instead of the whole group when food or defense is weak.",
          "End each session by naming the next material, food, or defense goal.",
        ],
        links: ["base-building", "survivors"],
      },
    ],
    tables: [
      {
        title: "Co-op Feature Status",
        columns: ["Feature", "Status", "Player note"],
        rows: [
          ["1-8 players", "Confirmed", "Use smaller groups first while learning pacing."],
          ["Online Co-op", "Confirmed", "Plan roles before leaving the settlement."],
          ["LAN Co-op", "Confirmed", "Useful for local network groups."],
          ["Split-screen", "Not confirmed", "Do not assume couch co-op."],
          ["Crossplay", "Not confirmed", "Only PC Steam is verified right now."],
        ],
      },
      {
        title: "First Co-op Role Split",
        columns: ["Role", "Main job", "Avoid this mistake"],
        rows: [
          ["Builder", "Place storage, workstations, paths, and defensive routes.", "Letting every player place buildings without a shared layout."],
          ["Gatherer", "Feed stone, lumber, clay, and flint into the town loop.", "Dropping materials in scattered piles far from storage."],
          ["Food lead", "Keep crops, storage, and meals ahead of group demand.", "Expanding exploration faster than food production."],
          ["Scout", "Check nearby routes, enemies, and safe return paths.", "Starting distant fights before the base can recover."],
          ["Defender", "Watch night pressure and protect key work zones.", "Defending exposed edges while storage and farms are unprotected."],
        ],
      },
      {
        title: "Co-op Problem Solver",
        columns: ["Group problem", "Likely cause", "Fix before the next session"],
        rows: [
          ["Everyone is gathering the same thing", "No named bottleneck", "Choose one missing material and assign only enough players to it."],
          ["Food disappears too quickly", "Player count grew faster than farms", "Assign a food lead and delay distant exploration."],
          ["The base is hard to use", "Too many builders made separate plans", "Pause expansion and agree on storage, paths, and work zones."],
          ["Players log in confused", "No session handoff", "End with a short next-goal list: food, materials, defense, or exploration."],
        ],
      },
    ],
    faqs: [
      {
        question: "How many players can play Romestead?",
        answer:
          "Official information lists 1-8 players for Romestead.",
      },
      {
        question: "Does Romestead have online co-op?",
        answer:
          "Yes. Online Co-op is listed for Romestead on Steam.",
      },
      {
        question: "Does Romestead support LAN co-op?",
        answer:
          "Yes. LAN Co-op is listed in the Steam feature labels.",
      },
      {
        question: "Does Romestead have crossplay?",
        answer:
          "Crossplay is not confirmed because PC via Steam is the only verified public platform at this check.",
      },
    ],
    relatedSlugs: ["", "beginner-guide", "base-building", "is-it-worth-it"],
  },
  {
    slug: "system-requirements",
    primaryKeyword: "Romestead system requirements",
    secondaryKeywords: [
      "Romestead PC specs",
      "Romestead minimum requirements",
      "Romestead recommended requirements",
      "Romestead performance",
    ],
    title: "Romestead System Requirements and PC Specs",
    metaDescription:
      "Romestead system requirements guide with PC specs, Windows status, RAM, storage, internet needs, and launch performance checks.",
    h1: "Romestead System Requirements",
    searchIntent:
      "Players want to know whether their PC can run Romestead and what to test before committing to a long Early Access save.",
    status: "Confirmed",
    updatedAt,
    fastAnswer:
      "Romestead is a PC Steam game with modest listed requirements, but co-op, settlement growth, and Early Access optimization should still be tested before a long save.",
    intro:
      "System requirements tell you the baseline, not the whole story. In a survival town builder, performance can change as the settlement grows, more survivors work, and co-op sessions add extra load.",
    playerNote:
      "Check the current Steam requirements before buying or hosting a co-op session.",
    updateCaution:
      "Do not guarantee Steam Deck or late-game performance from minimum specs alone.",
    image: "/images/romestead/screenshot-05.webp",
    imageAlt: "Romestead official screenshot showing a larger settlement for PC performance checks",
    imageCaption:
      "A small first base may run differently from a larger settlement with more workers, structures, and co-op activity.",
    actionSteps: [
      "Compare your PC against the current Steam requirements before buying.",
      "Test the first hour with building, menus, combat, and camera movement.",
      "Retest performance after the settlement grows.",
      "Use the Steam Deck page if handheld play is your main plan.",
    ],
    sections: [
      {
        heading: "What to Test First",
        body:
          "After install, test a short session with building, gathering, menu navigation, camera movement, and co-op if you plan to play with friends.",
      },
      {
        heading: "Performance Habits",
        body:
          "Keep graphics settings practical, close capture-heavy background apps, and test a save after the first settlement expands.",
      },
      {
        heading: "Why Minimum Specs Are Not Enough",
        body:
          "A survival town builder can become heavier after more buildings, workers, crops, enemies, and co-op players enter the save. Treat the first hour as a baseline, then retest once the settlement grows.",
      },
      {
        heading: "When to Use This Page Again",
        body:
          "Return to this page after major patches, before a co-op campaign, and before switching to handheld play. Performance advice is most useful when tied to the exact way you plan to play.",
      },
      {
        heading: "What Specs Cannot Tell You",
        body:
          "Minimum requirements only answer whether the game should start. They do not prove comfort in a growing settlement. Romestead can become more demanding when there are more buildings, workers, crops, enemies, and co-op activity on screen.",
      },
      {
        heading: "Best Settings Test Before a Long Save",
        body:
          "Run a practical test instead of staring at spec numbers. Move the camera around a built area, open storage, place a structure, fight briefly, and test co-op if that is your main mode. If any of those feel rough, fix settings before committing hours to the save.",
        bullets: [
          "Watch frame consistency while moving through a settlement.",
          "Check input response during building placement and inventory movement.",
          "Test heat, fan noise, or battery drain if playing on a handheld PC.",
          "Retest after patches because Early Access performance can move in either direction.",
        ],
      },
      {
        heading: "When Performance Gets Worse Later",
        body:
          "If the first hour runs well but a later save feels worse, look at settlement density before blaming one setting. More farms, workers, storage movement, enemies, and co-op players can create heavier scenes. Test the same save after changing one thing at a time so you know what actually helped.",
        links: ["base-building", "multiplayer-coop"],
      },
    ],
    tables: [
      {
        title: "PC Setup Checklist",
        columns: ["Check", "Why it matters", "When to retest"],
        rows: [
          ["Windows PC", "Confirmed platform focus", "Before purchase"],
          ["RAM", "Settlement games can grow heavier over time", "After the town expands"],
          ["Storage", "Patch space matters during Early Access", "After updates"],
          ["Internet", "Needed for online co-op", "Before group sessions"],
        ],
      },
      {
        title: "Performance Test Route",
        columns: ["Test step", "What to watch", "Next action"],
        rows: [
          ["Open menus and inventory", "Input delay, text readability, cursor comfort", "Adjust resolution or UI settings before a long save."],
          ["Build a compact base", "Frame drops during placement and camera movement", "Lower settings if placement feels inconsistent."],
          ["Add farms and storage", "Stutter around repeated jobs and item movement", "Retest after the settlement grows."],
          ["Try co-op", "Latency, reconnect behavior, and host stability", "Run a short test before a long group world."],
        ],
      },
      {
        title: "Performance Symptom Table",
        columns: ["Symptom", "Check first", "Useful next step"],
        rows: [
          ["Stutter near the town", "Settlement size, storage clutter, and worker routes", "Simplify the base core before lowering every setting."],
          ["Menus feel slow", "Resolution, UI scaling, and background apps", "Retest inventory and storage after changes."],
          ["Co-op feels worse than solo", "Host PC, connection, and player count", "Run a short two-player test before an eight-player session."],
          ["Handheld battery drains fast", "Power profile and graphics settings", "Use the Steam Deck checklist before a long save."],
        ],
      },
    ],
    faqs: [
      {
        question: "What are the Romestead system requirements?",
        answer:
          "Check the Steam store page for the latest listed minimum and recommended PC requirements before buying.",
      },
      {
        question: "Does Romestead need internet?",
        answer:
          "Online co-op needs an internet connection. Solo play requirements should be checked against the current Steam listing.",
      },
      {
        question: "Will Romestead run well late game?",
        answer:
          "Late-game performance needs player testing because settlement size, updates, and co-op sessions can affect performance.",
      },
    ],
    relatedSlugs: ["steam-deck", "release-date", "is-it-worth-it", "multiplayer-coop"],
  },
  {
    slug: "steam-deck",
    primaryKeyword: "Romestead Steam Deck",
    secondaryKeywords: [
      "Romestead handheld",
      "Romestead controller support",
      "Romestead Deck settings",
      "Romestead performance",
    ],
    title: "Romestead Steam Deck: Compatibility Checks",
    metaDescription:
      "Romestead Steam Deck guide with cautious compatibility status, controls, text readability, performance checks, and Early Access caveats.",
    h1: "Romestead Steam Deck Guide",
    searchIntent:
      "Handheld players want to know whether Romestead is safe to buy for Steam Deck and what to test before a long settlement save.",
    status: "Needs Testing",
    updatedAt,
    fastAnswer:
      "Treat Romestead Steam Deck support as a launch-window test item unless Valve or stable player reports confirm compatibility. Check controls, text size, performance, cloud saves, and co-op before committing.",
    intro:
      "Steam Deck questions need careful wording because a game can launch on PC without being comfortable on a handheld screen. Romestead's UI, settlement management, building controls, and co-op flow should be tested directly.",
    playerNote:
      "Check the latest Steam Deck label and recent player reports before relying on handheld play.",
    updateCaution:
      "Do not call Romestead Steam Deck Verified unless Valve or Steam displays that status.",
    image: "/images/romestead/screenshot-06.webp",
    imageAlt: "Romestead official screenshot used for Steam Deck readability and control checks",
    imageCaption:
      "Handheld comfort depends on more than launch support: text size, building placement, menus, and long-session performance all matter.",
    actionSteps: [
      "Check Steam's compatibility label before purchase.",
      "Test text size in menus, storage, and build placement screens.",
      "Try combat, farming, and building controls in one short session.",
      "Verify cloud save behavior before switching between desktop and Deck.",
    ],
    sections: [
      {
        heading: "Deck Checks Before a Long Save",
        body:
          "Open menus, place buildings, manage storage, read small text, fight at night, and test battery behavior before treating the Deck as your main platform.",
      },
      {
        heading: "Controls and Readability",
        body:
          "Building and inventory-heavy games can feel different on handheld controls. If cursor precision or text size feels rough, use a short refund-window test before a long run.",
      },
      {
        heading: "Best Handheld Test Route",
        body:
          "Do not judge Steam Deck comfort from the title screen. Build a small structure, move items through storage, read menus, fight a short encounter, and check battery drain before deciding.",
      },
      {
        heading: "Why This Page Stays Conservative",
        body:
          "Steam Deck labels and player reports can change quickly after launch. This page should upgrade from cautious advice only when there is a stable compatibility signal.",
      },
      {
        heading: "Steam Deck Buy-or-Wait Test",
        body:
          "For Deck-first players, the right question is not only whether Romestead launches. The better question is whether building, storage, reading menus, and fighting are comfortable on a small screen for a full session.",
        bullets: [
          "Buy only if you are willing to test within the refund window.",
          "Wait if you need verified status, large text, and stable late-game performance.",
          "Use desktop first if you plan a serious co-op world and Deck support is uncertain.",
          "Retest after major patches because compatibility labels can change.",
        ],
      },
      {
        heading: "Controls Matter More Than FPS Alone",
        body:
          "A steady frame rate is not enough for a town builder. If building placement, item movement, or menu reading feels awkward, the game can be technically playable but still a poor handheld fit.",
      },
      {
        heading: "Deck Players Need a Different First Hour",
        body:
          "Desktop players can focus on progression, but Deck-first players should spend the first hour testing comfort. Build, move resources, read several menus, fight briefly, and suspend the system once. If any basic action feels annoying in the first hour, it will feel worse in a long settlement save.",
        links: ["system-requirements", "is-it-worth-it"],
      },
    ],
    tables: [
      {
        title: "Steam Deck Test Checklist",
        columns: ["Area", "What to test", "Risk"],
        rows: [
          ["Text", "Menus, item names, job labels", "Small text can slow settlement management."],
          ["Controls", "Building placement and inventory movement", "Cursor-heavy UI may need tuning."],
          ["Performance", "First base and expanding base", "Early runs may not show late-game load."],
          ["Cloud saves", "Desktop to Deck transfer", "Needs confirmation before switching devices."],
        ],
      },
      {
        title: "Handheld Test Route",
        columns: ["Step", "Pass if", "Fail if"],
        rows: [
          ["Read the first menus", "Item names and labels are comfortable without squinting.", "Text forces you to lean in or pause constantly."],
          ["Place a building", "Controls feel precise enough for layout work.", "Placement feels slow, jumpy, or frustrating."],
          ["Move resources", "Inventory and storage actions feel repeatable.", "Basic hauling takes too many awkward inputs."],
          ["Fight a short encounter", "Camera, dodge, and targeting feel readable.", "Combat clarity drops on the smaller screen."],
        ],
      },
      {
        title: "Steam Deck Decision Table",
        columns: ["Result after testing", "Best decision", "Why"],
        rows: [
          ["Menus and placement feel comfortable", "Continue, but retest after the base grows.", "Early comfort does not prove late-save comfort."],
          ["Text is hard to read", "Wait or play desktop first.", "Small text hurts every storage, crafting, and survivor decision."],
          ["Combat is readable but building is awkward", "Use Deck for light sessions only.", "Base planning needs precision over time."],
          ["Performance drops during basic building", "Wait for patches or stronger reports.", "A larger settlement is likely to be heavier."],
        ],
      },
    ],
    faqs: [
      {
        question: "Is Romestead Steam Deck Verified?",
        answer:
          "Do not treat Romestead as Steam Deck Verified unless Steam or Valve displays that status.",
      },
      {
        question: "Can I play Romestead handheld?",
        answer:
          "It may be possible on PC handhelds, but controls, readability, and performance should be tested before a long save.",
      },
      {
        question: "What should Steam Deck players test first?",
        answer:
          "Test text size, building placement, inventory controls, performance after settlement growth, and cloud save behavior.",
      },
    ],
    relatedSlugs: ["system-requirements", "is-it-worth-it", "beginner-guide"],
  },
  {
    slug: "is-it-worth-it",
    primaryKeyword: "Is Romestead worth it",
    secondaryKeywords: [
      "Romestead review",
      "Romestead buy or wait",
      "Romestead Early Access worth it",
      "Romestead co-op value",
    ],
    title: "Is Romestead Worth It in Early Access? Buy Now or Wait",
    metaDescription:
      "Is Romestead worth it? Compare Early Access risk, co-op value, base building, Steam Deck uncertainty, and who should buy now or wait.",
    h1: "Is Romestead Worth It?",
    searchIntent:
      "Players want a buying decision based on Early Access risk, co-op value, genre fit, performance uncertainty, and whether they should wait for 1.0.",
    status: "Early Access",
    updatedAt,
    fastAnswer:
      "Romestead is worth watching or buying if you want a Roman-inspired survival town builder with co-op and accept Early Access changes. Wait if you need polished 1.0 balance, confirmed Steam Deck support, or settled late-game reports.",
    intro:
      "The buying decision depends less on one review score and more on fit. Romestead is strongest for players who like settlement planning, resource loops, co-op roles, and Early Access discovery.",
    playerNote:
      "Use Steam store facts, official feature descriptions, player reviews, and patch notes for future updates.",
    updateCaution:
      "Base the buy-or-wait decision on the current build, recent reviews, and your tolerance for Early Access changes.",
    image: "/images/romestead/screenshot-07.webp",
    imageAlt: "Romestead official screenshot showing town building and survival action for buy or wait advice",
    imageCaption:
      "Romestead is strongest for players who enjoy building a working settlement, not just reading a fixed walkthrough.",
    actionSteps: [
      "Buy now if Early Access discovery is part of the fun for you.",
      "Try a demo first if performance, controls, or camera comfort are your main concerns.",
      "Wait if you need a finished 1.0 loop or confirmed handheld support.",
      "Read co-op and base building pages before buying for a group.",
    ],
    sections: [
      {
        heading: "Buy Now If",
        body:
          "Buy now if your main interest is building a Roman-inspired settlement, dividing work with friends, and learning systems as Early Access evolves.",
      },
      {
        heading: "Wait If",
        body:
          "Wait if you need a finished campaign, verified handheld support, stable late-game performance, or a fully mapped meta.",
      },
      {
        heading: "Best Fit Players",
        body:
          "Romestead is strongest for players who like base planning, co-op division of labor, resource management, farming, and discovering systems while a game evolves.",
      },
      {
        heading: "Poor Fit Players",
        body:
          "It is a weaker fit if you mainly want PvP, a finished story campaign, console certainty, or a complete wiki with every recipe and boss route already solved.",
      },
      {
        heading: "Who Should Buy on Day One",
        body:
          "Romestead is a better day-one fit for players who enjoy learning systems while they change. If you like base planning, co-op roles, food loops, Roman god flavor, and discovering rough edges with a group, Early Access can be part of the appeal.",
      },
      {
        heading: "Who Should Wait",
        body:
          "Wait if you need a finished campaign, settled balance, complete recipe data, verified Steam Deck comfort, or console support. Those needs are reasonable, but they point toward waiting for more reports rather than forcing an Early Access purchase.",
        bullets: [
          "Wait for reviews if performance is your main concern.",
          "Wait for wiki depth if you dislike discovering recipes and systems yourself.",
          "Wait for 1.0 if you want a stable final meta.",
          "Try a demo first if controls or camera comfort matter most.",
        ],
      },
      {
        heading: "What to Do If You Buy Now",
        body:
          "If you buy during Early Access, treat the first session like a test run. Learn the controls, build a compact settlement, try one short exploration route, and check whether the loop makes you want another session. Do not judge the game only by how much content is solved on day one.",
        bullets: [
          "Play one short solo session before organizing a large co-op world.",
          "Use the beginner guide to avoid wasting the first save on scattered building.",
          "Check performance before you pass the refund window.",
          "Return after patches if the idea appeals to you but the current build feels rough.",
        ],
        links: ["beginner-guide", "system-requirements"],
      },
    ],
    tables: [
      {
        title: "Buy or Wait Decision",
        columns: ["Player type", "Recommendation", "Reason"],
        rows: [
          ["Co-op builders", "Consider buying", "1-8 player co-op is a strong hook."],
          ["Solo survival fans", "Consider buying", "The loop fits players who like settlement pressure."],
          ["Steam Deck-only players", "Wait", "Compatibility needs proof."],
          ["1.0-only players", "Wait", "Early Access can change for 1-2 years."],
        ],
      },
      {
        title: "Decision Checklist",
        columns: ["If this matters most", "Better choice", "Why"],
        rows: [
          ["Playing with friends this week", "Buy or try now", "Co-op is one of the clearest confirmed hooks."],
          ["Complete recipe and boss data", "Wait", "Early Access guides and wiki data are still filling in."],
          ["Settlement building and farming", "Buy or demo first", "The core fantasy fits base planners and resource-loop players."],
          ["Console play", "Wait", "Xbox and PlayStation versions are not confirmed."],
          ["Handheld-only play", "Wait or test fast", "Steam Deck comfort needs current player reports."],
        ],
      },
      {
        title: "Player Fit Table",
        columns: ["You enjoy", "Romestead fit", "Read next"],
        rows: [
          ["Co-op town projects", "Strong fit if your group likes assigned roles.", "Multiplayer Co-op"],
          ["Compact survival planning", "Strong fit if base layout and resources are the appeal.", "Base Building"],
          ["Finished wiki routes", "Weaker fit at launch because data is still forming.", "Beginner Guide"],
          ["Handheld-only play", "Unclear fit until compatibility reports are stable.", "Steam Deck"],
        ],
      },
    ],
    faqs: [
      {
        question: "Is Romestead worth buying now?",
        answer:
          "It is worth considering if you want Early Access survival town building and accept changing systems.",
      },
      {
        question: "Should co-op players buy Romestead?",
        answer:
          "Co-op is one of the clearest reasons to watch Romestead, but groups should test host saves and session stability early.",
      },
      {
        question: "Should I wait for Romestead 1.0?",
        answer:
          "Wait for 1.0 if you need a finished, stable, fully documented experience.",
      },
    ],
    relatedSlugs: ["release-date", "multiplayer-coop", "steam-deck", "base-building"],
  },
  {
    slug: "base-building",
    primaryKeyword: "Romestead base building",
    secondaryKeywords: [
      "Romestead settlement",
      "Romestead building guide",
      "Romestead storage",
      "Romestead defense",
    ],
    title: "Romestead Base Building: Storage and Defense",
    metaDescription:
      "Romestead base building guide for settlement layout, storage, workstations, defense, expansion, and Early Access building priorities.",
    h1: "Romestead Base Building Guide",
    searchIntent:
      "Players want practical settlement planning advice for where to place storage, workstations, farms, defenses, and expansion zones.",
    status: "Early Access",
    updatedAt,
    fastAnswer:
      "Build the first Romestead base compact: keep storage near workstations, place food production within easy reach, leave path space, and expand only after defense and resource flow are stable.",
    intro:
      "Base building is the heart of Romestead, but the safest early layout is simple. A compact, readable settlement beats a decorative sprawl when survivors, crafting, and night pressure all need attention.",
    playerNote:
      "Building advice is based on confirmed settlement and crafting themes, with exact placement details left flexible for Early Access.",
    updateCaution:
      "Do not describe exact tile-perfect layouts as final while building rules and balance can change.",
    image: "/images/romestead/screenshot-08.webp",
    imageAlt: "Romestead official screenshot showing settlement construction and base planning",
    imageCaption:
      "Base building connects directly to storage, farming, survivors, and night defense; those pages should be read together.",
    actionSteps: [
      "Place storage where most jobs can reach it quickly.",
      "Keep workstations close enough to share resource flow.",
      "Protect farms and food routes before expanding outward.",
      "Leave open expansion lanes so the first base does not need a full rebuild.",
    ],
    sections: [
      {
        heading: "Compact First Base",
        body:
          "Keep the first base tight enough that storage, crafting, food, and defense support each other. Leave room for paths so the settlement can grow without blocking future upgrades.",
      },
      {
        heading: "Expansion Timing",
        body:
          "Expand after the settlement can handle nights, chores, and resource flow. A wider base creates more walking, more exposed edges, and more planning debt.",
      },
      {
        heading: "Base Building and Farming",
        body:
          "Farms should not be placed as an afterthought. Food production needs access to storage, workers, and defense, so base building and farming pages should be used together.",
      },
      {
        heading: "Base Building and Survivors",
        body:
          "Survivors make a layout stronger only if jobs are close enough to matter. Long walking routes can turn useful workers into wasted time, especially in larger settlements.",
      },
      {
        heading: "Storage Before Decoration",
        body:
          "Resources have weight and movement cost. Put material storage near the workstations that consume stone, lumber, planks, clay, and flint so building does not become a walking simulator.",
        links: ["beginner-guide", "farming"],
      },
      {
        heading: "Build Around the Cart Route",
        body:
          "The wiki notes that resources can be carried or moved with a Wooden Cart. Leave enough path space for hauling routes between gathering points, storage, farms, and construction zones.",
        links: ["best-base-layout", "survivors"],
      },
      {
        heading: "Base Layout Phases",
        body:
          "Think in phases instead of one perfect blueprint. The first phase is survival: storage, food, workstations, and defense close together. The second phase is efficiency: shorter hauling routes and clearer jobs. The third phase is expansion: new zones only after the core keeps working.",
        bullets: [
          "Phase 1: compact core with storage and essential workstations.",
          "Phase 2: protected farms and clear paths to material storage.",
          "Phase 3: automation buildings and worker routes around the core.",
          "Phase 4: expansion zones that do not break old paths.",
        ],
      },
      {
        heading: "How to Tell a Base Is Failing",
        body:
          "A bad base usually feels slow before it feels dangerous. If players spend more time walking than building, if food is far from storage, or if workers cross exposed routes at night, the layout is creating the problem.",
      },
      {
        heading: "Resource Storage Should Match Use",
        body:
          "Do not treat every material pile the same. Keep building materials near construction and workstation zones, keep food near farms and worker paths, and keep exploration supplies easy to grab before leaving town. Storage becomes useful when it answers where a player should drop the next item.",
        links: ["beginner-guide", "survivors"],
      },
    ],
    tables: [
      {
        title: "Base Planning Priorities",
        columns: ["Zone", "Place it near", "Why"],
        rows: [
          ["Storage", "Workstations", "Reduces repeated resource movement."],
          ["Farms", "Food storage and paths", "Keeps food loops readable."],
          ["Defense", "Main approach and work zones", "Protects the settlement core."],
          ["Expansion", "Outside the core", "Avoids rebuilding the first base too soon."],
        ],
      },
      {
        title: "Workstation and Resource Flow",
        columns: ["Base element", "Needs from the player", "Common mistake"],
        rows: [
          ["Material Storage", "A central place for hauled resources", "Putting storage far from the stations that use it."],
          ["Logistics Tent", "Worker-supported movement to town storage", "Automating resources before paths and storage are readable."],
          ["Quarry", "Stone automation once stone becomes a bottleneck", "Building it before the town can use the output efficiently."],
          ["Lumber Yard", "Lumber automation for construction-heavy expansion", "Expanding wood production without enough storage space."],
          ["Clay Pit", "Clay access when clay starts blocking buildings", "Treating clay like a basic carry item without planning bucket movement."],
        ],
      },
      {
        title: "Storage Placement Router",
        columns: ["Material type", "Store closest to", "Why"],
        rows: [
          ["Stone, lumber, clay, and flint", "Workstations and construction zones", "These inputs block buildings and tool progress when scattered."],
          ["Food and crops", "Farms, cooking, and worker routes", "Food only helps if workers can reach and replace it quickly."],
          ["Exploration supplies", "Main exit route", "Players should leave town without crossing the whole base."],
          ["Overflow materials", "Outer storage or expansion zone", "Keeps the core readable while preserving spare resources."],
        ],
      },
    ],
    faqs: [
      {
        question: "How should I build my first Romestead base?",
        answer:
          "Keep it compact, place storage near workstations, protect key paths, and delay decorative sprawl until the settlement is stable.",
      },
      {
        question: "Should I build farms early?",
        answer:
          "Yes, food stability is important, but keep farms close enough to storage and defense to avoid wasted movement.",
      },
      {
        question: "What is the best base layout?",
        answer:
          "Use launch-window principles rather than a fixed layout: compact core, clear paths, close storage, and controlled expansion.",
      },
    ],
    relatedSlugs: ["best-base-layout", "farming", "survivors", "beginner-guide"],
  },
  {
    slug: "best-base-layout",
    primaryKeyword: "Romestead best base layout",
    secondaryKeywords: [
      "Romestead layout",
      "Romestead settlement layout",
      "Romestead base design",
      "Romestead defense layout",
    ],
    title: "Romestead Best Base Layout: Launch-Window Settlement Plan",
    metaDescription:
      "Romestead best base layout guide with cautious launch-window settlement planning for storage, farms, workstations, defense, and expansion.",
    h1: "Romestead Best Base Layout",
    searchIntent:
      "Players want a recommended layout, but the page must avoid pretending one final meta layout is proven during Early Access.",
    status: "Needs Testing",
    updatedAt,
    fastAnswer:
      "The safest Romestead base layout is a compact hub: central storage, nearby workstations, farms on protected edges, short paths, and expansion zones outside the core. Treat this as launch-window guidance, not a final meta.",
    intro:
      "A good Romestead layout should make the settlement easier to run. The goal is not to force a perfect blueprint before the community has tested late-game pressure.",
    playerNote:
      "Layout advice is derived from confirmed settlement systems and general survival town-building principles.",
    updateCaution:
      "Avoid absolute terms like only, always, or strongest when describing layouts.",
    image: "/images/romestead/screenshot-09.webp",
    imageAlt: "Romestead official screenshot showing settlement layout and expansion space",
    imageCaption:
      "A launch-window layout should be easy to adapt after players learn more about recipes, defense pressure, and survivor pathing.",
    actionSteps: [
      "Start with a central storage hub.",
      "Ring the hub with workstations and short walking routes.",
      "Keep farms near protected edges rather than isolated corners.",
      "Reserve open expansion space before placing decorative or low-priority buildings.",
    ],
    sections: [
      {
        heading: "Recommended Layout Shape",
        body:
          "Use a compact core with storage in the middle, workstations close by, food production on reachable edges, and defense facing likely pressure points.",
      },
      {
        heading: "Why This Layout Works Early",
        body:
          "It reduces walking, keeps key jobs visible, and lets you expand without tearing down the entire settlement.",
      },
      {
        heading: "Layout for Co-op Groups",
        body:
          "Co-op layouts need clear shared storage and obvious work zones. If players cannot see where food, crafting, and resources belong, group play becomes messy fast.",
      },
      {
        heading: "Layout for Future Systems",
        body:
          "Leave space for crafting, tools, armor, weapons, and resource pages to become more specific later. A flexible layout beats a fixed blueprint while systems are still being documented.",
      },
      {
        heading: "Practical Blueprint Without Exact Tiles",
        body:
          "Use a hub-and-spoke idea: storage in the center, workstations around it, farms on protected edges, and defense facing the routes you actually use. This gives you a layout you can adapt without pretending that one tile-perfect answer is proven.",
        bullets: [
          "Center: shared material storage and the most-used crafting stations.",
          "Inner ring: food access, repair access, and short worker paths.",
          "Outer ring: farms, automation buildings, and expansion lanes.",
          "Edges: defensive routes and clear return paths from exploration.",
        ],
      },
      {
        heading: "When to Rebuild Instead of Patch",
        body:
          "Small fixes are enough when only one route is slow. Rebuild the core when storage is in the wrong place, farms are exposed, or every new workstation makes the base harder to read.",
      },
      {
        heading: "How to Adapt the Layout After Patches",
        body:
          "When a patch changes recipes, balance, or worker behavior, do not rebuild everything immediately. Watch which route becomes painful first: storage, food, defense, crafting, or exploration. Fix that route, then decide whether the hub still works.",
        links: ["base-building", "farming"],
      },
    ],
    tables: [
      {
        title: "Launch-Window Layout Plan",
        columns: ["Area", "Suggested position", "Reason"],
        rows: [
          ["Central storage", "Middle of base", "Shortens most crafting loops."],
          ["Workstations", "Around storage", "Keeps production efficient."],
          ["Farms", "Protected outer edge", "Leaves space while staying reachable."],
          ["Defense", "Approach routes", "Protects workers and food."],
        ],
      },
      {
        title: "Layout Fix Table",
        columns: ["Symptom", "Likely layout issue", "Fix first"],
        rows: [
          ["Crafting feels slow", "Storage is too far from workstations", "Move material storage closer to the production core."],
          ["Food keeps interrupting trips", "Farms or food storage are poorly placed", "Protect a smaller farm and shorten food routes."],
          ["Night defense feels chaotic", "Workers and farms are spread across exposed edges", "Pull key jobs back toward a defended core."],
          ["Co-op players duplicate work", "Shared zones are not obvious", "Create clear storage, farming, building, and scouting zones."],
        ],
      },
      {
        title: "Layout Decision Router",
        columns: ["Your current goal", "Layout priority", "Avoid"],
        rows: [
          ["First safe night", "Small defended core", "Wide decorative builds."],
          ["Faster crafting", "Storage beside workstations", "Putting every material in a distant warehouse."],
          ["Stable food", "Protected farm edge with short routes", "Huge fields that workers cannot service."],
          ["Co-op expansion", "Named zones for food, building, scouting, and defense", "Eight players making eight base plans."],
        ],
      },
    ],
    faqs: [
      {
        question: "What is the best Romestead base layout?",
        answer:
          "Use a compact hub with central storage, nearby workstations, protected farms, clear paths, and open expansion space.",
      },
      {
        question: "Is this the final best layout?",
        answer:
          "No. Treat it as launch-window guidance until late-game testing confirms stronger layouts.",
      },
      {
        question: "Should I rebuild my base later?",
        answer:
          "Probably. Early Access settlement games often reveal better layouts once recipes, survivors, and defense pressure are clearer.",
      },
    ],
    relatedSlugs: ["base-building", "farming", "survivors", "gods-blessings"],
  },
  {
    slug: "survivors",
    primaryKeyword: "Romestead survivors",
    secondaryKeywords: [
      "Romestead recruitment",
      "Romestead jobs",
      "Romestead workers",
      "Romestead settlement roles",
    ],
    title: "Romestead Survivors: Jobs and Settlement Roles",
    metaDescription:
      "Romestead survivors guide covering recruitment, jobs, worker roles, settlement chores, defense support, and Early Access checks.",
    h1: "Romestead Survivors Guide",
    searchIntent:
      "Players want to understand how survivors support a settlement and how to think about jobs, recruitment, and role planning.",
    status: "Early Access",
    updatedAt,
    fastAnswer:
      "Use Romestead survivors to solve repeated settlement problems: gathering, farming, crafting support, defense, and upkeep. Assign roles by need rather than collecting people without a plan.",
    intro:
      "Survivors are valuable when they reduce friction. A new worker should make food, resources, crafting, defense, or exploration easier instead of adding confusion to the settlement.",
    playerNote:
      "Official descriptions support survivor recruitment and settlement work; exact job systems need launch testing.",
    updateCaution:
      "Do not list exact best survivor jobs until role mechanics are verified in-game.",
    image: "/images/romestead/screenshot-10.webp",
    imageAlt: "Romestead official screenshot showing survivors and settlement work",
    imageCaption:
      "Survivors are valuable when they reduce repeated settlement work and make food, crafting, defense, or exploration easier.",
    actionSteps: [
      "Recruit around settlement needs, not just headcount.",
      "Assign workers to bottlenecks such as food, gathering, crafting, or defense.",
      "Keep jobs close to storage and production zones.",
      "Rebalance roles after expansion changes the settlement's weak point.",
    ],
    sections: [
      {
        heading: "How to Think About Survivors",
        body:
          "Every survivor should answer a settlement need. If food is weak, prioritize food support. If nights are dangerous, prioritize defense and repair support.",
      },
      {
        heading: "Role Planning",
        body:
          "Group roles by recurring tasks: gatherers, farmers, crafters, defenders, and explorers. Keep backups for jobs that become bottlenecks.",
      },
      {
        heading: "Survivors and Food",
        body:
          "Food is the first test of a growing settlement. If every new survivor increases pressure faster than farming can support it, recruitment becomes a problem instead of a solution.",
      },
      {
        heading: "Survivors and Defense",
        body:
          "A larger workforce can help defend the town, but only if the base is built so workers are not spread across exposed edges during night pressure.",
      },
      {
        heading: "Survivors and Resource Automation",
        body:
          "The wiki notes that many resources can be automated by constructing the matching building, assigning a worker, and moving output through logistics into storage. That makes survivor placement part of your resource plan, not a separate system.",
        links: ["base-building", "farming"],
      },
      {
        heading: "When More Workers Become a Problem",
        body:
          "More workers can create more food demand, longer paths, and messier storage. Recruit or assign survivors when they solve a specific bottleneck, then check whether the town can feed and protect them.",
        links: ["farming", "multiplayer-coop"],
      },
      {
        heading: "Recruitment Should Follow Bottlenecks",
        body:
          "Do not recruit only because a survivor is available. First name the bottleneck: food, hauling, crafting, defense, or exploration recovery. Then assign or recruit around that bottleneck and check whether the town can feed the extra worker.",
        bullets: [
          "Food bottleneck: support farming and storage routes first.",
          "Material bottleneck: support gathering, cart movement, or automation buildings.",
          "Crafting bottleneck: shorten storage-to-workstation paths.",
          "Defense bottleneck: keep workers near protected zones before night pressure.",
        ],
      },
      {
        heading: "Good Worker Planning Feels Boring",
        body:
          "If workers are doing their job well, the base feels less dramatic: fewer emergency food runs, fewer missing materials, fewer half-built stations, and less confusion about what the next session should fix.",
      },
      {
        heading: "How to Review Workers After Each Expansion",
        body:
          "Every expansion changes the value of workers. After adding farms, new stations, automation buildings, or a wider defense route, pause and ask whether workers still solve the main bottleneck. A role that was useful in the first hour can become weak when the base layout changes.",
        links: ["base-building", "best-base-layout"],
      },
    ],
    tables: [
      {
        title: "Survivor Role Planning",
        columns: ["Role", "Best use", "Warning"],
        rows: [
          ["Gatherer", "Feeds early crafting loops", "Can overextend if paths are unsafe."],
          ["Farmer", "Stabilizes food", "Needs protected production space."],
          ["Crafter", "Supports upgrades", "Depends on organized storage."],
          ["Defender", "Protects night routines", "Needs gear and positioning."],
        ],
      },
      {
        title: "Worker Assignment Checks",
        columns: ["If the town problem is", "Assign toward", "Check next"],
        rows: [
          ["Stone or lumber shortage", "Quarry or lumber work", "Can storage receive the output?"],
          ["Food shortage", "Farming and food movement", "Are farms protected and near storage?"],
          ["Crafting delay", "Material movement and workstation support", "Are resources scattered across the base?"],
          ["Night losses", "Defense and repair support", "Are workers spread too far apart?"],
          ["Co-op confusion", "Clear shared jobs", "Does every player know where supplies belong?"],
        ],
      },
      {
        title: "Survivor Review Table",
        columns: ["After you add", "Review this worker need", "Warning sign"],
        rows: [
          ["More farms", "Food movement and storage support", "Harvests pile up or food is far from workers."],
          ["More workstations", "Material hauling and crafting support", "Buildings wait on resources that already exist elsewhere."],
          ["More defenses", "Repair, patrol, or night response coverage", "Workers are too far away when pressure starts."],
          ["More co-op players", "Clear task ownership", "Players and workers duplicate the same chores."],
        ],
      },
    ],
    faqs: [
      {
        question: "What do survivors do in Romestead?",
        answer:
          "Survivors help support the settlement through work roles such as gathering, farming, crafting, defense, and upkeep.",
      },
      {
        question: "Should I recruit every survivor?",
        answer:
          "Recruitment should match settlement needs. More workers are useful only if food, jobs, and defense can support them.",
      },
      {
        question: "What are the best survivor jobs?",
        answer:
          "Treat best jobs as unconfirmed until launch testing shows exact role value and bottlenecks.",
      },
    ],
    relatedSlugs: ["beginner-guide", "base-building", "farming", "multiplayer-coop"],
  },
  {
    slug: "farming",
    primaryKeyword: "Romestead farming",
    secondaryKeywords: [
      "Romestead crops",
      "Romestead food",
      "Romestead animals",
      "Romestead resource loop",
    ],
    title: "Romestead Farming: Crops and Food Loops",
    metaDescription:
      "Romestead farming guide for crops, food planning, animal care, storage, settlement loops, and safe Early Access farming priorities.",
    h1: "Romestead Farming Guide",
    searchIntent:
      "Players want to know how farming supports the settlement and how to avoid food or storage problems.",
    status: "Early Access",
    updatedAt,
    fastAnswer:
      "Romestead farming should support settlement stability first: keep crops near storage, protect food production, avoid overexpanding fields, and use animals or crops as part of a wider resource loop.",
    intro:
      "Farming is not separate from base building. Food, storage, survivor work, and defense all shape whether farms help the town or become another chore.",
    playerNote:
      "Farming, animal care, and settlement food loops are treated from official feature descriptions and cautious survival-building logic.",
    updateCaution:
      "Exact crop yields, animal values, and best food sources need in-game confirmation.",
    image: "/images/romestead/screenshot-11.webp",
    imageAlt: "Romestead official screenshot showing crops, farmland, and settlement food planning",
    imageCaption:
      "Food production is a base system, not an isolated activity; farms should support workers, storage, co-op groups, and exploration.",
    actionSteps: [
      "Build a small protected farm before distant exploration.",
      "Place food storage where workers can reach it quickly.",
      "Expand crops after defense and survivor routes are stable.",
      "Track whether animals or crops solve your current bottleneck better.",
    ],
    sections: [
      {
        heading: "Early Farming Priorities",
        body:
          "Start with manageable food production. A smaller protected farm is better than a huge field that pulls workers too far from storage and defense.",
      },
      {
        heading: "Food Storage and Movement",
        body:
          "Place food production where workers can reach storage quickly. The stronger the food loop, the easier it is to support exploration and co-op expansion.",
      },
      {
        heading: "Farming and Base Layout",
        body:
          "Good farms are not just large fields. They need short routes, nearby storage, and protected access so workers can keep producing while the rest of the town grows.",
      },
      {
        heading: "Farming and Exploration",
        body:
          "A stable food loop lets players spend more time in biomes and dungeons. If food is unstable, exploration turns into a recovery problem after every risky trip.",
      },
      {
        heading: "Farming as a Resource Loop",
        body:
          "Treat farming like town infrastructure. Food supports workers, workers support gathering and crafting, and crafting supports better tools, defense, and exploration. If one part breaks, the whole settlement slows down.",
        links: ["survivors", "base-building"],
      },
      {
        heading: "When to Expand Food Production",
        body:
          "Expand farms when storage, worker routes, and defense are already working. A larger field is only better if the town can harvest, store, and protect it without pulling everyone away from other jobs.",
        links: ["best-base-layout", "multiplayer-coop"],
      },
      {
        heading: "Food Buffer Before Adventure",
        body:
          "Before pushing deeper into biomes or dungeons, build a food buffer that lets the town recover from a bad trip. A farm is not just a food source; it is permission to spend time away from the base without every mistake becoming a restart.",
        bullets: [
          "Keep early farms close enough to storage for repeated harvests.",
          "Protect food paths before expanding field size.",
          "Use survivors only when the added food demand is covered.",
          "Check food before boss prep, long scouting, or co-op exploration.",
        ],
      },
      {
        heading: "How Farming Supports Crafting",
        body:
          "Stable food gives workers time to gather, haul, and craft. When food is unstable, every other system slows down because players keep returning to solve hunger instead of building tools, storage, or defenses.",
      },
      {
        heading: "Farming Should Create Time, Not Chores",
        body:
          "A farm is working when it gives players more time to build, scout, and craft. If every session turns into emergency food work, the farm is too small, too exposed, too far from storage, or unsupported by workers. Fix the route before expanding the field.",
        links: ["survivors", "base-building"],
      },
    ],
    tables: [
      {
        title: "Farming Planning Table",
        columns: ["Farm element", "Early goal", "Risk"],
        rows: [
          ["Crops", "Stable food supply", "Overexpansion before defense."],
          ["Animals", "Longer-term resource support", "Needs space and care."],
          ["Storage", "Short walking routes", "Scattered storage slows jobs."],
          ["Defense", "Protect food production", "Unprotected farms can become weak points."],
        ],
      },
      {
        title: "Food Loop Decisions",
        columns: ["Question", "Best early answer", "Related guide"],
        rows: [
          ["Should I farm before exploring?", "Yes, build a small food buffer before risky trips.", "Beginner Guide"],
          ["Where should farms go?", "Near storage and protected paths, not isolated corners.", "Base Building"],
          ["When do survivors help farming?", "When food chores are repeating and storage routes are short.", "Survivors"],
          ["Should co-op groups overbuild farms?", "No, assign one food lead and expand only when the group consumes the buffer.", "Multiplayer Co-op"],
        ],
      },
      {
        title: "Farming Problem Solver",
        columns: ["Problem", "Likely cause", "Fix first"],
        rows: [
          ["Food runs out during trips", "No buffer before exploration", "Pause scouting and build a small reserve."],
          ["Farms feel like busywork", "Fields are too far from storage or workers", "Move food routes closer before adding more plots."],
          ["Workers do not help enough", "Food demand grew faster than support roles", "Review survivor assignments and food storage."],
          ["Co-op drains food fast", "Too many players leave town at once", "Keep one food lead and one base player active."],
        ],
      },
    ],
    faqs: [
      {
        question: "How important is farming in Romestead?",
        answer:
          "Farming is important because food stability supports survivors, crafting, exploration, and co-op growth.",
      },
      {
        question: "Should I build a large farm early?",
        answer:
          "Start smaller and protected. Expand after storage, work routes, and defense can support the farm.",
      },
      {
        question: "What are the best crops in Romestead?",
        answer:
          "Best crop claims need launch testing because yields and balance can change during Early Access.",
      },
    ],
    relatedSlugs: ["base-building", "best-base-layout", "survivors", "beginner-guide"],
  },
  {
    slug: "gods-blessings",
    primaryKeyword: "Romestead gods blessings",
    secondaryKeywords: [
      "Romestead Roman gods",
      "Romestead blessings",
      "Romestead best blessing",
      "Romestead build direction",
    ],
    title: "Romestead Gods and Blessings Guide: Roman Powers and Builds",
    metaDescription:
      "Romestead gods and blessings guide with cautious Early Access advice for Roman powers, build direction, settlement support, and best blessing claims.",
    h1: "Romestead Gods and Blessings Guide",
    searchIntent:
      "Players want to know how Roman gods and blessings affect builds without being misled by unsupported best-pick claims.",
    status: "Needs Testing",
    updatedAt,
    fastAnswer:
      "Treat Romestead gods and blessings as build direction tools during Early Access. Pick blessings that solve your current settlement problem instead of chasing an unverified best blessing.",
    intro:
      "Roman gods are part of Romestead's identity, but the strongest blessing choices need real play data. Early advice should focus on what problem a blessing appears to solve: food, defense, exploration, crafting, or survival.",
    playerNote:
      "The official site highlights Roman gods and blessings; exact effects and best combinations need in-game verification.",
    updateCaution:
      "Do not publish final tier lists until effects, scaling, and patch changes are verified.",
    image: "/images/romestead/screenshot-12.webp",
    imageAlt: "Romestead official screenshot for Roman gods blessings and adventure planning",
    imageCaption:
      "Blessing advice should stay tied to real settlement problems: food pressure, defense, crafting speed, exploration risk, or combat difficulty.",
    actionSteps: [
      "Pick blessings that solve your current settlement problem.",
      "Avoid final tier-list thinking until effects and scaling are tested.",
      "Record what a blessing changes before changing the rest of your route.",
      "Recheck blessing value after major Early Access patches.",
    ],
    sections: [
      {
        heading: "How to Choose Blessings",
        body:
          "Match blessings to the problem in front of you. A settlement struggling with food needs different support than a group pushing dungeons or defending a wider base.",
      },
      {
        heading: "Avoid Early Tier List Traps",
        body:
          "A blessing can look powerful in the first hour and fall off later. Keep notes on what it changes before calling it best.",
      },
      {
        heading: "Blessings and Settlement Problems",
        body:
          "The safest way to choose a blessing is to name the problem first. Food pressure, weak defense, slow crafting, or dungeon risk should point you toward different support.",
      },
      {
        heading: "When to Reevaluate a Blessing",
        body:
          "Reevaluate after major patches, after the settlement expands, and after your group starts pushing dungeons. A blessing that helps a small base may not be the best answer later.",
      },
      {
        heading: "Problem-First Blessing Choice",
        body:
          "Before choosing a god or blessing, write down the problem you are solving. Food pressure, night danger, slow crafting, and risky exploration are different problems. A blessing that helps one may do little for another.",
        bullets: [
          "Food problem: look for support that stabilizes growth or farming.",
          "Defense problem: value survival, repair, or safer night routines.",
          "Crafting problem: value production support or material flow.",
          "Combat problem: value tools that help risky trips outside the base.",
        ],
      },
      {
        heading: "When a Blessing Is Actually Good",
        body:
          "A blessing is good when it changes your next few decisions in a useful way. If it only sounds powerful but does not reduce a bottleneck, save the claim until more testing proves its value.",
      },
      {
        heading: "How to Test a Blessing Without Wasting a Run",
        body:
          "Test blessings against one problem at a time. If you change your base layout, worker roles, weapon plan, and blessing all at once, you will not know what helped. Keep the settlement route stable, then judge whether the blessing reduced the pressure you picked it for.",
        bullets: [
          "Choose one problem before taking the blessing.",
          "Keep food, base layout, and worker roles mostly stable during the test.",
          "Compare the next session against the same route or same bottleneck.",
          "Change the recommendation only after repeated results, not one lucky fight.",
        ],
        links: ["survivors", "base-building"],
      },
    ],
    tables: [
      {
        title: "Blessing Decision Framework",
        columns: ["Settlement problem", "Blessing direction", "Why"],
        rows: [
          ["Food pressure", "Growth or farming support", "Stabilizes survivors and expansion."],
          ["Night danger", "Defense or survival support", "Protects the settlement core."],
          ["Slow crafting", "Production support", "Improves upgrade pacing."],
          ["Dungeon push", "Combat or exploration support", "Helps risky trips outside the base."],
        ],
      },
      {
        title: "What Not to Claim Yet",
        columns: ["Claim", "Why to avoid it", "Safer wording"],
        rows: [
          ["Best god", "Effects, scaling, and patch balance need testing.", "Pick the god that solves your current problem."],
          ["Best blessing", "A strong early blessing may fall off later.", "Treat blessings as launch-window build direction."],
          ["Final tier list", "Early Access systems can change quickly.", "Use tier lists as notes, not rules."],
          ["One correct build", "Solo, co-op, farming, and combat needs differ.", "Match the blessing to the settlement bottleneck."],
        ],
      },
      {
        title: "Blessing Test Log",
        columns: ["Before choosing", "During the test", "Keep it if"],
        rows: [
          ["Name the bottleneck: food, defense, crafting, or combat.", "Run the same settlement route for a short session.", "The bottleneck appears less often without creating a worse one."],
          ["Avoid changing several major systems at once.", "Watch whether the blessing affects real decisions.", "You can explain what changed in one sentence."],
          ["Check whether the group or solo route changes the value.", "Retest after a patch or larger base expansion.", "It still helps after the town grows."],
          ["Do not start with a tier-list claim.", "Compare against the problem you actually had.", "It supports your build better than a generic pick."],
        ],
      },
    ],
    faqs: [
      {
        question: "What are gods and blessings in Romestead?",
        answer:
          "Romestead uses Roman god-themed blessings as part of its settlement and survival progression.",
      },
      {
        question: "What is the best blessing in Romestead?",
        answer:
          "The best blessing is not settled during Early Access. Pick based on your current settlement problem until effects are fully tested.",
      },
      {
        question: "Should I follow a blessing tier list?",
        answer:
          "Use tier lists carefully until patches, scaling, and late-game value are verified.",
      },
    ],
    relatedSlugs: ["beginner-guide", "survivors", "farming", "base-building"],
  },
];

export function getGuideBySlug(slug: string) {
  return guideBriefs.find((guide) => guide.slug === slug);
}

export function getGuidePath(slug: string) {
  return slug ? `/${slug}` : "/";
}

export function getRelatedGuides(guide: GuideBrief) {
  return guide.relatedSlugs
    .map((slug) => getGuideBySlug(slug))
    .filter((item): item is GuideBrief => Boolean(item));
}
