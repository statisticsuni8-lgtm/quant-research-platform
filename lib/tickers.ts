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
  descKo: string;
  descEn: string;
  /** Real-world ticker usable on Yahoo Finance, if one exists (private companies/theme indices omit this). */
  yahooSymbol?: string;
  /** Symbols of peer/comparable tickers within our own universe. */
  peers?: string[];
};

export const CATEGORIES: { key: CategoryKey; tickers: TickerMeta[] }[] = [
  {
    key: "semis",
    tickers: [
      { symbol: "NVDA", hlCoin: "xyz:NVDA", nameKo: "엔비디아", nameEn: "NVIDIA", yahooSymbol: "NVDA", peers: ["AMD", "AVGO", "ARM", "QCOM"], descKo: "GPU/AI 가속기 설계 기업, 데이터센터 AI 칩 시장을 선도합니다.", descEn: "Designs GPUs and AI accelerator chips; leads the data-center AI chip market." },
      { symbol: "SMSN", hlCoin: "xyz:SMSN", nameKo: "삼성전자", nameEn: "Samsung Electronics", yahooSymbol: "005930.KS", peers: ["SKHX", "MU", "KIOXIA", "SNDK", "WDC"], descKo: "메모리반도체(D램/낸드)와 파운드리, 스마트폰을 아우르는 한국 최대 전자기업입니다.", descEn: "Korea's largest electronics maker, spanning memory chips (DRAM/NAND), foundry, and smartphones." },
      { symbol: "SKHX", hlCoin: "xyz:SKHX", nameKo: "SK하이닉스", nameEn: "SK Hynix", yahooSymbol: "000660.KS", peers: ["SMSN", "MU", "KIOXIA"], descKo: "세계 2위 메모리반도체 기업이자 HBM(고대역폭메모리) 선두주자입니다.", descEn: "World's #2 memory chipmaker and a leader in HBM (high-bandwidth memory)." },
      { symbol: "TSM", hlCoin: "xyz:TSM", nameKo: "TSMC", nameEn: "TSMC", yahooSymbol: "TSM", peers: ["SMSN", "INTC"], descKo: "세계 최대 파운드리(위탁생산) 기업으로, 엔비디아·애플 등의 첨단 칩을 생산합니다.", descEn: "World's largest semiconductor foundry, manufacturing advanced chips for Nvidia, Apple, and others." },
      { symbol: "AVGO", hlCoin: "xyz:AVGO", nameKo: "브로드컴", nameEn: "Broadcom", yahooSymbol: "AVGO", peers: ["NVDA", "QCOM", "MRVL"], descKo: "반도체 설계 및 인프라 소프트웨어 기업으로, AI 네트워킹 칩을 공급합니다.", descEn: "Semiconductor and infrastructure software company that supplies AI networking chips." },
      { symbol: "MU", hlCoin: "xyz:MU", nameKo: "마이크론", nameEn: "Micron", yahooSymbol: "MU", peers: ["SMSN", "SKHX", "KIOXIA", "SNDK", "WDC"], descKo: "미국의 메모리반도체(D램/낸드) 제조사입니다.", descEn: "US memory chipmaker (DRAM/NAND)." },
      { symbol: "INTC", hlCoin: "xyz:INTC", nameKo: "인텔", nameEn: "Intel", yahooSymbol: "INTC", peers: ["TSM", "AMD", "QCOM"], descKo: "CPU 중심의 미국 반도체 기업으로, 자체 파운드리 사업을 확장하고 있습니다.", descEn: "US CPU-centric chipmaker expanding its own foundry business." },
      { symbol: "AMD", hlCoin: "xyz:AMD", nameKo: "AMD", nameEn: "AMD", yahooSymbol: "AMD", peers: ["NVDA", "INTC", "QCOM"], descKo: "CPU/GPU 설계 기업으로, 데이터센터·게이밍 시장에서 인텔·엔비디아와 경쟁합니다.", descEn: "Designs CPUs/GPUs, competing with Intel and Nvidia in data center and gaming." },
      { symbol: "QCOM", hlCoin: "xyz:QCOM", nameKo: "퀄컴", nameEn: "Qualcomm", yahooSymbol: "QCOM", peers: ["AVGO", "MRVL", "ARM"], descKo: "모바일 AP(스냅드래곤) 및 무선통신 반도체 기업입니다.", descEn: "Mobile chipset (Snapdragon) and wireless semiconductor company." },
      { symbol: "ARM", hlCoin: "xyz:ARM", nameKo: "ARM", nameEn: "ARM Holdings", yahooSymbol: "ARM", peers: ["NVDA", "QCOM"], descKo: "전 세계 모바일·서버 칩 대부분에 쓰이는 CPU 아키텍처를 라이선스하는 기업입니다.", descEn: "Licenses the CPU architecture used in most of the world's mobile and server chips." },
      { symbol: "ASML", hlCoin: "xyz:ASML", nameKo: "ASML", nameEn: "ASML", yahooSymbol: "ASML", peers: ["AMAT"], descKo: "최첨단 반도체 제조에 필수인 EUV 노광장비를 독점 공급합니다.", descEn: "Sole supplier of the EUV lithography equipment essential to leading-edge chipmaking." },
      { symbol: "AMAT", hlCoin: "xyz:AMAT", nameKo: "어플라이드 머티어리얼즈", nameEn: "Applied Materials", yahooSymbol: "AMAT", peers: ["ASML"], descKo: "반도체 제조 장비(증착·식각 등) 분야 세계 1위 기업입니다.", descEn: "World's largest supplier of semiconductor manufacturing equipment (deposition, etch, etc.)." },
      { symbol: "MRVL", hlCoin: "xyz:MRVL", nameKo: "마벨 테크놀로지", nameEn: "Marvell Technology", yahooSymbol: "MRVL", peers: ["AVGO", "QCOM"], descKo: "데이터센터·통신용 커스텀 반도체를 설계하는 기업입니다.", descEn: "Designs custom semiconductors for data centers and networking." },
      { symbol: "KIOXIA", hlCoin: "xyz:KIOXIA", nameKo: "키옥시아", nameEn: "Kioxia", yahooSymbol: "285A.T", peers: ["SNDK", "WDC", "MU"], descKo: "일본의 낸드플래시 전문 반도체 기업입니다 (구 도시바메모리).", descEn: "Japanese NAND flash memory specialist (formerly Toshiba Memory)." },
      { symbol: "SNDK", hlCoin: "xyz:SNDK", nameKo: "샌디스크", nameEn: "SanDisk", yahooSymbol: "SNDK", peers: ["WDC", "KIOXIA", "MU"], descKo: "낸드플래시·SSD 전문 미국 반도체 기업으로, 웨스턴디지털에서 분사했습니다.", descEn: "US NAND flash/SSD specialist, spun off from Western Digital." },
      { symbol: "WDC", hlCoin: "xyz:WDC", nameKo: "웨스턴디지털", nameEn: "Western Digital", yahooSymbol: "WDC", peers: ["SNDK", "KIOXIA", "MU"], descKo: "하드디스크와 낸드플래시 저장장치를 만드는 미국 기업입니다.", descEn: "US maker of hard disk drives and NAND flash storage." },
      { symbol: "LITE", hlCoin: "xyz:LITE", nameKo: "루멘텀", nameEn: "Lumentum", yahooSymbol: "LITE", peers: ["MRVL"], descKo: "광통신 부품(레이저 등) 전문 기업으로, AI 데이터센터 광모듈 수요 수혜주입니다.", descEn: "Optical components (lasers, etc.) maker benefiting from AI data center optics demand." },
    ],
  },
  {
    key: "ai",
    tickers: [
      { symbol: "H100", hlCoin: "xyz:H100", nameKo: "H100 (GPU 가격지수)", nameEn: "H100 (GPU price index)", peers: ["NVDA"], descKo: "엔비디아 H100 GPU의 임대/시장 가격을 추종하는 지수입니다 (특정 회사가 아닙니다).", descEn: "Tracks the market rental/pricing of Nvidia H100 GPUs — this is a price index, not a company." },
      { symbol: "NBIS", hlCoin: "xyz:NBIS", nameKo: "네비우스", nameEn: "Nebius", yahooSymbol: "NBIS", peers: ["CRWV"], descKo: "유럽계 AI 클라우드/GPU 인프라 기업으로, 얀덱스에서 분사했습니다.", descEn: "European AI cloud/GPU infrastructure company, spun off from Yandex." },
      { symbol: "CRWV", hlCoin: "xyz:CRWV", nameKo: "코어위브", nameEn: "CoreWeave", yahooSymbol: "CRWV", peers: ["NBIS"], descKo: "AI 특화 클라우드/GPU 인프라 기업으로, 엔비디아 GPU 대여 사업으로 성장했습니다.", descEn: "AI-focused cloud/GPU infrastructure company that grew through renting out Nvidia GPUs." },
      { symbol: "ZHIPU", hlCoin: "xyz:ZHIPU", nameKo: "즈푸 AI", nameEn: "Zhipu AI", peers: ["MINIMAX"], descKo: "중국의 대형언어모델(LLM) 개발 스타트업입니다 (비상장).", descEn: "Chinese large language model (LLM) startup (privately held)." },
      { symbol: "MINIMAX", hlCoin: "xyz:MINIMAX", nameKo: "미니맥스", nameEn: "MiniMax", peers: ["ZHIPU"], descKo: "중국의 생성형 AI 스타트업입니다 (비상장).", descEn: "Chinese generative AI startup (privately held)." },
    ],
  },
  {
    key: "software",
    tickers: [
      { symbol: "MSFT", hlCoin: "xyz:MSFT", nameKo: "마이크로소프트", nameEn: "Microsoft", yahooSymbol: "MSFT", peers: ["GOOGL", "AMZN", "ORCL"], descKo: "클라우드(Azure)·오피스와 오픈AI 투자로 AI 밸류체인 전반에 걸친 빅테크입니다.", descEn: "Big tech spanning cloud (Azure), Office, and a major OpenAI investment." },
      { symbol: "GOOGL", hlCoin: "xyz:GOOGL", nameKo: "알파벳", nameEn: "Alphabet", yahooSymbol: "GOOGL", peers: ["MSFT", "META", "AMZN"], descKo: "구글 검색·유튜브·클라우드와 자체 AI모델(제미나이)을 보유한 알파벳의 지주회사입니다.", descEn: "Parent of Google Search, YouTube, Google Cloud, and the Gemini AI models." },
      { symbol: "ORCL", hlCoin: "xyz:ORCL", nameKo: "오라클", nameEn: "Oracle", yahooSymbol: "ORCL", peers: ["MSFT", "IBM", "NOW"], descKo: "데이터베이스와 클라우드 인프라를 제공하는 엔터프라이즈 소프트웨어 기업입니다.", descEn: "Enterprise software company providing databases and cloud infrastructure." },
      { symbol: "NOW", hlCoin: "xyz:NOW", nameKo: "서비스나우", nameEn: "ServiceNow", yahooSymbol: "NOW", peers: ["ORCL"], descKo: "기업용 워크플로우 자동화 소프트웨어(ITSM) 기업입니다.", descEn: "Enterprise workflow automation (ITSM) software company." },
      { symbol: "ZM", hlCoin: "xyz:ZM", nameKo: "줌", nameEn: "Zoom", yahooSymbol: "ZM", descKo: "화상회의 소프트웨어 기업입니다.", descEn: "Video conferencing software company." },
      { symbol: "AMZN", hlCoin: "xyz:AMZN", nameKo: "아마존", nameEn: "Amazon", yahooSymbol: "AMZN", peers: ["MSFT", "GOOGL", "BABA"], descKo: "전자상거래와 클라우드(AWS) 세계 1위 기업입니다.", descEn: "World's largest e-commerce and cloud (AWS) company." },
      { symbol: "META", hlCoin: "xyz:META", nameKo: "메타", nameEn: "Meta Platforms", yahooSymbol: "META", peers: ["GOOGL"], descKo: "페이스북·인스타그램을 보유한 소셜미디어 기업으로, AI 인프라에 대규모 투자 중입니다.", descEn: "Social media company behind Facebook/Instagram, investing heavily in AI infrastructure." },
      { symbol: "AAPL", hlCoin: "xyz:AAPL", nameKo: "애플", nameEn: "Apple", yahooSymbol: "AAPL", peers: ["MSFT", "GOOGL"], descKo: "아이폰 등 하드웨어와 서비스 생태계를 갖춘 세계 최대 시가총액 기업 중 하나입니다.", descEn: "One of the world's largest companies by market cap, known for the iPhone and its services ecosystem." },
      { symbol: "IBM", hlCoin: "xyz:IBM", nameKo: "IBM", nameEn: "IBM", yahooSymbol: "IBM", peers: ["ORCL", "DELL"], descKo: "엔터프라이즈 IT 서비스와 하이브리드 클라우드, 자체 AI(왓슨x) 사업을 하는 전통 IT 기업입니다.", descEn: "Legacy enterprise IT company focused on hybrid cloud and its own AI (watsonx) offering." },
      { symbol: "DELL", hlCoin: "xyz:DELL", nameKo: "델 테크놀로지", nameEn: "Dell Technologies", yahooSymbol: "DELL", peers: ["IBM"], descKo: "PC와 서버(특히 AI 서버) 하드웨어 제조 기업입니다.", descEn: "PC and server (especially AI server) hardware maker." },
      { symbol: "NFLX", hlCoin: "xyz:NFLX", nameKo: "넷플릭스", nameEn: "Netflix", yahooSymbol: "NFLX", descKo: "세계 최대 스트리밍 서비스 기업입니다.", descEn: "World's largest video streaming service." },
      { symbol: "EBAY", hlCoin: "xyz:EBAY", nameKo: "이베이", nameEn: "eBay", yahooSymbol: "EBAY", peers: ["AMZN", "BABA"], descKo: "온라인 경매·오픈마켓 플랫폼 기업입니다.", descEn: "Online auction and marketplace platform." },
      { symbol: "BABA", hlCoin: "xyz:BABA", nameKo: "알리바바", nameEn: "Alibaba", yahooSymbol: "BABA", peers: ["AMZN", "EBAY"], descKo: "중국 최대 전자상거래·클라우드 기업입니다.", descEn: "China's largest e-commerce and cloud company." },
    ],
  },
  {
    key: "aerospace",
    tickers: [
      { symbol: "SPCX", hlCoin: "xyz:SPCX", nameKo: "스페이스X", nameEn: "SpaceX", peers: ["RKLB"], descKo: "일론 머스크의 우주발사체·위성인터넷(스타링크) 기업입니다 (비상장).", descEn: "Elon Musk's space launch and satellite internet (Starlink) company (privately held)." },
      { symbol: "RKLB", hlCoin: "xyz:RKLB", nameKo: "로켓랩", nameEn: "Rocket Lab", yahooSymbol: "RKLB", peers: ["SPCX"], descKo: "소형 로켓 발사 및 우주 시스템 기업입니다.", descEn: "Small-rocket launch and space systems company." },
    ],
  },
  {
    key: "fintech",
    tickers: [
      { symbol: "COIN", hlCoin: "xyz:COIN", nameKo: "코인베이스", nameEn: "Coinbase", yahooSymbol: "COIN", peers: ["HOOD"], descKo: "미국 최대 암호화폐 거래소 상장기업입니다.", descEn: "Largest US-listed cryptocurrency exchange." },
      { symbol: "HOOD", hlCoin: "xyz:HOOD", nameKo: "로빈후드", nameEn: "Robinhood", yahooSymbol: "HOOD", peers: ["COIN"], descKo: "개인투자자 대상 무료수수료 증권거래 앱 기업입니다.", descEn: "Commission-free retail trading app." },
      { symbol: "MSTR", hlCoin: "xyz:MSTR", nameKo: "스트래티지 (구 마이크로스트래티지)", nameEn: "Strategy (fmr. MicroStrategy)", yahooSymbol: "MSTR", peers: ["STRC", "COIN"], descKo: "비트코인을 대규모로 보유한 기업용 소프트웨어 회사입니다 (스트래티지로 개명).", descEn: "Enterprise software company known for its large bitcoin holdings (rebranded as Strategy)." },
      { symbol: "STRC", hlCoin: "xyz:STRC", nameKo: "스트래티지 우선주(STRC)", nameEn: "Strategy Preferred (STRC)", yahooSymbol: "STRC", peers: ["MSTR"], descKo: "스트래티지(구 마이크로스트래티지)가 발행한 영구 우선주입니다.", descEn: "A perpetual preferred stock issued by Strategy (formerly MicroStrategy)." },
      { symbol: "CRCL", hlCoin: "xyz:CRCL", nameKo: "서클 인터넷 그룹", nameEn: "Circle Internet Group", yahooSymbol: "CRCL", peers: ["COIN"], descKo: "스테이블코인 USDC 발행사입니다.", descEn: "Issuer of the USDC stablecoin." },
      { symbol: "BX", hlCoin: "xyz:BX", nameKo: "블랙스톤", nameEn: "Blackstone", yahooSymbol: "BX", descKo: "세계 최대 대체투자(사모펀드) 운용사 중 하나입니다.", descEn: "One of the world's largest alternative asset managers (private equity)." },
    ],
  },
  {
    key: "auto",
    tickers: [
      { symbol: "TSLA", hlCoin: "xyz:TSLA", nameKo: "테슬라", nameEn: "Tesla", yahooSymbol: "TSLA", peers: ["RIVN", "HYUNDAI"], descKo: "전기차와 에너지저장장치, 자율주행을 개발하는 기업입니다.", descEn: "Electric vehicle, energy storage, and autonomous driving company." },
      { symbol: "RIVN", hlCoin: "xyz:RIVN", nameKo: "리비안", nameEn: "Rivian", yahooSymbol: "RIVN", peers: ["TSLA"], descKo: "미국의 전기 픽업트럭/상용차 스타트업입니다.", descEn: "US electric pickup truck/commercial vehicle startup." },
      { symbol: "HYUNDAI", hlCoin: "xyz:HYUNDAI", nameKo: "현대자동차", nameEn: "Hyundai Motor", yahooSymbol: "005380.KS", peers: ["TSLA"], descKo: "한국의 완성차 제조사로, 전기차·수소차를 개발하고 있습니다.", descEn: "South Korean automaker developing EVs and hydrogen vehicles." },
    ],
  },
  {
    key: "consumer",
    tickers: [
      { symbol: "LLY", hlCoin: "xyz:LLY", nameKo: "일라이 릴리", nameEn: "Eli Lilly", yahooSymbol: "LLY", descKo: "비만치료제(마운자로 등)로 급성장한 미국 제약회사입니다.", descEn: "US pharma company that grew rapidly on obesity drugs (e.g. Mounjaro)." },
      { symbol: "COST", hlCoin: "xyz:COST", nameKo: "코스트코", nameEn: "Costco", yahooSymbol: "COST", descKo: "회원제 창고형 대형마트 체인입니다.", descEn: "Membership-based warehouse retail chain." },
      { symbol: "HIMS", hlCoin: "xyz:HIMS", nameKo: "힘스앤허스", nameEn: "Hims & Hers Health", yahooSymbol: "HIMS", descKo: "온라인 원격진료·처방약 배송 헬스케어 기업입니다.", descEn: "Online telehealth and prescription delivery company." },
      { symbol: "DKNG", hlCoin: "xyz:DKNG", nameKo: "드래프트킹스", nameEn: "DraftKings", yahooSymbol: "DKNG", descKo: "온라인 스포츠베팅·게이밍 기업입니다.", descEn: "Online sports betting and gaming company." },
      { symbol: "GME", hlCoin: "xyz:GME", nameKo: "게임스탑", nameEn: "GameStop", yahooSymbol: "GME", descKo: "비디오게임 소매체인으로, 2021년 밈주식 열풍의 중심이었습니다.", descEn: "Video game retail chain, the center of the 2021 meme-stock rally." },
      { symbol: "USAR", hlCoin: "xyz:USAR", nameKo: "USA 레어어스", nameEn: "USA Rare Earth", yahooSymbol: "USAR", descKo: "미국의 희토류 채굴·가공 기업입니다.", descEn: "US rare earth mining and processing company." },
    ],
  },
  {
    key: "indices",
    tickers: [
      { symbol: "SP500", hlCoin: "xyz:SP500", nameKo: "S&P 500", nameEn: "S&P 500", yahooSymbol: "^GSPC", peers: ["VIX"], descKo: "미국 대형주 500개로 구성된 대표 주가지수입니다.", descEn: "The benchmark US large-cap stock index (500 companies)." },
      { symbol: "KR200", hlCoin: "xyz:KR200", nameKo: "코스피 200", nameEn: "KOSPI 200", yahooSymbol: "^KS200", peers: ["EWY"], descKo: "코스피 시가총액 상위 200개 종목으로 구성된 한국 대표지수입니다.", descEn: "Korea's benchmark index of the top 200 KOSPI-listed companies." },
      { symbol: "JP225", hlCoin: "xyz:JP225", nameKo: "니케이 225", nameEn: "Nikkei 225", yahooSymbol: "^N225", peers: ["EWJ", "SOFTBANK"], descKo: "일본 대표기업 225개로 구성된 니케이 지수입니다.", descEn: "Japan's benchmark index of 225 leading companies." },
      { symbol: "NIFTY", hlCoin: "xyz:NIFTY", nameKo: "니프티 50 (인도)", nameEn: "Nifty 50 (India)", yahooSymbol: "^NSEI", descKo: "인도 국립증권거래소의 대표 주가지수입니다.", descEn: "India's benchmark stock index on the National Stock Exchange." },
      { symbol: "IBOV", hlCoin: "xyz:IBOV", nameKo: "보베스파 (브라질)", nameEn: "Ibovespa (Brazil)", yahooSymbol: "^BVSP", peers: ["EWZ"], descKo: "브라질 상파울루 증권거래소의 대표 주가지수입니다.", descEn: "Brazil's benchmark stock index on the São Paulo exchange." },
      { symbol: "VIX", hlCoin: "xyz:VIX", nameKo: "VIX 변동성지수", nameEn: "VIX Volatility Index", yahooSymbol: "^VIX", peers: ["SP500"], descKo: "S&P500 옵션 내재변동성을 기반으로 한 '공포지수'입니다.", descEn: "The \"fear index,\" based on S&P 500 options-implied volatility." },
      { symbol: "SOFTBANK", hlCoin: "xyz:SOFTBANK", nameKo: "소프트뱅크그룹", nameEn: "SoftBank Group", yahooSymbol: "9984.T", peers: ["JP225"], descKo: "손정의 회장이 이끄는 일본 투자지주회사로, ARM의 최대주주입니다.", descEn: "Japanese investment holding company led by Masayoshi Son; ARM's largest shareholder." },
      { symbol: "EWY", hlCoin: "xyz:EWY", nameKo: "한국 ETF (EWY)", nameEn: "South Korea ETF (EWY)", yahooSymbol: "EWY", peers: ["KR200"], descKo: "한국 증시에 투자하는 미국 상장 ETF입니다.", descEn: "US-listed ETF providing exposure to South Korean equities." },
      { symbol: "EWJ", hlCoin: "xyz:EWJ", nameKo: "일본 ETF (EWJ)", nameEn: "Japan ETF (EWJ)", yahooSymbol: "EWJ", peers: ["JP225"], descKo: "일본 증시에 투자하는 미국 상장 ETF입니다.", descEn: "US-listed ETF providing exposure to Japanese equities." },
      { symbol: "EWZ", hlCoin: "xyz:EWZ", nameKo: "브라질 ETF (EWZ)", nameEn: "Brazil ETF (EWZ)", yahooSymbol: "EWZ", peers: ["IBOV"], descKo: "브라질 증시에 투자하는 미국 상장 ETF입니다.", descEn: "US-listed ETF providing exposure to Brazilian equities." },
      { symbol: "EWT", hlCoin: "xyz:EWT", nameKo: "대만 ETF (EWT)", nameEn: "Taiwan ETF (EWT)", yahooSymbol: "EWT", peers: ["TSM"], descKo: "대만 증시에 투자하는 미국 상장 ETF로, TSMC 비중이 큽니다.", descEn: "US-listed ETF providing exposure to Taiwanese equities, heavily weighted to TSMC." },
      { symbol: "SMH", hlCoin: "xyz:SMH", nameKo: "반도체 ETF (SMH)", nameEn: "Semiconductor ETF (SMH)", yahooSymbol: "SMH", peers: ["NVDA", "TSM", "AVGO"], descKo: "반도체 기업들에 투자하는 미국 상장 ETF입니다.", descEn: "US-listed ETF providing exposure to semiconductor companies." },
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
