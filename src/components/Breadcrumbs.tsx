import Link from "next/link";
import type { GuideBrief } from "@/lib/guides";

export function Breadcrumbs({ guide }: { guide: GuideBrief }) {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <Link href="/">Home</Link>
      {guide.slug ? (
        <>
          <span>/</span>
          <span>{guide.h1}</span>
        </>
      ) : null}
    </nav>
  );
}
