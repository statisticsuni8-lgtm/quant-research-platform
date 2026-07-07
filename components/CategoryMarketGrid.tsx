"use client";

import { useState } from "react";
import type { Locale } from "@/lib/i18n";
import type { CategoryKey, TickerMeta } from "@/lib/tickers";

export type CategoryWithQuotes = {
  key: CategoryKey;
  label: string;
  tickers: (TickerMeta & { markPx: number | null; changePct: number | null })[];
};

export default function CategoryMarketGrid({
  locale,
  categories,
}: {
  locale: Locale;
  categories: CategoryWithQuotes[];
}) {
  const [active, setActive] = useState<CategoryKey>(categories[0]?.key ?? "semis");
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
                : "border-zinc-800 text-zinc-400 hover:text-zinc-200"
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
        {current?.tickers.map((t) => {
          const name = locale === "en" ? t.nameEn : t.nameKo;
          const up = (t.changePct ?? 0) >= 0;
          return (
            <a
              key={t.symbol}
              href={`/${locale}/market/${t.symbol}`}
              className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-4 transition-colors hover:border-zinc-700"
            >
              <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">{t.symbol}</p>
              <p className="mt-0.5 truncate text-sm text-zinc-300">{name}</p>
              <div className="mt-3 flex items-end justify-between">
                <p className="text-lg font-semibold text-zinc-100">
                  {t.markPx !== null ? `$${t.markPx.toLocaleString("en-US", { maximumFractionDigits: 2 })}` : "—"}
                </p>
                {t.changePct !== null && (
                  <span className={`text-xs font-medium ${up ? "text-emerald-400" : "text-red-400"}`}>
                    {up ? "+" : ""}
                    {t.changePct.toFixed(2)}%
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
