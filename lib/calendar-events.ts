export type CalendarEvent = {
  date: string; // YYYY-MM-DD
  labelKo: string;
  labelEn: string;
  type: "macro" | "earnings" | "politics";
  confirmed: boolean;
};

export const CALENDAR_EVENTS: CalendarEvent[] = [
  { date: "2026-07-07", labelKo: "삼성전자 2분기 잠정실적", labelEn: "Samsung Q2 preliminary earnings", type: "earnings", confirmed: true },
  { date: "2026-07-14", labelKo: "미국 CPI (6월)", labelEn: "US CPI (June)", type: "macro", confirmed: true },
  { date: "2026-07-15", labelKo: "미국 PPI (6월)", labelEn: "US PPI (June)", type: "macro", confirmed: true },
  { date: "2026-07-16", labelKo: "TSMC 2분기 실적 · 3분기 가이던스", labelEn: "TSMC Q2 earnings & Q3 guidance", type: "earnings", confirmed: true },
  { date: "2026-07-29", labelKo: "FOMC 회의 종료", labelEn: "FOMC meeting ends", type: "macro", confirmed: true },
  { date: "2026-08-12", labelKo: "미국 CPI (7월)", labelEn: "US CPI (July)", type: "macro", confirmed: true },
  { date: "2026-08-13", labelKo: "미국 PPI (7월)", labelEn: "US PPI (July)", type: "macro", confirmed: true },
  { date: "2026-08-26", labelKo: "엔비디아 회계연도 2Q27 실적", labelEn: "NVIDIA FQ2'27 earnings", type: "earnings", confirmed: true },
  { date: "2026-09-24", labelKo: "마이크론 회계연도 4Q26 실적 (추정, 9/22~29)", labelEn: "Micron FQ4'26 earnings (est., Sep 22-29)", type: "earnings", confirmed: false },
  { date: "2026-11-03", labelKo: "미국 중간선거", labelEn: "US Midterm Elections", type: "politics", confirmed: true },
];
