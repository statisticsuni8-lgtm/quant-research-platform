import type { Metadata } from "next";
import { LOCALES, getDictionary, toLocale } from "@/lib/i18n";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import ThemeToggle from "@/components/ThemeToggle";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = toLocale((await params).locale);
  return locale === "en"
    ? {
        title: "Semiconductor Quant | Research",
        description: "Semiconductor sector Z-score tracker and macro/earnings research hub",
      }
    : {
        title: "Semiconductor Quant | 반도체 퀀트 리서치",
        description: "반도체 섹터 Z-score 트래커 및 매크로/실적 리서치 허브",
      };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const locale = toLocale((await params).locale);
  const t = getDictionary(locale);

  return (
    <>
      <header className="sticky top-0 z-10 border-b border-[var(--border-default)] bg-[var(--bg-header)] backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href={`/${locale}`} className="text-sm font-semibold tracking-tight text-[var(--text-primary)]">
            SEMI<span className="text-emerald-400">QUANT</span>
          </a>
          <div className="flex items-center gap-6">
            <nav className="flex gap-6 text-sm text-[var(--text-tertiary)]">
              <a href={`/${locale}`} className="hover:text-[var(--text-primary)]">
                {t.nav.dashboard}
              </a>
              <a href={`/${locale}/research`} className="hover:text-[var(--text-primary)]">
                {t.nav.research}
              </a>
            </nav>
            <LanguageSwitcher locale={locale} />
            <ThemeToggle />
          </div>
        </div>
      </header>
      <main className="flex flex-1 flex-col">{children}</main>
    </>
  );
}
