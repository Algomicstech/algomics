import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { AbstractShapes } from "@/components/shared/AbstractShapes";
import { GlowCard } from "@/components/shared/GlowCard";
import aboutAbstract from "@/assets/about-abstract.png";

const team = [
  {
    name: "Sheraz Ahmad",
    role: "Founder & CEO",
    bio: "Bioinformatics researcher specializing in multi-omics, deep learning, and neuroinformatics.",
    image: "/team/sheraz.jpg",
    fallbackInitials: "SA",
    linkedin: "https://www.linkedin.com/company/algomics/",
  },
  {
    name: "Taimoor Qadir",
    role: "COO",
    bio: "Operations, management, and automation pipelines specialist driving organizational excellence.",
    image: "/team/taimoor.jpg",
    fallbackInitials: "TQ",
    linkedin: "https://www.linkedin.com/in/taimoor-qadir-9883451b9/",
  },
  {
    name: "Muhammad Hammad",
    role: "CTO",
    bio: "Tech lead for infrastructure, automation, and backend ML systems architecture.",
    image: "/team/hammad.jpg",
    fallbackInitials: "MH",
    linkedin: "https://www.linkedin.com/in/hafiz-muhammad-hammad-hmh/",
  },
  {
    name: "Zaeem Ali",
    role: "Bioinformatician / Data Scientist",
    bio: "Expert in NGS pipelines, ML models, and multi-omics data integration.",
    image: "/team/zaeem.jpg",
    fallbackInitials: "ZA",
    linkedin: "https://www.linkedin.com/in/zaeem-ali-0075ab234/",
  },
  {
    name: "Mudasir Alvi",
    role: "Chief Bioinformatics Analyst",
    bio: "Specialist in genomics, variant calling, RNA-seq analysis, and quality control.",
    image: null,
    fallbackInitials: "MA",
    linkedin: null,
  },
  {
    name: "Saman Shabbir",
    role: "Bioinformatics Analyst",
    bio: "Transcriptomics, annotation pipelines, and wet-lab integration specialist.",
    image: null,
    fallbackInitials: "SS",
    linkedin: null,
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden hero-gradient">
        <AbstractShapes variant="hero" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              >
                <span className="text-foreground">About </span>
                <span className="gradient-text-gold">Algomics</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-lg md:text-xl text-muted-foreground leading-relaxed"
              >
                A Pakistan-based healthcare research and bioinformatics company building 
                data-driven solutions for biology, medicine, and precision health.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="hidden lg:block"
            >
              <motion.img
                src={aboutAbstract}
                alt="Team collaboration"
                className="w-full max-w-md mx-auto"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <SectionWrapper>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <GlowCard>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To unlock the hidden patterns in biological data and make healthcare 
                <span className="text-glow-gold font-semibold"> 1% better every day</span>. 
                We believe that even small, data-powered improvements can transform lives 
                and revolutionize how we approach medicine.
              </p>
            </GlowCard>
            <GlowCard>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                To become the leading bioinformatics research company in Pakistan and 
                globally recognized for innovation and impact in precision health. 
                We aim to bridge the gap between complex biological data and actionable 
                clinical insights.
              </p>
            </GlowCard>
          </div>
        </div>
      </SectionWrapper>

      {/* Who We Are */}
      <SectionWrapper className="section-gradient">
        <AbstractShapes variant="section" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                <span className="text-foreground">Who </span>
                <span className="gradient-text">We Are</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Algomics is a healthcare research company focused on bioinformatics, 
                data-driven discovery, and precision health. We analyze complex biological 
                datasets to uncover insights that improve patient outcomes.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We offer cutting-edge research, bioinformatics consulting, and analysis 
                services for academia, biotech, pharmaceuticals, and healthcare organizations. 
                Our team combines deep biological expertise with advanced computational skills 
                to deliver actionable insights.
              </p>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      {/* Team Section */}
      <SectionWrapper>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              <span className="text-foreground">Meet Our </span>
              <span className="gradient-text-gold">Team</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A passionate team of bioinformaticians, data scientists, and researchers 
              dedicated to transforming healthcare through data.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-glow-gold/30 transition-all duration-300"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-glow-gold/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative z-10 text-center">
                  {/* Avatar */}
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 mx-auto mb-4 rounded-full object-cover border-2 border-glow-gold/30"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const fallback = target.nextElementSibling as HTMLElement;
                        if (fallback) fallback.style.display = 'flex';
                      }}
                    />
                  ) : null}
                  <div 
                    className={`w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-glow-gold to-secondary items-center justify-center text-primary-foreground font-heading font-bold text-xl ${member.image ? 'hidden' : 'flex'}`}
                  >
                    {member.fallbackInitials}
                  </div>
                  
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-glow-gold text-sm font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {member.bio}
                  </p>
                  
                  {/* Social links */}
                  <div className="flex items-center justify-center gap-2">
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-muted/50 text-muted-foreground hover:bg-glow-gold/20 hover:text-glow-gold transition-colors"
                      >
                        <Linkedin size={16} />
                      </a>
                    )}
                    <a
                      href="mailto:contact@algomicstech.com"
                      className="p-2 rounded-lg bg-muted/50 text-muted-foreground hover:bg-primary/20 hover:text-primary transition-colors"
                    >
                      <Mail size={16} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <Footer />
    </div>
  );
};

export default About;