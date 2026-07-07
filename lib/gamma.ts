import { supabase } from "./supabase";

export type GexRow = {
  strike: number;
  spot_price: number;
  call_oi: number;
  put_oi: number;
  call_gex: number;
  put_gex: number;
  net_gex: number;
  created_at: string;
};

export async function getLatestGammaExposure(underlying = "SPY"): Promise<GexRow[]> {
  const { data: latest, error: latestError } = await supabase
    .from("gamma_exposure")
    .select("created_at")
    .eq("underlying", underlying)
    .order("created_at", { ascending: false })
    .limit(1);

  if (latestError || !latest || latest.length === 0) return [];

  const { data, error } = await supabase
    .from("gamma_exposure")
    .select("strike, spot_price, call_oi, put_oi, call_gex, put_gex, net_gex, created_at")
    .eq("underlying", underlying)
    .eq("created_at", latest[0].created_at)
    .order("strike", { ascending: true });

  if (error || !data) return [];
  return data;
}

export function findGammaFlip(rows: GexRow[]): number | null {
  const sorted = [...rows].sort((a, b) => a.strike - b.strike);
  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i - 1].net_gex < 0 && sorted[i].net_gex >= 0) {
      return sorted[i].strike;
    }
  }
  return null;
}
