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

const BIN_COUNT = 28;

function buildLiquidityBins(candles: HlCandle[], book: HlBook) {
  const closes = candles.map((c) => c.c);
  const highs = candles.map((c) => c.h);
  const lows = candles.map((c) => c.l);
  const bookPxs = [...book.bids.map((b) => b.px), ...book.asks.map((a) => a.px)];
  const allPx = [...closes, ...highs, ...lows, ...bookPxs].filter((n) => Number.isFinite(n));
  if (allPx.length === 0) return { bins: [], min: 0, max: 0, maxVol: 1 };

  const min = Math.min(...allPx) * 0.98;
  const max = Math.max(...allPx) * 1.02;
  const step = (max - min) / BIN_COUNT;

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
  return { bins, min, max, maxVol };
}

export default function OrderBookChart({
  candles,
  book,
  labels,
}: {
  candles: HlCandle[];
  book: HlBook;
  labels: { bids: string; asks: string };
}) {
  const { bins, min, max, maxVol } = buildLiquidityBins(candles, book);

  const chartData = candles.map((c) => ({
    date: new Date(c.t).toLocaleDateString("en-US", { month: "short", day: "numeric" }),
    close: c.c,
  }));

  if (chartData.length === 0) {
    return <div className="flex h-80 items-center justify-center text-sm text-[var(--text-muted)]">No chart data</div>;
  }

  return (
    <div>
      <div className="h-96 w-full">
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
              tickFormatter={(v: number) => v.toLocaleString("en-US", { maximumFractionDigits: v >= 100 ? 0 : 2 })}
            />
            <Tooltip
              contentStyle={{ backgroundColor: "var(--bg-tooltip)", border: "1px solid var(--border-hover)", fontSize: 12 }}
              labelStyle={{ color: "var(--text-primary)" }}
            />
            {bins.map((bin, i) => {
              const bidOpacity = bin.bidVol > 0 ? 0.08 + 0.55 * (bin.bidVol / maxVol) : 0;
              const askOpacity = bin.askVol > 0 ? 0.08 + 0.55 * (bin.askVol / maxVol) : 0;
              return (
                <g key={i}>
                  {bin.bidVol > 0 && (
                    <ReferenceArea y1={bin.y1} y2={bin.y2} fill="#22c55e" fillOpacity={bidOpacity} strokeWidth={0} />
                  )}
                  {bin.askVol > 0 && (
                    <ReferenceArea y1={bin.y1} y2={bin.y2} fill="#ef4444" fillOpacity={askOpacity} strokeWidth={0} />
                  )}
                </g>
              );
            })}
            <Line type="monotone" dataKey="close" stroke="var(--text-primary)" strokeWidth={2} dot={false} />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-3 flex gap-4 text-xs text-[var(--text-muted)]">
        <span className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-emerald-500" /> {labels.bids}
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-red-500" /> {labels.asks}
        </span>
      </div>
    </div>
  );
}
