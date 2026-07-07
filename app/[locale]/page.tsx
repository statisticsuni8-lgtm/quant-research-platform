import { getMarketData } from "@/lib/market-data";
import { getXyzQuotes } from "@/lib/hyperliquid";
import { CATEGORIES } from "@/lib/tickers";
import TickerCard from "@/components/TickerCard";
import CategoryMarketGrid from "@/components/CategoryMarketGrid";
import { getDictionary, toLocale } from "@/lib/i18n";

export const dynamic = "force-dynamic";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const locale = toLocale((await params).locale);
  const t = getDictionary(locale);

  const [series, quotes] = await Promise.all([
    getMarketData(),
    getXyzQuotes().catch(() => new Map()),
  ]);
  const hasAnyData = series.some((s) => s.latest !== null);

  const categories = CATEGORIES.map((cat) => ({
    key: cat.key,
    label: t.categories[cat.key],
    tickers: cat.tickers.map((tk) => {
      const q = quotes.get(tk.hlCoin);
      return { ...tk, markPx: q?.markPx ?? null, changePct: q?.changePct ?? null };
    }),
  }));

  return (
    <div className="mx-auto w-full max-w-6xl flex-1 px-6 py-14">
      <div className="mb-10 border-b border-zinc-900 pb-10">
        <h1 className="text-4xl font-semibold tracking-tight text-zinc-100 sm:text-5xl">{t.home.title}</h1>
        <p className="mt-3 max-w-2xl text-base text-zinc-500">{t.home.subtitle}</p>
      </div>

      {!hasAnyData && (
        <div className="mb-8 rounded-xl border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-sm text-amber-300">
          {t.home.noData} <code className="rounded bg-black/30 px-1">python quant_engine.py</code>
          {t.home.noDataHint}
        </div>
      )}

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {series.map((s) => (
          <TickerCard key={s.symbol} series={s} />
        ))}
      </div>

      <div className="mt-8 flex flex-wrap gap-4 text-xs text-zinc-600">
        <span className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-emerald-500" /> {t.home.oversold}
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-red-500" /> {t.home.overbought}
        </span>
      </div>

      <div className="mt-14">
        <h2 className="text-xl font-semibold text-zinc-100">{t.home.marketsTitle}</h2>
        <p className="mt-1 mb-6 text-sm text-zinc-500">{t.home.marketsSubtitle}</p>
        <CategoryMarketGrid locale={locale} categories={categories} />
      </div>
    </div>
  );
}
