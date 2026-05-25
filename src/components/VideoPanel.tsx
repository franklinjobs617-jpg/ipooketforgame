export function VideoPanel() {
  return (
    <section className="video-panel" aria-labelledby="video-panel-heading">
      <div className="video-copy">
        <p className="eyebrow">Official video</p>
        <h2 id="video-panel-heading">Watch the settlement loop before you choose a guide</h2>
        <p>
          The trailer is useful before reading deeper guides because it shows the main loop:
          rebuilding, hauling resources, fighting, farming, and playing with friends.
        </p>
      </div>
      <div className="video-frame">
        <iframe
          src="https://www.youtube-nocookie.com/embed/4Bd2YetKWg4"
          title="Romestead official trailer"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </section>
  );
}
