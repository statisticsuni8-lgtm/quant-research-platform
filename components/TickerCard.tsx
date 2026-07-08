import { classifySignal } from "@/lib/market-data";
import type { TickerSeries } from "@/lib/market-data";
import ZScoreChart from "./ZScoreChart";

const TONE_STYLES = {
  buy: "border-emerald-500/40 bg-emerald-500/10 text-emerald-400",
  sell: "border-red-500/40 bg-red-500/10 text-red-400",
  neutral: "border-[var(--border-hover)] bg-[var(--bg-muted)] text-[var(--text-tertiary)]",
};

export default function TickerCard({ series }: { series: TickerSeries }) {
  const { latest, history, name, short, symbol } = series;
  const signal = classifySignal(latest?.z_score);

  return (
    <div className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-5">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-[var(--text-muted)]">{short}</p>
          <h3 className="text-lg font-semibold text-[var(--text-primary)]">{name}</h3>
          <p className="text-xs text-[var(--text-faint)]">{symbol}</p>
        </div>
        <span className={`rounded-full border px-2.5 py-1 text-xs font-medium ${TONE_STYLES[signal.tone]}`}>
          {signal.label}
        </span>
      </div>

      <div className="mt-4 flex items-end justify-between">
        <div>
          <p className="text-xs text-[var(--text-muted)]">현재가</p>
          <p className="text-2xl font-semibold text-[var(--text-primary)]">
            {latest ? latest.price.toLocaleString("ko-KR", { maximumFractionDigits: 2 }) : "—"}
          </p>
        </div>
        <div className="text-right">
          <p className="text-xs text-[var(--text-muted)]">Z-Score</p>
          <p className="text-2xl font-semibold text-[var(--text-primary)]">
            {latest ? latest.z_score.toFixed(2) : "—"}
          </p>
        </div>
      </div>

      <div className="mt-4">
        <ZScoreChart history={history} />
      </div>

      {latest && (
        <p className="mt-2 text-right text-[11px] text-[var(--text-faint)]">
          업데이트: {new Date(latest.created_at).toLocaleString("ko-KR")}
        </p>
      )}
    </div>
  );
}
