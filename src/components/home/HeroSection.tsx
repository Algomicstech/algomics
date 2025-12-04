import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Database, Brain, Dna } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AbstractShapes } from "@/components/shared/AbstractShapes";

const metrics = [
  { value: "50+", label: "Bioinformatics Analyses" },
  { value: "10+", label: "Research Collaborations" },
  { value: "100M+", label: "Datapoints Analyzed" },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
      <AbstractShapes variant="hero" />
      
      <div className="container mx-auto px-4 lg:px-8 pt-24 pb-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8"
          >
            <Dna size={16} />
            <span>Precision Health Solutions</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6"
          >
            <span className="text-foreground">Algomics — </span>
            <span className="gradient-text">Turning Data Into</span>
            <br />
            <span className="text-foreground">1% Better Healthcare</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            We decode biology using advanced bioinformatics, data science, and 
            AI-driven precision health solutions to unlock hidden patterns in biological data.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Button variant="hero" size="xl" asChild>
              <Link to="/services">
                Explore Services
                <ArrowRight size={20} />
              </Link>
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </motion.div>

          {/* Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto"
          >
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="relative p-6 rounded-xl bg-card/30 backdrop-blur-sm border border-border/30 group hover:border-primary/30 transition-colors"
              >
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="font-heading text-3xl md:text-4xl font-bold text-primary glow-text mb-1">
                    {metric.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{metric.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Floating icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="hidden lg:block"
        >
          <div className="absolute left-[10%] top-1/3 p-4 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 animate-float">
            <Database className="w-8 h-8 text-primary" />
          </div>
          <div className="absolute right-[10%] top-1/2 p-4 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 animate-float-delayed">
            <Brain className="w-8 h-8 text-secondary" />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-primary"
          />
        </div>
      </motion.div>
    </section>
  );
}
