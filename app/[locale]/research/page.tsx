import { getResearchContent, getResearchTopics } from "@/lib/research-content";
import { toLocale } from "@/lib/i18n";

export const dynamic = "force-dynamic";

export default async function ResearchPage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = toLocale((await params).locale);
  const c = getResearchContent(locale);
  const topics = getResearchTopics(locale);

  return (
    <div className="mx-auto w-full max-w-4xl flex-1 px-6 py-10">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-[var(--text-primary)]">{c.pageTitle}</h1>
        <p className="mt-1 text-sm text-[var(--text-muted)]">{c.pageSubtitle}</p>
      </div>

      <div className="mb-6 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-300">
        <span className="font-semibold">{c.todayBanner.strong}</span> {c.todayBanner.rest}
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {topics.map((topic) => (
          <a
            key={topic.slug}
            href={`/${locale}/research/${topic.slug}`}
            className="group rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-6 transition-colors hover:border-emerald-500/40 hover:bg-[var(--bg-surface)]"
          >
            <p className="text-xs font-medium uppercase tracking-wide text-emerald-400">{topic.eyebrow}</p>
            <h2 className="mt-1 text-lg font-semibold text-[var(--text-primary)]">{topic.title}</h2>
            <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-[var(--text-muted)]">{topic.teaser}</p>
            <p className="mt-4 text-sm font-medium text-emerald-400 group-hover:underline">
              {locale === "en" ? "Read more →" : "자세히 보기 →"}
            </p>
          </a>
        ))}
      </div>

      <p className="mt-8 text-xs text-[var(--text-faint)]">
        <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium text-emerald-400">
          {c.confirmedLabel}
        </span>{" "}
        {c.legend} ·{" "}
        <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-2 py-0.5 text-[10px] font-medium text-amber-400">
          {c.singleLabel}
        </span>{" "}
        {locale === "en" ? "= from a single source, needs further verification" : "= 단일 출처에서만 확인되어 추가 검증이 필요함"}
      </p>
    </div>
  );
}
