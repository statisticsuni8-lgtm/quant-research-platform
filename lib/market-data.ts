import { supabase, TRACKED_TICKERS, type MarketDataRow } from "./supabase";

export type TickerSeries = {
  symbol: string;
  name: string;
  short: string;
  latest: MarketDataRow | null;
  history: MarketDataRow[];
};

export async function getMarketData(): Promise<TickerSeries[]> {
  const results = await Promise.all(
    TRACKED_TICKERS.map(async (t) => {
      const { data, error } = await supabase
        .from("market_data")
        .select("*")
        .eq("ticker", t.symbol)
        .order("created_at", { ascending: false })
        .limit(60);

      if (error) {
        console.error(`Failed to load market_data for ${t.symbol}:`, error.message);
        return { ...t, latest: null, history: [] };
      }

      const history = (data ?? []).slice().reverse();
      const latest = data && data.length > 0 ? data[0] : null;
      return { ...t, latest, history };
    })
  );

  return results;
}

export function classifySignal(zScore: number | null | undefined) {
  if (zScore === null || zScore === undefined) {
    return { label: "데이터 없음", tone: "neutral" as const };
  }
  if (zScore <= -1.5) return { label: "과매도 (매수 관심)", tone: "buy" as const };
  if (zScore >= 1.5) return { label: "과매수 (매도 관심)", tone: "sell" as const };
  return { label: "중립", tone: "neutral" as const };
}
