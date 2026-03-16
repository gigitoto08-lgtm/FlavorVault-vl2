import { motion } from "framer-motion";
import { Check, X, Zap } from "lucide-react";

const plans = [
  {
    name: "Standard",
    price: "Free",
    sub: "5 extractions / day",
    features: [
      { text: "5 downloads per day", included: true },
      { text: "Up to 1080p quality", included: true },
      { text: "Standard speed", included: true },
      { text: "1000+ platforms", included: true },
      { text: "4K / 8K downloads", included: false },
      { text: "Priority queue", included: false },
    ],
    cta: "GET STARTED",
    highlighted: false,
  },
  {
    name: "Ultra",
    price: "$9",
    sub: "/month · Unlimited",
    features: [
      { text: "Unlimited downloads", included: true },
      { text: "Up to 8K / HDR / 120fps", included: true },
      { text: "Priority speed", included: true },
      { text: "1000+ platforms", included: true },
      { text: "Batch downloads", included: true },
      { text: "Priority queue", included: true },
    ],
    cta: "GO ULTRA",
    highlighted: true,
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Choose Your <span className="text-primary glow-text">Power</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Start free. Upgrade when you need maximum extraction power.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`relative glass-panel p-8 space-y-6 ${
                plan.highlighted ? "border-primary/40 glow-box" : ""
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-display font-bold px-4 py-1 rounded-full flex items-center gap-1">
                  <Zap size={12} /> MOST POPULAR
                </div>
              )}

              <div>
                <h3 className="font-display font-bold text-foreground text-xl">{plan.name}</h3>
                <div className="mt-2">
                  <span className="font-display text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-sm text-muted-foreground ml-1">{plan.sub}</span>
                </div>
              </div>

              <div className="space-y-3">
                {plan.features.map((f) => (
                  <div key={f.text} className="flex items-center gap-3 text-sm">
                    {f.included ? (
                      <Check size={16} className="text-primary flex-shrink-0" />
                    ) : (
                      <X size={16} className="text-muted-foreground/40 flex-shrink-0" />
                    )}
                    <span className={f.included ? "text-foreground" : "text-muted-foreground/40"}>
                      {f.text}
                    </span>
                  </div>
                ))}
              </div>

              <button
                className={`w-full font-display font-bold py-3 rounded-md transition-all active:scale-95 ${
                  plan.highlighted
                    ? "bg-primary text-primary-foreground hover:brightness-110"
                    : "bg-muted text-foreground hover:bg-muted/80"
                }`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
