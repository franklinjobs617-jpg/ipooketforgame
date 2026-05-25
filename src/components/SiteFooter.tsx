import Link from "next/link";
import { guideBriefs, getGuidePath } from "@/lib/guides";
import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-shell footer-grid">
        <div>
          <p className="footer-brand">Ipooket Romestead Guide</p>
          <p className="footer-copy">
            Player-first Romestead guides for Early Access settlement builders, co-op groups,
            and cautious buyers.
          </p>
        </div>
        <div className="footer-links">
          {guideBriefs.slice(0, 8).map((guide) => (
            <Link href={getGuidePath(guide.slug)} key={guide.slug || "home"}>
              {guide.slug ? guide.h1.replace("Romestead ", "") : "Guide Hub"}
            </Link>
          ))}
        </div>
        <div className="footer-sources">
          <a href={siteConfig.game.officialUrl} target="_blank" rel="noreferrer">
            Official site
          </a>
          <a href={siteConfig.game.steamUrl} target="_blank" rel="noreferrer">
            Steam page
          </a>
        </div>
      </div>
    </footer>
  );
}
