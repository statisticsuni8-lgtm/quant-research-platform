import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type MarketDataRow = {
  id: number;
  ticker: string;
  z_score: number;
  price: number;
  created_at: string;
};

export const TRACKED_TICKERS = [
  { symbol: "005930.KS", name: "삼성전자", short: "SAMSUNG" },
  { symbol: "000660.KS", name: "SK하이닉스", short: "SK HYNIX" },
  { symbol: "NVDA", name: "NVIDIA", short: "NVDA" },
] as const;
