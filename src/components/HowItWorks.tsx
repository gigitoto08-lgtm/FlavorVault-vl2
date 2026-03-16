import { motion } from "framer-motion";
import { Link2, ScanSearch, Eye, Download } from "lucide-react";

const steps = [
  { icon: Link2, title: "Paste Link", desc: "Drop any video URL into the scanning chamber." },
  { icon: ScanSearch, title: "AI Analysis", desc: "Neural engine decodes source and extracts all formats." },
  { icon: Eye, title: "Preview", desc: "Confirm the video with embedded preview before downloading." },
  { icon: Download, title: "Extract", desc: "Initiate extraction in your chosen quality instantly." },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            How It <span className="text-primary glow-text">Works</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Four steps to neural video extraction.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-panel-hover p-6 text-center space-y-4"
            >
              <div className="w-14 h-14 mx-auto rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20">
                <step.icon size={24} className="text-primary" />
              </div>
              <div className="font-mono-func text-xs text-primary/60">STEP {i + 1}</div>
              <h3 className="font-display font-bold text-foreground">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
