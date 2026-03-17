import { Lang, t } from "@/lib/i18n";

export default function ShareButtons({ lang }: { lang: Lang }) {
  const shareUrl = encodeURIComponent("https://aiultradownloader.com");
  const shareText = encodeURIComponent("Check out AiUltraDownloader - Smart AI Video Downloader for All Platforms!");

  return (
    <section className="py-12 px-6">
      <div className="container mx-auto max-w-3xl text-center">
        <p className="text-sm text-muted-foreground mb-4 font-mono-func">{t("share", lang)}</p>
        <div className="flex items-center justify-center gap-3">
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-panel px-5 py-2.5 text-sm text-muted-foreground hover:text-primary transition-colors font-mono-func"
          >
            Facebook
          </a>
          <a
            href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-panel px-5 py-2.5 text-sm text-muted-foreground hover:text-primary transition-colors font-mono-func"
          >
            Twitter
          </a>
          <a
            href={`https://wa.me/?text=${shareText}%20${shareUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-panel px-5 py-2.5 text-sm text-muted-foreground hover:text-primary transition-colors font-mono-func"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
