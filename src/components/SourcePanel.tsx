import { siteConfig } from "@/lib/site";

export function SourcePanel() {
  return (
    <section className="source-panel" aria-labelledby="source-panel-heading">
      <p className="eyebrow">Update checks</p>
      <h2 id="source-panel-heading">Where this guide gets its facts</h2>
      <div className="source-panel-grid">
        <div>
          <h3>Use confirmed sources first</h3>
          <p>
            Release status, player count, platform support, hotfix notes, and system
            requirements are checked against the official site and Steam page before stronger
            claims are made.
          </p>
        </div>
        <div>
          <h3>Treat Early Access values carefully</h3>
          <p>
            Resource uses, recipes, best blessings, layouts, and job value can change. When a
            detail needs more testing, the page says so instead of presenting it as final.
          </p>
        </div>
        <div>
          <h3>Check source pages</h3>
          <p>
            For current store and official information, compare the{" "}
            <a href={siteConfig.game.officialUrl} target="_blank" rel="noreferrer">
              official Romestead site
            </a>{" "}
            and{" "}
            <a href={siteConfig.game.steamUrl} target="_blank" rel="noreferrer">
              Steam page
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
