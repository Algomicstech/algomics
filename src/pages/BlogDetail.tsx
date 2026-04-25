import { useEffect } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { blogs } from "@/data/blogs";

const BlogDetail = () => {
  const { blogId } = useParams<{ blogId: string }>();
  const blog = blogs.find((b) => b.id === blogId);

  useEffect(() => {
    if (blog) document.title = `${blog.title} — Algomics`;
  }, [blog]);

  if (!blog) return <Navigate to="/blogs" replace />;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <article className="pt-32 pb-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <Link
            to="/blogs"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft size={14} /> All posts
          </Link>

          <div className="flex flex-wrap gap-2 mb-5">
            {blog.tags.map((t) => (
              <span
                key={t}
                className="text-xs px-2 py-0.5 rounded bg-secondary/60 text-muted-foreground"
              >
                {t}
              </span>
            ))}
          </div>

          <h1 className="text-3xl md:text-4xl font-semibold text-foreground leading-tight mb-6">
            {blog.title}
          </h1>

          <div className="flex flex-wrap items-center gap-5 text-xs text-muted-foreground pb-8 mb-8 border-b border-border">
            <span className="inline-flex items-center gap-1.5">
              <User size={12} /> {blog.author}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Calendar size={12} /> {blog.date}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock size={12} /> {blog.readTime}
            </span>
          </div>

          <div className="space-y-6">
            {blog.content.map((para, i) => (
              <p key={i} className="text-base text-muted-foreground leading-relaxed">
                {para}
              </p>
            ))}
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogDetail;