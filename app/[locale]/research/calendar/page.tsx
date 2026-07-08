import { toLocale } from "@/lib/i18n";
import { CALENDAR_EVENTS } from "@/lib/calendar-events";
import CalendarGrid from "@/components/CalendarGrid";

export default async function CalendarPage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = toLocale((await params).locale);
  const isEn = locale === "en";

  return (
    <div className="mx-auto w-full max-w-3xl flex-1 px-6 py-10">
      <a href={`/${locale}/research`} className="text-sm text-[var(--text-muted)] hover:text-[var(--text-secondary)]">
        ← {isEn ? "Back to Research Hub" : "리서치 허브로 돌아가기"}
      </a>

      <div className="mt-4 mb-6">
        <h1 className="text-2xl font-semibold text-[var(--text-primary)]">
          {isEn ? "Macro & Earnings Calendar" : "매크로·실적 캘린더"}
        </h1>
        <p className="mt-1 text-sm text-[var(--text-muted)]">
          {isEn
            ? "CPI/PPI releases, FOMC meetings, key earnings dates, and the midterm election, all in one place."
            : "CPI/PPI 발표일, FOMC 회의, 주요 실적 발표일, 중간선거 일정을 한눈에 확인하세요."}
        </p>
      </div>

      <div className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)] p-6">
        <CalendarGrid events={CALENDAR_EVENTS} locale={locale} initialYear={2026} initialMonth={6} />
      </div>

      <div className="mt-4 flex flex-wrap gap-3 text-xs text-[var(--text-muted)]">
        <span className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-blue-500" /> {isEn ? "Macro" : "매크로"}
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-emerald-500" /> {isEn ? "Earnings" : "실적"}
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-amber-500" /> {isEn ? "Politics" : "정치"}
        </span>
      </div>
    </div>
  );
}
