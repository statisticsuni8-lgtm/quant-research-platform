import { notFound } from "next/navigation";
import { getResearchContent, getResearchTopics, type ResearchTopicSlug } from "@/lib/research-content";
import { FRED_SERIES, getFredSeries } from "@/lib/fred";
import { getLatestGammaExposure } from "@/lib/gamma";
import { getNewsHeadlines } from "@/lib/news";
import { computeScreener } from "@/lib/screener";
import { toLocale } from "@/lib/i18n";
import {
  MacroCalendarSection,
  EarningsScenarioSection,
  MicronReadThroughSection,
  EarningsCalendarSection,
  MacroWatchSection,
  PrivateCreditSection,
  VkospiSection,
  GammaExposureSection,
  FredMacroSection,
  ScreenerSection,
  NewsSection,
} from "@/components/ResearchSections";

const NEWS_QUERIES: Record<"ko" | "en", string[]> = {
  ko: ["반도체 AI", "삼성전자 실적", "연준 금리"],
  en: ["semiconductor AI chips", "Samsung Electronics earnings", "Federal Reserve interest rates"],
};

export const dynamic = "force-dynamic";

const VALID_SLUGS: ResearchTopicSlug[] = [
  "macro-calendar",
  "earnings-scenario",
  "micron-readthrough",
  "earnings-calendar",
  "macro-watch",
  "private-credit",
  "vkospi",
  "gamma-exposure",
  "fred-macro",
  "screener",
  "news",
];

export default async function ResearchDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: rawLocale, slug: rawSlug } = await params;
  const locale = toLocale(rawLocale);
  const slug = rawSlug as ResearchTopicSlug;
  if (!VALID_SLUGS.includes(slug)) notFound();

  const c = getResearchContent(locale);
  const topic = getResearchTopics(locale).find((t) => t.slug === slug)!;

  let body: React.ReactNode;
  switch (slug) {
    case "macro-calendar":
      body = <MacroCalendarSection c={c} />;
      break;
    case "earnings-scenario":
      body = <EarningsScenarioSection c={c} />;
      break;
    case "micron-readthrough":
      body = <MicronReadThroughSection c={c} />;
      break;
    case "earnings-calendar":
      body = <EarningsCalendarSection c={c} />;
      break;
    case "macro-watch":
      body = <MacroWatchSection c={c} />;
      break;
    case "private-credit":
      body = <PrivateCreditSection c={c} />;
      break;
    case "vkospi":
      body = <VkospiSection c={c} />;
      break;
    case "gamma-exposure": {
      const gexRows = await getLatestGammaExposure("SPY").catch(() => []);
      body = <GammaExposureSection c={c} gexRows={gexRows} />;
      break;
    }
    case "fred-macro": {
      const fredData = await Promise.all(
        FRED_SERIES.map(async (s) => ({ meta: s, points: await getFredSeries(s.id).catch(() => []) }))
      );
      body = <FredMacroSection locale={locale} fredData={fredData} />;
      break;
    }
    case "screener": {
      const rows = await computeScreener().catch(() => []);
      body = <ScreenerSection locale={locale} rows={rows} />;
      break;
    }
    case "news": {
      const news = await getNewsHeadlines(locale, NEWS_QUERIES[locale]).catch(() => []);
      body = <NewsSection locale={locale} items={news} />;
      break;
    }
  }

  return (
    <div className="mx-auto w-full max-w-4xl flex-1 px-6 py-10">
      <a href={`/${locale}/research`} className="text-sm text-[var(--text-muted)] hover:text-[var(--text-secondary)]">
        ← {locale === "en" ? "Back to Research Hub" : "리서치 허브로 돌아가기"}
      </a>

      <div className="mt-4 mb-8">
        <p className="text-xs font-medium uppercase tracking-wide text-emerald-400">{topic.eyebrow}</p>
        <h1 className="text-2xl font-semibold text-[var(--text-primary)]">{topic.title}</h1>
      </div>

      <div className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-6">{body}</div>
    </div>
  );
}
