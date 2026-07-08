"use client";

import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ReferenceArea,
  CartesianGrid,
} from "recharts";
import type { HlCandle, HlBook } from "@/lib/hyperliquid";

const BIN_COUNT = 10;

function buildChartRange(candles: HlCandle[], book: HlBook) {
  const closes = candles.map((c) => c.c);
  const highs = candles.map((c) => c.h);
  const lows = candles.map((c) => c.l);
  const bookPxs = [...book.bids.map((b) => b.px), ...book.asks.map((a) => a.px)];
  const allPx = [...closes, ...highs, ...lows, ...bookPxs].filter((n) => Number.isFinite(n));
  if (allPx.length === 0) return { min: 0, max: 0 };
  return { min: Math.min(...allPx) * 0.98, max: Math.max(...allPx) * 1.02 };
}

// Bins span only the order book's own price range (a thin band around the current price),
// not the full candle history — otherwise the book's depth collapses into one giant block.
function buildLiquidityBins(book: HlBook) {
  const bookPxs = [...book.bids.map((b) => b.px), ...book.asks.map((a) => a.px)];
  if (bookPxs.length === 0) return { bins: [], maxVol: 1 };

  const min = Math.min(...bookPxs);
  const max = Math.max(...bookPxs);
  const step = (max - min) / BIN_COUNT || 1;

  const bins = Array.from({ length: BIN_COUNT }, (_, i) => ({
    y1: min + i * step,
    y2: min + (i + 1) * step,
    bidVol: 0,
    askVol: 0,
  }));

  const addTo = (px: number, sz: number, side: "bidVol" | "askVol") => {
    const idx = Math.min(BIN_COUNT - 1, Math.max(0, Math.floor((px - min) / step)));
    bins[idx][side] += sz;
  };
  book.bids.forEach((b) => addTo(b.px, b.sz, "bidVol"));
  book.asks.forEach((a) => addTo(a.px, a.sz, "askVol"));

  const maxVol = Math.max(1e-9, ...bins.map((b) => Math.max(b.bidVol, b.askVol)));
  return { bins, maxVol };
}

function fmtPrice(v: number) {
  return v.toLocaleString("en-US", { maximumFractionDigits: v >= 100 ? 0 : 2 });
}

function fmtSize(v: number) {
  return v.toLocaleString("en-US", { maximumFractionDigits: v >= 100 ? 0 : 1 });
}

export default function OrderBookChart({
  candles,
  book,
  labels,
}: {
  candles: HlCandle[];
  book: HlBook;
  labels: { bids: string; asks: string; size: string; maxWallAt: string };
}) {
  const { min, max } = buildChartRange(candles, book);
  const { bins, maxVol } = buildLiquidityBins(book);

  const chartData = candles.map((c) => ({
    date: new Date(c.t).toLocaleDateString("en-US", { month: "short", day: "numeric" }),
    close: c.c,
  }));

  if (chartData.length === 0) {
    return <div className="flex h-80 items-center justify-center text-sm text-[var(--text-muted)]">No chart data</div>;
  }

  const totalBidVol = book.bids.reduce((sum, b) => sum + b.sz, 0);
  const totalAskVol = book.asks.reduce((sum, a) => sum + a.sz, 0);
  const thickestBidBin = [...bins].sort((a, b) => b.bidVol - a.bidVol)[0];
  const thickestAskBin = [...bins].sort((a, b) => b.askVol - a.askVol)[0];

  return (
    <div>
      <div className="h-[480px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={chartData} margin={{ top: 8, right: 16, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border-default)" vertical={false} />
            <XAxis dataKey="date" tick={{ fontSize: 11, fill: "var(--text-muted)" }} axisLine={false} tickLine={false} />
            <YAxis
              domain={[min, max]}
              tick={{ fontSize: 11, fill: "var(--text-muted)" }}
              axisLine={false}
              tickLine={false}
              tickCount={5}
              width={64}
              tickFormatter={fmtPrice}
            />
            <Tooltip
              contentStyle={{ backgroundColor: "var(--bg-tooltip)", border: "1px solid var(--border-hover)", fontSize: 12 }}
              labelStyle={{ color: "var(--text-primary)" }}
            />
            {bins.map((bin, i) => {
              const bidOpacity = bin.bidVol > 0 ? 0.06 + 0.45 * (bin.bidVol / maxVol) : 0;
              const askOpacity = bin.askVol > 0 ? 0.06 + 0.45 * (bin.askVol / maxVol) : 0;
              return (
                <g key={i}>
                  {bin.bidVol > 0 && <ReferenceArea y1={bin.y1} y2={bin.y2} fill="#22c55e" fillOpacity={bidOpacity} strokeWidth={0} />}
                  {bin.askVol > 0 && <ReferenceArea y1={bin.y1} y2={bin.y2} fill="#ef4444" fillOpacity={askOpacity} strokeWidth={0} />}
                </g>
              );
            })}
            <Line type="monotone" dataKey="close" stroke="var(--text-primary)" strokeWidth={2} dot={false} />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-3 grid grid-cols-1 gap-2 text-xs sm:grid-cols-2">
        <div className="flex items-center justify-between rounded-lg border border-emerald-500/20 bg-emerald-500/5 px-3 py-2">
          <span className="flex items-center gap-1.5 text-[var(--text-tertiary)]">
            <span className="h-2 w-2 rounded-full bg-emerald-500" /> {labels.bids}
          </span>
          <span className="font-medium text-emerald-400">
            {labels.size} {fmtSize(totalBidVol)}
            {thickestBidBin && thickestBidBin.bidVol > 0 &&
              ` · ${labels.maxWallAt} ${fmtPrice(thickestBidBin.y1)}~${fmtPrice(thickestBidBin.y2)}`}
          </span>
        </div>
        <div className="flex items-center justify-between rounded-lg border border-red-500/20 bg-red-500/5 px-3 py-2">
          <span className="flex items-center gap-1.5 text-[var(--text-tertiary)]">
            <span className="h-2 w-2 rounded-full bg-red-500" /> {labels.asks}
          </span>
          <span className="font-medium text-red-400">
            {labels.size} {fmtSize(totalAskVol)}
            {thickestAskBin && thickestAskBin.askVol > 0 &&
              ` · ${labels.maxWallAt} ${fmtPrice(thickestAskBin.y1)}~${fmtPrice(thickestAskBin.y2)}`}
          </span>
        </div>
      </div>
    </div>
  );
}
