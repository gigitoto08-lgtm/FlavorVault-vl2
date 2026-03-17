import { useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import { Lang } from "@/lib/i18n";
import { getRecentDownloads, RecentDownload } from "@/lib/storage";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import RecentDownloadsComp from "@/components/RecentDownloads";
import GuideSection from "@/components/GuideSection";
import FeaturesSection from "@/components/FeaturesSection";
import PlatformsSection from "@/components/PlatformsSection";
import FAQSection from "@/components/FAQSection";
import SEOContent from "@/components/SEOContent";
import ShareButtons from "@/components/ShareButtons";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  const [lang, setLang] = useState<Lang>("en");
  const [recent, setRecent] = useState<RecentDownload[]>([]);
  const [showPremium, setShowPremium] = useState(false);

  useEffect(() => {
    setRecent(getRecentDownloads());
  }, []);

  const handleDownloadComplete = useCallback(() => {
    setRecent(getRecentDownloads());
    // Show premium popup after first download
    setTimeout(() => setShowPremium(true), 3500);
  }, []);

  const toggleLang = useCallback(() => {
    setLang((l) => (l === "en" ? "ar" : "en"));
  }, []);

  const clearRecent = useCallback(() => {
    localStorage.removeItem("aiud_recent");
    setRecent([]);
  }, []);

  return (
    <div className="min-h-screen bg-background" dir={lang === "ar" ? "rtl" : "ltr"}>
      <Navbar lang={lang} onToggleLang={toggleLang} />

      <HeroSection lang={lang} onDownloadComplete={handleDownloadComplete} />
      <RecentDownloadsComp lang={lang} downloads={recent} onClear={clearRecent} />
      <GuideSection lang={lang} />
      <FeaturesSection lang={lang} />
      <PlatformsSection lang={lang} />
      <SEOContent lang={lang} />
      <FAQSection lang={lang} />
      <ShareButtons lang={lang} />
      <FooterSection lang={lang} />

      {/* Premium popup */}
      {showPremium && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-6 right-6 z-50 glass-panel p-5 max-w-xs glow-box shimmer-border"
        >
          <p className="text-sm text-foreground font-display font-bold mb-2">⚡ Premium Speed</p>
          <p className="text-xs text-muted-foreground mb-3">
            {lang === "ar"
              ? "استخدم التحميل المميز لسرعة أعلى"
              : "Use premium download for faster speed"}
          </p>
          <button
            onClick={() => setShowPremium(false)}
            className="text-xs text-primary hover:underline font-mono-func"
          >
            {lang === "ar" ? "إغلاق" : "Dismiss"}
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default Index;
