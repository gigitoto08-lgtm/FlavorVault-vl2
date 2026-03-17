import { motion } from "framer-motion";
import { Lang, t } from "@/lib/i18n";

const faqs = [
  {
    q: { en: "How to download videos?", ar: "كيف أحمل الفيديو؟" },
    a: { en: "Paste your link and click download. The system will automatically redirect you to the best downloader.", ar: "الصق الرابط واضغط تحميل. النظام سيوجهك تلقائياً لأفضل أداة تحميل." },
  },
  {
    q: { en: "Is AiUltraDownloader free?", ar: "هل AiUltraDownloader مجاني؟" },
    a: { en: "Yes, it is completely free to use.", ar: "نعم، مجاني بالكامل." },
  },
  {
    q: { en: "Does it support all websites?", ar: "هل يدعم جميع المواقع؟" },
    a: { en: "It supports most popular platforms via smart redirection including YouTube, TikTok, Instagram, Facebook, Twitter and many more.", ar: "يدعم أشهر المنصات عبر التوجيه الذكي مثل يوتيوب، تيك توك، إنستاغرام، فيسبوك، تويتر والمزيد." },
  },
  {
    q: { en: "Is it safe?", ar: "هل هو آمن؟" },
    a: { en: "Yes, no installation is required. Everything works directly in your browser.", ar: "نعم، لا يحتاج تثبيت. كل شيء يعمل في المتصفح مباشرة." },
  },
  {
    q: { en: "Do I need to install anything?", ar: "هل أحتاج تثبيت شيء؟" },
    a: { en: "No, everything works online. Just paste your link and download.", ar: "لا، كل شيء يعمل أونلاين. فقط الصق الرابط وحمّل." },
  },
];

export default function FAQSection({ lang }: { lang: Lang }) {
  return (
    <section id="faq" className="py-24 px-6">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            {t("faq", lang)}
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.details
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-panel-hover p-5 group cursor-pointer"
            >
              <summary className="font-display font-bold text-foreground list-none flex items-center justify-between">
                {faq.q[lang]}
                <span className="text-primary transition-transform group-open:rotate-45 text-xl">+</span>
              </summary>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                {faq.a[lang]}
              </p>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
}
