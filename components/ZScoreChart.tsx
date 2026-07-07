"use client";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ReferenceLine,
  CartesianGrid,
} from "recharts";
import type { MarketDataRow } from "@/lib/supabase";

export default function ZScoreChart({ history }: { history: MarketDataRow[] }) {
  const data = history.map((row) => ({
    date: new Date(row.created_at).toLocaleDateString("ko-KR", {
      month: "short",
      day: "numeric",
    }),
    zScore: Number(row.z_score.toFixed(2)),
  }));

  if (data.length === 0) {
    return (
      <div className="flex h-32 items-center justify-center text-sm text-zinc-400">
        아직 데이터가 없습니다
      </div>
    );
  }

  return (
    <div className="h-32 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 8, right: 8, left: -20, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#27272a" vertical={false} />
          <XAxis dataKey="date" tick={{ fontSize: 10, fill: "#71717a" }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fontSize: 10, fill: "#71717a" }} axisLine={false} tickLine={false} domain={[-3, 3]} />
          <Tooltip
            contentStyle={{ backgroundColor: "#18181b", border: "1px solid #3f3f46", fontSize: 12 }}
            labelStyle={{ color: "#e4e4e7" }}
          />
          <ReferenceLine y={1.5} stroke="#ef4444" strokeDasharray="4 4" />
          <ReferenceLine y={-1.5} stroke="#22c55e" strokeDasharray="4 4" />
          <ReferenceLine y={0} stroke="#3f3f46" />
          <Line type="monotone" dataKey="zScore" stroke="#60a5fa" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
