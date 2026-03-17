import { motion } from "framer-motion";
import { Link2, MousePointerClick, ExternalLink } from "lucide-react";
import { Lang, t } from "@/lib/i18n";

const steps = [
  { icon: Link2, key: "step1" as const },
  { icon: MousePointerClick, key: "step2" as const },
  { icon: ExternalLink, key: "step3" as const },
];

export default function GuideSection({ lang }: { lang: Lang }) {
  return (
    <section id="guide" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            {t("howTitle", lang)}
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="glass-panel-hover p-8 text-center space-y-4"
            >
              <div className="w-14 h-14 mx-auto rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
                <s.icon size={24} className="text-primary" />
              </div>
              <div className="font-mono-func text-xs text-primary/60">STEP {i + 1}</div>
              <p className="font-display font-bold text-foreground">{t(s.key, lang)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
