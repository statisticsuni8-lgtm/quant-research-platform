"use client";

import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Cell, LabelList } from "recharts";

export type VkospiPoint = { label: string; value: number; tone: "normal" | "elevated" | "warning" | "extreme" };

const TONE_COLOR: Record<VkospiPoint["tone"], string> = {
  normal: "#22c55e",
  elevated: "#eab308",
  warning: "#f97316",
  extreme: "#ef4444",
};

export default function VkospiChart({ data }: { data: VkospiPoint[] }) {
  return (
    <div className="h-72 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} layout="vertical" margin={{ top: 8, right: 40, left: 8, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border-default)" horizontal={false} />
          <XAxis type="number" tick={{ fontSize: 11, fill: "var(--text-muted)" }} axisLine={false} tickLine={false} />
          <YAxis
            type="category"
            dataKey="label"
            tick={{ fontSize: 11, fill: "var(--text-tertiary)" }}
            axisLine={false}
            tickLine={false}
            width={150}
          />
          <Tooltip
            contentStyle={{ backgroundColor: "var(--bg-tooltip)", border: "1px solid var(--border-hover)", fontSize: 12 }}
            labelStyle={{ color: "var(--text-primary)" }}
          />
          <Bar dataKey="value" radius={[0, 4, 4, 0]}>
            {data.map((d, i) => (
              <Cell key={i} fill={TONE_COLOR[d.tone]} />
            ))}
            <LabelList dataKey="value" position="right" fill="var(--text-primary)" fontSize={11} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
