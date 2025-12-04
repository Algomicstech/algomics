import { Link } from "react-router-dom";
import { Dna, Database, Brain, HeartPulse, ArrowRight } from "lucide-react";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { GlowCard } from "@/components/shared/GlowCard";
import { AbstractShapes } from "@/components/shared/AbstractShapes";

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
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-foreground">What </span>
            <span className="gradient-text">We Do</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We transform complex biological data into actionable insights that drive healthcare innovation.
          </p>
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
