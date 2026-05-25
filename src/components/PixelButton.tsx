import Link from "next/link";
import type { ReactNode } from "react";

interface PixelButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
}

export function PixelButton({ href, children, variant = "primary" }: PixelButtonProps) {
  return (
    <Link className={`pixel-button pixel-button-${variant}`} href={href}>
      {children}
    </Link>
  );
}
