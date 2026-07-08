"use client";

import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Cell, LabelList } from "recharts";

export default function MidtermOddsChart({ odds }: { odds: { label: string; value: number }[] }) {
  return (
    <div style={{ height: Math.max(200, odds.length * 34) }} className="w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={odds} layout="vertical" margin={{ top: 8, right: 40, left: 8, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border-default)" horizontal={false} />
          <XAxis type="number" domain={[0, 100]} tick={{ fontSize: 11, fill: "var(--text-muted)" }} axisLine={false} tickLine={false} />
          <YAxis
            type="category"
            dataKey="label"
            tick={{ fontSize: 11, fill: "var(--text-tertiary)" }}
            axisLine={false}
            tickLine={false}
            width={170}
          />
          <Tooltip
            contentStyle={{ backgroundColor: "var(--bg-tooltip)", border: "1px solid var(--border-hover)", fontSize: 12 }}
            labelStyle={{ color: "var(--text-primary)" }}
            formatter={(value) => [`${value}%`, "Odds"]}
          />
          <Bar dataKey="value" radius={[0, 4, 4, 0]}>
            {odds.map((d, i) => (
              <Cell key={i} fill={d.label.toLowerCase().includes("dem") || d.label.includes("민주") ? "#3b82f6" : d.label.toLowerCase().includes("gop") || d.label.includes("공화") ? "#ef4444" : "#a1a1aa"} />
            ))}
            <LabelList dataKey="value" position="right" formatter={(v) => `${v}%`} fill="var(--text-primary)" fontSize={11} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
