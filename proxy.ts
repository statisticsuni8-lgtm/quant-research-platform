import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const LOCALES = ["ko", "en"] as const;
const DEFAULT_LOCALE = "ko";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocale = LOCALES.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );
  if (hasLocale) return NextResponse.next();

  const acceptLanguage = request.headers.get("accept-language") ?? "";
  const preferred = acceptLanguage.toLowerCase().startsWith("en") ? "en" : DEFAULT_LOCALE;

  return NextResponse.redirect(new URL(`/${preferred}${pathname}`, request.url));
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|ico)$).*)"],
};
