import ResearchSection from "@/components/ResearchSection";

export const metadata = {
  title: "리서치 허브 | Semiconductor Quant",
};

function Source({ children }: { children: React.ReactNode }) {
  return <p className="mt-3 border-t border-zinc-800 pt-2 text-xs text-zinc-600">{children}</p>;
}

function Tag({ tone, children }: { tone: "confirmed" | "single"; children: React.ReactNode }) {
  const style =
    tone === "confirmed"
      ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
      : "border-amber-500/30 bg-amber-500/10 text-amber-400";
  return (
    <span className={`ml-2 rounded-full border px-2 py-0.5 text-[10px] font-medium ${style}`}>
      {children}
    </span>
  );
}

export default function ResearchPage() {
  return (
    <div className="mx-auto w-full max-w-4xl flex-1 px-6 py-10">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-zinc-100">리서치 허브</h1>
        <p className="mt-1 text-sm text-zinc-500">
          매크로 캘린더, 실적 시나리오, 놓치기 쉬운 해외 뉴스를 정리합니다. (2026-07-07 기준)
        </p>
      </div>

      <div className="mb-6 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-300">
        <span className="font-semibold">오늘(7/7) 삼성전자 2분기 잠정실적 발표일입니다.</span>{" "}
        아래 &ldquo;삼성전자 실적 시나리오&rdquo; 섹션에서 컨센서스와 시나리오별 반응을 확인하세요.
      </div>

      <div className="space-y-6">
        <ResearchSection eyebrow="Macro Calendar" title="이달의 CPI/PPI 발표 일정" updated="2026-07-07">
          <p>
            미국 백악관 OMB/OIRA가 공개한 2026년 공식 경제지표 발표 일정 기준입니다.
          </p>
          <ul className="ml-4 list-disc space-y-1">
            <li>
              <span className="text-zinc-100">CPI (6월분)</span> — 2026년 7월 14일(화) 발표
              <Tag tone="confirmed">확인됨</Tag>
            </li>
            <li>
              <span className="text-zinc-100">PPI (6월분)</span> — 2026년 7월 15일(수) 발표
              <Tag tone="confirmed">확인됨</Tag>
            </li>
            <li>
              <span className="text-zinc-100">CPI (7월분)</span> — 2026년 8월 12일(수) 발표
              <Tag tone="confirmed">확인됨</Tag>
            </li>
            <li>
              <span className="text-zinc-100">PPI (7월분)</span> — 2026년 8월 13일(목) 발표
              <Tag tone="confirmed">확인됨</Tag>
            </li>
          </ul>
          <p className="text-zinc-500">
            참고로 다음 FOMC 회의는 7월 29일 종료 예정이라, 7/14 CPI·7/15 PPI 결과가 이 회의의 금리 경로 전망에 직접 영향을 줄 가능성이 큽니다.
          </p>
          <Source>
            출처: White House OMB/OIRA, &ldquo;Schedule of Release Dates for Principal Federal Economic Indicators for 2026&rdquo;
          </Source>
        </ResearchSection>

        <ResearchSection eyebrow="Earnings Scenario" title="삼성전자 실적 발표 시나리오 분석" updated="2026-07-07">
          <p>
            삼성전자 2분기 잠정실적이 <span className="text-zinc-100">오늘(7/7) 발표</span> 예정입니다.
            발표 전 증권사 영업이익 컨센서스는 다음과 같이 넓게 분산돼 있습니다
            <Tag tone="confirmed">확인됨</Tag>.
          </p>
          <ul className="ml-4 list-disc space-y-1 text-zinc-400">
            <li>하나증권 92조원 (최고)</li>
            <li>키움증권 89조원</li>
            <li>유진투자증권 83.1조원</li>
            <li>iM증권 80조원 (최저)</li>
          </ul>
          <div className="mt-4 overflow-x-auto rounded-lg border border-zinc-800">
            <table className="w-full text-left text-xs">
              <thead className="bg-zinc-900 text-zinc-500">
                <tr>
                  <th className="px-3 py-2 font-medium">시나리오</th>
                  <th className="px-3 py-2 font-medium">조건</th>
                  <th className="px-3 py-2 font-medium">예상 시장 반응</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800 text-zinc-300">
                <tr>
                  <td className="px-3 py-2 text-emerald-400">서프라이즈</td>
                  <td className="px-3 py-2">92조원 상회</td>
                  <td className="px-3 py-2">
                    HBM/DRAM 가격 상승 사이클이 예상보다 강하다는 신호 → 반도체 업종 전반 리레이팅, SK하이닉스 동반 강세 가능성
                  </td>
                </tr>
                <tr>
                  <td className="px-3 py-2 text-zinc-300">컨센서스 부합</td>
                  <td className="px-3 py-2">80~92조원</td>
                  <td className="px-3 py-2">
                    이미 컨센서스에 반영된 호실적 → &ldquo;재료 소멸&rdquo; 성격의 단기 차익실현 가능성, 방향성은 확정실적(7월 말) 세부 가이던스에 좌우
                  </td>
                </tr>
                <tr>
                  <td className="px-3 py-2 text-red-400">쇼크(미스)</td>
                  <td className="px-3 py-2">80조원 하회</td>
                  <td className="px-3 py-2">
                    메모리 업황 피크아웃 우려 부각 가능 → 낙폭 확대 리스크, 단 마이크론이 같은 기간 어닝 서프라이즈를 낸 상태라 &ldquo;삼성만의 이슈(수율/믹스)&rdquo;로 국한될지 확인 필요
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-zinc-500">
            이 시나리오 프레임은 편집자 분석이며, 실제 확정실적(통상 7월 말) 컨퍼런스콜에서 나오는 가이던스가 방향성을 최종 결정합니다.
          </p>
          <Source>출처: 디지털투데이, &ldquo;삼성전자 Q2 잠정실적 D-1&rdquo; (2026-07-06)</Source>
        </ResearchSection>

        <ResearchSection eyebrow="Read-Through" title="마이크론 가이던스와 아시아 메모리주 반응" updated="2026-07-07">
          <p>
            마이크론 회계연도 2026 3분기(2026년 5월 28일 마감) 실적이 컨센서스를 크게 상회했습니다
            <Tag tone="confirmed">확인됨</Tag>.
          </p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { label: "매출", value: "$41.46B", sub: "전분기 $23.86B" },
              { label: "GAAP EPS", value: "$24.67", sub: "非GAAP $25.11" },
              { label: "차분기 매출 가이던스", value: "$50.0B ±1B", sub: "非GAAP 마진 ~86%" },
              { label: "차분기 EPS 가이던스", value: "$31.00 ±1", sub: "" },
            ].map((m) => (
              <div key={m.label} className="rounded-lg border border-zinc-800 bg-zinc-950/50 p-3">
                <p className="text-[11px] text-zinc-500">{m.label}</p>
                <p className="text-lg font-semibold text-zinc-100">{m.value}</p>
                {m.sub && <p className="text-[11px] text-zinc-600">{m.sub}</p>}
              </div>
            ))}
          </div>
          <p>
            특히 마이크론은 HBM4가 이미 리드 고객사向 대량 양산 출하 단계에 들어갔다고 밝혔고, HBM4E(1-gamma D램)는 2027년 양산을 목표로 개발 중이라고 언급했습니다
            <Tag tone="confirmed">확인됨</Tag>. 이는 HBM 경쟁 강도가 여전히 높다는 뜻으로, SK하이닉스의 HBM 리더십 방어 여부가 삼성전자보다 오히려 더 민감하게 봐야 할 변수입니다.
          </p>
          <p className="text-zinc-400">
            <span className="text-amber-400">참고(단일 출처, 교차검증 미완료)</span>: 일부 증권사 리포트는 2분기 D램 평균판매단가(ASP)가 전분기 대비 40%대 이상, 낸드는 60%대 중반까지 상승했다고 추정합니다
            <Tag tone="single">단일 출처</Tag>. 마이크론의 대규모 어닝 서프라이즈와 방향이 일치하지만, 정확한 수치는 추가 확인이 필요합니다.
          </p>
          <p className="text-zinc-500">
            읽는 법: 마이크론은 삼성전자·SK하이닉스와 메모리 다운스트림(D램·HBM·낸드)을 공유하는 가장 가까운 비교 기업입니다. 마이크론의 가이던스가 이 정도로 강하게 상향되면, 통상 국내 메모리 업체 실적/가이던스에 대한 눈높이도 함께 올라가는 &ldquo;업황 확인&rdquo; 효과가 있습니다. 다만 종목별 주가 반응은 각 사의 재고/믹스/환율 변수에 따라 달라질 수 있어, 이번 세션에서는 과거 특정 사례의 정확한 주가 변동폭 데이터까지는 검증하지 못했습니다 — 필요하시면 다음 리서치 라운드에서 구체적 사례(날짜별 주가 변동률)를 추가로 조사해드릴 수 있습니다.
          </p>
          <Source>
            출처: Micron Technology Investor Relations, &ldquo;Micron Technology, Inc. Reports Record Results Third Quarter&rdquo; (2026-06)
          </Source>
        </ResearchSection>

        <ResearchSection eyebrow="Macro Watch" title="이달 주의 깊게 볼 해외 매크로 뉴스" updated="2026-07-07">
          <div className="space-y-4">
            <div>
              <p className="text-zinc-100">
                1. 워시 Fed 의장, &ldquo;인플레이션 여전히 높다&rdquo; — 7/29 FOMC 앞두고 매파적 톤
                <Tag tone="single">단일 출처</Tag>
              </p>
              <p className="text-zinc-400">
                2026년 7월 1일 ECB 포럼에서 케빈 워시 Fed 의장이 7월 금리 결정 방향에 대한 확답은 피했지만 인플레이션이 &ldquo;여전히 높다&rdquo;고 언급했습니다. 다음 FOMC는 7월 29일 종료 — 위 CPI(7/14)·PPI(7/15) 결과와 겹쳐 반도체 등 고밸류에이션 성장주에 대한 할인율 부담이 커질 수 있는 구간입니다. 국내에서는 상대적으로 비중있게 다뤄지지 않았습니다.
              </p>
            </div>
            <div>
              <p className="text-zinc-100">
                2. 미국, AI 반도체 수출통제 &ldquo;중국 본사 기업&rdquo; 전체로 확대 적용 명확화
                <Tag tone="confirmed">확인됨</Tag>
              </p>
              <p className="text-zinc-400">
                2026년 6월 1일, 미 상무부 산업안보국(BIS)이 첨단 AI 반도체 수출 라이선스 요건이 중국에 본사를 두거나 중국 기업이 모회사인 경우 자회사의 물리적 소재지와 무관하게 적용된다고 명확히 했습니다. 해외 자회사를 통한 우회 수출 &ldquo;구멍&rdquo;을 막는 조치로, 국내 반도체 업체의 대중 매출/장비 반입 관련 리스크 프레임에 영향을 줄 수 있는 사안인데도 국내 보도는 제한적이었습니다.
              </p>
            </div>
            <div>
              <p className="text-zinc-100">
                3. 배경: 한국 반도체 기업의 중국 內 사업 관련 수출통제 강화 흐름
                <Tag tone="confirmed">확인됨</Tag>
              </p>
              <p className="text-zinc-400">
                2025년 9월 BIS는 삼성전자·SK하이닉스의 중국 내 지정 사업장을 Validated End-User(VEU) 프로그램에서 제외했고, 이는 2025년 12월 31일부로 발효되었습니다. 이제 두 회사는 중국 공장에 장비/기술을 반입할 때 포괄승인이 아닌 건별 수출허가를 받아야 합니다. 또한 2026년 1월 14일에는 특정 반도체 품목에 25% 관세가 부과된 바 있습니다. 최근 뉴스는 아니지만, 위 6/1 조치와 함께 놓고 보면 &ldquo;중국향 반도체 사업 리스크가 구조적으로 계속 높아지는 중&rdquo;이라는 큰 그림을 보여줍니다.
              </p>
            </div>
          </div>
          <Source>
            출처: CNBC (2026-07-01), Al Jazeera (2026-06-01), Congressional Research Service R48642
          </Source>
        </ResearchSection>
      </div>

      <p className="mt-8 text-xs text-zinc-600">
        <Tag tone="confirmed">확인됨</Tag> = 2개 이상 독립 소스로 교차검증됨 · <Tag tone="single">단일 출처</Tag> = 한 곳의 소스에서만 확인되어 추가 검증이 필요함
      </p>
    </div>
  );
}
