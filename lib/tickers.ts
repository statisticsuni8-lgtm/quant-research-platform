export type CategoryKey =
  | "semis"
  | "ai"
  | "software"
  | "aerospace"
  | "fintech"
  | "auto"
  | "consumer"
  | "indices";

export type TickerMeta = {
  symbol: string;
  hlCoin: string;
  nameKo: string;
  nameEn: string;
};

export const CATEGORIES: { key: CategoryKey; tickers: TickerMeta[] }[] = [
  {
    key: "semis",
    tickers: [
      { symbol: "NVDA", hlCoin: "xyz:NVDA", nameKo: "엔비디아", nameEn: "NVIDIA" },
      { symbol: "SMSN", hlCoin: "xyz:SMSN", nameKo: "삼성전자", nameEn: "Samsung Electronics" },
      { symbol: "SKHX", hlCoin: "xyz:SKHX", nameKo: "SK하이닉스", nameEn: "SK Hynix" },
      { symbol: "TSM", hlCoin: "xyz:TSM", nameKo: "TSMC", nameEn: "TSMC" },
      { symbol: "AVGO", hlCoin: "xyz:AVGO", nameKo: "브로드컴", nameEn: "Broadcom" },
      { symbol: "MU", hlCoin: "xyz:MU", nameKo: "마이크론", nameEn: "Micron" },
      { symbol: "INTC", hlCoin: "xyz:INTC", nameKo: "인텔", nameEn: "Intel" },
      { symbol: "AMD", hlCoin: "xyz:AMD", nameKo: "AMD", nameEn: "AMD" },
      { symbol: "QCOM", hlCoin: "xyz:QCOM", nameKo: "퀄컴", nameEn: "Qualcomm" },
      { symbol: "ARM", hlCoin: "xyz:ARM", nameKo: "ARM", nameEn: "ARM Holdings" },
      { symbol: "ASML", hlCoin: "xyz:ASML", nameKo: "ASML", nameEn: "ASML" },
      { symbol: "AMAT", hlCoin: "xyz:AMAT", nameKo: "어플라이드 머티어리얼즈", nameEn: "Applied Materials" },
      { symbol: "MRVL", hlCoin: "xyz:MRVL", nameKo: "마벨 테크놀로지", nameEn: "Marvell Technology" },
      { symbol: "KIOXIA", hlCoin: "xyz:KIOXIA", nameKo: "키옥시아", nameEn: "Kioxia" },
      { symbol: "SNDK", hlCoin: "xyz:SNDK", nameKo: "샌디스크", nameEn: "SanDisk" },
      { symbol: "WDC", hlCoin: "xyz:WDC", nameKo: "웨스턴디지털", nameEn: "Western Digital" },
      { symbol: "LITE", hlCoin: "xyz:LITE", nameKo: "루멘텀", nameEn: "Lumentum" },
    ],
  },
  {
    key: "ai",
    tickers: [
      { symbol: "H100", hlCoin: "xyz:H100", nameKo: "H100 (GPU 가격지수)", nameEn: "H100 (GPU price index)" },
      { symbol: "NBIS", hlCoin: "xyz:NBIS", nameKo: "네비우스", nameEn: "Nebius" },
      { symbol: "CRWV", hlCoin: "xyz:CRWV", nameKo: "코어위브", nameEn: "CoreWeave" },
      { symbol: "ZHIPU", hlCoin: "xyz:ZHIPU", nameKo: "즈푸 AI", nameEn: "Zhipu AI" },
      { symbol: "MINIMAX", hlCoin: "xyz:MINIMAX", nameKo: "미니맥스", nameEn: "MiniMax" },
    ],
  },
  {
    key: "software",
    tickers: [
      { symbol: "MSFT", hlCoin: "xyz:MSFT", nameKo: "마이크로소프트", nameEn: "Microsoft" },
      { symbol: "GOOGL", hlCoin: "xyz:GOOGL", nameKo: "알파벳", nameEn: "Alphabet" },
      { symbol: "ORCL", hlCoin: "xyz:ORCL", nameKo: "오라클", nameEn: "Oracle" },
      { symbol: "NOW", hlCoin: "xyz:NOW", nameKo: "서비스나우", nameEn: "ServiceNow" },
      { symbol: "ZM", hlCoin: "xyz:ZM", nameKo: "줌", nameEn: "Zoom" },
      { symbol: "AMZN", hlCoin: "xyz:AMZN", nameKo: "아마존", nameEn: "Amazon" },
      { symbol: "META", hlCoin: "xyz:META", nameKo: "메타", nameEn: "Meta Platforms" },
      { symbol: "AAPL", hlCoin: "xyz:AAPL", nameKo: "애플", nameEn: "Apple" },
      { symbol: "IBM", hlCoin: "xyz:IBM", nameKo: "IBM", nameEn: "IBM" },
      { symbol: "DELL", hlCoin: "xyz:DELL", nameKo: "델 테크놀로지", nameEn: "Dell Technologies" },
      { symbol: "NFLX", hlCoin: "xyz:NFLX", nameKo: "넷플릭스", nameEn: "Netflix" },
      { symbol: "EBAY", hlCoin: "xyz:EBAY", nameKo: "이베이", nameEn: "eBay" },
      { symbol: "BABA", hlCoin: "xyz:BABA", nameKo: "알리바바", nameEn: "Alibaba" },
    ],
  },
  {
    key: "aerospace",
    tickers: [
      { symbol: "SPCX", hlCoin: "xyz:SPCX", nameKo: "스페이스X", nameEn: "SpaceX" },
      { symbol: "RKLB", hlCoin: "xyz:RKLB", nameKo: "로켓랩", nameEn: "Rocket Lab" },
    ],
  },
  {
    key: "fintech",
    tickers: [
      { symbol: "COIN", hlCoin: "xyz:COIN", nameKo: "코인베이스", nameEn: "Coinbase" },
      { symbol: "HOOD", hlCoin: "xyz:HOOD", nameKo: "로빈후드", nameEn: "Robinhood" },
      { symbol: "MSTR", hlCoin: "xyz:MSTR", nameKo: "스트래티지 (구 마이크로스트래티지)", nameEn: "Strategy (fmr. MicroStrategy)" },
      { symbol: "STRC", hlCoin: "xyz:STRC", nameKo: "스트래티지 우선주(STRC)", nameEn: "Strategy Preferred (STRC)" },
      { symbol: "CRCL", hlCoin: "xyz:CRCL", nameKo: "서클 인터넷 그룹", nameEn: "Circle Internet Group" },
      { symbol: "BX", hlCoin: "xyz:BX", nameKo: "블랙스톤", nameEn: "Blackstone" },
    ],
  },
  {
    key: "auto",
    tickers: [
      { symbol: "TSLA", hlCoin: "xyz:TSLA", nameKo: "테슬라", nameEn: "Tesla" },
      { symbol: "RIVN", hlCoin: "xyz:RIVN", nameKo: "리비안", nameEn: "Rivian" },
      { symbol: "HYUNDAI", hlCoin: "xyz:HYUNDAI", nameKo: "현대자동차", nameEn: "Hyundai Motor" },
    ],
  },
  {
    key: "consumer",
    tickers: [
      { symbol: "LLY", hlCoin: "xyz:LLY", nameKo: "일라이 릴리", nameEn: "Eli Lilly" },
      { symbol: "COST", hlCoin: "xyz:COST", nameKo: "코스트코", nameEn: "Costco" },
      { symbol: "HIMS", hlCoin: "xyz:HIMS", nameKo: "힘스앤허스", nameEn: "Hims & Hers Health" },
      { symbol: "DKNG", hlCoin: "xyz:DKNG", nameKo: "드래프트킹스", nameEn: "DraftKings" },
      { symbol: "GME", hlCoin: "xyz:GME", nameKo: "게임스탑", nameEn: "GameStop" },
      { symbol: "USAR", hlCoin: "xyz:USAR", nameKo: "USA 레어어스", nameEn: "USA Rare Earth" },
    ],
  },
  {
    key: "indices",
    tickers: [
      { symbol: "SP500", hlCoin: "xyz:SP500", nameKo: "S&P 500", nameEn: "S&P 500" },
      { symbol: "KR200", hlCoin: "xyz:KR200", nameKo: "코스피 200", nameEn: "KOSPI 200" },
      { symbol: "JP225", hlCoin: "xyz:JP225", nameKo: "니케이 225", nameEn: "Nikkei 225" },
      { symbol: "NIFTY", hlCoin: "xyz:NIFTY", nameKo: "니프티 50 (인도)", nameEn: "Nifty 50 (India)" },
      { symbol: "IBOV", hlCoin: "xyz:IBOV", nameKo: "보베스파 (브라질)", nameEn: "Ibovespa (Brazil)" },
      { symbol: "VIX", hlCoin: "xyz:VIX", nameKo: "VIX 변동성지수", nameEn: "VIX Volatility Index" },
      { symbol: "SOFTBANK", hlCoin: "xyz:SOFTBANK", nameKo: "소프트뱅크그룹", nameEn: "SoftBank Group" },
      { symbol: "EWY", hlCoin: "xyz:EWY", nameKo: "한국 ETF (EWY)", nameEn: "South Korea ETF (EWY)" },
      { symbol: "EWJ", hlCoin: "xyz:EWJ", nameKo: "일본 ETF (EWJ)", nameEn: "Japan ETF (EWJ)" },
      { symbol: "EWZ", hlCoin: "xyz:EWZ", nameKo: "브라질 ETF (EWZ)", nameEn: "Brazil ETF (EWZ)" },
      { symbol: "EWT", hlCoin: "xyz:EWT", nameKo: "대만 ETF (EWT)", nameEn: "Taiwan ETF (EWT)" },
      { symbol: "SMH", hlCoin: "xyz:SMH", nameKo: "반도체 ETF (SMH)", nameEn: "Semiconductor ETF (SMH)" },
    ],
  },
];

export function findTickerBySymbol(symbol: string): TickerMeta | undefined {
  for (const cat of CATEGORIES) {
    const found = cat.tickers.find((t) => t.symbol.toLowerCase() === symbol.toLowerCase());
    if (found) return found;
  }
  return undefined;
}

export function allTickers(): TickerMeta[] {
  return CATEGORIES.flatMap((c) => c.tickers);
}
