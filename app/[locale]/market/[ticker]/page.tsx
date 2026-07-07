import { notFound } from "next/navigation";
import { findTickerBySymbol } from "@/lib/tickers";
import { getCandles, getL2Book, getXyzQuotes } from "@/lib/hyperliquid";
import { getDictionary, toLocale } from "@/lib/i18n";
import OrderBookChart from "@/components/OrderBookChart";

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
  const up = (quote?.changePct ?? 0) >= 0;

  const peerMetas = (meta.peers ?? [])
    .map((p) => findTickerBySymbol(p))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  const stats = [
    { label: t.market.price, value: quote ? `$${quote.markPx.toLocaleString("en-US", { maximumFractionDigits: 2 })}` : "—" },
    {
      label: t.market.change24h,
      value: quote ? `${up ? "+" : ""}${quote.changePct.toFixed(2)}%` : "—",
      tone: quote ? (up ? "text-emerald-400" : "text-red-400") : "",
    },
    { label: t.market.openInterest, value: quote ? quote.openInterest.toLocaleString("en-US", { maximumFractionDigits: 0 }) : "—" },
    { label: t.market.funding, value: quote ? `${(quote.funding * 100).toFixed(4)}%` : "—" },
    { label: t.market.volume24h, value: quote ? `$${Math.round(quote.dayNtlVlm).toLocaleString("en-US")}` : "—" },
  ];

  return (
    <div className="mx-auto w-full max-w-5xl flex-1 px-6 py-10">
      <a href={`/${locale}`} className="text-sm text-zinc-500 hover:text-zinc-300">
        ← {t.market.back}
      </a>

      <div className="mt-4 mb-2 flex items-baseline gap-3">
        <h1 className="text-2xl font-semibold text-zinc-100">{meta.symbol}</h1>
        <span className="text-zinc-500">{name}</span>
      </div>
      <p className="mb-6 max-w-2xl text-sm leading-relaxed text-zinc-400">{desc}</p>

      <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-5">
        {stats.map((s) => (
          <div key={s.label} className="rounded-lg border border-zinc-800 bg-zinc-900/60 p-3">
            <p className="text-[11px] text-zinc-500">{s.label}</p>
            <p className={`text-base font-semibold ${s.tone || "text-zinc-100"}`}>{s.value}</p>
          </div>
        ))}
      </div>

      <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">
        <h2 className="text-lg font-semibold text-zinc-100">{t.market.chartTitle}</h2>
        <p className="mb-4 text-sm text-zinc-500">{t.market.orderbookHint}</p>
        <OrderBookChart candles={candles} book={book} labels={{ bids: t.market.bids, asks: t.market.asks }} />
      </div>

      <p className="mt-4 text-xs text-zinc-600">{t.market.source}</p>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-zinc-500">{t.market.links}</h2>
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
              <p className="text-zinc-500">{t.market.privateCompany}</p>
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

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-zinc-500">{t.market.peers}</h2>
          {peerMetas.length === 0 ? (
            <p className="text-sm text-zinc-600">—</p>
          ) : (
            <div className="flex flex-wrap gap-2">
              {peerMetas.map((p) => {
                const peerQuote = quotes.get(p.hlCoin);
                const peerUp = (peerQuote?.changePct ?? 0) >= 0;
                return (
                  <a
                    key={p.symbol}
                    href={`/${locale}/market/${p.symbol}`}
                    className="rounded-lg border border-zinc-800 bg-zinc-950/50 px-3 py-2 text-sm hover:border-zinc-700"
                  >
                    <span className="font-medium text-zinc-100">{p.symbol}</span>{" "}
                    {peerQuote && (
                      <span className={peerUp ? "text-emerald-400" : "text-red-400"}>
                        {peerUp ? "+" : ""}
                        {peerQuote.changePct.toFixed(2)}%
                      </span>
                    )}
                  </a>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
