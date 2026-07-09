"use client";

import { useMemo, useState } from "react";
import type { Locale } from "@/lib/i18n";
import type { ResearchCategory, ResearchTopic } from "@/lib/research-content";
import ResearchTopicCard from "@/components/ResearchTopicCard";

export default function ResearchHubExplorer({
  locale,
  topics,
  categoryOrder,
  categoryLabels,
  allLabel,
}: {
  locale: Locale;
  topics: ResearchTopic[];
  categoryOrder: ResearchCategory[];
  categoryLabels: Record<ResearchCategory, string>;
  allLabel: string;
}) {
  const [active, setActive] = useState<ResearchCategory | "all">("all");

  const counts = useMemo(() => {
    const map = new Map<ResearchCategory, number>();
    for (const t of topics) map.set(t.category, (map.get(t.category) ?? 0) + 1);
    return map;
  }, [topics]);

  const visible = active === "all" ? topics : topics.filter((t) => t.category === active);

  return (
    <div>
      <div className="mb-6 flex flex-wrap gap-2">
        <button
          onClick={() => setActive("all")}
          className={`rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors ${
            active === "all"
              ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-400"
              : "border-[var(--border-default)] text-[var(--text-tertiary)] hover:text-[var(--text-primary)]"
          }`}
        >
          {allLabel} ({topics.length})
        </button>
        {categoryOrder.map((cat) => {
          const count = counts.get(cat) ?? 0;
          if (count === 0) return null;
          return (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors ${
                active === cat
                  ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-400"
                  : "border-[var(--border-default)] text-[var(--text-tertiary)] hover:text-[var(--text-primary)]"
              }`}
            >
              {categoryLabels[cat]} ({count})
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((topic) => (
          <ResearchTopicCard
            key={topic.slug}
            locale={locale}
            topic={topic}
            categoryLabel={active === "all" ? categoryLabels[topic.category] : undefined}
          />
        ))}
      </div>
    </div>
  );
}
