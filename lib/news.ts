export type NewsItem = {
  title: string;
  link: string;
  source: string;
  pubDate: string;
};

function decodeEntities(text: string): string {
  return text
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, " ");
}

function extractTag(xml: string, tag: string): string {
  const match = xml.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`));
  if (!match) return "";
  return decodeEntities(match[1].replace(/^<!\[CDATA\[/, "").replace(/\]\]>$/, "")).trim();
}

async function fetchGoogleNewsRss(query: string, locale: "ko" | "en"): Promise<NewsItem[]> {
  const params =
    locale === "ko" ? "hl=ko&gl=KR&ceid=KR:ko" : "hl=en-US&gl=US&ceid=US:en";
  const url = `https://news.google.com/rss/search?q=${encodeURIComponent(query)}&${params}`;

  const res = await fetch(url, {
    headers: { "User-Agent": "Mozilla/5.0 (compatible; SemiQuantBot/1.0)" },
    next: { revalidate: 900 },
  });
  if (!res.ok) throw new Error(`Google News RSS request failed: ${res.status}`);
  const xml = await res.text();

  const items = xml.match(/<item>[\s\S]*?<\/item>/g) ?? [];
  return items.map((item) => ({
    title: extractTag(item, "title"),
    link: extractTag(item, "link"),
    source: extractTag(item, "source"),
    pubDate: extractTag(item, "pubDate"),
  }));
}

export async function getNewsHeadlines(locale: "ko" | "en", queries: string[], limitPerQuery = 8): Promise<NewsItem[]> {
  const results = await Promise.all(
    queries.map((q) => fetchGoogleNewsRss(q, locale).catch(() => []))
  );
  const seen = new Set<string>();
  const merged: NewsItem[] = [];
  for (const list of results) {
    for (const item of list.slice(0, limitPerQuery)) {
      if (seen.has(item.title)) continue;
      seen.add(item.title);
      merged.push(item);
    }
  }
  merged.sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime());
  return merged;
}
