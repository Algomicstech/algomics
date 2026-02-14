import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const metrics = [
  { value: "50+", label: "Bioinformatics Analyses" },
  { value: "10+", label: "Research Collaborations" },
  { value: "100M+", label: "Datapoints Analyzed" },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 dot-grid opacity-40" />
      <div className="hero-glow" />
      <div className="hero-glow-left" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm text-primary tracking-wide uppercase mb-6"
          >
            Precision Health Solutions
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6 tracking-tight"
          >
            <span className="text-primary">Algomics</span>
            <br />
            Turning Data Into
            <br />
            1% Better Healthcare
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-xl mx-auto mb-10 leading-relaxed"
          >
            We decode biology using advanced bioinformatics, data science, and
            AI-driven precision health solutions to unlock hidden patterns in biological data.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center justify-center gap-4 mb-20"
          >
            <Link
              to="/services"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-all"
            >
              Explore Services
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-border text-sm font-medium text-foreground hover:bg-secondary transition-colors"
            >
              Contact Us
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-xl mx-auto">
            {metrics.map((metric, i) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl font-semibold text-primary mb-1">
                  {metric.value}
                </div>
                <div className="text-xs text-muted-foreground uppercase tracking-wide">
                  {metric.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
