import { motion } from "framer-motion";
import { ArrowRight, Code, Dna, BookOpen, GraduationCap } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { AbstractShapes } from "@/components/shared/AbstractShapes";
import { GlowCard } from "@/components/shared/GlowCard";

const platforms = [
  {
    icon: Code,
    title: "Learn Python Through Biology",
    description: "A beginner-friendly journey into coding for bioinformatics — visualize code, explore DNA data, and build your own bioinformatics tools.",
    features: [
      "Interactive coding lessons",
      "Real biological datasets",
      "Visual code execution",
      "Build bioinformatics tools",
      "No prior coding experience needed",
    ],
    link: "https://preview--bio-code-lab.lovable.app/",
    color: "gold",
  },
];

const upcomingCourses = [
  {
    icon: Dna,
    title: "NGS Data Analysis Fundamentals",
    description: "Master the basics of next-generation sequencing data analysis.",
    status: "Coming Soon",
  },
  {
    icon: BookOpen,
    title: "Machine Learning for Genomics",
    description: "Apply ML techniques to biological data and research.",
    status: "Coming Soon",
  },
  {
    icon: GraduationCap,
    title: "Advanced Bioinformatics Pipeline Development",
    description: "Build scalable, reproducible bioinformatics workflows.",
    status: "Coming Soon",
  },
];

const Learning = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden hero-gradient">
        <AbstractShapes variant="hero" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-glow-gold/10 border border-glow-gold/20 text-glow-gold text-sm font-medium mb-6"
            >
              <GraduationCap size={16} />
              <span>Learning Platform</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              <span className="text-foreground">Learn </span>
              <span className="gradient-text-gold">Bioinformatics</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed"
            >
              Explore our learning platforms and courses designed to help you master 
              bioinformatics, data science, and computational biology.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Featured Platform */}
      <SectionWrapper>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              <span className="text-foreground">Featured </span>
              <span className="gradient-text">Platform</span>
            </h2>
          </div>

          {platforms.map((platform, index) => (
            <motion.div
              key={platform.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="max-w-4xl mx-auto"
            >
              <div className="relative p-8 lg:p-12 rounded-3xl bg-card/50 backdrop-blur-sm border border-glow-gold/30 overflow-hidden group hover:border-glow-gold/50 transition-all duration-300">
                {/* Background glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-glow-gold/10 via-transparent to-primary/5 opacity-50" />
                
                {/* Abstract shape */}
                <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-glow-gold/10 blur-3xl" />
                
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="inline-flex p-4 rounded-2xl bg-glow-gold/20 mb-6">
                      <platform.icon className="w-10 h-10 text-glow-gold" />
                    </div>
                    <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
                      {platform.title}
                    </h3>
                    <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                      {platform.description}
                    </p>
                    <Button variant="hero" size="lg" asChild>
                      <a href={platform.link} target="_blank" rel="noopener noreferrer">
                        Start Learning
                        <ArrowRight size={18} />
                      </a>
                    </Button>
                  </div>
                  
                  <div className="space-y-3">
                    {platform.features.map((feature, i) => (
                      <div 
                        key={i}
                        className="flex items-center gap-3 p-3 rounded-lg bg-background/50 border border-border/50"
                      >
                        <div className="w-2 h-2 rounded-full bg-glow-gold" />
                        <span className="text-foreground text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Upcoming Courses */}
      <SectionWrapper className="section-gradient">
        <AbstractShapes variant="section" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              <span className="text-foreground">Upcoming </span>
              <span className="gradient-text">Courses</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              More learning resources are in development. Stay tuned!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingCourses.map((course, index) => (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <GlowCard className="h-full">
                  <div className="p-3 rounded-xl bg-primary/10 inline-flex mb-4">
                    <course.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                    {course.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {course.description}
                  </p>
                  <span className="inline-flex px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs font-medium">
                    {course.status}
                  </span>
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <Footer />
    </div>
  );
};

export default Learning;