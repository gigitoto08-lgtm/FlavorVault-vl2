import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import ParticleBackground from "./ParticleBackground";

interface HeroSectionProps {
  onAnalyze: (url: string) => void;
  isAnalyzing: boolean;
}

export default function HeroSection({ onAnalyze, isAnalyzing }: HeroSectionProps) {
  const [url, setUrl] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (url.trim()) onAnalyze(url.trim());
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      <ParticleBackground />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="z-10 text-center space-y-8 max-w-4xl"
      >
        <div className="inline-flex items-center gap-2 glass-panel px-4 py-1.5 rounded-full text-xs font-mono-func text-muted-foreground">
          <Zap size={12} className="text-primary" />
          NEURAL VIDEO EXTRACTION ENGINE v2.0
        </div>

        <h1 className="font-display text-5xl sm:text-6xl md:text-8xl font-bold text-foreground leading-none">
          AiUltra<span className="text-primary glow-text">DL</span>
        </h1>

        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
          Neural-link video extraction. 1000+ sources. Zero friction.
        </p>

        {/* The Link Chamber */}
        <form onSubmit={handleSubmit} className="relative group max-w-3xl mx-auto w-full">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-orange-900 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000" />
          <div className="relative flex items-center bg-surface border border-foreground/10 rounded-lg p-2 pl-6">
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Paste video URL here..."
              className="bg-transparent border-none outline-none text-foreground w-full font-mono-func text-sm placeholder:text-muted-foreground focus:ring-0"
              disabled={isAnalyzing}
            />
            <button
              type="submit"
              disabled={isAnalyzing || !url.trim()}
              className="bg-primary hover:brightness-110 text-primary-foreground font-display font-bold px-6 md:px-8 py-3 rounded-md transition-all active:scale-95 flex items-center gap-2 whitespace-nowrap disabled:opacity-50"
            >
              {isAnalyzing ? "SCANNING..." : "ANALYZE"}
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Scan line during analysis */}
          {isAnalyzing && (
            <div className="absolute inset-0 rounded-lg overflow-hidden pointer-events-none">
              <div className="absolute left-0 right-0 h-px bg-primary scan-line" />
            </div>
          )}
        </form>

        <p className="text-xs text-muted-foreground font-mono-func">
          YouTube · TikTok · Instagram · Twitter · Vimeo · 1000+ more
        </p>
      </motion.div>
    </section>
  );
}
