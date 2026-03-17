import { motion } from "framer-motion";
import { Lang } from "@/lib/i18n";

const contentEn = `AiUltraDownloader is a powerful and modern video downloader that allows users to download videos from multiple platforms in a fast and simple way. Whether you want to download videos from YouTube, TikTok, Instagram, Facebook, Twitter or other video websites, this tool provides a smooth experience without the need for installation.

This free video downloader is designed for users who want a quick and reliable way to download videos online. Simply paste your video link, click the download button, and the system will automatically detect the platform and redirect you to the best available downloader.

One of the biggest advantages of AiUltraDownloader is its ability to support multiple platforms in one place. Instead of searching for different tools, users can rely on a single smart interface that handles everything. The AI-powered detection system recognizes the source platform instantly and routes you to the most reliable external downloader service.

The tool is optimized for speed, simplicity, and accessibility. It works on all devices including mobile phones, tablets, and desktop computers. The clean design and AI-powered experience make it feel modern and easy to use. No registration is required, and there are no hidden fees or subscriptions.

AiUltraDownloader supports downloading videos in various qualities depending on the platform and the external service. From standard definition to 4K and beyond, the platform ensures you get the best possible download experience. The smart redirect system continuously updates to ensure compatibility with the latest platform changes.

If you are looking for a free video downloader that supports all sites, works instantly, and requires no installation, AiUltraDownloader is the perfect solution. Start downloading your favorite videos today with just one click.`;

const contentAr = `AiUltraDownloader هو أداة تحميل فيديو حديثة وقوية تتيح للمستخدمين تحميل الفيديوهات من منصات متعددة بطريقة سريعة وبسيطة. سواء كنت تريد تحميل فيديوهات من يوتيوب، تيك توك، إنستاغرام، فيسبوك، تويتر أو مواقع فيديو أخرى، هذه الأداة توفر تجربة سلسة دون الحاجة لأي تثبيت.

هذا المحمّل المجاني مصمم للمستخدمين الذين يريدون طريقة سريعة وموثوقة لتحميل الفيديوهات أونلاين. ببساطة الصق رابط الفيديو، اضغط زر التحميل، والنظام سيكتشف المنصة تلقائياً ويوجهك لأفضل أداة تحميل متاحة.

إحدى أكبر مميزات AiUltraDownloader هي قدرته على دعم منصات متعددة في مكان واحد. بدلاً من البحث عن أدوات مختلفة، يمكن للمستخدمين الاعتماد على واجهة ذكية واحدة تتعامل مع كل شيء.`;

export default function SEOContent({ lang }: { lang: Lang }) {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8">
            {lang === "ar" ? "حول AiUltraDownloader" : "Download Videos from Any Platform"}
          </h2>
          <div className="text-sm text-muted-foreground leading-relaxed space-y-4" dir={lang === "ar" ? "rtl" : "ltr"}>
            {(lang === "ar" ? contentAr : contentEn).split("\n\n").map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
