export interface Blog {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  author: string;
  tags: string[];
  content: string[];
}

export const blogs: Blog[] = [
  {
    id: "rna-seq-pipeline-essentials",
    title: "RNA-Seq Pipeline Essentials: From Raw Reads to Biological Insight",
    excerpt:
      "A practical walkthrough of a modern RNA-Seq pipeline — quality control, alignment, quantification, and differential expression — and the decisions that shape reproducibility.",
    date: "April 18, 2026",
    readTime: "7 min read",
    author: "Algomics Research",
    tags: ["RNA-Seq", "NGS", "Bioinformatics"],
    content: [
      "RNA sequencing has become a default lens for studying gene expression, but the gap between a FASTQ file and a defensible biological conclusion is wider than it looks. The pipeline you choose — and more importantly, the parameters you choose within it — quietly determines what your final results mean.",
      "A typical workflow starts with quality control using FastQC and MultiQC, followed by adapter and quality trimming with fastp or Trim Galore. Skipping or over-trimming at this stage is one of the most common sources of downstream bias. Aim for a balance: remove adapter contamination and low-quality tails, but preserve biological signal.",
      "Alignment is next. STAR and HISAT2 remain the workhorses for splice-aware alignment to a reference genome, while salmon and kallisto offer quantification-first approaches that bypass alignment entirely. For most bulk RNA-Seq projects, salmon with selective alignment offers an excellent speed-accuracy trade-off and produces transcript-level estimates ready for tximport.",
      "Quantification feeds into differential expression. DESeq2 and edgeR are the standards, both built on negative-binomial models that handle the over-dispersion inherent to count data. Always inspect your sample-level PCA before trusting any DE result — batch effects are real, and they will dominate your top hits if left unmodelled.",
      "Finally, biological interpretation: GSEA, over-representation analysis, and pathway tools like clusterProfiler turn gene lists into hypotheses. Treat these as starting points, not conclusions. The best RNA-Seq analyses are the ones where every step — from trimming threshold to model design — is documented, reproducible, and version-controlled.",
    ],
  },
  {
    id: "ml-in-protein-structure",
    title: "Machine Learning in Protein Structure Prediction: Beyond AlphaFold",
    excerpt:
      "AlphaFold changed structural biology, but the field is moving fast. A look at where ML-driven structure prediction stands today and what comes next for drug discovery.",
    date: "April 8, 2026",
    readTime: "6 min read",
    author: "Algomics Research",
    tags: ["AI", "Structural Biology", "Drug Discovery"],
    content: [
      "When AlphaFold 2 was released, it didn't just solve a 50-year-old problem — it reset the baseline for what computational structural biology could do. Suddenly, accurate single-chain structure prediction was a commodity, and the interesting questions shifted to complexes, dynamics, and design.",
      "Today the landscape is broader. ESMFold trades a small amount of accuracy for dramatic speed by removing the multiple-sequence-alignment bottleneck, making proteome-scale prediction practical. RoseTTAFold All-Atom extends prediction to ligands and nucleic acids. AlphaFold 3 brings native support for protein-ligand and protein-nucleic-acid complexes, opening direct paths into drug discovery.",
      "For practitioners, the right tool depends on the question. Static structure of a single domain? AlphaFold or ESMFold are excellent. A multi-protein complex with cofactors? AlphaFold 3 or RoseTTAFold All-Atom. Conformational ensembles or allosteric states? You're still in the territory of MD simulation, enhanced sampling, or emerging diffusion-based generative models like RFdiffusion.",
      "Drug discovery is where these models compound their value. Predicted structures feed virtual screening, docking refinement, and de-novo binder design. Tools like RFdiffusion and ProteinMPNN now make it possible to design novel binders against a target structure with success rates that were unthinkable five years ago.",
      "The honest caveat: predicted structures are confident hypotheses, not experimental truth. Always check pLDDT and PAE scores, validate critical interactions experimentally, and be skeptical of low-confidence regions — especially loops and disordered segments where prediction quality drops sharply.",
    ],
  },
];