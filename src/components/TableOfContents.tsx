import type { GuideBrief } from "@/lib/guides";

export function TableOfContents({ guide }: { guide: GuideBrief }) {
  const items = [
    "Fast answer",
    ...guide.sections.map((section) => section.heading),
    ...guide.tables.map((table) => table.title),
    "What to do next",
    "FAQ",
  ];

  return (
    <nav className="toc-card" aria-label="Page sections">
      <p className="eyebrow">On this page</p>
      <div>
        {items.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </nav>
  );
}
