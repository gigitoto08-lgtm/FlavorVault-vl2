export type Lang = "en" | "ar";

const translations: Record<string, Record<Lang, string>> = {
  title: { en: "AiUltraDownloader", ar: "AiUltraDownloader" },
  subtitle: { en: "Smart AI Video Downloader for All Platforms", ar: "أداة ذكية لتحميل الفيديو من جميع المنصات" },
  placeholder: { en: "Paste your video URL here...", ar: "...الصق رابط الفيديو هنا" },
  downloadBtn: { en: "Download Now", ar: "حمّل الآن" },
  instruction: { en: "Paste your video link and download instantly", ar: "الصق رابط الفيديو وحمّل فوراً" },
  analyzing: { en: "Analyzing video...", ar: "...جاري تحليل الفيديو" },
  detecting: { en: "Detecting platform...", ar: "...جاري اكتشاف المنصة" },
  preparing: { en: "Preparing download...", ar: "...جاري تحضير التحميل" },
  recentTitle: { en: "Recent Downloads", ar: "التحميلات الأخيرة" },
  howTitle: { en: "How It Works", ar: "كيف يعمل" },
  step1: { en: "Paste your video link", ar: "الصق رابط الفيديو" },
  step2: { en: "Click Download", ar: "اضغط تحميل" },
  step3: { en: "Get redirected and download", ar: "يتم التوجيه والتحميل" },
  features: { en: "Why Choose AiUltraDownloader", ar: "لماذا AiUltraDownloader" },
  platforms: { en: "Supported Websites", ar: "المواقع المدعومة" },
  faq: { en: "Frequently Asked Questions", ar: "الأسئلة الشائعة" },
  emptyAlert: { en: "Paste a link first", ar: "الصق رابطاً أولاً" },
  invalidAlert: { en: "Invalid link", ar: "رابط غير صالح" },
  copied: { en: "Copied!", ar: "تم النسخ!" },
  premiumMsg: { en: "Use premium download for faster speed", ar: "استخدم التحميل المميز لسرعة أعلى" },
  aiScore: { en: "AI Quality Score", ar: "تقييم الجودة بالذكاء" },
  downloads: { en: "Downloads", ar: "التحميلات" },
  share: { en: "Share", ar: "مشاركة" },
  guide: { en: "Guide", ar: "الدليل" },
  disclaimer: { en: "We do not host any videos. All downloads are processed via external services.", ar: "نحن لا نستضيف أي فيديوهات. جميع التحميلات تتم عبر خدمات خارجية." },
};

export function t(key: string, lang: Lang): string {
  return translations[key]?.[lang] ?? key;
}
