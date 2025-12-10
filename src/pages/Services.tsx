import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Dna, Brain, Atom, HeartPulse, BrainCircuit, Code } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { AbstractShapes } from "@/components/shared/AbstractShapes";
import { GlowCard } from "@/components/shared/GlowCard";
import { serviceCategories, getServicesByCategory } from "@/data/services";
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Dna,
  Brain,
  Atom,
  HeartPulse,
  BrainCircuit,
  Code,
};

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden hero-gradient">
        <AbstractShapes variant="hero" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              >
                <span className="text-foreground">Our </span>
                <span className="gradient-text">Services</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-lg md:text-xl text-muted-foreground leading-relaxed"
              >
                Comprehensive bioinformatics solutions from NGS analysis to custom pipeline development. 
                We transform complex biological data into actionable insights.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Services by Category */}
      {serviceCategories.map((category, categoryIndex) => {
        const CategoryIcon = iconMap[category.icon];
        const categoryServices = getServicesByCategory(category.id);

        return (
          <SectionWrapper key={category.id} className={categoryIndex % 2 === 0 ? "" : "section-gradient"}>
            <div className="container mx-auto px-4 lg:px-8">
              {/* Category Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 mb-12"
              >
                <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/10 border border-primary/20">
                  {CategoryIcon && <CategoryIcon className="w-8 h-8 text-primary" />}
                </div>
                <div>
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                    {category.title}
                  </h2>
                  <p className="text-muted-foreground">{category.description}</p>
                </div>
              </motion.div>

              {/* Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryServices.map((service, index) => (
                  <GlowCard key={service.id} delay={index * 0.1}>
                    <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {service.shortDescription}
                    </p>
                    <Link
                      to={`/services/${service.id}`}
                      className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:gap-3 transition-all"
                    >
                      Learn more <ArrowRight size={16} />
                    </Link>
                  </GlowCard>
                ))}
              </div>
            </div>
          </SectionWrapper>
        );
      })}

      <Footer />
    </div>
  );
};

export default Services;
