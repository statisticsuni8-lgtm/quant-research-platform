import type { Locale } from "@/lib/i18n";
import type { ResearchTopic } from "@/lib/research-content";

export default function ResearchTopicCard({
  locale,
  topic,
  categoryLabel,
  compact = false,
}: {
  locale: Locale;
  topic: ResearchTopic;
  categoryLabel?: string;
  compact?: boolean;
}) {
  return (
    <a
      href={`/${locale}/research/${topic.slug}`}
      className={`group flex flex-col rounded-xl border border-[var(--border-default)] bg-[var(--bg-surface)] transition-colors hover:border-emerald-500/40 ${
        compact ? "p-4" : "p-5"
      }`}
    >
      <div className="flex items-center justify-between gap-2">
        <p className="text-[11px] font-medium uppercase tracking-wide text-emerald-400">{topic.eyebrow}</p>
        {categoryLabel && (
          <span className="shrink-0 rounded-full border border-[var(--border-default)] px-2 py-0.5 text-[10px] font-medium text-[var(--text-faint)]">
            {categoryLabel}
          </span>
        )}
      </div>
      <h3 className={`mt-1 font-semibold text-[var(--text-primary)] ${compact ? "text-sm" : "text-base"}`}>
        {topic.title}
      </h3>
      <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-[var(--text-muted)]">{topic.teaser}</p>
      <p className="mt-auto pt-3 text-xs font-medium text-emerald-400 group-hover:underline">
        {locale === "en" ? "Read more →" : "자세히 보기 →"}
      </p>
    </a>
  );
}
