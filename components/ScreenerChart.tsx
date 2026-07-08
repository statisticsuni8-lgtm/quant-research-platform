"use client";

import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Cell, ReferenceLine } from "recharts";
import type { ScreenerRow } from "@/lib/screener";

export default function ScreenerChart({ rows }: { rows: ScreenerRow[] }) {
  const data = rows.map((r) => ({ symbol: r.symbol, zScore: Number(r.zScore.toFixed(2)) }));
  const height = Math.max(240, data.length * 26);

  return (
    <div style={{ height }} className="w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} layout="vertical" margin={{ top: 8, right: 30, left: 8, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border-default)" horizontal={false} />
          <XAxis type="number" domain={[-3, 3]} tick={{ fontSize: 11, fill: "var(--text-muted)" }} axisLine={false} tickLine={false} />
          <YAxis
            type="category"
            dataKey="symbol"
            tick={{ fontSize: 11, fill: "var(--text-tertiary)" }}
            axisLine={false}
            tickLine={false}
            width={70}
          />
          <Tooltip
            contentStyle={{ backgroundColor: "var(--bg-tooltip)", border: "1px solid var(--border-hover)", fontSize: 12 }}
            labelStyle={{ color: "var(--text-primary)" }}
          />
          <ReferenceLine x={0} stroke="var(--border-hover)" />
          <ReferenceLine x={1.5} stroke="#ef4444" strokeDasharray="4 4" />
          <ReferenceLine x={-1.5} stroke="#22c55e" strokeDasharray="4 4" />
          <Bar dataKey="zScore" radius={[0, 4, 4, 0]}>
            {data.map((d, i) => (
              <Cell key={i} fill={d.zScore <= -1.5 ? "#22c55e" : d.zScore >= 1.5 ? "#ef4444" : "#71717a"} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
