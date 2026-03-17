// localStorage helpers for recent downloads & counter

const RECENT_KEY = "aiud_recent";
const COUNT_KEY = "aiud_count";

export interface RecentDownload {
  url: string;
  platform: string;
  timestamp: number;
}

export function getRecentDownloads(): RecentDownload[] {
  try {
    return JSON.parse(localStorage.getItem(RECENT_KEY) || "[]");
  } catch {
    return [];
  }
}

export function addRecentDownload(item: Omit<RecentDownload, "timestamp">): void {
  const list = getRecentDownloads();
  list.unshift({ ...item, timestamp: Date.now() });
  localStorage.setItem(RECENT_KEY, JSON.stringify(list.slice(0, 5)));
}

export function getDownloadCount(): number {
  return parseInt(localStorage.getItem(COUNT_KEY) || "0", 10);
}

export function incrementDownloadCount(): number {
  const c = getDownloadCount() + 1;
  localStorage.setItem(COUNT_KEY, c.toString());
  return c;
}
