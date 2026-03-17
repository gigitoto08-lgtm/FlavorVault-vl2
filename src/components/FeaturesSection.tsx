import { motion } from "framer-motion";
import { Brain, Globe, Zap, Shield, Cpu, Smartphone } from "lucide-react";
import { Lang, t } from "@/lib/i18n";

const features = [
  { icon: Brain, title: "AI Link Detection", titleAr: "اكتشاف ذكي للروابط", desc: "Instantly identifies video sources from any URL.", descAr: "يتعرف على مصادر الفيديو فوراً من أي رابط." },
  { icon: Globe, title: "1000+ Websites", titleAr: "أكثر من 1000 موقع", desc: "YouTube, TikTok, Instagram, Facebook, Twitter and more.", descAr: "يوتيوب، تيك توك، إنستاغرام، فيسبوك، تويتر والمزيد." },
  { icon: Zap, title: "Instant Redirect", titleAr: "توجيه فوري", desc: "Smart redirect to the best downloader for each platform.", descAr: "توجيه ذكي لأفضل أداة تحميل لكل منصة." },
  { icon: Shield, title: "Safe & Free", titleAr: "آمن ومجاني", desc: "No installation required. Works entirely in your browser.", descAr: "لا يحتاج تثبيت. يعمل بالكامل في المتصفح." },
  { icon: Cpu, title: "Smart Recognition", titleAr: "تعرف ذكي", desc: "Auto-detects platform and chooses optimal downloader.", descAr: "يتعرف تلقائياً على المنصة ويختار أفضل أداة." },
  { icon: Smartphone, title: "Mobile Friendly", titleAr: "متوافق مع الجوال", desc: "Fully responsive design works on all devices.", descAr: "تصميم متجاوب يعمل على جميع الأجهزة." },
];

export default function FeaturesSection({ lang }: { lang: Lang }) {
  return (
    <section id="features" className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            {t("features", lang)}
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="glass-panel-hover p-6 space-y-4"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20">
                <f.icon size={22} className="text-primary" />
              </div>
              <h3 className="font-display font-bold text-foreground">
                {lang === "ar" ? f.titleAr : f.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {lang === "ar" ? f.descAr : f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
