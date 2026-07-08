import type { ResearchContent, Confidence } from "@/lib/research-content";
import type { FredPoint } from "@/lib/fred";
import type { GexRow } from "@/lib/gamma";
import type { NewsItem } from "@/lib/news";
import type { ScreenerRow } from "@/lib/screener";
import FredChart from "@/components/FredChart";
import GexChart from "@/components/GexChart";
import VkospiChart from "@/components/VkospiChart";
import ScreenerChart from "@/components/ScreenerChart";

export function Tag({ tone, children }: { tone: Confidence; children: React.ReactNode }) {
  const style =
    tone === "confirmed"
      ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
      : "border-amber-500/30 bg-amber-500/10 text-amber-400";
  return <span className={`ml-2 rounded-full border px-2 py-0.5 text-[10px] font-medium ${style}`}>{children}</span>;
}

export function Source({ children }: { children: React.ReactNode }) {
  return <p className="mt-3 border-t border-[var(--border-default)] pt-2 text-xs text-[var(--text-faint)]">{children}</p>;
}

const SCENARIO_TONE = {
  buy: "text-emerald-400",
  neutral: "text-[var(--text-secondary)]",
  sell: "text-red-400",
};

export function MacroCalendarSection({ c }: { c: ResearchContent }) {
  return (
    <div className="space-y-3 text-sm leading-relaxed text-[var(--text-secondary)]">
      <p>{c.macroCalendar.intro}</p>
      <ul className="ml-4 list-disc space-y-1">
        {c.macroCalendar.items.map((item) => (
          <li key={item.label}>
            {item.label}
            <Tag tone={item.conf}>{item.conf === "confirmed" ? c.confirmedLabel : c.singleLabel}</Tag>
          </li>
        ))}
      </ul>
      <p className="text-[var(--text-muted)]">{c.macroCalendar.fomcNote}</p>
      <Source>{c.macroCalendar.source}</Source>
    </div>
  );
}

export function EarningsScenarioSection({ c }: { c: ResearchContent }) {
  return (
    <div className="space-y-3 text-sm leading-relaxed text-[var(--text-secondary)]">
      <p>{c.earningsScenario.intro}</p>
      <ul className="ml-4 list-disc space-y-1 text-[var(--text-tertiary)]">
        {c.earningsScenario.consensusList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <div className="mt-4 overflow-x-auto rounded-lg border border-[var(--border-default)]">
        <table className="w-full text-left text-xs">
          <thead className="bg-[var(--bg-surface)] text-[var(--text-muted)]">
            <tr>
              {c.earningsScenario.tableHeaders.map((h) => (
                <th key={h} className="px-3 py-2 font-medium">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-800 text-[var(--text-secondary)]">
            {c.earningsScenario.scenarios.map((s) => (
              <tr key={s.label}>
                <td className={`px-3 py-2 ${SCENARIO_TONE[s.tone]}`}>{s.label}</td>
                <td className="px-3 py-2">{s.condition}</td>
                <td className="px-3 py-2">{s.reaction}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-[var(--text-muted)]">{c.earningsScenario.note}</p>
      <Source>{c.earningsScenario.source}</Source>
    </div>
  );
}

export function MicronReadThroughSection({ c }: { c: ResearchContent }) {
  return (
    <div className="space-y-3 text-sm leading-relaxed text-[var(--text-secondary)]">
      <p>{c.readThrough.intro}</p>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {c.readThrough.metrics.map((m) => (
          <div key={m.label} className="rounded-lg border border-[var(--border-default)] bg-[var(--bg-surface-inset)] p-3">
            <p className="text-[11px] text-[var(--text-muted)]">{m.label}</p>
            <p className="text-lg font-semibold text-[var(--text-primary)]">{m.value}</p>
            {m.sub && <p className="text-[11px] text-[var(--text-faint)]">{m.sub}</p>}
          </div>
        ))}
      </div>
      <p>{c.readThrough.hbmNote}</p>
      <p className="text-[var(--text-tertiary)]">{c.readThrough.priceNote}</p>
      <p className="text-[var(--text-muted)]">{c.readThrough.readingNote}</p>
      <Source>{c.readThrough.source}</Source>
    </div>
  );
}

export function EarningsCalendarSection({ c }: { c: ResearchContent }) {
  return (
    <div className="space-y-4 text-sm leading-relaxed text-zinc-300">
      <p>{c.earningsCalendar.intro}</p>
      <div className="space-y-3">
        {c.earningsCalendar.rows.map((row) => (
          <div key={row.company} className="rounded-xl border border-zinc-800 bg-zinc-950/50 p-4">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <p className="text-base font-semibold text-zinc-100">
                {row.company}
                <Tag tone={row.conf}>{row.conf === "confirmed" ? c.confirmedLabel : c.singleLabel}</Tag>
              </p>
              <p className="text-sm font-medium text-emerald-400">{row.date}</p>
            </div>
            <p className="mt-2 text-sm text-zinc-400">{row.note}</p>
          </div>
        ))}
      </div>
      <Source>{c.earningsCalendar.source}</Source>
    </div>
  );
}

export function MacroWatchSection({ c }: { c: ResearchContent }) {
  return (
    <div>
      <div className="space-y-4">
        {c.macroWatch.items.map((item) => (
          <div key={item.title}>
            <p className="text-sm text-[var(--text-primary)]">
              {item.title}
              <Tag tone={item.conf}>{item.conf === "confirmed" ? c.confirmedLabel : c.singleLabel}</Tag>
            </p>
            <p className="mt-1 text-sm leading-relaxed text-[var(--text-tertiary)]">{item.body}</p>
          </div>
        ))}
      </div>
      <Source>{c.macroWatch.source}</Source>
    </div>
  );
}

export function PrivateCreditSection({ c }: { c: ResearchContent }) {
  return (
    <div className="space-y-4 text-sm leading-relaxed text-[var(--text-secondary)]">
      <p>{c.privateCredit.intro}</p>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-4">
          <p className="mb-2 text-sm font-semibold text-red-400">{c.privateCredit.riskTitle}</p>
          <ul className="space-y-2">
            {c.privateCredit.riskPoints.map((p, i) => (
              <li key={i} className="text-sm text-[var(--text-secondary)]">
                {p.text}
                <Tag tone={p.conf}>{p.conf === "confirmed" ? c.confirmedLabel : c.singleLabel}</Tag>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4">
          <p className="mb-2 text-sm font-semibold text-emerald-400">{c.privateCredit.optimismTitle}</p>
          <ul className="space-y-2">
            {c.privateCredit.optimismPoints.map((p, i) => (
              <li key={i} className="text-sm text-[var(--text-secondary)]">
                {p.text}
                <Tag tone={p.conf}>{p.conf === "confirmed" ? c.confirmedLabel : c.singleLabel}</Tag>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-4">
        <p className="mb-2 text-sm font-semibold text-amber-400">{c.privateCredit.materializeTitle}</p>
        <ol className="ml-4 list-decimal space-y-1 text-[var(--text-secondary)]">
          {c.privateCredit.materializePoints.map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ol>
      </div>
      <Source>{c.privateCredit.source}</Source>
    </div>
  );
}

export function VkospiSection({ c }: { c: ResearchContent }) {
  return (
    <div className="space-y-4 text-sm leading-relaxed text-[var(--text-secondary)]">
      <p>{c.vkospi.intro}</p>
      <VkospiChart data={c.vkospi.chart} />
      <ul className="ml-4 list-disc space-y-2 text-[var(--text-secondary)]">
        {c.vkospi.points.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
      <p className="rounded-lg border border-amber-500/20 bg-amber-500/5 px-3 py-2 text-xs text-amber-300">{c.vkospi.dataNote}</p>
      <Source>{c.vkospi.source}</Source>
    </div>
  );
}

export function GammaExposureSection({ c, gexRows }: { c: ResearchContent; gexRows: GexRow[] }) {
  return (
    <div className="space-y-3 text-sm leading-relaxed text-[var(--text-secondary)]">
      <p>{c.gammaExposure.intro}</p>
      <p className="text-[var(--text-tertiary)]">{c.gammaExposure.whatIsIt}</p>
      <p className="text-[var(--text-tertiary)]">{c.gammaExposure.squeezeExplainer}</p>
      {gexRows.length > 0 ? (
        <GexChart rows={gexRows} spotLabel={c.gammaExposure.spotLabel} flipLabel={c.gammaExposure.flipLabel} />
      ) : (
        <div className="rounded-lg border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-sm text-amber-300">
          {c.gammaExposure.noData}
        </div>
      )}
      <p className="text-xs text-[var(--text-muted)]">{c.gammaExposure.caveat}</p>
      <Source>{c.gammaExposure.source}</Source>
    </div>
  );
}

export function NewsSection({ locale, items }: { locale: string; items: NewsItem[] }) {
  if (items.length === 0) {
    return (
      <p className="text-sm text-[var(--text-muted)]">
        {locale === "en" ? "Couldn't load headlines right now — try again shortly." : "지금은 헤드라인을 불러오지 못했습니다 — 잠시 후 다시 시도해주세요."}
      </p>
    );
  }
  return (
    <div>
      <ul className="divide-y divide-zinc-800">
        {items.map((item, i) => (
          <li key={i} className="py-3">
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-[var(--text-primary)] hover:text-emerald-400 hover:underline"
            >
              {item.title}
            </a>
            <p className="mt-1 text-xs text-[var(--text-faint)]">
              {item.source}
              {item.pubDate && ` · ${new Date(item.pubDate).toLocaleString(locale === "en" ? "en-US" : "ko-KR")}`}
            </p>
          </li>
        ))}
      </ul>
      <Source>{locale === "en" ? "Source: Google News RSS" : "출처: 구글 뉴스 RSS"}</Source>
    </div>
  );
}

export function ScreenerSection({ locale, rows }: { locale: string; rows: ScreenerRow[] }) {
  const isEn = locale === "en";
  if (rows.length === 0) {
    return <p className="text-sm text-zinc-500">{isEn ? "Couldn't load screener data right now." : "지금은 스크리너 데이터를 불러오지 못했습니다."}</p>;
  }

  const oversold = rows.filter((r) => r.zScore <= -1.5);
  const overbought = rows.filter((r) => r.zScore >= 1.5);
  const extremes = [...oversold.slice(0, 10), ...overbought.slice(-10)].sort((a, b) => a.zScore - b.zScore);

  return (
    <div className="space-y-6 text-sm leading-relaxed text-zinc-300">
      <p>
        {isEn
          ? `All ${rows.length} tracked tickers ranked by 60-day Z-score, computed live from Hyperliquid's own price history (no external data source). Z ≤ -1.5 is read as oversold, Z ≥ 1.5 as overbought — same convention as the main dashboard.`
          : `추적 중인 ${rows.length}개 종목 전체를 60일 Z-score로 순위 매겼습니다 — 하이퍼리퀴드 자체 가격 히스토리로 실시간 계산했습니다(외부 데이터 소스 없음). 대시보드와 동일한 기준으로 Z ≤ -1.5는 과매도, Z ≥ 1.5는 과매수로 읽습니다.`}
      </p>

      {extremes.length > 0 ? (
        <ScreenerChart rows={extremes} />
      ) : (
        <p className="text-zinc-500">{isEn ? "No tickers currently in oversold/overbought territory." : "현재 과매도/과매수 구간에 있는 종목이 없습니다."}</p>
      )}

      <div className="overflow-x-auto rounded-lg border border-zinc-800">
        <table className="w-full text-left text-xs">
          <thead className="bg-zinc-900 text-zinc-500">
            <tr>
              <th className="px-3 py-2 font-medium">{isEn ? "Ticker" : "티커"}</th>
              <th className="px-3 py-2 font-medium">{isEn ? "Name" : "종목명"}</th>
              <th className="px-3 py-2 font-medium text-right">{isEn ? "Price" : "가격"}</th>
              <th className="px-3 py-2 font-medium text-right">Z-Score</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-800 text-zinc-300">
            {rows.map((r) => (
              <tr key={r.symbol}>
                <td className="px-3 py-2 font-medium text-zinc-100">
                  <a href={`/${locale}/market/${r.symbol}`} className="hover:text-emerald-400 hover:underline">
                    {r.symbol}
                  </a>
                </td>
                <td className="px-3 py-2 text-zinc-400">{isEn ? r.nameEn : r.nameKo}</td>
                <td className="px-3 py-2 text-right">${r.price.toLocaleString("en-US", { maximumFractionDigits: 2 })}</td>
                <td
                  className={`px-3 py-2 text-right font-medium ${
                    r.zScore <= -1.5 ? "text-emerald-400" : r.zScore >= 1.5 ? "text-red-400" : "text-zinc-400"
                  }`}
                >
                  {r.zScore.toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Source>{isEn ? "Source: Hyperliquid xyz perp DEX candle history (live, 60-day)" : "출처: Hyperliquid xyz perp DEX 캔들 히스토리 (실시간, 60일)"}</Source>
    </div>
  );
}

export function FredMacroSection({
  locale,
  fredData,
}: {
  locale: string;
  fredData: { meta: { id: string; labelKo: string; labelEn: string }; points: FredPoint[] }[];
}) {
  return (
    <div>
      <p className="mb-4 text-sm text-[var(--text-muted)]">
        {locale === "en"
          ? "Pulled live from the Federal Reserve Economic Data (FRED) API."
          : "연방준비은행 FRED에서 실시간으로 가져온 데이터입니다."}
      </p>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {fredData.map(({ meta, points }) => (
          <FredChart key={meta.id} label={locale === "en" ? meta.labelEn : meta.labelKo} points={points} />
        ))}
      </div>
      <Source>Source: Federal Reserve Bank of St. Louis (FRED)</Source>
    </div>
  );
}
