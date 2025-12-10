import { motion } from "framer-motion";
import { Check, Zap, Shield, Users } from "lucide-react";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { AbstractShapes } from "@/components/shared/AbstractShapes";
import molecularAbstract from "@/assets/molecular-abstract.png";

const reasons = [
  {
    icon: Check,
    title: "Data-Driven Approaches",
    description: "Every insight is backed by rigorous computational analysis and statistical validation.",
  },
  {
    icon: Zap,
    title: "Expertise Across Genomics + ML",
    description: "Our team combines deep biological knowledge with cutting-edge machine learning expertise.",
  },
  {
    icon: Shield,
    title: "Custom Pipeline Development",
    description: "Tailored solutions designed specifically for your research questions and data types.",
  },
  {
    icon: Users,
    title: "Research + Industry Integration",
    description: "Bridging academic research and industry applications for real-world impact.",
  },
];

export function WhySection() {
  return (
    <SectionWrapper className="section-gradient">
      <AbstractShapes variant="section" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Abstract Figure with Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Molecular Image */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10"
              >
                <img 
                  src={molecularAbstract} 
                  alt="Molecular visualization" 
                  className="w-full h-full object-contain rounded-2xl"
                />
              </motion.div>
              
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-glow-gold/10 blur-3xl -z-10" />
              
              {/* Floating elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 pointer-events-none"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary/60 shadow-lg shadow-primary/50" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-glow-gold/60 shadow-lg shadow-glow-gold/50" />
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                <span className="text-foreground">Why </span>
                <span className="gradient-text">Algomics?</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                We believe that even small, data-powered improvements can transform lives. 
                Our philosophy drives everything we do.
              </p>
            </motion.div>

            <div className="space-y-6">
              {reasons.map((reason, index) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                    <reason.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground mb-1">
                      {reason.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
