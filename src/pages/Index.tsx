import { useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import VideoAnalyzer from "@/components/VideoAnalyzer";
import HowItWorks from "@/components/HowItWorks";
import FeaturesSection from "@/components/FeaturesSection";
import PricingSection from "@/components/PricingSection";
import PlatformsSection from "@/components/PlatformsSection";
import FooterSection from "@/components/FooterSection";

type AppState = "idle" | "analyzing" | "result";

const Index = () => {
  const [state, setState] = useState<AppState>("idle");
  const [videoUrl, setVideoUrl] = useState("");

  const handleAnalyze = useCallback((url: string) => {
    setVideoUrl(url);
    setState("analyzing");
    // Simulate AI analysis delay
    setTimeout(() => setState("result"), 2500);
  }, []);

  const handleReset = useCallback(() => {
    setState("idle");
    setVideoUrl("");
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <AnimatePresence mode="wait">
        {state === "result" ? (
          <motion.div
            key="result"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pt-24"
          >
            <VideoAnalyzer url={videoUrl} onReset={handleReset} />
          </motion.div>
        ) : (
          <motion.div
            key="hero"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <HeroSection onAnalyze={handleAnalyze} isAnalyzing={state === "analyzing"} />
          </motion.div>
        )}
      </AnimatePresence>

      <HowItWorks />
      <FeaturesSection />
      <PricingSection />
      <PlatformsSection />
      <FooterSection />
    </div>
  );
};

export default Index;
