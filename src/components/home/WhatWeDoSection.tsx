import { Link } from "react-router-dom";
import { Dna, Database, Brain, HeartPulse, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Dna,
    title: "Bioinformatics Research",
    description: "Cutting-edge computational biology and multi-omics pipelines for genomics, transcriptomics, and proteomics analysis.",
    link: "/services",
  },
  {
    icon: Database,
    title: "Data Analysis & Engineering",
    description: "High-performance pipelines for genomics, transcriptomics, and biomedical data with scalable infrastructure.",
    link: "/services",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Advanced prediction models for disease, biomarkers, imaging, and clinical research applications.",
    link: "/services",
  },
  {
    icon: HeartPulse,
    title: "Precision Health Solutions",
    description: "From multi-omics to network modeling, we power personalized medicine and patient-specific treatments.",
    link: "/services",
  },
];

export function WhatWeDoSection() {
  return (
    <section className="relative py-24 border-t border-border">
      <div className="absolute inset-0 dot-grid opacity-20" />
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 tracking-tight">
            What <span className="text-primary">We Do</span>
          </h2>
          <p className="text-muted-foreground text-base">
            We transform complex biological data into actionable insights that drive healthcare innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border rounded-lg overflow-hidden">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-background p-8 hover:bg-secondary/50 transition-colors group"
            >
              <service.icon className="w-5 h-5 text-primary mb-4" />
              <h3 className="text-lg font-medium text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              <Link
                to={service.link}
                className="inline-flex items-center gap-1.5 text-primary text-sm group-hover:gap-2.5 transition-all"
              >
                Learn more <ArrowRight size={14} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
