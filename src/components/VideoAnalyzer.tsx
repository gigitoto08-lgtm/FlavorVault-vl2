import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, Download, Clock, HardDrive, Monitor, ChevronDown } from "lucide-react";

// Simulated video data
const MOCK_VIDEO = {
  title: "Amazing Nature Documentary - 4K Ultra HD",
  thumbnail: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80",
  duration: "12:34",
  platform: "YouTube",
  formats: [
    { id: "360", quality: "360p", ext: "mp4", filesize: "45 MB", locked: false },
    { id: "480", quality: "480p", ext: "mp4", filesize: "85 MB", locked: false },
    { id: "720", quality: "720p", ext: "mp4", filesize: "180 MB", locked: false },
    { id: "1080", quality: "1080p", ext: "mp4", filesize: "350 MB", locked: false },
    { id: "1440", quality: "1440p", ext: "mp4", filesize: "680 MB", locked: true },
    { id: "4k", quality: "4K", ext: "mp4", filesize: "1.2 GB", locked: true },
    { id: "8k", quality: "8K", ext: "mp4", filesize: "3.5 GB", locked: true },
  ],
};

interface VideoAnalyzerProps {
  url: string;
  onReset: () => void;
}

export default function VideoAnalyzer({ url, onReset }: VideoAnalyzerProps) {
  const [playing, setPlaying] = useState(false);
  const [downloading, setDownloading] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);

  const handleDownload = (formatId: string) => {
    setDownloading(formatId);
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setDownloading(null);
            setProgress(0);
          }, 1000);
          return 100;
        }
        return p + Math.random() * 8;
      });
    }, 200);
  };

  return (
    <motion.section
      initial={{ clipPath: "inset(50% 0 50% 0)" }}
      animate={{ clipPath: "inset(0% 0 0% 0)" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="py-20 px-6"
      id="analyzer"
    >
      <div className="container mx-auto max-w-5xl">
        {/* Status bar */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
            <span className="font-mono-func text-xs text-muted-foreground">
              SOURCE DECODED — {MOCK_VIDEO.platform.toUpperCase()}
            </span>
          </div>
          <button
            onClick={onReset}
            className="text-xs text-muted-foreground hover:text-primary transition-colors font-mono-func"
          >
            NEW SCAN →
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Video Preview */}
          <div className="glass-panel-hover overflow-hidden">
            <div className="relative aspect-video">
              <img
                src={MOCK_VIDEO.thumbnail}
                alt={MOCK_VIDEO.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-background/40 flex items-center justify-center">
                <button
                  onClick={() => setPlaying(!playing)}
                  className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center hover:scale-110 transition-transform glow-box"
                >
                  {playing ? (
                    <Pause className="text-primary-foreground" size={24} />
                  ) : (
                    <Play className="text-primary-foreground ml-1" size={24} />
                  )}
                </button>
              </div>
              {/* Platform badge */}
              <div className="absolute top-3 left-3 glass-panel px-3 py-1 text-xs font-mono-func text-primary">
                {MOCK_VIDEO.platform}
              </div>
            </div>
            <div className="p-4 space-y-2">
              <h3 className="font-display font-bold text-foreground text-lg leading-tight">
                {MOCK_VIDEO.title}
              </h3>
              <div className="flex gap-4 text-xs text-muted-foreground font-mono-func">
                <span className="flex items-center gap-1">
                  <Clock size={12} /> {MOCK_VIDEO.duration}
                </span>
                <span className="flex items-center gap-1">
                  <Monitor size={12} /> {MOCK_VIDEO.platform}
                </span>
              </div>
              <div className="font-mono-func text-xs text-muted-foreground truncate">{url}</div>
            </div>
          </div>

          {/* Format Grid */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-foreground text-sm mb-4 flex items-center gap-2">
              <ChevronDown size={14} className="text-primary" />
              AVAILABLE FORMATS
            </h4>
            {MOCK_VIDEO.formats.map((fmt) => (
              <motion.div
                key={fmt.id}
                whileHover={{ scale: 1.02 }}
                className={`glass-panel-hover p-4 flex items-center justify-between ${
                  fmt.locked ? "opacity-50" : ""
                }`}
              >
                <div className="flex items-center gap-4">
                  <span
                    className={`font-display font-bold text-sm ${
                      fmt.locked ? "text-muted-foreground" : "text-primary"
                    }`}
                  >
                    {fmt.quality}
                  </span>
                  <span className="font-mono-func text-xs text-muted-foreground uppercase">
                    {fmt.ext}
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-mono-func text-xs text-muted-foreground flex items-center gap-1">
                    <HardDrive size={10} /> {fmt.filesize}
                  </span>
                  {fmt.locked ? (
                    <span className="text-xs font-mono-func text-primary/60 border border-primary/20 px-3 py-1 rounded-md">
                      PRO
                    </span>
                  ) : (
                    <button
                      onClick={() => handleDownload(fmt.id)}
                      disabled={downloading !== null}
                      className="bg-primary text-primary-foreground font-display font-bold text-xs px-4 py-2 rounded-md hover:brightness-110 transition-all active:scale-95 flex items-center gap-1.5 disabled:opacity-50"
                    >
                      <Download size={12} />
                      PULL
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Download Progress */}
        <AnimatePresence>
          {downloading && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="mt-8 glass-panel p-6"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono-func text-xs text-muted-foreground">
                  {progress >= 100 ? "EXTRACTION COMPLETE" : "INITIATING EXTRACTION..."}
                </span>
                <span className="font-mono-func text-sm text-primary font-bold">
                  {Math.min(100, Math.round(progress))}%
                </span>
              </div>
              <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-primary rounded-full"
                  style={{ width: `${Math.min(100, progress)}%` }}
                  transition={{ ease: "easeOut" }}
                />
              </div>
              {progress < 100 && (
                <div className="flex justify-between mt-2 text-xs text-muted-foreground font-mono-func">
                  <span>ETA: {Math.max(1, Math.round((100 - progress) / 10))}s</span>
                  <span>Speed: 12.4 MB/s</span>
                </div>
              )}
              {progress >= 100 && (
                <div className="mt-2 text-xs text-success font-mono-func">
                  ✓ File ready for download
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
}
