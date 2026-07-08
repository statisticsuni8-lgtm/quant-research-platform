import type { HlBook } from "@/lib/hyperliquid";

export default function OrderBookGrid({
  book,
  rows = 15,
  labels,
}: {
  book: HlBook;
  rows?: number;
  labels: { bids: string; asks: string; price: string; size: string };
}) {
  const bids = book.bids.slice(0, rows);
  const asks = book.asks.slice(0, rows);
  const maxVol = Math.max(1e-9, ...bids.map((b) => b.sz), ...asks.map((a) => a.sz));

  if (bids.length === 0 && asks.length === 0) {
    return <div className="flex h-40 items-center justify-center text-sm text-[var(--text-muted)]">No order book data</div>;
  }

  return (
    <div className="grid grid-cols-2 gap-4">
      <div>
        <div className="mb-1.5 flex justify-between px-2 text-[11px] font-medium uppercase tracking-wide text-[var(--text-muted)]">
          <span>{labels.price}</span>
          <span>{labels.size}</span>
        </div>
        <div className="space-y-px">
          {bids.map((b, i) => (
            <div key={i} className="relative overflow-hidden rounded-sm">
              <div
                className="absolute inset-y-0 right-0 bg-emerald-500/10"
                style={{ width: `${Math.min(100, (b.sz / maxVol) * 100)}%` }}
              />
              <div className="relative flex justify-between px-2 py-1 text-xs">
                <span className="font-medium text-emerald-400">{b.px.toLocaleString("en-US", { maximumFractionDigits: 2 })}</span>
                <span className="text-[var(--text-tertiary)]">{b.sz.toLocaleString("en-US", { maximumFractionDigits: 3 })}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="mb-1.5 flex justify-between px-2 text-[11px] font-medium uppercase tracking-wide text-[var(--text-muted)]">
          <span>{labels.price}</span>
          <span>{labels.size}</span>
        </div>
        <div className="space-y-px">
          {asks.map((a, i) => (
            <div key={i} className="relative overflow-hidden rounded-sm">
              <div
                className="absolute inset-y-0 right-0 bg-red-500/10"
                style={{ width: `${Math.min(100, (a.sz / maxVol) * 100)}%` }}
              />
              <div className="relative flex justify-between px-2 py-1 text-xs">
                <span className="font-medium text-red-400">{a.px.toLocaleString("en-US", { maximumFractionDigits: 2 })}</span>
                <span className="text-[var(--text-tertiary)]">{a.sz.toLocaleString("en-US", { maximumFractionDigits: 3 })}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className="col-span-2 mt-1 text-center text-[11px] text-[var(--text-muted)]">
        {labels.bids} · {labels.asks}
      </p>
    </div>
  );
}
