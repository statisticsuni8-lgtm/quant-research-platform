export type Confidence = "confirmed" | "single";

export type ResearchContent = {
  pageTitle: string;
  pageSubtitle: string;
  todayBanner: { strong: string; rest: string };
  macroCalendar: {
    eyebrow: string;
    title: string;
    intro: string;
    items: { label: string; conf: Confidence }[];
    fomcNote: string;
    source: string;
  };
  earningsScenario: {
    eyebrow: string;
    title: string;
    intro: string;
    consensusList: string[];
    tableHeaders: [string, string, string];
    scenarios: { label: string; tone: "buy" | "neutral" | "sell"; condition: string; reaction: string }[];
    note: string;
    source: string;
  };
  readThrough: {
    eyebrow: string;
    title: string;
    intro: string;
    metrics: { label: string; value: string; sub: string }[];
    hbmNote: string;
    priceNote: string;
    readingNote: string;
    source: string;
  };
  macroWatch: {
    eyebrow: string;
    title: string;
    items: { title: string; conf: Confidence; body: string }[];
    source: string;
  };
  gammaExposure: {
    eyebrow: string;
    title: string;
    intro: string;
    whatIsIt: string;
    squeezeExplainer: string;
    caveat: string;
    spotLabel: string;
    flipLabel: string;
    noData: string;
    source: string;
  };
  legend: string;
  confirmedLabel: string;
  singleLabel: string;
};

const ko: ResearchContent = {
  pageTitle: "리서치 허브",
  pageSubtitle: "매크로 캘린더, 실적 시나리오, 놓치기 쉬운 해외 뉴스를 정리합니다. (2026-07-07 기준)",
  todayBanner: {
    strong: "오늘(7/7) 삼성전자 2분기 잠정실적 발표일입니다.",
    rest: "아래 “삼성전자 실적 시나리오” 섹션에서 컨센서스와 시나리오별 반응을 확인하세요.",
  },
  macroCalendar: {
    eyebrow: "Macro Calendar",
    title: "이달의 CPI/PPI 발표 일정",
    intro: "미국 백악관 OMB/OIRA가 공개한 2026년 공식 경제지표 발표 일정 기준입니다.",
    items: [
      { label: "CPI (6월분) — 2026년 7월 14일(화) 발표", conf: "confirmed" },
      { label: "PPI (6월분) — 2026년 7월 15일(수) 발표", conf: "confirmed" },
      { label: "CPI (7월분) — 2026년 8월 12일(수) 발표", conf: "confirmed" },
      { label: "PPI (7월분) — 2026년 8월 13일(목) 발표", conf: "confirmed" },
    ],
    fomcNote:
      "참고로 다음 FOMC 회의는 7월 29일 종료 예정이라, 7/14 CPI·7/15 PPI 결과가 이 회의의 금리 경로 전망에 직접 영향을 줄 가능성이 큽니다.",
    source: "출처: White House OMB/OIRA, “Schedule of Release Dates for Principal Federal Economic Indicators for 2026”",
  },
  earningsScenario: {
    eyebrow: "Earnings Scenario",
    title: "삼성전자 실적 발표 시나리오 분석",
    intro: "삼성전자 2분기 잠정실적이 오늘(7/7) 발표 예정입니다. 발표 전 증권사 영업이익 컨센서스는 다음과 같이 넓게 분산돼 있습니다.",
    consensusList: ["하나증권 92조원 (최고)", "키움증권 89조원", "유진투자증권 83.1조원", "iM증권 80조원 (최저)"],
    tableHeaders: ["시나리오", "조건", "예상 시장 반응"],
    scenarios: [
      {
        label: "서프라이즈",
        tone: "buy",
        condition: "92조원 상회",
        reaction: "HBM/DRAM 가격 상승 사이클이 예상보다 강하다는 신호 → 반도체 업종 전반 리레이팅, SK하이닉스 동반 강세 가능성",
      },
      {
        label: "컨센서스 부합",
        tone: "neutral",
        condition: "80~92조원",
        reaction: "이미 컨센서스에 반영된 호실적 → “재료 소멸” 성격의 단기 차익실현 가능성, 방향성은 확정실적(7월 말) 세부 가이던스에 좌우",
      },
      {
        label: "쇼크(미스)",
        tone: "sell",
        condition: "80조원 하회",
        reaction:
          "메모리 업황 피크아웃 우려 부각 가능 → 낙폭 확대 리스크, 단 마이크론이 같은 기간 어닝 서프라이즈를 낸 상태라 “삼성만의 이슈(수율/믹스)”로 국한될지 확인 필요",
      },
    ],
    note: "이 시나리오 프레임은 편집자 분석이며, 실제 확정실적(통상 7월 말) 컨퍼런스콜에서 나오는 가이던스가 방향성을 최종 결정합니다.",
    source: "출처: 디지털투데이, “삼성전자 Q2 잠정실적 D-1” (2026-07-06)",
  },
  readThrough: {
    eyebrow: "Read-Through",
    title: "마이크론 가이던스와 아시아 메모리주 반응",
    intro: "마이크론 회계연도 2026 3분기(2026년 5월 28일 마감) 실적이 컨센서스를 크게 상회했습니다.",
    metrics: [
      { label: "매출", value: "$41.46B", sub: "전분기 $23.86B" },
      { label: "GAAP EPS", value: "$24.67", sub: "非GAAP $25.11" },
      { label: "차분기 매출 가이던스", value: "$50.0B ±1B", sub: "非GAAP 마진 ~86%" },
      { label: "차분기 EPS 가이던스", value: "$31.00 ±1", sub: "" },
    ],
    hbmNote:
      "특히 마이크론은 HBM4가 이미 리드 고객사向 대량 양산 출하 단계에 들어갔다고 밝혔고, HBM4E(1-gamma D램)는 2027년 양산을 목표로 개발 중이라고 언급했습니다. 이는 HBM 경쟁 강도가 여전히 높다는 뜻으로, SK하이닉스의 HBM 리더십 방어 여부가 삼성전자보다 오히려 더 민감하게 봐야 할 변수입니다.",
    priceNote:
      "참고(단일 출처, 교차검증 미완료): 일부 증권사 리포트는 2분기 D램 평균판매단가(ASP)가 전분기 대비 40%대 이상, 낸드는 60%대 중반까지 상승했다고 추정합니다. 마이크론의 대규모 어닝 서프라이즈와 방향이 일치하지만, 정확한 수치는 추가 확인이 필요합니다.",
    readingNote:
      "읽는 법: 마이크론은 삼성전자·SK하이닉스와 메모리 다운스트림(D램·HBM·낸드)을 공유하는 가장 가까운 비교 기업입니다. 마이크론의 가이던스가 이 정도로 강하게 상향되면, 통상 국내 메모리 업체 실적/가이던스에 대한 눈높이도 함께 올라가는 “업황 확인” 효과가 있습니다. 다만 종목별 주가 반응은 각 사의 재고/믹스/환율 변수에 따라 달라질 수 있어, 이번 세션에서는 과거 특정 사례의 정확한 주가 변동폭 데이터까지는 검증하지 못했습니다.",
    source: "출처: Micron Technology Investor Relations, “Micron Technology, Inc. Reports Record Results Third Quarter” (2026-06)",
  },
  macroWatch: {
    eyebrow: "Macro Watch",
    title: "이달 주의 깊게 볼 해외 매크로 뉴스",
    items: [
      {
        title: "1. 워시 Fed 의장, “인플레이션 여전히 높다” — 7/29 FOMC 앞두고 매파적 톤",
        conf: "single",
        body: "2026년 7월 1일 ECB 포럼에서 케빈 워시 Fed 의장이 7월 금리 결정 방향에 대한 확답은 피했지만 인플레이션이 “여전히 높다”고 언급했습니다. 다음 FOMC는 7월 29일 종료 — 위 CPI(7/14)·PPI(7/15) 결과와 겹쳐 반도체 등 고밸류에이션 성장주에 대한 할인율 부담이 커질 수 있는 구간입니다.",
      },
      {
        title: "2. 미국, AI 반도체 수출통제 “중국 본사 기업” 전체로 확대 적용 명확화",
        conf: "confirmed",
        body: "2026년 6월 1일, 미 상무부 산업안보국(BIS)이 첨단 AI 반도체 수출 라이선스 요건이 중국에 본사를 두거나 중국 기업이 모회사인 경우 자회사의 물리적 소재지와 무관하게 적용된다고 명확히 했습니다.",
      },
      {
        title: "3. 배경: 한국 반도체 기업의 중국 內 사업 관련 수출통제 강화 흐름",
        conf: "confirmed",
        body: "2025년 9월 BIS는 삼성전자·SK하이닉스의 중국 내 지정 사업장을 Validated End-User(VEU) 프로그램에서 제외했고(2025년 12월 31일 발효), 2026년 1월 14일에는 특정 반도체 품목에 25% 관세가 부과되었습니다.",
      },
    ],
    source: "출처: CNBC (2026-07-01), Al Jazeera (2026-06-01), Congressional Research Service R48642",
  },
  gammaExposure: {
    eyebrow: "Options & Gamma",
    title: "S&P500(SPY) 감마 익스포저와 감마스퀴즈",
    intro: "옵션 시장에서 딜러(마켓메이커)의 헤지 행동이 지수 변동성 자체에 영향을 주는 경우가 있습니다. 그 핵심 개념이 감마 익스포저(GEX)입니다.",
    whatIsIt:
      "감마 익스포저(GEX)란: 옵션 딜러는 고객에게 콜/풋을 팔고 나면 델타 중립을 유지하기 위해 기초자산(주식)을 사고팔면서 헤지합니다. 이때 '감마'가 크면(현재가 근처 행사가에 미결제약정이 몰려있으면) 가격이 조금만 움직여도 델타가 크게 바뀌어서 헤지 매매량이 커집니다. 시장 전체 딜러 포지션의 감마 합을 추정한 것이 GEX입니다.",
    squeezeExplainer:
      "감마스퀴즈란: GEX가 마이너스(숏감마) 구간에서는 딜러가 가격이 오르면 사고, 내리면 팔아야 해서 변동성을 증폭시킵니다 — 이 상태에서 가격이 특정 방향으로 움직이기 시작하면 딜러의 헤지 매수/매도가 같은 방향으로 가속을 붙여 '스퀴즈'가 발생합니다. 반대로 GEX가 플러스(롱감마) 구간에서는 딜러가 오르면 팔고 내리면 사서 변동성을 억제합니다. 아래 차트에서 마이너스(빨강)에서 플러스(초록)로 바뀌는 지점이 '제로 감마 전환점'이며, 현재가가 이 지점 아래에 있으면 변동성이 커지기 쉬운 구간이라는 뜻입니다.",
    caveat:
      "주의: 딜러의 실제 포지션(콜을 매수했는지 매도했는지)은 공개되지 않습니다. 이 차트는 업계에서 널리 쓰이는 단순화 가정(콜 미결제약정=딜러 롱감마, 풋 미결제약정=딜러 숏감마)으로 계산한 추정치이며, 실제 시장 포지셔닝과 다를 수 있습니다.",
    spotLabel: "현재가",
    flipLabel: "감마 전환점",
    noData: "아직 데이터가 없습니다. GitHub Actions 워크플로우가 한 번 실행되면 표시됩니다.",
    source: "출처: yfinance SPY 옵션체인 실시간 계산 (Black-Scholes 감마 모델)",
  },
  legend: "= 2개 이상 독립 소스로 교차검증됨",
  confirmedLabel: "확인됨",
  singleLabel: "단일 출처",
};

const en: ResearchContent = {
  pageTitle: "Research Hub",
  pageSubtitle: "Macro calendar, earnings scenarios, and overseas news worth watching. (as of 2026-07-07)",
  todayBanner: {
    strong: "Today (Jul 7) is Samsung Electronics' Q2 preliminary earnings release.",
    rest: "See the “Samsung Earnings Scenario” section below for consensus and scenario-by-scenario reactions.",
  },
  macroCalendar: {
    eyebrow: "Macro Calendar",
    title: "This Month's CPI/PPI Release Schedule",
    intro: "Based on the official 2026 economic indicator release schedule published by the White House OMB/OIRA.",
    items: [
      { label: "CPI (June data) — released Tue, Jul 14, 2026", conf: "confirmed" },
      { label: "PPI (June data) — released Wed, Jul 15, 2026", conf: "confirmed" },
      { label: "CPI (July data) — released Wed, Aug 12, 2026", conf: "confirmed" },
      { label: "PPI (July data) — released Thu, Aug 13, 2026", conf: "confirmed" },
    ],
    fomcNote:
      "For reference, the next FOMC meeting concludes on July 29 — the 7/14 CPI and 7/15 PPI prints are likely to feed directly into that meeting's rate-path outlook.",
    source: "Source: White House OMB/OIRA, “Schedule of Release Dates for Principal Federal Economic Indicators for 2026”",
  },
  earningsScenario: {
    eyebrow: "Earnings Scenario",
    title: "Samsung Electronics Earnings Scenario Analysis",
    intro: "Samsung's Q2 preliminary results are due today (Jul 7). Ahead of the release, brokerage operating-profit consensus is spread widely:",
    consensusList: [
      "Hana Securities: 92T KRW (highest)",
      "Kiwoom Securities: 89T KRW",
      "Eugene Investment & Securities: 83.1T KRW",
      "iM Securities: 80T KRW (lowest)",
    ],
    tableHeaders: ["Scenario", "Condition", "Expected Market Reaction"],
    scenarios: [
      {
        label: "Surprise beat",
        tone: "buy",
        condition: "Above 92T KRW",
        reaction:
          "Signals the HBM/DRAM price upcycle is stronger than expected → sector-wide re-rating for semis, likely sympathetic strength in SK Hynix",
      },
      {
        label: "In line with consensus",
        tone: "neutral",
        condition: "80–92T KRW",
        reaction:
          "Good results already priced in → possible short-term “sell the news” profit-taking; direction hinges on detailed guidance at the final-results call (late July)",
      },
      {
        label: "Shock (miss)",
        tone: "sell",
        condition: "Below 80T KRW",
        reaction:
          "Could raise memory-cycle peak-out concerns → risk of an extended drawdown, though since Micron beat guidance in the same window, worth checking whether it's a Samsung-specific issue (yield/mix) rather than a sector one",
      },
    ],
    note: "This scenario framework is editorial analysis — the actual guidance given at the final-results call (typically late July) will ultimately determine direction.",
    source: "Source: Digital Today, “Samsung Electronics Q2 Preliminary Results, D-1” (2026-07-06)",
  },
  readThrough: {
    eyebrow: "Read-Through",
    title: "Micron's Guidance and the Asian Memory-Stock Reaction",
    intro: "Micron's fiscal Q3 2026 results (period ended May 28, 2026) came in well above consensus.",
    metrics: [
      { label: "Revenue", value: "$41.46B", sub: "vs $23.86B prior quarter" },
      { label: "GAAP EPS", value: "$24.67", sub: "Non-GAAP $25.11" },
      { label: "Next-quarter revenue guide", value: "$50.0B ±$1B", sub: "Non-GAAP margin ~86%" },
      { label: "Next-quarter EPS guide", value: "$31.00 ±$1", sub: "" },
    ],
    hbmNote:
      "Notably, Micron said HBM4 is already in high-volume shipments to its lead customer, with HBM4E (1-gamma DRAM) development targeting 2027 volume production. That signals HBM competition remains intense — whether SK Hynix defends its HBM leadership is arguably a more sensitive variable here than anything about Samsung.",
    priceNote:
      "Note (single source, not cross-verified): some brokerage reports estimate Q2 DRAM ASPs rose more than 40% QoQ and NAND ASPs into the mid-60% range. Directionally consistent with Micron's large beat, but the exact figures need further confirmation.",
    readingNote:
      "How to read this: Micron is the closest comparable to Samsung and SK Hynix across memory downstream markets (DRAM, HBM, NAND). A guidance raise this large from Micron typically raises the bar for domestic memory makers' results/guidance too — a “cycle confirmation” effect. That said, individual stock reactions can vary with each company's inventory, mix, and FX exposure; this session wasn't able to verify exact historical share-price-move data for a specific past instance.",
    source: "Source: Micron Technology Investor Relations, “Micron Technology, Inc. Reports Record Results Third Quarter” (2026-06)",
  },
  macroWatch: {
    eyebrow: "Macro Watch",
    title: "Overseas Macro News Worth Watching This Month",
    items: [
      {
        title: "1. Fed Chair Warsh: “Inflation still too high” — hawkish tone ahead of the Jul 29 FOMC",
        conf: "single",
        body: "At the July 1, 2026 ECB Forum, Fed Chair Kevin Warsh avoided committing to a July rate decision but said inflation is “still too high.” The next FOMC concludes July 29 — overlapping with the CPI (7/14) and PPI (7/15) prints above, this window could add discount-rate pressure on high-valuation growth names like semiconductors.",
      },
      {
        title: "2. US clarifies AI chip export controls extend to all China-headquartered firms",
        conf: "confirmed",
        body: "On June 1, 2026, the US Bureau of Industry and Security (BIS) clarified that advanced AI chip export licensing requirements apply to any company headquartered in, or with a parent company in, China — regardless of where the subsidiary is physically located.",
      },
      {
        title: "3. Background: tightening export-control trend around Korean chipmakers' China operations",
        conf: "confirmed",
        body: "In September 2025, BIS removed Samsung's and SK Hynix's named China facilities from the Validated End-User (VEU) program (effective Dec 31, 2025), and on January 14, 2026 a 25% tariff was imposed on specified chip items.",
      },
    ],
    source: "Source: CNBC (2026-07-01), Al Jazeera (2026-06-01), Congressional Research Service R48642",
  },
  gammaExposure: {
    eyebrow: "Options & Gamma",
    title: "S&P 500 (SPY) Gamma Exposure and Gamma Squeezes",
    intro: "In the options market, dealer (market-maker) hedging behavior can itself influence index volatility. The key concept behind this is Gamma Exposure (GEX).",
    whatIsIt:
      "What GEX is: when an options dealer sells calls/puts to customers, they hedge by buying or selling the underlying stock to stay delta-neutral. When 'gamma' is large — meaning open interest is concentrated near the current price — even a small price move causes a big delta change, forcing larger hedge trades. GEX is an estimate of the aggregate gamma across dealers' market-wide positioning.",
    squeezeExplainer:
      "What a gamma squeeze is: in a negative-GEX (short-gamma) regime, dealers must buy as price rises and sell as it falls, which amplifies volatility — once price starts moving in one direction, dealer hedging accelerates that move, causing a 'squeeze.' In a positive-GEX (long-gamma) regime, dealers sell as price rises and buy as it falls, dampening volatility instead. In the chart below, the point where bars flip from negative (red) to positive (green) is the 'zero-gamma flip point' — when spot is below that level, the market tends to be more volatility-prone.",
    caveat:
      "Caveat: dealers' actual positioning (whether they're long or short a given call/put) isn't public data. This chart uses a simplifying convention common across public GEX trackers (call OI = dealer long gamma, put OI = dealer short gamma), so it's an estimate that may differ from real market positioning.",
    spotLabel: "Spot",
    flipLabel: "Gamma flip",
    noData: "No data yet — this will populate once the GitHub Actions workflow runs.",
    source: "Source: live SPY options chain via yfinance (Black-Scholes gamma model)",
  },
  legend: "= cross-verified by 2+ independent sources",
  confirmedLabel: "Confirmed",
  singleLabel: "Single source",
};

export function getResearchContent(locale: "ko" | "en"): ResearchContent {
  return locale === "en" ? en : ko;
}
