import { motion } from "framer-motion";
import { ArrowRight, Dna, Brain, BarChart3, Microscope, Network, Scan, GitBranch, Activity } from "lucide-react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { AbstractShapes } from "@/components/shared/AbstractShapes";
import { GlowCard } from "@/components/shared/GlowCard";
import casestudyAbstract from "@/assets/casestudy-abstract.png";

const caseStudies = [
  {
    icon: Network,
    title: "Cancer Patient Stratification Using GNN with Multi-omics Data",
    category: "Precision Oncology",
    description: "Developed a Graph Neural Network model integrating genomics, transcriptomics, and clinical data to stratify cancer patients into treatment response groups, enabling personalized therapy selection.",
    results: [
      "Integrated 5 omics data types",
      "91% stratification accuracy",
      "Identified 3 distinct patient subgroups",
      "Reduced treatment selection time by 60%",
    ],
    color: "gold",
  },
  {
    icon: Dna,
    title: "Multi-omics Cancer Biomarker Discovery",
    category: "Precision Oncology",
    description: "Integrated analysis of genomic, transcriptomic, and proteomic data from 500+ patient samples to identify novel biomarkers for early cancer detection.",
    results: [
      "Identified 12 novel biomarker candidates",
      "85% validation accuracy in independent cohort",
      "Published in peer-reviewed journal",
    ],
    color: "primary",
  },
  {
    icon: Scan,
    title: "Single-Cell Atlas of Tumor Microenvironment",
    category: "Single-Cell Genomics",
    description: "Comprehensive single-cell RNA-seq analysis of tumor microenvironment revealing immune cell populations, their states, and interactions with cancer cells.",
    results: [
      "Analyzed 150,000+ single cells",
      "Identified 25 distinct cell populations",
      "Discovered novel T-cell exhaustion signatures",
      "Mapped cell-cell communication networks",
    ],
    color: "primary",
  },
  {
    icon: Brain,
    title: "Deep Learning for Brain Tumor Segmentation",
    category: "Medical Imaging",
    description: "Developed a 3D U-Net based model for automated brain tumor segmentation from MRI scans, achieving clinical-grade accuracy.",
    results: [
      "94% Dice coefficient on test set",
      "Reduced analysis time by 75%",
      "Deployed in clinical research workflow",
    ],
    color: "secondary",
  },
  {
    icon: GitBranch,
    title: "Single-Cell Trajectory Analysis in Development",
    category: "Developmental Biology",
    description: "Mapped cellular differentiation trajectories during organ development using single-cell RNA-seq, identifying key transcription factors and regulatory networks.",
    results: [
      "Reconstructed complete differentiation paths",
      "Identified 8 key regulatory TFs",
      "Built gene regulatory network model",
      "Validated findings experimentally",
    ],
    color: "gold",
  },
  {
    icon: BarChart3,
    title: "RNA-Seq Analysis for Drug Response Prediction",
    category: "Pharmacogenomics",
    description: "Comprehensive transcriptome analysis to identify gene expression signatures predictive of drug response in colorectal cancer patients.",
    results: [
      "78% prediction accuracy for treatment response",
      "Identified 5 key pathway signatures",
      "Enabled personalized treatment selection",
    ],
    color: "teal",
  },
  {
    icon: Activity,
    title: "EEG-based Biomarkers for Neurological Disorders",
    category: "Neuroinformatics",
    description: "Developed machine learning models using EEG features to identify early biomarkers for neurological disorders, enabling earlier intervention.",
    results: [
      "Analyzed 500+ EEG recordings",
      "Achieved 88% classification accuracy",
      "Identified frequency-specific markers",
      "Reduced diagnostic time by 40%",
    ],
    color: "secondary",
  },
  {
    icon: Microscope,
    title: "Microbiome Analysis in Inflammatory Bowel Disease",
    category: "Metagenomics",
    description: "Shotgun metagenomics analysis of gut microbiome samples to characterize dysbiosis patterns in IBD patients versus healthy controls.",
    results: [
      "Analyzed 200+ patient samples",
      "Identified disease-specific microbial signatures",
      "Discovered potential therapeutic targets",
    ],
    color: "primary",
  },
];

const CaseStudies = () => {
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
                <span className="text-foreground">Case Studies & </span>
                <span className="gradient-text-gold">Insights</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-lg md:text-xl text-muted-foreground leading-relaxed"
              >
                Explore how we've helped researchers and organizations unlock 
                the power of their biological data through our bioinformatics solutions.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="hidden lg:block"
            >
              <motion.img
                src={casestudyAbstract}
                alt="Case studies visualization"
                className="w-full max-w-md mx-auto"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <SectionWrapper>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <GlowCard className="h-full">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${study.color === 'gold' ? 'from-glow-gold/20 to-glow-gold/5 border-glow-gold/20' : 'from-primary/20 to-secondary/10 border-primary/20'} border`}>
                      <study.icon className={`w-6 h-6 ${study.color === 'gold' ? 'text-glow-gold' : 'text-primary'}`} />
                    </div>
                    <div>
                      <span className={`text-xs font-medium uppercase tracking-wider ${study.color === 'gold' ? 'text-glow-gold' : 'text-primary'}`}>
                        {study.category}
                      </span>
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        {study.title}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {study.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-foreground">Key Results:</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <div className={`w-1.5 h-1.5 rounded-full mt-2 ${study.color === 'gold' ? 'bg-glow-gold' : 'bg-primary'}`} />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper className="section-gradient">
        <AbstractShapes variant="section" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              <span className="text-foreground">Have a Similar </span>
              <span className="gradient-text-gold">Project?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Let's discuss how our expertise can help you achieve your research goals.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Start a Conversation
                  <ArrowRight size={18} />
                </Link>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      <Footer />
    </div>
  );
};

export default CaseStudies;