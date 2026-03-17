import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2 } from "lucide-react";
import { Lang, t } from "@/lib/i18n";
import { detectPlatform } from "@/lib/redirects";

interface AILoadingScreenProps {
  lang: Lang;
  url: string;
}

const steps = ["analyzing", "detecting", "preparing"] as const;

export default function AILoadingScreen({ lang, url }: AILoadingScreenProps) {
  const [step, setStep] = useState(0);
  const platform = detectPlatform(url);

  useEffect(() => {
    const t1 = setTimeout(() => setStep(1), 800);
    const t2 = setTimeout(() => setStep(2), 1600);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center gap-8"
    >
      {/* Glow orb */}
      <div className="relative">
        <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center animate-pulse-glow">
          <Loader2 size={40} className="text-primary animate-spin" />
        </div>
        <div className="absolute inset-0 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="space-y-4 text-center" dir={lang === "ar" ? "rtl" : "ltr"}>
        {steps.map((key, i) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, x: -20 }}
            animate={step >= i ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-3 font-mono-func text-sm"
          >
            <span className={`w-2 h-2 rounded-full ${step >= i ? "bg-primary" : "bg-muted"}`} />
            <span className={step >= i ? "text-foreground" : "text-muted-foreground"}>
              {t(key, lang)}
            </span>
            {step === i && <span className="text-primary animate-pulse">●</span>}
          </motion.div>
        ))}
      </div>

      <div className="font-mono-func text-xs text-muted-foreground">
        {platform !== "Unknown" && (
          <span className="text-primary">{platform}</span>
        )}
        {platform !== "Unknown" && " · "}
        <span className="truncate max-w-[200px] inline-block align-bottom">{url}</span>
      </div>
    </motion.div>
  );
}
