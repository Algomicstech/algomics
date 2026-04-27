import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Check, FileText, Upload, Download, MessageSquare } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { AbstractShapes } from "@/components/shared/AbstractShapes";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { GlowCard } from "@/components/shared/GlowCard";
import { ServiceAbstractImage } from "@/components/shared/ServiceAbstractImage";
import { getServiceById, serviceCategories, serviceIconMap } from "@/data/services";
import rnaSeqHeroBg from "@/assets/rna-seq-hero-bg.png";

const workflowIcons = [MessageSquare, Upload, FileText, Download];

const ServiceDetail = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = serviceId ? getServiceById(serviceId) : undefined;

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const category = serviceCategories.find((c) => c.id === service.category);
  const imageType = serviceId ? serviceIconMap[serviceId] || "default" : "default";
  const isRnaSeq = serviceId === "rna-seq" || serviceId === "rna-sequencing" || imageType === "rna";

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden hero-gradient">
        {isRnaSeq && (
          <>
            <div
              className="absolute inset-0 bg-no-repeat opacity-60"
              style={{
                backgroundImage: `url(${rnaSeqHeroBg})`,
                backgroundSize: "cover",
                backgroundPosition: "right 90%",
              }}
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          </>
        )}
        {!isRnaSeq && <AbstractShapes variant="hero" />}
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Back to Services
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-xl">
              {category && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-glow-gold/10 border border-glow-gold/20 text-glow-gold text-sm font-medium mb-4"
                >
                  {category.title}
                </motion.div>
              )}

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              >
                <span className="gradient-text">{service.title}</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8"
              >
                {service.fullDescription}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Button variant="hero" size="xl" asChild>
                  <Link to="/contact">Request This Service</Link>
                </Button>
              </motion.div>
            </div>

            {/* Abstract Image */}
            {!isRnaSeq && <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:flex items-center justify-center"
            >
              <div className="relative w-80 h-80 rounded-3xl bg-card/30 backdrop-blur-sm border border-glow-gold/20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-glow-gold/10 via-transparent to-primary/10" />
                <ServiceAbstractImage type={imageType} className="h-full" />
              </div>
            </motion.div>}
          </div>
        </div>
      </section>

      {/* Features */}
      <SectionWrapper>
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {service.features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex items-center gap-3 p-4 rounded-xl bg-card/30 border border-border/50 hover:border-glow-gold/30 transition-colors"
              >
                <div className="p-1 rounded-full bg-glow-gold/20 text-glow-gold">
                  <Check size={16} />
                </div>
                <span className="text-foreground">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Workflow */}
      <SectionWrapper className="section-gradient">
        <AbstractShapes variant="section" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-12 text-center">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.workflow.map((step, index) => {
              const StepIcon = workflowIcons[index] || MessageSquare;
              return (
                <GlowCard key={step.step} delay={index * 0.1}>
                  <div className="text-center">
                    <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-glow-gold/20 to-secondary/10 mb-4">
                      <StepIcon className="w-8 h-8 text-glow-gold" />
                    </div>
                    <div className="font-heading text-sm text-glow-gold font-semibold mb-2">
                      Step {step.step}
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                  </div>
                </GlowCard>
              );
            })}
          </div>
        </div>
      </SectionWrapper>

      {/* Requirements & Deliverables */}
      <SectionWrapper>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Requirements */}
            <GlowCard>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
                <Upload className="w-5 h-5 text-glow-gold" />
                What We Need From You
              </h3>
              <ul className="space-y-3">
                {service.requirements.map((req, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="p-1 rounded-full bg-glow-gold/20 text-glow-gold mt-0.5">
                      <Check size={12} />
                    </div>
                    <span className="text-muted-foreground text-sm">{req}</span>
                  </li>
                ))}
              </ul>
            </GlowCard>

            {/* Deliverables */}
            <GlowCard>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
                <Download className="w-5 h-5 text-glow-gold" />
                What We Deliver
              </h3>
              <ul className="space-y-3">
                {service.deliverables.map((del, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="p-1 rounded-full bg-glow-gold/20 text-glow-gold mt-0.5">
                      <Check size={12} />
                    </div>
                    <span className="text-muted-foreground text-sm">{del}</span>
                  </li>
                ))}
              </ul>
            </GlowCard>
          </div>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper>
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-glow-gold/20 via-card to-secondary/20 border border-glow-gold/30 p-8 lg:p-12 text-center"
          >
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Contact us to discuss your project requirements and receive a custom quote.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <Link to="/services">View All Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      <Footer />
    </div>
  );
};

export default ServiceDetail;