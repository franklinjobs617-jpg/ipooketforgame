"use client";

import { useEffect, useMemo, useState } from "react";

export const PROGRESS_STORAGE_KEY = "romestead-guide-progress:v1";

interface ActionChecklistProps {
  storageKey: string;
  title?: string;
  steps: string[];
  compact?: boolean;
}

function readProgress(): Record<string, string[]> {
  if (typeof window === "undefined") return {};

  try {
    const stored = window.localStorage.getItem(PROGRESS_STORAGE_KEY);
    if (!stored) return {};

    const parsed = JSON.parse(stored);
    return parsed && typeof parsed === "object" && !Array.isArray(parsed)
      ? parsed
      : {};
  } catch {
    return {};
  }
}

function writeProgress(progress: Record<string, string[]>) {
  window.localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(progress));
}

export function ActionChecklist({
  storageKey,
  title = "Do this now",
  steps,
  compact = false,
}: ActionChecklistProps) {
  const [completedSteps, setCompletedSteps] = useState<string[]>([]);
  const [hasLoaded, setHasLoaded] = useState(false);
  const stepIds = useMemo(
    () => steps.map((_, index) => `step-${index + 1}`),
    [steps],
  );

  useEffect(() => {
    const progress = readProgress();
    setCompletedSteps(progress[storageKey] ?? []);
    setHasLoaded(true);
  }, [storageKey]);

  function persist(nextCompletedSteps: string[]) {
    const progress = readProgress();
    const nextProgress = {
      ...progress,
      [storageKey]: nextCompletedSteps,
    };

    writeProgress(nextProgress);
    setCompletedSteps(nextCompletedSteps);
  }

  function toggleStep(stepId: string) {
    const isDone = completedSteps.includes(stepId);
    const nextCompletedSteps = isDone
      ? completedSteps.filter((item) => item !== stepId)
      : [...completedSteps, stepId];

    persist(nextCompletedSteps);
  }

  function clearSteps() {
    persist([]);
  }

  const completedCount = completedSteps.length;
  const isComplete = steps.length > 0 && completedCount === steps.length;

  return (
    <div
      className={`action-checklist${compact ? " action-checklist-compact" : ""}`}
      data-complete={isComplete}
    >
      <div className="checklist-heading">
        <div>
          <p className="eyebrow">{compact ? "Actions" : "Saved checklist"}</p>
          <h3>{title}</h3>
        </div>
        <span aria-live="polite">
          {hasLoaded ? `${completedCount}/${steps.length}` : `0/${steps.length}`}
        </span>
      </div>
      <ol className="checklist-steps">
        {steps.map((step, index) => {
          const stepId = stepIds[index];
          const inputId = `${storageKey}-${stepId}`.replace(/[^a-zA-Z0-9-_]/g, "-");

          return (
            <li key={step}>
              <input
                checked={completedSteps.includes(stepId)}
                id={inputId}
                onChange={() => toggleStep(stepId)}
                type="checkbox"
              />
              <label htmlFor={inputId}>{step}</label>
            </li>
          );
        })}
      </ol>
      <button
        className="checklist-clear"
        disabled={!completedCount}
        onClick={clearSteps}
        type="button"
      >
        Clear checklist
      </button>
    </div>
  );
}
