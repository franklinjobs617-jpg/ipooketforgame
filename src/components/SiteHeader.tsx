import Link from "next/link";
import { guideBriefs, getGuidePath } from "@/lib/guides";

const navItems = guideBriefs
  .filter((guide) =>
    ["release-date", "beginner-guide", "multiplayer-coop", "base-building"].includes(guide.slug),
  )
  .map((guide) => ({
    href: getGuidePath(guide.slug),
    label: guide.slug === "multiplayer-coop" ? "Co-op" : guide.h1.replace("Romestead ", ""),
  }));

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-shell header-inner">
        <Link href="/" className="brand-mark" aria-label="Ipooket Romestead Guide home">
          <span className="brand-icon">R</span>
          <span>Ipooket</span>
        </Link>
        <nav className="header-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <Link className="header-cta" href="/beginner-guide">
          Start here
        </Link>
      </div>
    </header>
  );
}
