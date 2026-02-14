import { GraduationCap, Microscope, Pill, Cpu, Building2 } from "lucide-react";
import { motion } from "framer-motion";

const industries = [
  { icon: GraduationCap, title: "Academia & Research", description: "Supporting research institutions with advanced bioinformatics pipelines" },
  { icon: Microscope, title: "Diagnostics & Biotech", description: "Enabling precision diagnostics through genomic analysis" },
  { icon: Pill, title: "Pharma & Drug Discovery", description: "Accelerating drug development with computational insights" },
  { icon: Cpu, title: "Healthcare AI Startups", description: "Powering next-gen health tech with ML solutions" },
  { icon: Building2, title: "Hospitals & Labs", description: "Clinical data analytics for better patient outcomes" },
];

export function IndustriesSection() {
  return (
    <section className="py-24 border-t border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 tracking-tight">
            Industries <span className="text-primary">We Serve</span>
          </h2>
          <p className="text-muted-foreground text-base max-w-xl mx-auto">
            From academia to industry, we partner with organizations pushing the boundaries of healthcare.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {industries.map((industry, i) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="p-6 rounded-lg border border-border bg-background hover:bg-secondary/50 hover:border-primary/20 transition-all text-center group"
            >
              <industry.icon className="w-5 h-5 text-primary mx-auto mb-3 transition-transform group-hover:scale-110" />
              <h3 className="text-sm font-medium text-foreground mb-1">{industry.title}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">{industry.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
