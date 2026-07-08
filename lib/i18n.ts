export const LOCALES = ["ko", "en"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "ko";

export const dictionary = {
  ko: {
    nav: { brand: "SEMIQUANT", dashboard: "대시보드", research: "리서치" },
    home: {
      title: "반도체 퀀트 Z-Score 트래커",
      subtitle: "60일 이동 통계 기준 과매수/과매도 신호 — 삼성전자 · SK하이닉스 · NVIDIA",
      noData: "아직 Supabase에 데이터가 없습니다.",
      noDataHint: "를 한 번 실행하거나, GitHub Actions 워크플로우가 처음 실행될 때까지 기다려주세요.",
      oversold: "Z ≤ -1.5 과매도",
      overbought: "Z ≥ 1.5 과매수",
      marketsTitle: "실시간 합성마켓 (Hyperliquid)",
      marketsSubtitle: "카테고리를 선택하고 종목을 클릭하면 오더북 매물대를 확인할 수 있습니다.",
    },
    categories: {
      semis: "반도체",
      ai: "AI",
      software: "소프트웨어/빅테크",
      aerospace: "항공/우주",
      fintech: "핀테크/거래소",
      auto: "자동차/모빌리티",
      consumer: "헬스케어/소비재",
      indices: "지수/ETF",
      commodities: "원자재/달러",
    },
    market: {
      back: "대시보드로 돌아가기",
      price: "현재가",
      change24h: "24시간 변동",
      openInterest: "미결제약정(OI)",
      funding: "펀딩비율",
      volume24h: "24시간 거래대금",
      orderbookTitle: "오더북 매물대",
      orderbookHint: "가격대별 주문 물량 — 벽이 두꺼울수록 지지/저항이 강함을 의미합니다.",
      chartTitle: "가격 추이 (하이퍼리퀴드 xyz 합성마켓)",
      bids: "매수벽",
      asks: "매도벽",
      source: "출처: Hyperliquid xyz perp DEX (실시간)",
      about: "회사 소개",
      links: "관련 링크",
      linkYahoo: "야후 파이낸스에서 보기",
      linkNews: "구글 뉴스에서 검색",
      privateCompany: "비상장 기업이라 외부 시세/뉴스 링크가 없습니다.",
      peers: "피어 기업",
    },
  },
  en: {
    nav: { brand: "SEMIQUANT", dashboard: "Dashboard", research: "Research" },
    home: {
      title: "Semiconductor Quant Z-Score Tracker",
      subtitle: "Overbought/oversold signals on a 60-day rolling basis — Samsung Electronics · SK Hynix · NVIDIA",
      noData: "No data in Supabase yet.",
      noDataHint: "Run it once, or wait for the first GitHub Actions run.",
      oversold: "Z ≤ -1.5 Oversold",
      overbought: "Z ≥ 1.5 Overbought",
      marketsTitle: "Live Synthetic Markets (Hyperliquid)",
      marketsSubtitle: "Pick a category and click a ticker to see its order-book liquidity walls.",
    },
    categories: {
      semis: "Semiconductors",
      ai: "AI",
      software: "Software/Big Tech",
      aerospace: "Aerospace",
      fintech: "Fintech/Exchanges",
      auto: "Auto/Mobility",
      consumer: "Healthcare/Consumer",
      indices: "Indices/ETFs",
      commodities: "Commodities/Dollar",
    },
    market: {
      back: "Back to dashboard",
      price: "Price",
      change24h: "24h Change",
      openInterest: "Open Interest",
      funding: "Funding Rate",
      volume24h: "24h Volume",
      orderbookTitle: "Order Book Liquidity Walls",
      orderbookHint: "Order volume by price level — thicker walls mean stronger support/resistance.",
      chartTitle: "Price History (Hyperliquid xyz synthetic market)",
      bids: "Bid wall",
      asks: "Ask wall",
      source: "Source: Hyperliquid xyz perp DEX (live)",
      about: "About",
      links: "External Links",
      linkYahoo: "View on Yahoo Finance",
      linkNews: "Search Google News",
      privateCompany: "Privately held — no external quote/news link available.",
      peers: "Peer Companies",
    },
  },
} as const;

export function getDictionary(locale: Locale) {
  return dictionary[locale];
}

export function toLocale(value: string): Locale {
  return (LOCALES as readonly string[]).includes(value) ? (value as Locale) : DEFAULT_LOCALE;
}
