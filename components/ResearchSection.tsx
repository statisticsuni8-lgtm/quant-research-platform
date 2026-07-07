import type { ReactNode } from "react";

export default function ResearchSection({
  eyebrow,
  title,
  updated,
  children,
}: {
  eyebrow: string;
  title: string;
  updated?: string;
  children: ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">
      <div className="mb-4 flex items-baseline justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-emerald-400">{eyebrow}</p>
          <h2 className="text-xl font-semibold text-zinc-100">{title}</h2>
        </div>
        {updated && <p className="text-xs text-zinc-600">업데이트: {updated}</p>}
      </div>
      <div className="space-y-3 text-sm leading-relaxed text-zinc-300">{children}</div>
    </section>
  );
}
