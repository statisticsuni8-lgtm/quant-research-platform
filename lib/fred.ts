export type FredSeriesMeta = {
  id: string;
  labelKo: string;
  labelEn: string;
};

export const FRED_SERIES: FredSeriesMeta[] = [
  { id: "CPIAUCSL", labelKo: "소비자물가지수 (CPI)", labelEn: "Consumer Price Index (CPI)" },
  { id: "PPIACO", labelKo: "생산자물가지수 (PPI)", labelEn: "Producer Price Index (PPI)" },
  { id: "UNRATE", labelKo: "실업률", labelEn: "Unemployment Rate" },
  { id: "PAYEMS", labelKo: "비농업 고용지표 (천 명)", labelEn: "Nonfarm Payrolls (thousands)" },
  { id: "FEDFUNDS", labelKo: "연방기금금리", labelEn: "Federal Funds Rate" },
];

export type FredPoint = { date: string; value: number };

export async function getFredSeries(seriesId: string, lastN = 36): Promise<FredPoint[]> {
  const res = await fetch(`https://fred.stlouisfed.org/graph/fredgraph.csv?id=${seriesId}`, {
    headers: {
      // FRED silently stalls requests with no User-Agent (Node's fetch sends none by default).
      "User-Agent": "Mozilla/5.0 (compatible; SemiQuantBot/1.0; +https://quant-research-platform-n1dg.vercel.app)",
    },
    next: { revalidate: 3600 },
    signal: AbortSignal.timeout(8000),
  });
  if (!res.ok) throw new Error(`FRED request failed for ${seriesId}: ${res.status}`);
  const csv = await res.text();

  const rows = csv
    .trim()
    .split("\n")
    .slice(1)
    .map((line) => {
      const [date, rawValue] = line.split(",");
      return { date, value: parseFloat(rawValue) };
    })
    .filter((row) => !Number.isNaN(row.value));

  return rows.slice(-lastN);
}
