import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { blogs } from "@/data/blogs";

const Blogs = () => {
  const [featured, ...rest] = blogs;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Editorial header */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="flex items-end justify-between gap-8 border-b border-border pb-8">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-primary mb-3">Journal</p>
              <h1 className="text-5xl md:text-6xl font-semibold text-foreground tracking-tight">
                The Algomics Journal
              </h1>
            </div>
            <p className="hidden md:block text-sm text-muted-foreground max-w-xs text-right">
              Field notes on bioinformatics, machine learning in biology, and the workflows behind reproducible research.
            </p>
          </div>
        </div>
      </section>

      {/* Featured post — large editorial split */}
      {featured && (
        <section className="pb-20">
          <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
            <Link
              to={`/blogs/${featured.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group grid md:grid-cols-12 gap-8 md:gap-12 items-start"
            >
              <div className="md:col-span-4 flex md:flex-col gap-4 md:gap-6 text-xs text-muted-foreground uppercase tracking-widest">
                <span className="text-primary">Featured</span>
                <span>{featured.date}</span>
                <span>{featured.readTime}</span>
              </div>
              <div className="md:col-span-8">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-[1.1] tracking-tight mb-6 group-hover:text-primary transition-colors">
                  {featured.title}
                </h2>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6 max-w-2xl">
                  {featured.excerpt}
                </p>
                <span className="inline-flex items-center gap-2 text-sm text-primary border-b border-primary/40 pb-1 group-hover:gap-3 transition-all">
                  Read the article <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Index list — numbered editorial rows */}
      {rest.length > 0 && (
        <section className="pb-24 border-t border-border">
          <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
            <div className="flex items-center justify-between py-6 border-b border-border">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">More posts</p>
              <p className="text-xs text-muted-foreground">{rest.length.toString().padStart(2, "0")} entries</p>
            </div>

            <ul className="divide-y divide-border">
              {rest.map((b, i) => (
                <li key={b.id}>
                  <Link
                    to={`/blogs/${b.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group grid md:grid-cols-12 gap-4 md:gap-8 items-baseline py-8 md:py-10 hover:bg-secondary/20 -mx-4 px-4 transition-colors"
                  >
                    <div className="md:col-span-1 text-xs text-muted-foreground tabular-nums">
                      {(i + 2).toString().padStart(2, "0")}
                    </div>

                    <div className="md:col-span-2 text-xs uppercase tracking-widest text-muted-foreground">
                      {b.date}
                    </div>

                    <div className="md:col-span-7">
                      <h3 className="text-xl md:text-2xl font-medium text-foreground leading-snug mb-2 group-hover:text-primary transition-colors">
                        {b.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 max-w-xl">
                        {b.excerpt}
                      </p>
                    </div>

                    <div className="md:col-span-2 flex md:justify-end">
                      <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-muted-foreground group-hover:text-primary transition-colors">
                        {b.readTime}
                        <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default Blogs;