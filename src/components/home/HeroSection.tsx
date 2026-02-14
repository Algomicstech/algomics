import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const metrics = [
  { value: "50+", label: "Bioinformatics Analyses" },
  { value: "10+", label: "Research Collaborations" },
  { value: "100M+", label: "Datapoints Analyzed" },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm text-primary tracking-wide uppercase mb-6">
            Precision Health Solutions
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6 tracking-tight">
            <span className="text-primary">Algomics</span>
            <br />
            Turning Data Into
            <br />
            1% Better Healthcare
          </h1>

          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            We decode biology using advanced bioinformatics, data science, and
            AI-driven precision health solutions to unlock hidden patterns in biological data.
          </p>

          <div className="flex items-center justify-center gap-4 mb-20">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              Explore Services
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-border text-sm font-medium text-foreground hover:bg-secondary transition-colors"
            >
              Contact Us
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-xl mx-auto">
            {metrics.map((metric) => (
              <div key={metric.label} className="text-center">
                <div className="text-3xl font-semibold text-primary mb-1">
                  {metric.value}
                </div>
                <div className="text-xs text-muted-foreground uppercase tracking-wide">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
