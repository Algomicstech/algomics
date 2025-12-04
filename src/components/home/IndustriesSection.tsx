import { motion } from "framer-motion";
import { GraduationCap, Microscope, Pill, Cpu, Building2 } from "lucide-react";
import { SectionWrapper } from "@/components/shared/SectionWrapper";

const industries = [
  {
    icon: GraduationCap,
    title: "Academia & Research",
    description: "Supporting research institutions with advanced bioinformatics pipelines",
  },
  {
    icon: Microscope,
    title: "Diagnostics & Biotech",
    description: "Enabling precision diagnostics through genomic analysis",
  },
  {
    icon: Pill,
    title: "Pharma & Drug Discovery",
    description: "Accelerating drug development with computational insights",
  },
  {
    icon: Cpu,
    title: "Healthcare AI Startups",
    description: "Powering next-gen health tech with ML solutions",
  },
  {
    icon: Building2,
    title: "Hospitals & Labs",
    description: "Clinical data analytics for better patient outcomes",
  },
];

export function IndustriesSection() {
  return (
    <SectionWrapper>
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-foreground">Industries </span>
            <span className="gradient-text">We Serve</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From academia to industry, we partner with organizations pushing the boundaries of healthcare.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="group relative p-6 rounded-2xl bg-card/30 border border-border/50 text-center hover:border-primary/30 hover:bg-card/50 transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="inline-flex p-3 rounded-xl bg-primary/10 text-primary mb-4 group-hover:bg-primary/20 transition-colors">
                  <industry.icon className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-semibold text-foreground text-sm lg:text-base mb-2">
                  {industry.title}
                </h3>
                <p className="text-muted-foreground text-xs lg:text-sm leading-relaxed">
                  {industry.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
