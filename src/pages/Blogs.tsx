import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { blogs } from "@/data/blogs";

const Blogs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-12 border-b border-border">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <p className="text-xs uppercase tracking-widest text-primary mb-4">Blog</p>
          <h1 className="text-4xl md:text-5xl font-semibold text-foreground mb-4">
            Notes on bioinformatics & AI
          </h1>
          <p className="text-base text-muted-foreground max-w-2xl">
            Practical writing on NGS pipelines, machine learning in biology, and the workflows behind reproducible research.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <div className="space-y-6">
            {blogs.map((b) => (
              <article
                key={b.id}
                className="group border border-border rounded-lg p-6 md:p-8 bg-card/30 hover:bg-card/60 hover:border-primary/40 transition-all"
              >
                <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground mb-3">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar size={12} /> {b.date}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock size={12} /> {b.readTime}
                  </span>
                </div>

                <h2 className="text-xl md:text-2xl font-medium text-foreground mb-3 group-hover:text-primary transition-colors">
                  {b.title}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  {b.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {b.tags.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2 py-0.5 rounded bg-secondary/60 text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <Link
                    to={`/blogs/${b.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-primary hover:gap-2.5 transition-all"
                  >
                    Read more <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blogs;