import { getXyzQuotes } from "@/lib/hyperliquid";

export async function GET() {
  const quotes = await getXyzQuotes();
  const body: Record<string, { markPx: number; changePct: number; openInterest: number; funding: number; dayNtlVlm: number }> = {};
  quotes.forEach((q, coin) => {
    body[coin] = {
      markPx: q.markPx,
      changePct: q.changePct,
      openInterest: q.openInterest,
      funding: q.funding,
      dayNtlVlm: q.dayNtlVlm,
    };
  });
  return Response.json(body);
}
