import { notFound } from "next/navigation";
import { findTickerBySymbol } from "@/lib/tickers";
import { getCandles, getL2Book, getXyzQuotes } from "@/lib/hyperliquid";
import { getDictionary, toLocale } from "@/lib/i18n";
import OrderBookChart from "@/components/OrderBookChart";
import LiveStatsGrid from "@/components/LiveStatsGrid";
import LivePeerChips from "@/components/LivePeerChips";

function yahooUrl(symbol: string) {
  return `https://finance.yahoo.com/quote/${encodeURIComponent(symbol)}`;
}

function googleNewsUrl(query: string) {
  return `https://news.google.com/search?q=${encodeURIComponent(query)}`;
}

export const dynamic = "force-dynamic";

export default async function MarketDetail({
  params,
}: {
  params: Promise<{ locale: string; ticker: string }>;
}) {
  const { locale: rawLocale, ticker } = await params;
  const locale = toLocale(rawLocale);
  const t = getDictionary(locale);
  const meta = findTickerBySymbol(ticker);
  if (!meta) notFound();

  const [candles, book, quotes] = await Promise.all([
    getCandles(meta.hlCoin, 60).catch(() => []),
    getL2Book(meta.hlCoin).catch(() => ({ bids: [], asks: [] })),
    getXyzQuotes().catch(() => new Map()),
  ]);
  const quote = quotes.get(meta.hlCoin);
  const name = locale === "en" ? meta.nameEn : meta.nameKo;
  const desc = locale === "en" ? meta.descEn : meta.descKo;

  const peerMetas = (meta.peers ?? [])
    .map((p) => findTickerBySymbol(p))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  const peerInitial: Record<string, { markPx: number; changePct: number }> = {};
  peerMetas.forEach((p) => {
    const q = quotes.get(p.hlCoin);
    if (q) peerInitial[p.hlCoin] = { markPx: q.markPx, changePct: q.changePct };
  });

  return (
    <div className="mx-auto w-full max-w-5xl flex-1 px-6 py-10">
      <a href={`/${locale}`} className="text-sm text-[var(--text-muted)] hover:text-[var(--text-secondary)]">
        ← {t.market.back}
      </a>

      <div className="mt-4 mb-2 flex items-baseline gap-3">
        <h1 className="text-2xl font-semibold text-[var(--text-primary)]">{meta.symbol}</h1>
        <span className="text-[var(--text-muted)]">{name}</span>
      </div>
      <p className="mb-6 max-w-2xl text-sm leading-relaxed text-[var(--text-tertiary)]">{desc}</p>

      <LiveStatsGrid
        hlCoin={meta.hlCoin}
        initial={quote ?? null}
        labels={{
          price: t.market.price,
          change24h: t.market.change24h,
          openInterest: t.market.openInterest,
          funding: t.market.funding,
          volume24h: t.market.volume24h,
        }}
      />

      <div className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-6">
        <h2 className="text-lg font-semibold text-[var(--text-primary)]">{t.market.chartTitle}</h2>
        <p className="mb-4 text-sm text-[var(--text-muted)]">{t.market.orderbookHint}</p>
        <OrderBookChart candles={candles} book={book} labels={{ bids: t.market.bids, asks: t.market.asks }} />
      </div>

      <p className="mt-4 text-xs text-[var(--text-faint)]">{t.market.source}</p>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-6">
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-[var(--text-muted)]">{t.market.links}</h2>
          {meta.yahooSymbol ? (
            <div className="flex flex-col gap-2 text-sm">
              <a
                href={yahooUrl(meta.yahooSymbol)}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:underline"
              >
                {t.market.linkYahoo} ({meta.yahooSymbol}) ↗
              </a>
              <a
                href={googleNewsUrl(name)}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:underline"
              >
                {t.market.linkNews} ↗
              </a>
            </div>
          ) : (
            <div className="flex flex-col gap-2 text-sm">
              <p className="text-[var(--text-muted)]">{t.market.privateCompany}</p>
              <a
                href={googleNewsUrl(name)}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:underline"
              >
                {t.market.linkNews} ↗
              </a>
            </div>
          )}
        </div>

        <div className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-6">
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-[var(--text-muted)]">{t.market.peers}</h2>
          <LivePeerChips locale={locale} peers={peerMetas.map((p) => ({ symbol: p.symbol, hlCoin: p.hlCoin }))} initial={peerInitial} />
        </div>
      </div>
    </div>
  );
}
