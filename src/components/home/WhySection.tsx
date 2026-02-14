import { Check, Zap, Shield, Users } from "lucide-react";
import { motion } from "framer-motion";

const reasons = [
  { icon: Check, title: "Data-Driven Approaches", description: "Every insight is backed by rigorous computational analysis and statistical validation." },
  { icon: Zap, title: "Expertise Across Genomics + ML", description: "Our team combines deep biological knowledge with cutting-edge machine learning expertise." },
  { icon: Shield, title: "Custom Pipeline Development", description: "Tailored solutions designed specifically for your research questions and data types." },
  { icon: Users, title: "Research + Industry Integration", description: "Bridging academic research and industry applications for real-world impact." },
];

export function WhySection() {
  return (
    <section className="relative py-24 border-t border-border">
      <div className="absolute inset-0 dot-grid opacity-15" />
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 tracking-tight">
              Why <span className="text-primary">Algomics?</span>
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed">
              We believe that even small, data-powered improvements can transform lives.
              Our philosophy drives everything we do.
            </p>
          </motion.div>

          <div className="space-y-8">
            {reasons.map((reason, i) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-start gap-4 group"
              >
                <div className="p-2 rounded-md bg-secondary text-primary transition-colors group-hover:bg-primary/10">
                  <reason.icon className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-foreground mb-1">{reason.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{reason.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
