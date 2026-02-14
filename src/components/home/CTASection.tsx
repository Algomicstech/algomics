import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function CTASection() {
  return (
    <section className="relative py-24 border-t border-border overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-20" />
      {/* Centered glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,hsl(var(--primary)/0.06)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 tracking-tight">
            Ready to Transform Your Research?
          </h2>
          <p className="text-muted-foreground text-base mb-8 leading-relaxed">
            Partner with Algomics to unlock the power of your biological data.
            Let's discuss how we can help you achieve your research goals.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-all"
            >
              Book Consultation
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-border text-sm font-medium text-foreground hover:bg-secondary transition-colors"
            >
              View All Services
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
