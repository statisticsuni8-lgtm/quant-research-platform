import { classifySignal } from "@/lib/market-data";
import type { TickerSeries } from "@/lib/market-data";
import ZScoreChart from "./ZScoreChart";

const TONE_STYLES = {
  buy: "border-emerald-500/40 bg-emerald-500/10 text-emerald-400",
  sell: "border-red-500/40 bg-red-500/10 text-red-400",
  neutral: "border-zinc-700 bg-zinc-800/50 text-zinc-400",
};

export default function TickerCard({ series }: { series: TickerSeries }) {
  const { latest, history, name, short, symbol } = series;
  const signal = classifySignal(latest?.z_score);

  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">{short}</p>
          <h3 className="text-lg font-semibold text-zinc-100">{name}</h3>
          <p className="text-xs text-zinc-600">{symbol}</p>
        </div>
        <span className={`rounded-full border px-2.5 py-1 text-xs font-medium ${TONE_STYLES[signal.tone]}`}>
          {signal.label}
        </span>
      </div>

      <div className="mt-4 flex items-end justify-between">
        <div>
          <p className="text-xs text-zinc-500">현재가</p>
          <p className="text-2xl font-semibold text-zinc-100">
            {latest ? latest.price.toLocaleString("ko-KR", { maximumFractionDigits: 2 }) : "—"}
          </p>
        </div>
        <div className="text-right">
          <p className="text-xs text-zinc-500">Z-Score</p>
          <p className="text-2xl font-semibold text-zinc-100">
            {latest ? latest.z_score.toFixed(2) : "—"}
          </p>
        </div>
      </div>

      <div className="mt-4">
        <ZScoreChart history={history} />
      </div>

      {latest && (
        <p className="mt-2 text-right text-[11px] text-zinc-600">
          업데이트: {new Date(latest.created_at).toLocaleString("ko-KR")}
        </p>
      )}
    </div>
  );
}
