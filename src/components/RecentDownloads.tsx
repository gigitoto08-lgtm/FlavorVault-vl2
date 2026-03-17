import { motion } from "framer-motion";
import { Clock, ExternalLink, Trash2 } from "lucide-react";
import { Lang, t } from "@/lib/i18n";
import { RecentDownload } from "@/lib/storage";

interface RecentDownloadsProps {
  lang: Lang;
  downloads: RecentDownload[];
  onClear: () => void;
}

export default function RecentDownloads({ lang, downloads, onClear }: RecentDownloadsProps) {
  if (downloads.length === 0) return null;

  return (
    <section className="py-16 px-6">
      <div className="container mx-auto max-w-3xl">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-display text-xl font-bold text-foreground flex items-center gap-2">
            <Clock size={18} className="text-primary" />
            {t("recentTitle", lang)}
          </h2>
          <button
            onClick={onClear}
            className="text-xs text-muted-foreground hover:text-primary transition-colors font-mono-func flex items-center gap-1"
          >
            <Trash2 size={12} /> Clear
          </button>
        </div>

        <div className="space-y-3">
          {downloads.map((d, i) => (
            <motion.div
              key={d.timestamp}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="glass-panel-hover p-4 flex items-center justify-between gap-4"
            >
              <div className="min-w-0 flex-1">
                <span className="text-xs text-primary font-mono-func">{d.platform}</span>
                <p className="text-sm text-muted-foreground truncate font-mono-func">{d.url}</p>
              </div>
              <div className="flex items-center gap-3 text-xs text-muted-foreground font-mono-func">
                <span>{new Date(d.timestamp).toLocaleDateString()}</span>
                <a
                  href={d.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:brightness-125"
                >
                  <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
