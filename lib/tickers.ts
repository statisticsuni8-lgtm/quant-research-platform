export type CategoryKey = "semis" | "ai" | "software" | "aerospace";

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
    ],
  },
  {
    key: "ai",
    tickers: [
      { symbol: "H100", hlCoin: "xyz:H100", nameKo: "H100 (GPU 가격지수)", nameEn: "H100 (GPU price index)" },
      { symbol: "NBIS", hlCoin: "xyz:NBIS", nameKo: "네비우스", nameEn: "Nebius" },
      { symbol: "CRWV", hlCoin: "xyz:CRWV", nameKo: "코어위브", nameEn: "CoreWeave" },
      { symbol: "ZHIPU", hlCoin: "xyz:ZHIPU", nameKo: "즈푸 AI", nameEn: "Zhipu AI" },
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
    ],
  },
  {
    key: "aerospace",
    tickers: [
      { symbol: "SPCX", hlCoin: "xyz:SPCX", nameKo: "스페이스X", nameEn: "SpaceX" },
      { symbol: "RKLB", hlCoin: "xyz:RKLB", nameKo: "로켓랩", nameEn: "Rocket Lab" },
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
