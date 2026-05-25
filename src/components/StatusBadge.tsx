import type { GuideStatus } from "@/lib/guides";

export function StatusBadge({ status }: { status: GuideStatus }) {
  return <span className="status-badge">{status}</span>;
}
