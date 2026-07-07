import { getResearchContent, type Confidence } from "@/lib/research-content";
import { FRED_SERIES, getFredSeries } from "@/lib/fred";
import { getLatestGammaExposure } from "@/lib/gamma";
import { toLocale } from "@/lib/i18n";
import FredChart from "@/components/FredChart";
import GexChart from "@/components/GexChart";

export const dynamic = "force-dynamic";

function Tag({ tone, children }: { tone: Confidence; children: React.ReactNode }) {
  const style =
    tone === "confirmed"
      ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
      : "border-amber-500/30 bg-amber-500/10 text-amber-400";
  return <span className={`ml-2 rounded-full border px-2 py-0.5 text-[10px] font-medium ${style}`}>{children}</span>;
}

function Source({ children }: { children: React.ReactNode }) {
  return <p className="mt-3 border-t border-zinc-800 pt-2 text-xs text-zinc-600">{children}</p>;
}

const SCENARIO_TONE = {
  buy: "text-emerald-400",
  neutral: "text-zinc-300",
  sell: "text-red-400",
};

export default async function ResearchPage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = toLocale((await params).locale);
  const c = getResearchContent(locale);

  const [fredData, gexRows] = await Promise.all([
    Promise.all(
      FRED_SERIES.map(async (s) => ({
        meta: s,
        points: await getFredSeries(s.id).catch(() => []),
      }))
    ),
    getLatestGammaExposure("SPY").catch(() => []),
  ]);

  return (
    <div className="mx-auto w-full max-w-4xl flex-1 px-6 py-10">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-zinc-100">{c.pageTitle}</h1>
        <p className="mt-1 text-sm text-zinc-500">{c.pageSubtitle}</p>
      </div>

      <div className="mb-6 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-300">
        <span className="font-semibold">{c.todayBanner.strong}</span> {c.todayBanner.rest}
      </div>

      <div className="space-y-6">
        <section className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">
          <p className="text-xs font-medium uppercase tracking-wide text-emerald-400">{c.macroCalendar.eyebrow}</p>
          <h2 className="text-xl font-semibold text-zinc-100">{c.macroCalendar.title}</h2>
          <div className="mt-4 space-y-3 text-sm leading-relaxed text-zinc-300">
            <p>{c.macroCalendar.intro}</p>
            <ul className="ml-4 list-disc space-y-1">
              {c.macroCalendar.items.map((item) => (
                <li key={item.label}>
                  {item.label}
                  <Tag tone={item.conf}>{item.conf === "confirmed" ? c.confirmedLabel : c.singleLabel}</Tag>
                </li>
              ))}
            </ul>
            <p className="text-zinc-500">{c.macroCalendar.fomcNote}</p>
            <Source>{c.macroCalendar.source}</Source>
          </div>
        </section>

        <section className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">
          <p className="text-xs font-medium uppercase tracking-wide text-emerald-400">{c.earningsScenario.eyebrow}</p>
          <h2 className="text-xl font-semibold text-zinc-100">{c.earningsScenario.title}</h2>
          <div className="mt-4 space-y-3 text-sm leading-relaxed text-zinc-300">
            <p>{c.earningsScenario.intro}</p>
            <ul className="ml-4 list-disc space-y-1 text-zinc-400">
              {c.earningsScenario.consensusList.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="mt-4 overflow-x-auto rounded-lg border border-zinc-800">
              <table className="w-full text-left text-xs">
                <thead className="bg-zinc-900 text-zinc-500">
                  <tr>
                    {c.earningsScenario.tableHeaders.map((h) => (
                      <th key={h} className="px-3 py-2 font-medium">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800 text-zinc-300">
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
            <p className="text-zinc-500">{c.earningsScenario.note}</p>
            <Source>{c.earningsScenario.source}</Source>
          </div>
        </section>

        <section className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">
          <p className="text-xs font-medium uppercase tracking-wide text-emerald-400">{c.readThrough.eyebrow}</p>
          <h2 className="text-xl font-semibold text-zinc-100">{c.readThrough.title}</h2>
          <div className="mt-4 space-y-3 text-sm leading-relaxed text-zinc-300">
            <p>{c.readThrough.intro}</p>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {c.readThrough.metrics.map((m) => (
                <div key={m.label} className="rounded-lg border border-zinc-800 bg-zinc-950/50 p-3">
                  <p className="text-[11px] text-zinc-500">{m.label}</p>
                  <p className="text-lg font-semibold text-zinc-100">{m.value}</p>
                  {m.sub && <p className="text-[11px] text-zinc-600">{m.sub}</p>}
                </div>
              ))}
            </div>
            <p>{c.readThrough.hbmNote}</p>
            <p className="text-zinc-400">{c.readThrough.priceNote}</p>
            <p className="text-zinc-500">{c.readThrough.readingNote}</p>
            <Source>{c.readThrough.source}</Source>
          </div>
        </section>

        <section className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">
          <p className="text-xs font-medium uppercase tracking-wide text-emerald-400">{c.macroWatch.eyebrow}</p>
          <h2 className="text-xl font-semibold text-zinc-100">{c.macroWatch.title}</h2>
          <div className="mt-4 space-y-4">
            {c.macroWatch.items.map((item) => (
              <div key={item.title}>
                <p className="text-sm text-zinc-100">
                  {item.title}
                  <Tag tone={item.conf}>{item.conf === "confirmed" ? c.confirmedLabel : c.singleLabel}</Tag>
                </p>
                <p className="mt-1 text-sm leading-relaxed text-zinc-400">{item.body}</p>
              </div>
            ))}
          </div>
          <Source>{c.macroWatch.source}</Source>
        </section>

        <section className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">
          <p className="text-xs font-medium uppercase tracking-wide text-emerald-400">{c.gammaExposure.eyebrow}</p>
          <h2 className="text-xl font-semibold text-zinc-100">{c.gammaExposure.title}</h2>
          <div className="mt-4 space-y-3 text-sm leading-relaxed text-zinc-300">
            <p>{c.gammaExposure.intro}</p>
            <p className="text-zinc-400">{c.gammaExposure.whatIsIt}</p>
            <p className="text-zinc-400">{c.gammaExposure.squeezeExplainer}</p>
            {gexRows.length > 0 ? (
              <GexChart rows={gexRows} spotLabel={c.gammaExposure.spotLabel} flipLabel={c.gammaExposure.flipLabel} />
            ) : (
              <div className="rounded-lg border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-sm text-amber-300">
                {c.gammaExposure.noData}
              </div>
            )}
            <p className="text-xs text-zinc-500">{c.gammaExposure.caveat}</p>
            <Source>{c.gammaExposure.source}</Source>
          </div>
        </section>

        <section className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">
          <p className="text-xs font-medium uppercase tracking-wide text-emerald-400">Macro Data (FRED)</p>
          <h2 className="text-xl font-semibold text-zinc-100">
            {locale === "en" ? "Live Macro Indicators" : "실시간 매크로 지표"}
          </h2>
          <p className="mt-1 mb-4 text-sm text-zinc-500">
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
        </section>
      </div>

      <p className="mt-8 text-xs text-zinc-600">
        <Tag tone="confirmed">{c.confirmedLabel}</Tag> {c.legend} · <Tag tone="single">{c.singleLabel}</Tag>{" "}
        {locale === "en" ? "= from a single source, needs further verification" : "= 단일 출처에서만 확인되어 추가 검증이 필요함"}
      </p>
    </div>
  );
}
