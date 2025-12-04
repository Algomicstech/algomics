import { motion } from "framer-motion";
import { Check, Zap, Shield, Users } from "lucide-react";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { AbstractShapes } from "@/components/shared/AbstractShapes";

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
          {/* Left: Abstract Figure */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Main circle */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-spin-slow" />
              
              {/* Inner circles */}
              <div className="absolute inset-8 rounded-full border border-secondary/20 animate-spin-slow" style={{ animationDirection: 'reverse' }} />
              <div className="absolute inset-16 rounded-full border border-primary/30" />
              
              {/* Center glow */}
              <div className="absolute inset-24 rounded-full bg-gradient-to-br from-primary/30 to-secondary/20 blur-2xl animate-pulse-glow" />
              
              {/* Floating elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary shadow-lg shadow-primary/50" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-secondary shadow-lg shadow-secondary/50" />
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-glow-teal shadow-lg shadow-glow-teal/50" />
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary shadow-lg shadow-primary/50" />
              </motion.div>

              {/* Center content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="font-heading text-5xl lg:text-6xl font-bold gradient-text mb-2">1%</div>
                  <div className="text-muted-foreground text-sm">Better Every Day</div>
                </div>
              </div>
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
