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
  earningsCalendar: {
    eyebrow: string;
    title: string;
    intro: string;
    rows: { company: string; date: string; conf: Confidence; note: string }[];
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
    diagram: {
      gammaCurve: string;
      strike: string;
      priceAxis: string;
      gammaAxis: string;
      loopTitle: string;
      step1: string;
      step2: string;
      step3: string;
      step4: string;
    };
  };
  fedOutlook: {
    eyebrow: string;
    title: string;
    intro: string;
    dxyM2Points: { text: string; conf: Confidence }[];
    inflationEmploymentPoints: { text: string; conf: Confidence }[];
    outlookConclusion: string;
    source: string;
  };
  employmentTable: {
    eyebrow: string;
    title: string;
    intro: string;
    tableHeaders: [string, string, string, string];
    rows: { indicator: string; date: string; forecast: string; actual: string; verdict: "beat" | "miss" | "inline"; note: string }[];
    whyItMatters: string;
    source: string;
  };
  midtermElection: {
    eyebrow: string;
    title: string;
    intro: string;
    odds: { label: string; value: number }[];
    scenarios: { label: string; tone: "buy" | "neutral" | "sell"; description: string }[];
    source: string;
  };
  industryConditions: {
    eyebrow: string;
    title: string;
    intro: string;
    points: { text: string; conf: Confidence }[];
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
  vkospi: {
    eyebrow: string;
    title: string;
    intro: string;
    chart: { label: string; value: number; tone: "normal" | "elevated" | "warning" | "extreme" }[];
    points: string[];
    dataNote: string;
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
  earningsCalendar: {
    eyebrow: "Earnings Calendar",
    title: "실적 캘린더 — TSMC · 마이크론 · 엔비디아",
    intro: "삼성전자 외에 반도체 밸류체인의 방향성을 확인할 수 있는 주요 기업들의 다가오는 실적 발표 일정입니다.",
    rows: [
      {
        company: "TSMC",
        date: "2026년 7월 16일 (목)",
        conf: "confirmed",
        note: "2분기 실적 발표 및 3분기 가이던스 제시 투자자 컨퍼런스. 파운드리 수요·AI 칩 생산 능력에 대한 코멘트가 반도체 섹터 전반의 방향타 역할을 합니다.",
      },
      {
        company: "엔비디아",
        date: "2026년 8월 26일 (수) 장 마감 후",
        conf: "confirmed",
        note: "회계연도 2027 2분기 실적. 컨센서스는 EPS $2.07, 매출 $917억 수준. AI 데이터센터 수요와 차세대 GPU 출하 코멘트가 핵심 관전 포인트입니다.",
      },
      {
        company: "마이크론",
        date: "2026년 9월 22일~29일 사이 (미확정)",
        conf: "single",
        note: "회계연도 2026 4분기 실적. 정확한 날짜는 아직 공식 확정되지 않았고, 매체별로 9/22~9/29 사이로 추정치가 다릅니다 — 발표 임박 시 마이크론 IR에서 재확인 필요.",
      },
    ],
    source: "출처: TSMC 투자자 컨퍼런스 공지, NVIDIA 8-K 공시, Wall Street Horizon/Investing.com 실적 캘린더 (2026-07 기준)",
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
      {
        title: "4. 중국, 대만 해역서 '저강도 상시압박'으로 전술 전환 — TSMC 공급망 리스크의 근본 배경",
        conf: "single",
        body: "2026년 6월 1일부터 중국 해경이 대만 동쪽 배타적경제수역(EEZ)에서 상시 순찰을 이어가고 있고, 프라타스섬·진먼 인근에서도 평소보다 잦은 순찰이 확인됩니다 — 분석가들은 이를 대규모 방공식별구역(ADIZ) 진입 대신 '지속 가능한 준봉쇄' 압박 전술로의 전환으로 해석합니다. 실제 6월 ADIZ 진입 횟수는 134회로 이전 월평균 300회 이상에서 줄었지만, 6월 23일에는 중국 항공모함 '푸젠'함이 대만해협을 통과(2025년 11월 취역 이후 3번째)했습니다. 7월 2일에는 중국 대만사무판공실이 미국재대만협회(AIT) 대표를 겨냥해 트럼프 대통령의 대만 관련 발언을 '표면적으로만 따르고 실제로는 어긴다'고 비판했습니다. TSMC가 전 세계 첨단 반도체의 약 90%, 최첨단 AI 모델 학습용 칩의 약 99%를 생산한다는 점에서, 전면 침공이 아니라 해경 통한 '준봉쇄'만으로도 반도체 공급망에 실질적 충격을 줄 수 있다는 게 전문가들의 시각입니다.",
      },
      {
        title: "5. 트럼프-이란, 도하에서 협상 재개 — 큰 진전은 없었지만 채널은 유지",
        conf: "single",
        body: "2026년 7월 2일, 카타르·파키스탄 중재로 미국(스티브 위트코프 특사, 재러드 쿠슈너)과 이란(가리바바디 외무차관 등 기술팀) 간 도하 회담이 열렸습니다. 구체적 성과는 제한적이었고, 조약 위반 의혹에 대한 분쟁해결 채널 구축과 동결된 이란 자산 60억 달러 처리 문제가 의제였습니다. 이란 국회의장 갈리바프는 IAEA 사찰관이 부셰르·테헤란 원자로에는 접근 가능하지만, (과거 폭격당한 것으로 보이는) 포르도·나탄즈·이스파한 시설에는 의회 제한으로 접근이 불가하다고 밝혔습니다 — 이는 양측이 완전한 정상화 이전 단계에 있음을 시사합니다. 이란 관련 리스크는 호르무즈해협을 통한 원유 공급과 직결되어 있어, 협상 진전/결렬 여부가 에너지 가격에 즉각 영향을 줄 수 있습니다.",
      },
    ],
    source: "출처: CNBC (2026-07-01), Al Jazeera (2026-06-01, 2026-07-02), AEI Taiwan Update (2026-07-02), Vision Times (2026-07-07), Congressional Research Service R48642",
  },
  gammaExposure: {
    eyebrow: "Options & Gamma",
    title: "S&P500(SPY) 감마 익스포저와 감마스퀴즈",
    intro: "옵션 시장에서 딜러(마켓메이커)의 헤지 행동이 지수 변동성 자체에 영향을 주는 경우가 있습니다. 그 핵심 개념이 감마 익스포저(GEX)입니다.",
    whatIsIt:
      "감마 익스포저(GEX)란: 옵션 딜러는 고객에게 콜/풋을 팔고 나면 델타 중립을 유지하기 위해 기초자산(주식)을 사고팔면서 헤지합니다. 이때 '감마'가 크면(현재가 근처 행사가에 미결제약정이 몰려있으면) 가격이 조금만 움직여도 델타가 크게 바뀌어서 헤지 매매량이 커집니다. 시장 전체 딜러 포지션의 감마 합을 추정한 것이 GEX입니다. 아래 그래프는 옵션의 감마 값이 행사가(스트라이크) 근처에서 종 모양으로 가장 크고, 멀어질수록 작아지는 형태를 보여줍니다 — 옵션 가격 자체가 이 감마 함수의 스케일을 따라 움직인다고 볼 수 있습니다.",
    squeezeExplainer:
      "감마스퀴즈란: GEX가 마이너스(숏감마) 구간에서는 딜러가 가격이 오르면 사고, 내리면 팔아야 해서 변동성을 증폭시킵니다 — 이 상태에서 가격이 특정 방향으로 움직이기 시작하면 딜러의 헤지 매수/매도가 같은 방향으로 가속을 붙여 '스퀴즈'가 발생합니다. 반대로 GEX가 플러스(롱감마) 구간에서는 딜러가 오르면 팔고 내리면 사서 변동성을 억제합니다. 아래 차트에서 마이너스(빨강)에서 플러스(초록)로 바뀌는 지점이 '제로 감마 전환점'이며, 현재가가 이 지점 아래에 있으면 변동성이 커지기 쉬운 구간이라는 뜻입니다.",
    caveat:
      "주의: 딜러의 실제 포지션(콜을 매수했는지 매도했는지)은 공개되지 않습니다. 이 차트는 업계에서 널리 쓰이는 단순화 가정(콜 미결제약정=딜러 롱감마, 풋 미결제약정=딜러 숏감마)으로 계산한 추정치이며, 실제 시장 포지셔닝과 다를 수 있습니다.",
    spotLabel: "현재가",
    flipLabel: "감마 전환점",
    noData: "아직 데이터가 없습니다. GitHub Actions 워크플로우가 한 번 실행되면 표시됩니다.",
    source: "출처: yfinance SPY 옵션체인 실시간 계산 (Black-Scholes 감마 모델)",
    diagram: {
      gammaCurve: "감마 곡선",
      strike: "행사가",
      priceAxis: "기초자산 가격",
      gammaAxis: "감마",
      loopTitle: "감마스퀴즈가 발생하는 피드백 루프 (숏감마 구간)",
      step1: "① 가격이 소폭 상승",
      step2: "② 딜러 델타 급변 (높은 감마)",
      step3: "③ 딜러가 헤지용 매수 확대",
      step4: "④ 매수 압력이 가격을 추가로 밀어올림 → ①로 반복",
    },
  },
  fedOutlook: {
    eyebrow: "Fed Outlook",
    title: "연준은 어디로 움직일까 — 달러·M2·인플레이션·고용 종합",
    intro:
      "달러가 약세면 위험자산으로 돈이 몰리고, M2가 늘면 자산시장에 유동성이 공급됩니다. 지금 두 지표와 인플레이션·고용 지표를 같이 놓고 보면, 연준이 놓인 딜레마가 뚜렷하게 보입니다.",
    dxyM2Points: [
      { text: "일반 원리: 달러(DXY)가 약세로 돌아서면 상대적으로 미국 자산의 매력이 낮아지는 대신, 신흥국·주식·암호화폐 같은 위험자산으로 글로벌 자금이 이동하는 경향이 있습니다 — 달러 표시 자산의 기회비용이 낮아지기 때문입니다.", conf: "single" },
      { text: "실제 사례: 2026년 7월 초 DXY는 100.7~101.2 구간에서 최근 5주 최저권 근처였고, 이는 6월 고용지표가 예상보다 크게 부진하게 나오면서 촉발된 최근 한 주 최대 낙폭 이후의 흐름입니다 — 다만 최근 12개월 기준으로는 여전히 +3%대 강세라, '추세적 약세'라기보다 '단기 조정'에 가깝습니다.", conf: "single" },
      { text: "일반 원리: M2 통화량이 늘어나면 시중 유동성이 커지면서 그 돈의 일부가 주식 등 자산시장으로 흘러들어가 밸류에이션을 밀어올리는 경향이 있습니다.", conf: "single" },
      { text: "실제 데이터: 2026년 5월 기준 M2는 약 23조 520억 달러로 전월(약 22조 8,045억 달러) 대비 증가했고, 전년 동월 대비로는 약 5.6% 늘었습니다 — 팬데믹 시기(2020~22년) 40%대 폭증과 비교하면 완만하지만, 꾸준히 우상향하며 유동성이 계속 공급되고 있는 상태입니다.", conf: "single" },
    ],
    inflationEmploymentPoints: [
      { text: "2026년 5월 PPI(생산자물가)는 전월 대비 +1.1%로 컨센서스(+0.7%)를 크게 상회했고, 전년 대비 도매물가 상승률은 6.5%로 2022년 11월 이후 최고치를 기록했습니다.", conf: "single" },
      { text: "2026년 6월 17일 FOMC(케빈 워시 신임 의장 첫 회의)에서는 기준금리를 3.50~3.75%로 동결했지만, 위원들의 금리 전망(점도표)이 기존의 '인하 편향'에서 '연내 추가 인상 가능성'으로 방향을 틀었습니다 — 근원 인플레이션이 목표(2%)를 크게 웃돈다는 판단 때문입니다.", conf: "single" },
      { text: "그런데 바로 이어진 6월 비농업고용(NFP)은 +5.7만 명으로 시장 예상(약 11만 명)을 크게 밑돌았고, 5월 수치도 17.2만 명에서 12.9만 명으로 큰 폭 하향 수정되었습니다. 실업률은 4.2%로 오히려 낮아졌지만, 이는 고용이 늘어서가 아니라 경제활동참가율이 61.5%로 떨어졌기 때문입니다 — 통계상 착시에 가깝습니다.", conf: "single" },
      { text: "즉 연준은 '뜨거운 인플레이션'과 '식어가는 고용' 사이에 낀 전형적인 이중책무 딜레마에 놓여 있습니다. 워시 의장 체제의 연준은 일단 인플레이션 쪽에 더 무게를 두고 매파적 신호를 냈지만, 시장은 고용 둔화를 더 심각하게 받아들여 달러가 오히려 5주 최저권으로 밀렸습니다 — 연준의 가이던스와 시장 가격이 서로 다른 방향을 보고 있는 흔치 않은 국면입니다.", conf: "single" },
    ],
    outlookConclusion:
      "종합하면: 다음 CPI(7/14)·PPI(7/15) 발표와 7/29 FOMC가 이 긴장을 어느 쪽으로 풀지 결정할 분수령입니다. 인플레이션이 계속 뜨겁게 나오면 연준은 매파 기조를 유지하며 달러 반등·성장주 밸류에이션 압박 쪽으로, 반대로 7월 고용지표까지 추가로 부진하면 연준이 결국 '고용' 쪽으로 무게중심을 옮기며 금리 인하 기대가 되살아나 위험자산(반도체 포함)에 우호적인 환경이 만들어질 가능성이 있습니다. 다만 이는 편집자의 시나리오 해석이며, 실제 연준의 판단이 아닙니다.",
    source: "출처: Federal Reserve H.6/FOMC 성명 (2026-06-17), CNBC PPI 보도 (2026-06-11), Vantage Markets/FXStreet 고용지표 보도 (2026-07-02), TradingEconomics",
  },
  employmentTable: {
    eyebrow: "Employment Data",
    title: "고용지표 — 예상치 vs 실제, 그리고 그 의미",
    intro: "비농업고용, 실업률, 신규 실업수당 청구건수는 연준이 가장 주시하는 3대 고용 지표입니다. 최근 발표분의 컨센서스 예상치와 실제 결과를 비교하면 아래와 같습니다.",
    tableHeaders: ["지표 (발표일)", "예상치", "실제치", "해석"],
    rows: [
      { indicator: "비농업고용(NFP), 6월", date: "2026-07-02", forecast: "약 +11만 명", actual: "+5.7만 명 (5월도 17.2만→12.9만 명 하향)", verdict: "miss", note: "큰 폭 미스. 고용 둔화가 뚜렷해지며 연내 금리 인하 기대를 되살리는 재료." },
      { indicator: "실업률, 6월", date: "2026-07-02", forecast: "4.3% 근방", actual: "4.2% (경제활동참가율 61.5%로 하락)", verdict: "beat", note: "숫자만 보면 개선이지만, 구직을 포기한 사람이 늘어난 결과라 '착시'에 가깝다는 평가." },
      { indicator: "신규 실업수당 청구건수, 6/27일 주", date: "2026-07-02", forecast: "약 22.0만 건", actual: "21.5만 건 (5주래 최저)", verdict: "beat", note: "예상보다 양호 — 아직 대량 해고로 번지는 신호는 아니라는 근거로 해석됨." },
      { indicator: "신규 실업수당 청구건수, 6/13일 주", date: "2026-06-18", forecast: "약 22.5만 건", actual: "22.6만 건", verdict: "inline", note: "예상과 대체로 부합, 4주 이동평균은 22.2만 건으로 완만한 둔화 흐름을 유지." },
    ],
    whyItMatters:
      "왜 중요한가: 연준의 이중책무(물가안정+최대고용) 중 '고용' 쪽 판단 근거가 바로 이 지표들입니다. NFP가 크게 미스하면 시장은 곧바로 금리 인하 기대를 높이는데, 문제는 지금처럼 인플레이션(PPI +6.5%)이 동시에 뜨거우면 연준이 '금리를 내리기도, 올리기도 애매한' 상황에 놓인다는 점입니다. 실업률 하락이 '진짜 개선'인지 '참가율 하락에 따른 착시'인지 구분해서 봐야 하는 이유이기도 합니다.",
    source: "출처: Vantage Markets, FXStreet (2026-07-02), Investing.com 경제캘린더, TradingEconomics",
  },
  midtermElection: {
    eyebrow: "Politics",
    title: "2026년 11월 중간선거 — 폴리마켓 확률과 자산시장 시나리오",
    intro: "폴리마켓 기준 하원은 민주당이 가져갈 가능성이 높고, 상원은 공화당이 근소하게 우세합니다. 즉 '분점정부'가 현재로선 가장 유력한 시나리오입니다.",
    odds: [
      { label: "민주당, 하원 장악", value: 84 },
      { label: "공화당, 하원 장악", value: 17 },
      { label: "공화당, 상원 장악", value: 55 },
      { label: "민주당, 상원 장악", value: 46 },
      { label: "민주당 상하원 싹쓸이", value: 43.5 },
      { label: "분점정부(공화 상원+민주 하원)", value: 40.5 },
      { label: "공화당 상하원 유지", value: 14.5 },
    ],
    scenarios: [
      { label: "공화당 단일 통제 유지 (확률 낮음, 14.5%)", tone: "buy", description: "감세·규제완화 기조 연장 기대로 위험자산에 우호적일 수 있다는 시각이 있으나, 현재 폴리마켓 확률상 가능성이 가장 낮은 시나리오입니다." },
      { label: "분점정부: 공화 상원 + 민주 하원 (40.5%)", tone: "neutral", description: "대규모 신규 입법(추가 감세·재정지출 확대 등)이 막히는 대신 '현상 유지'에 가까워, 정책 불확실성이 줄어드는 효과가 있을 수 있습니다. 역사적으로 분점정부 시기 증시가 나쁘지 않았다는 통계도 있으나 이번 사이클에 그대로 적용될지는 불확실합니다." },
      { label: "민주당 상하원 싹쓸이 (43.5%, 확률상 최다)", tone: "sell", description: "행정부(공화)와 의회(민주) 간 대립 구도가 강해져 예산·부채한도 협상 리스크, 対중국 정책 등에서 변동성이 커질 수 있다는 우려가 있습니다. 다만 반도체 수출통제처럼 초당적 지지를 받는 정책 기조는 정권 구성과 무관하게 유지될 가능성이 있습니다.",
      },
    ],
    source: "출처: Polymarket 'Balance of Power: 2026 Midterms', 'Congress' 마켓 (2026-07-08 스냅샷)",
  },
  industryConditions: {
    eyebrow: "Industry",
    title: "반도체 산업 현황 — 지금 업사이클의 위치는 어디인가",
    intro: "마이크론의 어닝 서프라이즈, 삼성전자의 사상 최대 실적, 급등한 메모리 가격을 종합하면 지금 반도체 업황의 위치를 가늠할 수 있습니다.",
    points: [
      { text: "메모리 업사이클: 마이크론 회계 3분기 매출이 전분기 대비 거의 2배(238.6억→414.6억 달러)로 뛰었고, HBM4가 이미 대량 양산 출하 단계라고 밝혔습니다 — AI 데이터센터발 메모리 수요가 공급을 크게 앞서는 국면임을 보여줍니다.", conf: "confirmed" },
      { text: "삼성전자 2분기(2026) 영업이익이 약 89.4조원으로 잠정 집계되며 엔비디아·애플 시가총액까지 넘어섰다는 국내 보도가 나왔습니다 — 메모리 가격 급등이 실적에 그대로 반영되고 있습니다.", conf: "single" },
      { text: "일부 증권사는 2분기 D램 평균판매단가(ASP)가 전분기 대비 40%대 이상, 낸드는 60%대 중반까지 뛴 것으로 추정합니다 — 다만 이는 단일 출처로, 정확한 수치는 추가 확인이 필요합니다.", conf: "single" },
      { text: "리스크 요인: 미국의 대중 반도체 수출통제가 계속 강화되는 추세(2025년 9월 VEU 제외, 2026년 1월 관세, 2026년 6월 우회수출 차단 명확화)라, 중국 매출 비중이 있는 기업들은 정책 리스크를 계속 안고 가야 하는 상황입니다.", conf: "confirmed" },
      { text: "종합 판단: 현재는 'AI 인프라 투자가 메모리 가격을 밀어올리는' 전형적인 업사이클 초중반 국면으로 보이며, 관건은 이 사이클이 언제까지 이어지는지(과잉 설비투자로 인한 반전 시점)와 중국向 수출통제가 얼마나 더 강화되는지 두 가지입니다.", conf: "single" },
    ],
    source: "출처: Micron Technology IR (2026-06), 디지털투데이 (2026-07-06), CNBC, Congressional Research Service R48642",
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
  vkospi: {
    eyebrow: "Volatility",
    title: "VKOSPI — 사상 최고 수준의 코스피 변동성",
    intro:
      "VKOSPI(코스피200 변동성지수, 미국 VIX의 한국판)가 2026년 6월 24일 장중 95.48까지 치솟아 역대 최고치를 새로 썼습니다. 평소 20 안팎에서 움직이던 지수가 거의 5배 수준까지 뛴 것으로, 이번 조사에서 확인한 수치들을 아래 그래프로 비교했습니다.",
    chart: [
      { label: "평상시 수준", value: 20, tone: "normal" },
      { label: "과거 스트레스 상한(대략)", value: 40, tone: "elevated" },
      { label: "'시스템 리스크 전조' 구간", value: 55, tone: "warning" },
      { label: "2026년 6월 24일 장중 최고치", value: 95.48, tone: "extreme" },
      { label: "2026년 6월 월평균", value: 85.42, tone: "extreme" },
      { label: "2026년 7월 1~3일 평균", value: 88.12, tone: "extreme" },
    ],
    points: [
      "2026년 6월 24일, VKOSPI가 장중 95.48까지 오르며 역대 최고치를 경신했습니다 (직전일 코스피는 사상 최대 낙폭인 910포인트 넘게 급락).",
      "통상 VKOSPI가 50~60에 이르면 '투자자들이 이성적 판단을 잃고 투매에 나서는 시스템 리스크의 전조'로, 70~80이면 '정부 부양책도 통하지 않는 통제 불능 패닉 국면'으로 해석됩니다 — 6월 말 수치는 이 상한선마저 넘어선 수준입니다.",
      "2026년 6월 VKOSPI 월평균은 85.42로, 2025년 6월 평균(24.26) 대비 약 3.5배에 달합니다. 2026년 7월 1~3일 평균도 88.12로 여전히 극도로 높은 수준을 유지하고 있습니다.",
      "보도에 따르면 이 기간 코스피 일중 변동성은 1998년 외환위기 이후 최고 수준(일평균 등락률 약 3.3%)으로, 기관은 옵션을 통한 헤지에 나선 반면 개인 투자자는 오히려 레버리지(신용융자 등)를 사상 최고 수준으로 늘리며 단기 베팅에 나선 것으로 나타났습니다.",
    ],
    dataNote:
      "참고: VKOSPI를 매일 자동으로 갱신해주는 무료 공식 API를 찾지 못해, 이 섹션은 실시간 연동 그래프가 아니라 언론 보도로 확인된 특정 시점 수치를 비교한 것입니다. 지속적인 일별 추이가 필요하시면 KRX 정보데이터시스템(data.krx.co.kr)에서 직접 확인하실 수 있습니다.",
    source: "출처: 파이낸셜뉴스 (2026-06-24), 헤럴드경제 (2026-07-06)",
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
  earningsCalendar: {
    eyebrow: "Earnings Calendar",
    title: "Earnings Calendar — TSMC · Micron · NVIDIA",
    intro: "Beyond Samsung, here are the upcoming earnings dates for the other companies most useful for reading the direction of the semiconductor value chain.",
    rows: [
      {
        company: "TSMC",
        date: "Thursday, July 16, 2026",
        conf: "confirmed",
        note: "Investor conference for Q2 results plus Q3 guidance. Commentary on foundry demand and AI chip capacity tends to set the tone for the whole sector.",
      },
      {
        company: "NVIDIA",
        date: "Wednesday, August 26, 2026, after close",
        conf: "confirmed",
        note: "Fiscal Q2 2027 results. Consensus is around $2.07 EPS on $91.7B revenue. Watch for commentary on AI data-center demand and next-gen GPU shipments.",
      },
      {
        company: "Micron",
        date: "Between Sep 22-29, 2026 (unconfirmed)",
        conf: "single",
        note: "Fiscal Q4 2026 results. The exact date hasn't been officially confirmed yet and estimates vary by outlet — check Micron IR again as the date approaches.",
      },
    ],
    source: "Source: TSMC investor conference notice, NVIDIA 8-K filing, Wall Street Horizon/Investing.com earnings calendars (as of 2026-07)",
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
      {
        title: "4. China shifts to 'sustained low-intensity pressure' around Taiwan — the backdrop to TSMC supply-chain risk",
        conf: "single",
        body: "Since June 1, 2026, China's coast guard has maintained continuous patrols in Taiwan's eastern EEZ, with above-average patrol frequency near Pratas Island and Kinmen — analysts read this as a shift from large ADIZ incursions toward a more 'sustainable quasi-blockade' pressure tactic. June ADIZ incursions actually fell to 134 from a prior 300+/month baseline, but China's carrier Fujian transited the Taiwan Strait on June 23 (its third transit since commissioning in Nov 2025). On July 2, China's Taiwan Affairs Office criticized the AIT director for 'publicly complying while privately defying' Trump's Taiwan remarks. Given TSMC produces roughly 90% of the world's advanced chips and about 99% of chips used to train frontier AI models, experts note a coast-guard-style quasi-blockade — not a full invasion — could meaningfully disrupt the chip supply chain.",
      },
      {
        title: "5. Trump-Iran talks resume in Doha — limited progress, but the channel stays open",
        conf: "single",
        body: "On July 2, 2026, US (envoy Steve Witkoff, Jared Kushner) and Iranian (Deputy FM Gharibabadi's technical team) officials met in Doha, mediated by Qatar and Pakistan. Concrete outcomes were limited, covering a dispute-resolution channel for alleged treaty violations and the issue of $6 billion in frozen Iranian assets. Iran's parliament speaker Ghalibaf said IAEA inspectors can access the Bushehr and Tehran reactors but are barred by parliament from the (reportedly bombed) Fordow, Natanz, and Isfahan sites — suggesting the two sides remain well short of full normalization. Because Iran risk is directly tied to oil flows through the Strait of Hormuz, progress or breakdown in these talks can move energy prices immediately.",
      },
    ],
    source: "Source: CNBC (2026-07-01), Al Jazeera (2026-06-01, 2026-07-02), AEI Taiwan Update (2026-07-02), Vision Times (2026-07-07), Congressional Research Service R48642",
  },
  gammaExposure: {
    eyebrow: "Options & Gamma",
    title: "S&P 500 (SPY) Gamma Exposure and Gamma Squeezes",
    intro: "In the options market, dealer (market-maker) hedging behavior can itself influence index volatility. The key concept behind this is Gamma Exposure (GEX).",
    whatIsIt:
      "What GEX is: when an options dealer sells calls/puts to customers, they hedge by buying or selling the underlying stock to stay delta-neutral. When 'gamma' is large — meaning open interest is concentrated near the current price — even a small price move causes a big delta change, forcing larger hedge trades. GEX is an estimate of the aggregate gamma across dealers' market-wide positioning. The chart below shows the shape of an option's gamma — bell-curved, peaking right at the strike and tapering off away from it — since an option's price itself tends to move along the scale of this gamma function.",
    squeezeExplainer:
      "What a gamma squeeze is: in a negative-GEX (short-gamma) regime, dealers must buy as price rises and sell as it falls, which amplifies volatility — once price starts moving in one direction, dealer hedging accelerates that move, causing a 'squeeze.' In a positive-GEX (long-gamma) regime, dealers sell as price rises and buy as it falls, dampening volatility instead. In the chart below, the point where bars flip from negative (red) to positive (green) is the 'zero-gamma flip point' — when spot is below that level, the market tends to be more volatility-prone.",
    caveat:
      "Caveat: dealers' actual positioning (whether they're long or short a given call/put) isn't public data. This chart uses a simplifying convention common across public GEX trackers (call OI = dealer long gamma, put OI = dealer short gamma), so it's an estimate that may differ from real market positioning.",
    spotLabel: "Spot",
    flipLabel: "Gamma flip",
    noData: "No data yet — this will populate once the GitHub Actions workflow runs.",
    source: "Source: live SPY options chain via yfinance (Black-Scholes gamma model)",
    diagram: {
      gammaCurve: "Gamma curve",
      strike: "Strike",
      priceAxis: "Underlying price",
      gammaAxis: "Gamma",
      loopTitle: "The feedback loop behind a gamma squeeze (short-gamma regime)",
      step1: "① Price ticks up slightly",
      step2: "② Dealer delta shifts sharply (high gamma)",
      step3: "③ Dealer buys more to hedge",
      step4: "④ That buying pushes price up further → back to ①",
    },
  },
  fedOutlook: {
    eyebrow: "Fed Outlook",
    title: "Where the Fed Goes From Here — Dollar, M2, Inflation, and Jobs",
    intro:
      "A weaker dollar tends to send money into risk assets, and rising M2 tends to add liquidity to asset markets. Put those alongside the latest inflation and jobs data, and the Fed's dilemma comes into sharp focus.",
    dxyM2Points: [
      { text: "General mechanism: when the dollar (DXY) weakens, US assets become relatively less attractive, and global capital tends to rotate into risk assets — emerging markets, equities, crypto — since the opportunity cost of holding dollar-denominated assets falls.", conf: "single" },
      { text: "Actual case: in early July 2026, DXY traded around 100.7-101.2, near a five-week low, following its largest one-week drop in months after a much-weaker-than-expected June jobs report. Still, over the trailing 12 months DXY remains up more than 3% — this looks more like a short-term wobble than a structural downtrend.", conf: "single" },
      { text: "General mechanism: rising M2 money supply expands system-wide liquidity, and some of that liquidity tends to flow into equities and other asset markets, pushing valuations higher.", conf: "single" },
      { text: "Actual data: M2 stood at roughly $23.05 trillion in May 2026, up from about $22.80 trillion the prior month, and up about 5.6% year-over-year — far more moderate than the 40%+ pandemic-era surge, but still a steady upward drip of liquidity.", conf: "single" },
    ],
    inflationEmploymentPoints: [
      { text: "May 2026 PPI rose 1.1% month-over-month, well above the 0.7% consensus, pushing year-over-year wholesale inflation to 6.5% — the highest since November 2022.", conf: "single" },
      { text: "At the June 17, 2026 FOMC meeting (new Chair Kevin Warsh's first), the Fed held rates at 3.50-3.75% but the dot plot flipped from a prior cut-bias to signaling possible further hikes by year-end — reflecting concern that core inflation is running well above the 2% target.", conf: "single" },
      { text: "Yet the June nonfarm payrolls report that followed showed just +57,000 jobs added, far below the ~110,000 consensus, with May revised sharply down from 172,000 to 129,000. The unemployment rate fell to 4.2%, but only because labor-force participation dropped to 61.5% — closer to a statistical illusion than real improvement.", conf: "single" },
      { text: "In short, the Fed is caught in a textbook dual-mandate bind between hot inflation and cooling employment. Under Chair Warsh, it has leaned hawkish so far, but markets read the jobs slowdown as the bigger signal, pushing the dollar to five-week lows even as the Fed's own guidance pointed the other way — an unusual divergence between Fed guidance and market pricing.", conf: "single" },
    ],
    outlookConclusion:
      "Bottom line: the next CPI (7/14), PPI (7/15), and the July 29 FOMC meeting are the likely tiebreakers. If inflation keeps running hot, the Fed likely stays hawkish, supporting the dollar and pressuring growth-stock valuations (including semis); if July jobs data weakens further, the Fed may shift its emphasis back toward employment, reviving rate-cut expectations in a way that would likely be more favorable for risk assets, semiconductors included. This is an editorial scenario read, not the Fed's actual position.",
    source: "Source: Federal Reserve H.6/FOMC statement (2026-06-17), CNBC PPI coverage (2026-06-11), Vantage Markets/FXStreet jobs coverage (2026-07-02), TradingEconomics",
  },
  employmentTable: {
    eyebrow: "Employment Data",
    title: "Employment Data — Forecast vs. Actual, and Why It Matters",
    intro: "Nonfarm payrolls, the unemployment rate, and initial jobless claims are the three labor-market indicators the Fed watches most closely. Here's how the consensus estimates stacked up against actual results in the most recent releases.",
    tableHeaders: ["Indicator (release date)", "Forecast", "Actual", "Read"],
    rows: [
      { indicator: "Nonfarm Payrolls, June", date: "2026-07-02", forecast: "~+110K", actual: "+57K (May also revised 172K→129K)", verdict: "miss", note: "A big miss. Signals cooling employment and revives rate-cut expectations for later this year." },
      { indicator: "Unemployment Rate, June", date: "2026-07-02", forecast: "~4.3%", actual: "4.2% (participation fell to 61.5%)", verdict: "beat", note: "Looks like an improvement on the surface, but it's driven by people leaving the labor force, not more hiring — closer to a statistical illusion." },
      { indicator: "Initial Jobless Claims, week of 6/27", date: "2026-07-02", forecast: "~220K", actual: "215K (5-week low)", verdict: "beat", note: "Better than expected — read as evidence layoffs aren't yet spreading broadly." },
      { indicator: "Initial Jobless Claims, week of 6/13", date: "2026-06-18", forecast: "~225K", actual: "226K", verdict: "inline", note: "Roughly in line; the 4-week average of 222K points to a gradual softening trend." },
    ],
    whyItMatters:
      "Why it matters: these are the exact indicators behind the 'employment' half of the Fed's dual mandate. A big NFP miss typically raises rate-cut expectations immediately — but the twist right now is that inflation (PPI +6.5%) is simultaneously hot, leaving the Fed in an awkward spot where cutting or holding both carry real tradeoffs. It's also why the drop in unemployment needs a closer look — is it genuine improvement, or just an illusion created by falling participation?",
    source: "Source: Vantage Markets, FXStreet (2026-07-02), Investing.com economic calendar, TradingEconomics",
  },
  midtermElection: {
    eyebrow: "Politics",
    title: "November 2026 Midterms — Polymarket Odds and Asset-Class Scenarios",
    intro: "Per Polymarket, Democrats are favored to take the House, while Republicans hold a narrow edge in the Senate — meaning divided government is currently the single most likely outcome.",
    odds: [
      { label: "Dems win House", value: 84 },
      { label: "GOP wins House", value: 17 },
      { label: "GOP wins Senate", value: 55 },
      { label: "Dems win Senate", value: 46 },
      { label: "Full Dem sweep", value: 43.5 },
      { label: "Divided (GOP Senate + Dem House)", value: 40.5 },
      { label: "GOP retains full control", value: 14.5 },
    ],
    scenarios: [
      { label: "GOP retains full control (least likely, 14.5%)", tone: "buy", description: "Some see this extending a tax-cut/deregulation-friendly stance that would be constructive for risk assets, but it's currently the least likely outcome per Polymarket pricing." },
      { label: "Divided government: GOP Senate + Dem House (40.5%)", tone: "neutral", description: "Major new legislation (further tax cuts, expanded fiscal spending) becomes harder to pass, effectively locking in the status quo — which can reduce policy uncertainty. Divided government has historically coincided with decent equity performance, though whether that holds this cycle is uncertain." },
      { label: "Full Democratic sweep (43.5%, the single most likely outcome)", tone: "sell", description: "A Republican administration facing a Democratic Congress could sharpen standoffs over the budget and debt ceiling and China policy, adding volatility. That said, policies with bipartisan support — like semiconductor export controls — would likely persist regardless of which party controls Congress." },
    ],
    source: "Source: Polymarket 'Balance of Power: 2026 Midterms' and 'Congress' markets (snapshot 2026-07-08)",
  },
  industryConditions: {
    eyebrow: "Industry",
    title: "Semiconductor Industry Conditions — Where Are We in the Cycle?",
    intro: "Micron's earnings surprise, Samsung's record profit, and the sharp jump in memory prices together sketch out where the current semiconductor upcycle stands.",
    points: [
      { text: "Memory upcycle: Micron's fiscal Q3 revenue nearly doubled quarter-over-quarter ($23.86B → $41.46B), and the company said HBM4 is already in high-volume shipment — a clear sign AI data-center memory demand is running well ahead of supply.", conf: "confirmed" },
      { text: "Domestic Korean reporting pegs Samsung's Q2 2026 preliminary operating profit at roughly ₩89.4 trillion, reportedly surpassing Nvidia's and Apple's market caps in the same news cycle — a direct reflection of surging memory prices flowing straight into earnings.", conf: "single" },
      { text: "Some brokerages estimate Q2 DRAM ASPs rose more than 40% quarter-over-quarter, with NAND up into the mid-60% range — though this is single-sourced and the precise figures need further confirmation.", conf: "single" },
      { text: "Risk factor: US export controls on China continue tightening (VEU removal Sep 2025, tariffs Jan 2026, anti-circumvention clarification June 2026), meaning companies with meaningful China exposure carry an ongoing policy overhang.", conf: "confirmed" },
      { text: "Overall read: this looks like the early-to-mid stage of a classic upcycle where AI infrastructure spending is pulling memory prices higher. The two open questions are how long this cycle runs before overbuilt capacity reverses it, and how much further China export controls tighten.", conf: "single" },
    ],
    source: "Source: Micron Technology IR (2026-06), Digital Today (2026-07-06), CNBC, Congressional Research Service R48642",
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
  vkospi: {
    eyebrow: "Volatility",
    title: "VKOSPI — KOSPI Volatility at Record Levels",
    intro:
      "VKOSPI (the KOSPI200 volatility index, Korea's equivalent of the VIX) spiked to an intraday record of 95.48 on June 24, 2026. An index that normally trades around 20 jumped to nearly 5x its usual level — the chart below compares the figures confirmed in this research pass.",
    chart: [
      { label: "Normal level", value: 20, tone: "normal" },
      { label: "Past stress ceiling (approx.)", value: 40, tone: "elevated" },
      { label: "\"Systemic risk precursor\" zone", value: 55, tone: "warning" },
      { label: "Intraday high, Jun 24, 2026", value: 95.48, tone: "extreme" },
      { label: "June 2026 monthly average", value: 85.42, tone: "extreme" },
      { label: "Jul 1-3, 2026 average", value: 88.12, tone: "extreme" },
    ],
    points: [
      "On June 24, 2026, VKOSPI hit an intraday record of 95.48 (the KOSPI had fallen more than 910 points the previous day — its largest single-day drop on record).",
      "VKOSPI in the 50-60 range is typically read as a \"precursor to systemic risk\" where investors lose rational judgment and start dumping positions; 70-80 is read as an \"uncontrollable panic phase\" where even government stimulus fails to work — late June's reading blew past even that upper bound.",
      "VKOSPI's June 2026 monthly average was 85.42, about 3.5x June 2025's average of 24.26. The July 1-3, 2026 average held at an extremely elevated 88.12.",
      "Reporting indicates intraday volatility over this period was the highest since the 1998 Asian financial crisis (average daily swings of about 3.3%), with institutions hedging via options while retail investors instead pushed leveraged margin borrowing to record highs, betting on short-term moves.",
    ],
    dataNote:
      "Note: we couldn't find a free, officially maintained API that updates VKOSPI daily, so this section isn't a live-connected chart — it compares specific, news-verified data points rather than a continuous time series. For an ongoing daily series, check the KRX Information Data System (data.krx.co.kr) directly.",
    source: "Source: Financial News (fnnews.com, 2026-06-24), Herald Corp (2026-07-06)",
  },
  legend: "= cross-verified by 2+ independent sources",
  confirmedLabel: "Confirmed",
  singleLabel: "Single source",
};

export function getResearchContent(locale: "ko" | "en"): ResearchContent {
  return locale === "en" ? en : ko;
}

export type ResearchTopicSlug =
  | "macro-calendar"
  | "earnings-scenario"
  | "micron-readthrough"
  | "earnings-calendar"
  | "macro-watch"
  | "private-credit"
  | "vkospi"
  | "gamma-exposure"
  | "fred-macro"
  | "fed-outlook"
  | "employment-table"
  | "midterm-election"
  | "industry-conditions"
  | "screener"
  | "news";

export type ResearchCategory = "macro" | "earnings" | "industry" | "options" | "politics" | "screener" | "news";

export type ResearchTopic = {
  slug: ResearchTopicSlug;
  category: ResearchCategory;
  eyebrow: string;
  title: string;
  teaser: string;
};

export function getCategoryLabels(locale: "ko" | "en"): Record<ResearchCategory, string> {
  return locale === "en"
    ? {
        macro: "Macro",
        earnings: "Earnings",
        industry: "Industry",
        options: "Options & Volatility",
        politics: "Politics & Geopolitics",
        screener: "Screener",
        news: "News",
      }
    : {
        macro: "매크로",
        earnings: "기업 실적",
        industry: "산업 동향",
        options: "옵션·변동성",
        politics: "정치·지정학",
        screener: "스크리너",
        news: "뉴스",
      };
}

export function getResearchTopics(locale: "ko" | "en"): ResearchTopic[] {
  const c = getResearchContent(locale);
  const isEn = locale === "en";
  return [
    { slug: "macro-calendar", category: "macro", eyebrow: c.macroCalendar.eyebrow, title: c.macroCalendar.title, teaser: c.macroCalendar.intro },
    { slug: "earnings-scenario", category: "earnings", eyebrow: c.earningsScenario.eyebrow, title: c.earningsScenario.title, teaser: c.earningsScenario.intro },
    { slug: "micron-readthrough", category: "earnings", eyebrow: c.readThrough.eyebrow, title: c.readThrough.title, teaser: c.readThrough.intro },
    { slug: "earnings-calendar", category: "earnings", eyebrow: c.earningsCalendar.eyebrow, title: c.earningsCalendar.title, teaser: c.earningsCalendar.intro },
    {
      slug: "macro-watch",
      category: "macro",
      eyebrow: c.macroWatch.eyebrow,
      title: c.macroWatch.title,
      teaser: c.macroWatch.items[0]?.body ?? "",
    },
    { slug: "private-credit", category: "macro", eyebrow: c.privateCredit.eyebrow, title: c.privateCredit.title, teaser: c.privateCredit.intro },
    { slug: "vkospi", category: "macro", eyebrow: c.vkospi.eyebrow, title: c.vkospi.title, teaser: c.vkospi.intro },
    { slug: "gamma-exposure", category: "options", eyebrow: c.gammaExposure.eyebrow, title: c.gammaExposure.title, teaser: c.gammaExposure.intro },
    {
      slug: "fred-macro",
      category: "macro",
      eyebrow: "Macro Data (FRED)",
      title: isEn ? "Live Macro Indicators" : "실시간 매크로 지표",
      teaser: isEn
        ? "CPI, PPI, unemployment, payrolls, and the fed funds rate — live from the St. Louis Fed."
        : "CPI, PPI, 실업률, 고용지표, 연방기금금리를 세인트루이스 연은에서 실시간으로 가져옵니다.",
    },
    { slug: "fed-outlook", category: "macro", eyebrow: c.fedOutlook.eyebrow, title: c.fedOutlook.title, teaser: c.fedOutlook.intro },
    { slug: "employment-table", category: "macro", eyebrow: c.employmentTable.eyebrow, title: c.employmentTable.title, teaser: c.employmentTable.intro },
    { slug: "midterm-election", category: "politics", eyebrow: c.midtermElection.eyebrow, title: c.midtermElection.title, teaser: c.midtermElection.intro },
    { slug: "industry-conditions", category: "industry", eyebrow: c.industryConditions.eyebrow, title: c.industryConditions.title, teaser: c.industryConditions.intro },
    {
      slug: "screener",
      category: "screener",
      eyebrow: isEn ? "Screener" : "스크리너",
      title: isEn ? "Oversold/Overbought Screener" : "과매도/과매수 스크리너",
      teaser: isEn
        ? "All ~65 tracked tickers ranked by 60-day Z-score, live from Hyperliquid price history."
        : "추적 중인 약 65개 종목 전체를 60일 Z-score로 순위 매깁니다 (하이퍼리퀴드 가격 히스토리 기반, 실시간).",
    },
    {
      slug: "news",
      category: "news",
      eyebrow: isEn ? "News" : "뉴스",
      title: isEn ? "Semiconductor & Macro Headlines" : "반도체·매크로 뉴스 헤드라인",
      teaser: isEn
        ? "Recent headlines on semiconductors, AI infrastructure, and macro policy, pulled from Google News."
        : "반도체, AI 인프라, 매크로 정책 관련 최신 헤드라인을 구글 뉴스에서 가져옵니다.",
    },
  ];
}

const TICKER_RESEARCH_MAP: Record<string, ResearchTopicSlug[]> = {
  SMSN: ["earnings-scenario", "macro-calendar", "industry-conditions"],
  SKHX: ["micron-readthrough", "industry-conditions"],
  NVDA: ["gamma-exposure", "industry-conditions"],
  TSM: ["earnings-calendar", "industry-conditions"],
  MU: ["micron-readthrough", "earnings-calendar", "industry-conditions"],
  AVGO: ["industry-conditions"],
  ASML: ["industry-conditions"],
  SMH: ["industry-conditions", "screener"],
  SP500: ["gamma-exposure", "fed-outlook", "midterm-election"],
  DXY: ["fed-outlook"],
  VIX: ["gamma-exposure", "vkospi"],
  KR200: ["vkospi"],
};

export function getRelatedResearch(symbol: string, locale: "ko" | "en"): ResearchTopic[] {
  const slugs = TICKER_RESEARCH_MAP[symbol];
  if (!slugs) return [];
  const topics = getResearchTopics(locale);
  return slugs.map((slug) => topics.find((t) => t.slug === slug)).filter((t): t is ResearchTopic => Boolean(t));
}
