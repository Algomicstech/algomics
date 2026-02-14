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
    <section className="py-24 border-t border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm text-primary uppercase tracking-wide mb-3">Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 tracking-tight">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground text-base max-w-xl mx-auto">
            Trusted by researchers and organizations worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author}
              className="p-6 rounded-lg border border-border bg-background"
            >
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-border pt-4">
                <p className="text-sm font-medium text-foreground">{testimonial.author}</p>
                <p className="text-xs text-primary">{testimonial.role}</p>
                <p className="text-xs text-muted-foreground">{testimonial.organization}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
