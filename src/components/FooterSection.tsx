import { Lang, t } from "@/lib/i18n";

export default function FooterSection({ lang }: { lang: Lang }) {
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="container mx-auto max-w-5xl">
        {/* Ad Banner Bottom */}
        <div className="glass-panel p-3 text-center text-xs text-muted-foreground font-mono-func border-dashed mb-10">
          ▲ AD SPACE — 728×90 BANNER ▲
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <h4 className="font-display font-bold text-foreground">
              AiUltra<span className="text-primary">Downloader</span>
            </h4>
            <p className="text-sm text-muted-foreground">
              {lang === "ar"
                ? "أداة ذكية لتحميل الفيديو من جميع المنصات"
                : "Smart AI Video Downloader for All Platforms"}
            </p>
          </div>
          {[
            { title: "Product", links: ["Features", "Platforms", "Guide", "FAQ"] },
            { title: "Legal", links: ["Privacy Policy", "Terms of Service", "DMCA", "Contact"] },
            { title: "Support", links: ["Help Center", "Report Bug", "Feedback"] },
          ].map((col) => (
            <div key={col.title} className="space-y-3">
              <h4 className="font-display font-bold text-foreground text-sm">{col.title}</h4>
              {col.links.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>
        <div className="mt-12 pt-6 border-t border-border text-center space-y-2">
          <p className="text-xs text-muted-foreground font-mono-func">
            © 2026 AiUltraDownloader. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground/60 font-mono-func max-w-xl mx-auto">
            {t("disclaimer", lang)}
          </p>
        </div>
      </div>
    </footer>
  );
}
