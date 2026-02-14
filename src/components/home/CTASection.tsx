import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-24 border-t border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
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
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              Book Consultation
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-border text-sm font-medium text-foreground hover:bg-secondary transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
