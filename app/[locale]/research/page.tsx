import { getResearchContent, getResearchTopics, getCategoryLabels, type ResearchCategory } from "@/lib/research-content";
import { toLocale } from "@/lib/i18n";
import ResearchHubExplorer from "@/components/ResearchHubExplorer";

export const dynamic = "force-dynamic";

const CATEGORY_ORDER: ResearchCategory[] = ["macro", "earnings", "industry", "options", "politics", "screener", "news"];

export default async function ResearchPage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = toLocale((await params).locale);
  const c = getResearchContent(locale);
  const topics = getResearchTopics(locale);
  const categoryLabels = getCategoryLabels(locale);

  return (
    <div className="mx-auto w-full max-w-6xl flex-1 px-6 py-10">
      <div className="mb-8 flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-[var(--text-primary)]">{c.pageTitle}</h1>
          <p className="mt-1 text-sm text-[var(--text-muted)]">{c.pageSubtitle}</p>
        </div>
        <a
          href={`/${locale}/research/calendar`}
          className="flex items-center gap-1.5 rounded-full border border-[var(--border-default)] px-4 py-2 text-sm font-medium text-[var(--text-secondary)] hover:border-emerald-500/40 hover:text-emerald-400"
        >
          {locale === "en" ? "View Calendar" : "캘린더 보기"} →
        </a>
      </div>

      <div className="mb-6 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-300">
        <span className="font-semibold">{c.todayBanner.strong}</span> {c.todayBanner.rest}
      </div>

      <ResearchHubExplorer
        locale={locale}
        topics={topics}
        categoryOrder={CATEGORY_ORDER}
        categoryLabels={categoryLabels}
        allLabel={locale === "en" ? "All" : "전체"}
      />

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
