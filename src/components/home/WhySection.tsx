import { Check, Zap, Shield, Users } from "lucide-react";

const reasons = [
  { icon: Check, title: "Data-Driven Approaches", description: "Every insight is backed by rigorous computational analysis and statistical validation." },
  { icon: Zap, title: "Expertise Across Genomics + ML", description: "Our team combines deep biological knowledge with cutting-edge machine learning expertise." },
  { icon: Shield, title: "Custom Pipeline Development", description: "Tailored solutions designed specifically for your research questions and data types." },
  { icon: Users, title: "Research + Industry Integration", description: "Bridging academic research and industry applications for real-world impact." },
];

export function WhySection() {
  return (
    <section className="py-24 border-t border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 tracking-tight">
              Why <span className="text-primary">Algomics?</span>
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed">
              We believe that even small, data-powered improvements can transform lives.
              Our philosophy drives everything we do.
            </p>
          </div>

          <div className="space-y-8">
            {reasons.map((reason) => (
              <div key={reason.title} className="flex items-start gap-4">
                <div className="p-2 rounded-md bg-secondary text-primary">
                  <reason.icon className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-foreground mb-1">{reason.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
