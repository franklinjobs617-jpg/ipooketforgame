import Link from "next/link";

export default function NotFound() {
  return (
    <main className="site-shell" style={{ padding: "80px 0" }}>
      <section className="fast-answer">
        <div>
          <p className="eyebrow">Route missing</p>
          <h1>Guide Not Found</h1>
        </div>
        <p>This Romestead guide route is not available yet. Return to the hub for confirmed pages.</p>
        <Link className="pixel-button pixel-button-primary" href="/">
          Back to hub
        </Link>
      </section>
    </main>
  );
}
