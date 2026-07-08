import { getCandles } from "./hyperliquid";
import { allTickers, type TickerMeta } from "./tickers";

export type ScreenerRow = TickerMeta & {
  price: number;
  zScore: number;
};

export async function computeScreener(): Promise<ScreenerRow[]> {
  const tickers = allTickers();
  const results = await Promise.all(
    tickers.map(async (t) => {
      try {
        const candles = await getCandles(t.hlCoin, 60);
        if (candles.length < 10) return null;
        const closes = candles.map((c) => c.c);
        const mean = closes.reduce((a, b) => a + b, 0) / closes.length;
        const variance = closes.reduce((a, b) => a + (b - mean) ** 2, 0) / closes.length;
        const stdDev = Math.sqrt(variance);
        if (stdDev === 0) return null;
        const price = closes[closes.length - 1];
        const zScore = (price - mean) / stdDev;
        return { ...t, price, zScore };
      } catch {
        return null;
      }
    })
  );
  return results.filter((r): r is ScreenerRow => r !== null).sort((a, b) => a.zScore - b.zScore);
}
