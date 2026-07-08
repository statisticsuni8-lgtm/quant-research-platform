"use client";

import { useEffect, useRef, useState } from "react";

type Quote = { markPx: number; changePct: number; openInterest: number; funding: number; dayNtlVlm: number };

const POLL_MS = 8_000;

export default function LiveStatsGrid({
  hlCoin,
  initial,
  labels,
}: {
  hlCoin: string;
  initial: Quote | null;
  labels: { price: string; change24h: string; openInterest: string; funding: string; volume24h: string };
}) {
  const [quote, setQuote] = useState<Quote | null>(initial);
  const mounted = useRef(true);

  useEffect(() => {
    mounted.current = true;
    async function poll() {
      try {
        const res = await fetch("/api/quotes", { cache: "no-store" });
        if (!res.ok) return;
        const data: Record<string, Quote> = await res.json();
        if (mounted.current && data[hlCoin]) setQuote(data[hlCoin]);
      } catch {
        // ignore transient network errors; next poll will retry
      }
    }
    const id = setInterval(poll, POLL_MS);
    return () => {
      mounted.current = false;
      clearInterval(id);
    };
  }, [hlCoin]);

  const up = (quote?.changePct ?? 0) >= 0;
  const stats = [
    { label: labels.price, value: quote ? `$${quote.markPx.toLocaleString("en-US", { maximumFractionDigits: 2 })}` : "—" },
    {
      label: labels.change24h,
      value: quote ? `${up ? "+" : ""}${quote.changePct.toFixed(2)}%` : "—",
      tone: quote ? (up ? "text-emerald-400" : "text-red-400") : "",
    },
    { label: labels.openInterest, value: quote ? quote.openInterest.toLocaleString("en-US", { maximumFractionDigits: 0 }) : "—" },
    { label: labels.funding, value: quote ? `${(quote.funding * 100).toFixed(4)}%` : "—" },
    { label: labels.volume24h, value: quote ? `$${Math.round(quote.dayNtlVlm).toLocaleString("en-US")}` : "—" },
  ];

  return (
    <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-5">
      {stats.map((s) => (
        <div key={s.label} className="rounded-lg border border-[var(--border-default)] bg-[var(--bg-surface)] p-3">
          <p className="text-[11px] text-[var(--text-muted)]">{s.label}</p>
          <p className={`text-base font-semibold ${s.tone || "text-[var(--text-primary)]"}`}>{s.value}</p>
        </div>
      ))}
    </div>
  );
}
