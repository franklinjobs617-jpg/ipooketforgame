export const siteConfig = {
  name: "Ipooket Romestead Guide",
  shortName: "Ipooket",
  url: "https://ipooket.com",
  description:
    "Romestead guide hub for Early Access players: release date, co-op, beginner tips, base building, farming, survivors, gods, and PC setup.",
  author: "Ipooket Guides",
  game: {
    name: "Romestead",
    developer: "Beartwigs",
    publisher: "Three Friends",
    steamUrl: "https://store.steampowered.com/app/1805320/Romestead/",
    officialUrl: "https://romestead.com/",
    genres: [
      "Survival Crafting",
      "Town Building",
      "Open-World Survival",
      "Action RPG",
      "Co-op",
    ],
    platforms: ["PC"],
    releaseDate: "2026-05-26T06:30:00Z",
  },
};

export function absoluteUrl(path = "/") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.url}${normalizedPath}`;
}
