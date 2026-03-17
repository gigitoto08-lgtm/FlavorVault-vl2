import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Copy, Check } from "lucide-react";
import { Lang, t } from "@/lib/i18n";
import { isValidUrl, detectPlatform, getRedirectUrl } from "@/lib/redirects";
import { addRecentDownload, incrementDownloadCount, getDownloadCount } from "@/lib/storage";
import ParticleBackground from "./ParticleBackground";
import AILoadingScreen from "./AILoadingScreen";

interface HeroSectionProps {
  lang: Lang;
  onDownloadComplete: () => void;
}

export default function HeroSection({ lang, onDownloadComplete }: HeroSectionProps) {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [count, setCount] = useState(getDownloadCount());
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDownload = () => {
    if (!url.trim()) {
      alert(t("emptyAlert", lang));
      return;
    }
    if (!isValidUrl(url.trim())) {
      alert(t("invalidAlert", lang));
      return;
    }

    const platform = detectPlatform(url.trim());
    const redirectUrl = getRedirectUrl(url.trim());

    addRecentDownload({ url: url.trim(), platform });
    const newCount = incrementDownloadCount();
    setCount(newCount);
    setLoading(true);

    // Show AI loading for 2.5s then redirect
    setTimeout(() => {
      setLoading(false);
      onDownloadComplete();
      window.open(redirectUrl, "_blank");
    }, 2500);
  };

  const handleCopy = () => {
    if (url.trim()) {
      navigator.clipboard.writeText(url.trim());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleDownload();
  };

  if (loading) {
    return <AILoadingScreen lang={lang} url={url} />;
  }

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      <ParticleBackground />

      {/* Ad Banner Top */}
      <div className="z-10 w-full max-w-3xl mb-6">
        <div className="glass-panel p-3 text-center text-xs text-muted-foreground font-mono-func border-dashed">
          ▲ AD SPACE — 728×90 BANNER ▲
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="z-10 text-center space-y-6 max-w-4xl w-full"
        dir={lang === "ar" ? "rtl" : "ltr"}
      >
        <div className="inline-flex items-center gap-2 glass-panel px-4 py-1.5 rounded-full text-xs font-mono-func text-muted-foreground">
          <Sparkles size={12} className="text-primary" />
          {t("aiScore", lang)}: 98%
        </div>

        <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold text-foreground leading-none">
          AiUltra<span className="text-primary glow-text">Downloader</span>
        </h1>

        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
          {t("subtitle", lang)}
        </p>

        {/* URL Input */}
        <form onSubmit={handleSubmit} className="relative group max-w-3xl mx-auto w-full">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/40 to-primary/10 rounded-xl blur-md opacity-30 group-hover:opacity-60 transition duration-1000" />
          <div className="relative flex items-center bg-surface border border-foreground/10 rounded-xl p-2 pl-5 shimmer-border">
            <input
              ref={inputRef}
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder={t("placeholder", lang)}
              className="bg-transparent border-none outline-none text-foreground w-full font-mono-func text-sm placeholder:text-muted-foreground focus:ring-0"
              dir="ltr"
            />
            {url.trim() && (
              <button
                type="button"
                onClick={handleCopy}
                className="p-2 text-muted-foreground hover:text-primary transition-colors mr-1"
                title="Copy"
              >
                {copied ? <Check size={16} className="text-success" /> : <Copy size={16} />}
              </button>
            )}
            <button
              type="submit"
              className="bg-primary hover:brightness-110 text-primary-foreground font-display font-bold px-6 md:px-8 py-3 rounded-lg transition-all active:scale-95 flex items-center gap-2 whitespace-nowrap glow-box"
            >
              {t("downloadBtn", lang)}
              <ArrowRight size={16} />
            </button>
          </div>
        </form>

        <p className="text-xs text-muted-foreground font-mono-func">
          {t("instruction", lang)}
        </p>

        {/* Download counter */}
        <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground font-mono-func">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          {t("downloads", lang)}: {count.toLocaleString()}
        </div>
      </motion.div>

      {/* Ad Banner Middle */}
      <div className="z-10 w-full max-w-3xl mt-8">
        <div className="glass-panel p-3 text-center text-xs text-muted-foreground font-mono-func border-dashed">
          ▲ AD SPACE — 728×90 BANNER ▲
        </div>
      </div>
    </section>
  );
}
