"use client";

import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import type { FredPoint } from "@/lib/fred";

export default function FredChart({ label, points }: { label: string; points: FredPoint[] }) {
  const latest = points[points.length - 1];

  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-4">
      <div className="mb-2 flex items-baseline justify-between">
        <p className="text-sm font-medium text-zinc-300">{label}</p>
        {latest && <p className="text-sm font-semibold text-zinc-100">{latest.value.toLocaleString()}</p>}
      </div>
      <div className="h-40 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={points} margin={{ top: 4, right: 8, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#27272a" vertical={false} />
            <XAxis dataKey="date" tick={{ fontSize: 9, fill: "#71717a" }} axisLine={false} tickLine={false} minTickGap={30} />
            <YAxis tick={{ fontSize: 9, fill: "#71717a" }} axisLine={false} tickLine={false} domain={["auto", "auto"]} />
            <Tooltip
              contentStyle={{ backgroundColor: "#18181b", border: "1px solid #3f3f46", fontSize: 12 }}
              labelStyle={{ color: "#e4e4e7" }}
            />
            <Line type="monotone" dataKey="value" stroke="#60a5fa" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
