"use client";

import { useEffect, useRef, useState } from "react";

type Quote = { markPx: number; changePct: number };
type PeerMeta = { symbol: string; hlCoin: string };

const POLL_MS = 8_000;

export default function LivePeerChips({
  locale,
  peers,
  initial,
}: {
  locale: string;
  peers: PeerMeta[];
  initial: Record<string, Quote>;
}) {
  const [live, setLive] = useState<Record<string, Quote>>(initial);
  const mounted = useRef(true);

  useEffect(() => {
    mounted.current = true;
    async function poll() {
      try {
        const res = await fetch("/api/quotes", { cache: "no-store" });
        if (!res.ok) return;
        const data: Record<string, Quote> = await res.json();
        if (mounted.current) setLive(data);
      } catch {
        // ignore transient network errors; next poll will retry
      }
    }
    const id = setInterval(poll, POLL_MS);
    return () => {
      mounted.current = false;
      clearInterval(id);
    };
  }, []);

  if (peers.length === 0) return <p className="text-sm text-[var(--text-faint)]">—</p>;

  return (
    <div className="flex flex-wrap gap-2">
      {peers.map((p) => {
        const q = live[p.hlCoin];
        const up = (q?.changePct ?? 0) >= 0;
        return (
          <a
            key={p.symbol}
            href={`/${locale}/market/${p.symbol}`}
            className="rounded-lg border border-[var(--border-default)] bg-[var(--bg-surface-inset)] px-3 py-2 text-sm hover:border-[var(--border-hover)]"
          >
            <span className="font-medium text-[var(--text-primary)]">{p.symbol}</span>{" "}
            {q && (
              <span className={up ? "text-emerald-400" : "text-red-400"}>
                {up ? "+" : ""}
                {q.changePct.toFixed(2)}%
              </span>
            )}
          </a>
        );
      })}
    </div>
  );
}
