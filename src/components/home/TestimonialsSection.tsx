import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { AbstractShapes } from "@/components/shared/AbstractShapes";

const testimonials = [
  {
    quote: "Algomics transformed our research capabilities with their RNA-Seq analysis pipeline. The insights we gained accelerated our drug discovery timeline by months.",
    author: "Dr. Sarah Chen",
    role: "Principal Investigator",
    organization: "BioPharm Research Institute",
  },
  {
    quote: "Their multi-omics integration approach helped us identify novel biomarkers that we would have missed with traditional methods. Exceptional work.",
    author: "Prof. Ahmed Hassan",
    role: "Director of Genomics",
    organization: "University Medical Center",
  },
  {
    quote: "The deep learning models Algomics developed for our medical imaging project achieved clinical-grade accuracy. Truly impressive technical expertise.",
    author: "Dr. Maria Rodriguez",
    role: "Head of AI Research",
    organization: "HealthTech Solutions",
  },
];

export function TestimonialsSection() {
  return (
    <SectionWrapper className="section-gradient">
      <AbstractShapes variant="section" />
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 rounded-full bg-glow-gold/10 border border-glow-gold/20 text-glow-gold text-sm font-medium mb-4"
          >
            Testimonials
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-3xl md:text-4xl font-bold mb-4"
          >
            <span className="text-foreground">What Our </span>
            <span className="gradient-text">Clients Say</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Trusted by researchers and organizations worldwide
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-glow-gold/30 transition-all duration-300 group"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-glow-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10">
                {/* Quote icon */}
                <div className="inline-flex p-3 rounded-xl bg-glow-gold/10 mb-4">
                  <Quote className="w-5 h-5 text-glow-gold" />
                </div>
                
                {/* Quote text */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>
                
                {/* Author */}
                <div className="border-t border-border/50 pt-4">
                  <p className="font-heading font-semibold text-foreground">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-primary">{testimonial.role}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.organization}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}