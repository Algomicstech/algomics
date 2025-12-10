import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Dna, Database, Brain, HeartPulse, ArrowRight } from "lucide-react";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { GlowCard } from "@/components/shared/GlowCard";
import { AbstractShapes } from "@/components/shared/AbstractShapes";
import dnaAbstract from "@/assets/dna-abstract.png";

const services = [
  {
    icon: Dna,
    title: "Bioinformatics Research",
    description: "Cutting-edge computational biology and multi-omics pipelines for genomics, transcriptomics, and proteomics analysis.",
    link: "/services",
    color: "primary" as const,
  },
  {
    icon: Database,
    title: "Data Analysis & Engineering",
    description: "High-performance pipelines for genomics, transcriptomics, and biomedical data with scalable infrastructure.",
    link: "/services",
    color: "teal" as const,
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Advanced prediction models for disease, biomarkers, imaging, and clinical research applications.",
    link: "/services",
    color: "secondary" as const,
  },
  {
    icon: HeartPulse,
    title: "Precision Health Solutions",
    description: "From multi-omics to network modeling, we power personalized medicine and patient-specific treatments.",
    link: "/services",
    color: "primary" as const,
  },
];

export function WhatWeDoSection() {
  return (
    <SectionWrapper className="section-gradient">
      <AbstractShapes variant="section" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header with Image */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="text-left">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-foreground">What </span>
              <span className="gradient-text">We Do</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              We transform complex biological data into actionable insights that drive healthcare innovation.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative hidden lg:block"
          >
            <motion.img 
              src={dnaAbstract} 
              alt="DNA visualization" 
              className="w-full max-w-sm mx-auto rounded-2xl"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background pointer-events-none" />
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <GlowCard key={service.title} glowColor={service.color} delay={index * 0.1}>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/10 border border-primary/20">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <Link
                    to={service.link}
                    className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:gap-3 transition-all"
                  >
                    Learn more <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
