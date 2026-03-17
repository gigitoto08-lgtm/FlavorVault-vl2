import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import { Lang } from "@/lib/i18n";

const navLinks = [
  { label: { en: "Guide", ar: "الدليل" }, href: "#guide" },
  { label: { en: "Features", ar: "المميزات" }, href: "#features" },
  { label: { en: "Platforms", ar: "المنصات" }, href: "#platforms" },
  { label: { en: "FAQ", ar: "الأسئلة" }, href: "#faq" },
];

interface NavbarProps {
  lang: Lang;
  onToggleLang: () => void;
}

export default function Navbar({ lang, onToggleLang }: NavbarProps) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-border/50 backdrop-blur-xl">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <a href="#" className="font-display text-xl font-bold text-foreground">
          AiUltra<span className="text-primary glow-text">Downloader</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              {l.label[lang]}
            </a>
          ))}
          <button
            onClick={onToggleLang}
            className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <Globe size={14} />
            {lang === "en" ? "AR" : "EN"}
          </button>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-panel border-t border-border/50 px-6 pb-6"
          >
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-muted-foreground hover:text-primary transition-colors"
              >
                {l.label[lang]}
              </a>
            ))}
            <button
              onClick={() => { onToggleLang(); setOpen(false); }}
              className="flex items-center gap-1.5 py-3 text-muted-foreground hover:text-primary transition-colors"
            >
              <Globe size={14} />
              {lang === "en" ? "العربية" : "English"}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
