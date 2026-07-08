"use client";

import { useEffect, useRef, useState } from "react";
import type { Locale } from "@/lib/i18n";
import type { CategoryKey, TickerMeta } from "@/lib/tickers";

export type CategoryWithQuotes = {
  key: CategoryKey;
  label: string;
  tickers: (TickerMeta & { markPx: number | null; changePct: number | null })[];
};

type LiveQuote = { markPx: number; changePct: number };

const POLL_MS = 8_000;

export default function CategoryMarketGrid({
  locale,
  categories,
}: {
  locale: Locale;
  categories: CategoryWithQuotes[];
}) {
  const [active, setActive] = useState<CategoryKey>(categories[0]?.key ?? "semis");
  const [live, setLive] = useState<Record<string, LiveQuote>>({});
  const mounted = useRef(true);

  useEffect(() => {
    mounted.current = true;
    async function poll() {
      try {
        const res = await fetch("/api/quotes", { cache: "no-store" });
        if (!res.ok) return;
        const data: Record<string, LiveQuote> = await res.json();
        if (mounted.current) setLive(data);
      } catch {
        // ignore transient network errors; next poll will retry
      }
    }
    poll();
    const id = setInterval(poll, POLL_MS);
    return () => {
      mounted.current = false;
      clearInterval(id);
    };
  }, []);

  const current = categories.find((c) => c.key === active) ?? categories[0];

  return (
    <div>
      <div className="mb-4 flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c.key}
            onClick={() => setActive(c.key)}
            className={`rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors ${
              c.key === active
                ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-400"
                : "border-[var(--border-default)] text-[var(--text-tertiary)] hover:text-[var(--text-primary)]"
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
        {current?.tickers.map((t) => {
          const name = locale === "en" ? t.nameEn : t.nameKo;
          const liveQuote = live[t.hlCoin];
          const markPx = liveQuote?.markPx ?? t.markPx;
          const changePct = liveQuote?.changePct ?? t.changePct;
          const up = (changePct ?? 0) >= 0;
          return (
            <a
              key={t.symbol}
              href={`/${locale}/market/${t.symbol}`}
              className="rounded-xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-4 transition-colors hover:border-[var(--border-hover)]"
            >
              <p className="text-xs font-medium uppercase tracking-wide text-[var(--text-muted)]">{t.symbol}</p>
              <p className="mt-0.5 truncate text-sm text-[var(--text-secondary)]">{name}</p>
              <div className="mt-3 flex items-end justify-between">
                <p className="text-lg font-semibold text-[var(--text-primary)]">
                  {markPx !== null ? `$${markPx.toLocaleString("en-US", { maximumFractionDigits: 2 })}` : "—"}
                </p>
                {changePct !== null && (
                  <span className={`text-xs font-medium ${up ? "text-emerald-400" : "text-red-400"}`}>
                    {up ? "+" : ""}
                    {changePct.toFixed(2)}%
                  </span>
                )}
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
