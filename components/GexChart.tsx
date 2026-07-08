"use client";

import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, ReferenceLine, CartesianGrid, Cell } from "recharts";
import type { GexRow } from "@/lib/gamma";

export default function GexChart({
  rows,
  spotLabel,
  flipLabel,
}: {
  rows: GexRow[];
  spotLabel: string;
  flipLabel: string;
}) {
  if (rows.length === 0) {
    return <div className="flex h-72 items-center justify-center text-sm text-[var(--text-muted)]">No data</div>;
  }

  const spot = rows[0].spot_price;
  const near = rows.filter((r) => Math.abs(r.strike - spot) <= Math.max(30, spot * 0.03));
  const data = near.map((r) => ({ strike: r.strike, netGex: r.net_gex }));

  let flipStrike: number | null = null;
  const sorted = [...rows].sort((a, b) => a.strike - b.strike);
  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i - 1].net_gex < 0 && sorted[i].net_gex >= 0) {
      flipStrike = sorted[i].strike;
      break;
    }
  }

  return (
    <div className="h-80 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 8, right: 16, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border-default)" vertical={false} />
          <XAxis
            dataKey="strike"
            tick={{ fontSize: 10, fill: "var(--text-muted)" }}
            axisLine={false}
            tickLine={false}
            interval="preserveStartEnd"
          />
          <YAxis
            tick={{ fontSize: 10, fill: "var(--text-muted)" }}
            axisLine={false}
            tickLine={false}
            tickFormatter={(v) => `${(v / 1_000_000).toFixed(0)}M`}
          />
          <Tooltip
            contentStyle={{ backgroundColor: "var(--bg-tooltip)", border: "1px solid var(--border-hover)", fontSize: 12 }}
            labelStyle={{ color: "var(--text-primary)" }}
            formatter={(value) => [`$${Number(value).toLocaleString()}`, "Net GEX"]}
            labelFormatter={(label) => `Strike ${label}`}
          />
          <ReferenceLine x={Math.round(spot)} stroke="#60a5fa" strokeDasharray="4 4" label={{ value: spotLabel, fill: "#60a5fa", fontSize: 10, position: "top" }} />
          {flipStrike !== null && (
            <ReferenceLine
              x={flipStrike}
              stroke="#f59e0b"
              strokeDasharray="4 4"
              label={{ value: flipLabel, fill: "#f59e0b", fontSize: 10, position: "insideTopRight" }}
            />
          )}
          <Bar dataKey="netGex">
            {data.map((d, i) => (
              <Cell key={i} fill={d.netGex >= 0 ? "#22c55e" : "#ef4444"} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
