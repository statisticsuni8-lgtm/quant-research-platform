const HL_INFO_URL = "https://api.hyperliquid.xyz/info";

async function hlInfo<T>(body: Record<string, unknown>): Promise<T> {
  const res = await fetch(HL_INFO_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`Hyperliquid info request failed: ${res.status}`);
  return res.json();
}

export type HlAssetCtx = {
  funding: string;
  openInterest: string;
  prevDayPx: string;
  dayNtlVlm: string;
  markPx: string;
  oraclePx: string;
  midPx: string | null;
};

export type HlQuote = {
  coin: string;
  markPx: number;
  prevDayPx: number;
  changePct: number;
  openInterest: number;
  funding: number;
  dayNtlVlm: number;
};

let xyzCache: { at: number; data: Map<string, HlQuote> } | null = null;
const CACHE_MS = 15_000;

export async function getXyzQuotes(): Promise<Map<string, HlQuote>> {
  if (xyzCache && Date.now() - xyzCache.at < CACHE_MS) return xyzCache.data;

  const [meta, ctxs] = await hlInfo<[{ universe: { name: string }[] }, HlAssetCtx[]]>({
    type: "metaAndAssetCtxs",
    dex: "xyz",
  });

  const map = new Map<string, HlQuote>();
  meta.universe.forEach((u, i) => {
    const c = ctxs[i];
    if (!c) return;
    const markPx = parseFloat(c.markPx);
    const prevDayPx = parseFloat(c.prevDayPx);
    map.set(u.name, {
      coin: u.name,
      markPx,
      prevDayPx,
      changePct: prevDayPx ? ((markPx - prevDayPx) / prevDayPx) * 100 : 0,
      openInterest: parseFloat(c.openInterest),
      funding: parseFloat(c.funding),
      dayNtlVlm: parseFloat(c.dayNtlVlm),
    });
  });

  xyzCache = { at: Date.now(), data: map };
  return map;
}

export type HlBookLevel = { px: number; sz: number; n: number };
export type HlBook = { bids: HlBookLevel[]; asks: HlBookLevel[] };

export async function getL2Book(coin: string): Promise<HlBook> {
  const data = await hlInfo<{ levels: [Array<{ px: string; sz: string; n: number }>, Array<{ px: string; sz: string; n: number }>] }>(
    { type: "l2Book", coin }
  );
  const [bidLevels, askLevels] = data.levels;
  return {
    bids: bidLevels.map((l) => ({ px: parseFloat(l.px), sz: parseFloat(l.sz), n: l.n })),
    asks: askLevels.map((l) => ({ px: parseFloat(l.px), sz: parseFloat(l.sz), n: l.n })),
  };
}

export type HlCandle = { t: number; o: number; h: number; l: number; c: number; v: number };

export async function getCandles(coin: string, days = 60): Promise<HlCandle[]> {
  const endTime = Date.now();
  const startTime = endTime - days * 24 * 60 * 60 * 1000;
  const data = await hlInfo<Array<{ t: number; o: string; h: string; l: string; c: string; v: string }>>({
    type: "candleSnapshot",
    req: { coin, interval: "1d", startTime, endTime },
  });
  return data.map((d) => ({
    t: d.t,
    o: parseFloat(d.o),
    h: parseFloat(d.h),
    l: parseFloat(d.l),
    c: parseFloat(d.c),
    v: parseFloat(d.v),
  }));
}
