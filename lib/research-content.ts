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
  privateCredit: {
    eyebrow: string;
    title: string;
    intro: string;
    riskTitle: string;
    riskPoints: { text: string; conf: Confidence }[];
    optimismTitle: string;
    optimismPoints: { text: string; conf: Confidence }[];
    materializeTitle: string;
    materializePoints: string[];
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
  privateCredit: {
    eyebrow: "Credit Risk",
    title: "프라이빗 크레딧(사모신용) 리스크와 낙관론",
    intro:
      "글로벌 금융안정위원회(FSB)와 미 연준이 2026년 5월 잇따라 프라이빗 크레딧 취약성 보고서를 냈습니다. 규모가 커지고 은행과의 연결고리가 깊어지면서, '리스크가 어느 한쪽으로 몰릴 수 있다'는 우려와 '아직은 관리 가능한 수준'이라는 평가가 동시에 나오고 있습니다. 조사 과정에서 리스크 측 근거가 낙관론 근거보다 더 두텁게 확인됐다는 점도 그 자체로 참고할 만합니다.",
    riskTitle: "리스크 시각",
    riskPoints: [
      { text: "FSB(금융안정위원회, 2026-05-06): 글로벌 프라이빗 크레딧 시장 규모를 1.5조~2조 달러로 추정하며, 은행·보험사·사모펀드와의 상호연계성이 깊어지고 있다고 경고.", conf: "confirmed" },
      { text: "FSB: 레버리지와 차입자 신용도가 심각한 경기침체를 아직 한 번도 거치지 않았다는 점, 유동성 미스매치·쏠림 리스크·국경 간 연계성을 핵심 취약점으로 지목.", conf: "confirmed" },
      { text: "미 연준 금융안정보고서(2026-05-08): 프라이빗 크레딧 대출 잔액 약 1.4조 달러 — 미국 비금융기업 부채의 약 10%, 투자부적격 등급 부채의 약 3분의 1 수준.", conf: "confirmed" },
      { text: "연준: 은행의 비은행금융기관(NBFI) 대상 신용공여가 2025년 4분기 2.6조 달러로 늘었고, 그중 '사모펀드·BDC·프라이빗크레딧' 항목이 최대 비중이며 전년 대비 17% 증가(전체 NBFI 평균 14%보다 높음).", conf: "confirmed" },
      { text: "연준: 2025년 중반부터 고profile 부실 사례와 AI발 산업 disruption(특히 프라이빗크레딧 포트폴리오 내 최대 비중인 소프트웨어 업종) 우려로 투자심리가 악화됐고, 2026년 1분기에는 퍼페추얼 BDC 상품이 생긴 이래 처음으로 환매 요청이 신규 유입을 넘어섰음.", conf: "confirmed" },
      { text: "뉴욕 연은 2026년 봄 시장참가자 설문(20개 기관, 3~4월): 프라이빗 크레딧이 향후 12~18개월 내 잠재 충격 요인으로 가장 많이 언급된 항목 중 하나(2025년 가을보다 언급 빈도 증가), AI발 신용도 훼손이 더 넓은 신용시장으로 전이될 수 있다는 우려도 제기됨.", conf: "confirmed" },
      { text: "IMF: 레버리지가 여러 층에 걸쳐 숨어있다고 지적 — 폐쇄형 펀드 대부분은 무차입이지만 일부는 부채비율 1.3배까지, BDC는 0.8~1.2배, 미들마켓 CLO는 구조 전체 기준 약 6배 레버리지를 사용.", conf: "confirmed" },
      { text: "UBS: AI발 혼란으로 향후 몇 분기 내 프라이빗 크레딧 부도율이 현재 약 4.4%에서 최대 9~10%까지 오를 수 있다고 전망 (레버리지론 3.5~4%, 하이일드채권 1.75~2% 전망과 대비).", conf: "single" },
      { text: "2026년 1분기, 블랙스톤 BCRED는 순자산의 약 8%에 달하는 환매 요청(5% 한도 초과)을, 칼라일 CTAC는 분기 한도(3%)를 크게 웃도는 15.7% 규모의 환매 요청을 받은 것으로 보도됨. 은행의 프라이빗크레딧펀드 대상 신용공여한도는 2013년 80억 달러에서 최근 950억 달러로 증가.", conf: "single" },
    ],
    optimismTitle: "낙관 시각",
    optimismPoints: [
      { text: "연준 자체 평가: 현재로선 환매 압력에 따른 금융안정 리스크가 '제한적이고 관리 가능한' 수준 — 상위 10개 퍼페추얼 BDC(업권 자산의 80%)는 은행 신용한도와 현금성 자산만으로 최소 3분기 치 순환매에 대응 가능.", conf: "confirmed" },
      { text: "웰링턴 자산운용: '프라이빗 크레딧'을 직접대출로 좁게 보면 1.5~1.7조 달러지만, 자산기반금융까지 넓게 보면 잠재 시장은 30조 달러 이상으로 훨씬 분산돼 있다는 시각(자사 전망이라는 점은 감안 필요).", conf: "single" },
      { text: "업계 논리: 프라이빗 크레딧 펀드는 대개 폐쇄형 구조라 만기 미스매치(단기 조달로 장기 대출)가 은행보다 적고, 일일 시가평가·강제매도 압력에서 비교적 자유롭다는 점을 강점으로 내세움 — 다만 이는 검증된 리서치 결과가 아니라 업계에서 통상 제시하는 주장입니다.", conf: "single" },
    ],
    materializeTitle: "만약 리스크가 현실화된다면 — 반도체/AI 성장주로의 전이 경로",
    materializePoints: [
      "은행의 프라이빗크레딧펀드 신용공여한도(2.6조 달러, 전년비 +17%)가 스트레스 상황에서 축소되면, 펀드들이 대출 회수·신규 대출 축소에 나설 수 있음.",
      "AI 데이터센터·GPU 구매 등 대규모 설비투자는 최근 자산기반금융·프라이빗크레딧 구조로 자금을 조달하는 사례가 늘고 있어, 신용경색 시 이 자금조달 경로부터 막힐 가능성.",
      "뉴욕 연은 설문에서 이미 지적된 대로, AI발 산업 disruption이 차입자 신용도를 낮추고 이것이 다시 공개 신용시장(레버리지론, 하이일드)으로 전이되면 반도체 업종 전반의 할인율(자본비용)이 높아짐.",
      "결과적으로 AI 설비투자 사이클에 밸류에이션이 크게 의존하는 성장주(엔비디아 등 반도체·AI인프라)일수록 '자금조달 위축 → 설비투자 둔화 우려 → 멀티플 압축'의 경로에 더 민감하게 반응할 수 있음.",
    ],
    source: "출처: FSB (2026-05-06), 미 연준 금융안정보고서 (2026-05-08), IMF, 뉴욕 연은 봄 설문, UBS·Forbes·CNBC 보도 (2026-05)",
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
  privateCredit: {
    eyebrow: "Credit Risk",
    title: "Private Credit Risk and the Optimist Case",
    intro:
      "The Financial Stability Board and the Federal Reserve both published private-credit vulnerability reports in May 2026. As the sector has grown and its ties to banks have deepened, warnings that risk could concentrate in one place are running alongside assessments that things are still manageable. Worth noting: in this research pass, the risk-side evidence came back considerably more substantiated than the optimist case — that asymmetry is itself informative.",
    riskTitle: "The Risk Case",
    riskPoints: [
      { text: "FSB (2026-05-06): estimates the global private credit market at $1.5-2 trillion and warns that interconnections with banks, insurers, and PE firms are deepening.", conf: "confirmed" },
      { text: "FSB: leverage and borrower credit quality have never been tested through a severe downturn; flags liquidity mismatches, concentration risk, and cross-border linkages as key vulnerabilities.", conf: "confirmed" },
      { text: "Fed Financial Stability Report (2026-05-08): private credit loans total about $1.4 trillion — roughly 10% of US nonfinancial corporate debt and about a third of below-investment-grade debt.", conf: "confirmed" },
      { text: "Fed: bank credit commitments to nonbank financial institutions hit $2.6 trillion in Q4 2025, with 'PE/BDC/private credit' the largest category, up 17% y/y (vs. 14% for all NBFIs).", conf: "confirmed" },
      { text: "Fed: sentiment has soured since mid-2025 on high-profile defaults and AI-disruption fears (especially in software, the largest sector in private-credit portfolios) — in Q1 2026, redemptions exceeded inflows to perpetual BDCs for the first time ever.", conf: "confirmed" },
      { text: "NY Fed's Spring 2026 survey of 20 market contacts (Mar-Apr): private credit was among the most-cited potential shocks over the next 12-18 months, up from Fall 2025, with respondents warning AI-driven disruption could spill into broader credit markets.", conf: "confirmed" },
      { text: "IMF: leverage is layered and partly hidden — most closed-end funds are unlevered, but some run debt-to-equity up to 1.3x, BDCs run 0.8-1.2x, and middle-market CLOs run about 6x at the total structure level.", conf: "confirmed" },
      { text: "UBS: AI-driven disruption could push private-credit default rates from ~4.4% today to as high as 9-10% within a few quarters (vs. 3.5-4% for leveraged loans and 1.75-2% for high yield).", conf: "single" },
      { text: "Reported in Q1 2026: Blackstone's BCRED received redemption requests around 8% of NAV (above its 5% cap), and Carlyle's CTAC received requests for 15.7% of shares (above its quarterly limit); bank credit lines to private-credit funds have grown from $8B (2013) to roughly $95B.", conf: "single" },
    ],
    optimismTitle: "The Optimist Case",
    optimismPoints: [
      { text: "The Fed's own assessment: financial-stability risk from redemption pressure currently looks \"limited and manageable\" — the 10 largest perpetual BDCs (80% of sector assets) can cover at least three quarters of net redemptions via bank credit lines and cash.", conf: "confirmed" },
      { text: "Wellington Management argues the addressable market is far more diversified than the commonly cited $1.5-1.7T direct-lending figure suggests — over $30 trillion once broader asset-based finance is included (note: this is the asset manager's own outlook).", conf: "single" },
      { text: "Industry argument: closed-end fund structures mean less maturity mismatch than banks face, and less exposure to forced, mark-to-market selling — a commonly cited industry talking point rather than an independently verified research finding.", conf: "single" },
    ],
    materializeTitle: "If the risk materializes — the transmission path to semis/AI growth stocks",
    materializePoints: [
      "If bank credit lines to private-credit funds ($2.6T, +17% y/y) get pulled back under stress, funds could tighten new lending and call in existing loans.",
      "A growing share of AI data-center and GPU buildouts are financed through asset-based/private-credit structures — a credit crunch could hit this funding channel directly.",
      "As the NY Fed survey already flags, AI-driven disruption to borrower credit quality could spill into public credit markets (leveraged loans, high yield), raising the cost of capital across the semiconductor sector broadly.",
      "Growth stocks whose valuations lean heavily on the AI capex cycle (Nvidia and AI-infrastructure semis in particular) would likely be the most sensitive to a 'financing tightens → capex growth in doubt → multiple compression' chain.",
    ],
    source: "Source: FSB (2026-05-06), Fed Financial Stability Report (2026-05-08), IMF, NY Fed Spring survey, UBS/Forbes/CNBC reporting (2026-05)",
  },
  legend: "= cross-verified by 2+ independent sources",
  confirmedLabel: "Confirmed",
  singleLabel: "Single source",
};

export function getResearchContent(locale: "ko" | "en"): ResearchContent {
  return locale === "en" ? en : ko;
}
