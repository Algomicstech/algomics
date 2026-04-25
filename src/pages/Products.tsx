import { ArrowUpRight, Github } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { products } from "@/data/products";

const Products = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-12 border-b border-border">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <p className="text-xs uppercase tracking-widest text-primary mb-4">Products</p>
          <h1 className="text-4xl md:text-5xl font-semibold text-foreground mb-4">
            Open-source tools & research code
          </h1>
          <p className="text-base text-muted-foreground max-w-2xl">
            A growing collection of bioinformatics and neural-signal projects we build, maintain, and use in our research.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {products.map((p) => (
              <a
                key={p.id}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative border border-border rounded-lg p-6 bg-card/30 hover:bg-card/60 hover:border-primary/40 transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2 rounded-md border border-border bg-background/50">
                    <Github size={18} className="text-foreground" />
                  </div>
                  <ArrowUpRight
                    size={18}
                    className="text-muted-foreground group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
                  />
                </div>

                <h3 className="text-lg font-medium text-foreground mb-1">{p.title}</h3>
                <p className="text-sm text-primary mb-3">{p.tagline}</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  {p.description}
                </p>

                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs px-2 py-0.5 rounded border border-border text-muted-foreground">
                    {p.language}
                  </span>
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-0.5 rounded bg-secondary/60 text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;