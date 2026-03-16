import { motion } from "framer-motion";

const platforms = [
  "YouTube", "TikTok", "Instagram", "Twitter/X", "Vimeo",
  "Facebook", "Reddit", "Twitch", "Dailymotion", "SoundCloud",
  "Pinterest", "Tumblr", "LinkedIn", "Spotify", "Bandcamp",
  "Bilibili",
];

export default function PlatformsSection() {
  return (
    <section id="platforms" className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            1000+ <span className="text-primary glow-text">Platforms</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Extract from virtually any video source on the internet.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
          {platforms.map((p, i) => (
            <motion.div
              key={p}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              whileHover={{ scale: 1.05, borderColor: "hsl(18 100% 50% / 0.5)" }}
              className="glass-panel px-5 py-2.5 font-mono-func text-sm text-muted-foreground hover:text-primary transition-colors cursor-default"
            >
              {p}
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="glass-panel px-5 py-2.5 font-mono-func text-sm text-primary animate-pulse-glow"
          >
            + 984 more
          </motion.div>
        </div>
      </div>
    </section>
  );
}
