"use client";

import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/i18n";

export default function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const rest = pathname.replace(/^\/(ko|en)/, "") || "/";

  return (
    <div className="flex items-center gap-1 rounded-full border border-zinc-800 p-0.5 text-xs">
      {(["ko", "en"] as const).map((l) => (
        <a
          key={l}
          href={`/${l}${rest}`}
          className={`rounded-full px-2.5 py-1 font-medium transition-colors ${
            l === locale ? "bg-zinc-100 text-zinc-950" : "text-zinc-500 hover:text-zinc-200"
          }`}
        >
          {l.toUpperCase()}
        </a>
      ))}
    </div>
  );
}
