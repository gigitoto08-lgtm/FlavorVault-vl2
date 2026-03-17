// Smart redirect mapping: detect platform from URL and redirect to best downloader

interface RedirectRule {
  patterns: string[];
  url: string;
  name: string;
}

const rules: RedirectRule[] = [
  { patterns: ["youtube.com", "youtu.be"], url: "https://www.y2mate.is/youtube/", name: "YouTube" },
  { patterns: ["tiktok.com"], url: "https://snaptik.app/", name: "TikTok" },
  { patterns: ["instagram.com"], url: "https://igram.world/", name: "Instagram" },
  { patterns: ["twitter.com", "x.com"], url: "https://twittervideodownloader.com/", name: "Twitter/X" },
  { patterns: ["facebook.com", "fb.watch"], url: "https://fdown.net/", name: "Facebook" },
  { patterns: ["xvideos", "xfree", "porn", "xnxx", "xhamster", "redtube"], url: "https://www.tubeoffline.com/", name: "Video Site" },
];

const FALLBACK_URL = "https://www.tubeoffline.com/";

export function detectPlatform(url: string): string {
  const lower = url.toLowerCase();
  for (const rule of rules) {
    if (rule.patterns.some((p) => lower.includes(p))) return rule.name;
  }
  return "Unknown";
}

export function getRedirectUrl(url: string): string {
  const lower = url.toLowerCase();
  for (const rule of rules) {
    if (rule.patterns.some((p) => lower.includes(p))) return rule.url;
  }
  return FALLBACK_URL;
}

export function isValidUrl(str: string): boolean {
  try {
    const u = new URL(str);
    return u.protocol === "http:" || u.protocol === "https:";
  } catch {
    return false;
  }
}
