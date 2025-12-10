import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import networkAbstract from "@/assets/network-abstract.png";

export function CTASection() {
  return (
    <SectionWrapper>
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/20 via-card to-secondary/20 border border-border/50 p-8 lg:p-16"
        >
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img 
              src={networkAbstract} 
              alt="" 
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background" />
          </div>
          
          {/* Background elements */}
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-secondary/10 blur-3xl" />
          
          <div className="relative z-10 text-center max-w-2xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-foreground">Ready to Transform </span>
              <span className="gradient-text">Your Research?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Partner with Algomics to unlock the power of your biological data. 
              Let's discuss how we can help you achieve your research goals.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  <Mail size={20} />
                  Book Consultation
                </Link>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <Link to="/services">
                  View All Services
                  <ArrowRight size={20} />
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
