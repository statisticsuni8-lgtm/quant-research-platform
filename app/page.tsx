import { getMarketData } from "@/lib/market-data";
import TickerCard from "@/components/TickerCard";

export const dynamic = "force-dynamic";

export default async function Home() {
  const series = await getMarketData();
  const hasAnyData = series.some((s) => s.latest !== null);

  return (
    <div className="mx-auto w-full max-w-6xl flex-1 px-6 py-10">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-zinc-100">반도체 퀀트 Z-Score 트래커</h1>
        <p className="mt-1 text-sm text-zinc-500">
          60일 이동 통계 기준 과매수/과매도 신호 — 삼성전자 · SK하이닉스 · NVIDIA
        </p>
      </div>

      {!hasAnyData && (
        <div className="mb-8 rounded-xl border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-sm text-amber-300">
          아직 Supabase에 데이터가 없습니다. <code className="rounded bg-black/30 px-1">python quant_engine.py</code>를
          한 번 실행하거나, GitHub Actions 워크플로우가 처음 실행될 때까지 기다려주세요.
        </div>
      )}

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {series.map((s) => (
          <TickerCard key={s.symbol} series={s} />
        ))}
      </div>

      <div className="mt-8 flex flex-wrap gap-4 text-xs text-zinc-600">
        <span className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-emerald-500" /> Z ≤ -1.5 과매도
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-red-500" /> Z ≥ 1.5 과매수
        </span>
      </div>
    </div>
  );
}
