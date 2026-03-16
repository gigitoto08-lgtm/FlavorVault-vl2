import { motion } from "framer-motion";
import { Brain, MonitorUp, Globe, Zap, Shield, Cpu } from "lucide-react";

const features = [
  { icon: Brain, title: "AI Link Detection", desc: "Intelligent neural parser identifies video sources from any URL structure." },
  { icon: MonitorUp, title: "Ultra HD Downloads", desc: "Extract up to 8K resolution with HDR and 120fps support." },
  { icon: Globe, title: "1000+ Websites", desc: "YouTube, TikTok, Instagram, Vimeo, Twitter, and hundreds more." },
  { icon: Zap, title: "Fast Extraction", desc: "Optimized extraction engine delivers maximum throughput." },
  { icon: Shield, title: "Secure Downloads", desc: "End-to-end encrypted transfers with zero data retention." },
  { icon: Cpu, title: "Smart Recognition", desc: "Auto-detects platform, quality options, and optimal format." },
];

export default function FeaturesSection() {
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
            Built for <span className="text-primary glow-text">Power Users</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Enterprise-grade extraction with consumer-level simplicity.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="glass-panel-hover p-6 space-y-4"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20">
                <f.icon size={22} className="text-primary" />
              </div>
              <h3 className="font-display font-bold text-foreground">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
