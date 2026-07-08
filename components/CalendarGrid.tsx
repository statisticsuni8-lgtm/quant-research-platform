"use client";

import { useState } from "react";
import type { CalendarEvent } from "@/lib/calendar-events";

const TYPE_COLOR: Record<CalendarEvent["type"], string> = {
  macro: "bg-blue-500/15 text-blue-400 border-blue-500/30",
  earnings: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
  politics: "bg-amber-500/15 text-amber-400 border-amber-500/30",
};

export default function CalendarGrid({
  events,
  locale,
  initialYear,
  initialMonth,
}: {
  events: CalendarEvent[];
  locale: string;
  initialYear: number;
  initialMonth: number; // 0-indexed
}) {
  const [year, setYear] = useState(initialYear);
  const [month, setMonth] = useState(initialMonth);

  const firstDay = new Date(year, month, 1);
  const startWeekday = firstDay.getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const cells: (number | null)[] = [
    ...Array.from({ length: startWeekday }, () => null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];

  const monthLabel = new Date(year, month, 1).toLocaleDateString(locale === "en" ? "en-US" : "ko-KR", {
    year: "numeric",
    month: "long",
  });

  const weekdays =
    locale === "en" ? ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"] : ["일", "월", "화", "수", "목", "금", "토"];

  function eventsOn(day: number) {
    const dateStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    return events.filter((e) => e.date === dateStr);
  }

  function shiftMonth(delta: number) {
    const d = new Date(year, month + delta, 1);
    setYear(d.getFullYear());
    setMonth(d.getMonth());
  }

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <button
          onClick={() => shiftMonth(-1)}
          className="rounded-lg border border-[var(--border-default)] px-3 py-1.5 text-sm text-[var(--text-secondary)] hover:border-[var(--border-hover)]"
        >
          ←
        </button>
        <p className="text-base font-semibold text-[var(--text-primary)]">{monthLabel}</p>
        <button
          onClick={() => shiftMonth(1)}
          className="rounded-lg border border-[var(--border-default)] px-3 py-1.5 text-sm text-[var(--text-secondary)] hover:border-[var(--border-hover)]"
        >
          →
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1 text-center text-xs font-medium text-[var(--text-muted)]">
        {weekdays.map((w) => (
          <div key={w} className="py-1">
            {w}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {cells.map((day, i) => {
          if (day === null) return <div key={i} className="min-h-[72px]" />;
          const dayEvents = eventsOn(day);
          return (
            <div
              key={i}
              className={`min-h-[72px] rounded-lg border p-1 text-left ${
                dayEvents.length > 0 ? "border-[var(--border-hover)]" : "border-[var(--border-default)]"
              }`}
            >
              <p className="px-1 text-xs text-[var(--text-muted)]">{day}</p>
              <div className="mt-0.5 space-y-0.5">
                {dayEvents.map((e, j) => (
                  <p
                    key={j}
                    title={locale === "en" ? e.labelEn : e.labelKo}
                    className={`truncate rounded border px-1 py-0.5 text-[10px] leading-tight ${TYPE_COLOR[e.type]}`}
                  >
                    {locale === "en" ? e.labelEn : e.labelKo}
                  </p>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
