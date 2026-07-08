export default function GammaSqueezeDiagram({
  labels,
}: {
  labels: {
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
}) {
  // Bell-curve path approximating a call option's gamma profile, peaking at the strike.
  const points: [number, number][] = [];
  for (let i = 0; i <= 60; i++) {
    const x = i / 60; // 0..1
    const centered = (x - 0.5) * 5.2;
    const y = Math.exp((-centered * centered) / 2);
    points.push([40 + x * 320, 150 - y * 110]);
  }
  const pathD = points.map(([x, y], i) => `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`).join(" ");

  return (
    <div className="space-y-6">
      <div>
        <svg viewBox="0 0 400 180" className="w-full" style={{ maxHeight: 220 }}>
          <line x1="40" y1="150" x2="380" y2="150" stroke="var(--border-hover)" strokeWidth="1" />
          <line x1="40" y1="40" x2="40" y2="150" stroke="var(--border-hover)" strokeWidth="1" />
          <path d={pathD} fill="none" stroke="#60a5fa" strokeWidth="2.5" />
          <line x1="200" y1="40" x2="200" y2="150" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="4 4" />
          <text x="200" y="34" textAnchor="middle" fontSize="10" fill="#f59e0b">
            {labels.strike}
          </text>
          <text x="210" y="80" fontSize="10" fill="var(--text-tertiary)">
            {labels.gammaCurve}
          </text>
          <text x="380" y="165" textAnchor="end" fontSize="10" fill="var(--text-muted)">
            {labels.priceAxis}
          </text>
          <text x="10" y="45" fontSize="10" fill="var(--text-muted)" transform="rotate(-90 10 45)">
            {labels.gammaAxis}
          </text>
        </svg>
      </div>

      <div>
        <p className="mb-3 text-sm font-semibold text-[var(--text-primary)]">{labels.loopTitle}</p>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {[labels.step1, labels.step2, labels.step3, labels.step4].map((step, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="flex h-full flex-1 items-center rounded-lg border border-red-500/30 bg-red-500/5 p-2.5 text-center text-xs text-[var(--text-secondary)]">
                {step}
              </div>
              {i < 3 && <span className="hidden text-[var(--text-muted)] sm:block">→</span>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
