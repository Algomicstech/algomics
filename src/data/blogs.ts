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
  {
    id: "single-cell-rna-seq-primer",
    title: "Single-Cell RNA-Seq: A Primer for the Bulk-Trained Bioinformatician",
    excerpt:
      "Moving from bulk to single-cell changes almost every assumption — sparsity, normalization, batch effects. A field guide for making the jump without learning the wrong lessons.",
    date: "March 27, 2026",
    readTime: "8 min read",
    author: "Algomics Research",
    tags: ["scRNA-Seq", "Single-Cell", "Genomics"],
    content: [
      "Single-cell RNA-Seq looks like bulk RNA-Seq with more rows. It is not. The data is sparse, dropout is structural, and almost every method you trusted at the bulk level needs to be re-examined before it survives the transition.",
      "Start with the count matrix. Whether it comes from Cell Ranger, STARsolo, or alevin-fry, the matrix you load into Scanpy or Seurat is dominated by zeros — many of them technical, not biological. Filtering cells by minimum gene counts and genes by minimum cell counts is the first defensive layer; doublet detection with Scrublet or DoubletFinder is the second.",
      "Normalization is where bulk intuitions break first. Library-size scaling plus log1p is the de-facto baseline, but methods like sctransform model the mean-variance relationship explicitly and often produce cleaner downstream embeddings. Whatever you choose, do it before highly variable gene selection, not after.",
      "Dimensionality reduction usually means PCA followed by a neighborhood graph and UMAP. UMAP is excellent for visualization and dangerous for interpretation — distances between clusters on a UMAP do not reliably reflect transcriptional distance. Use it to look, not to measure.",
      "Batch effects are the single biggest source of false biology in scRNA-Seq. Harmony, scVI, and BBKNN each handle integration differently; pick one based on your dataset size and whether you need a generative model. Always inspect pre- and post-integration embeddings side by side — over-correction can erase real biological signal as easily as under-correction lets batch dominate.",
      "Finally, cell-type annotation. Marker-based labeling is interpretable but brittle; reference-based tools like CellTypist or SingleR scale better across studies. The honest workflow is both: automated labels for speed, manual marker inspection for trust.",
    ],
  },
  {
    id: "reproducible-bioinformatics-workflows",
    title: "Reproducible Bioinformatics: Why Your Pipeline Is a Liability Without It",
    excerpt:
      "Containers, workflow managers, and version-pinning are not optional luxuries. A pragmatic look at what reproducibility actually costs — and what irreproducibility costs more.",
    date: "March 12, 2026",
    readTime: "6 min read",
    author: "Algomics Research",
    tags: ["Reproducibility", "Workflows", "DevOps"],
    content: [
      "Most bioinformatics analyses are reproducible in principle and irreproducible in practice. The script ran, the figure was made, the paper went out — and six months later nobody can rerun it because a Conda environment drifted, a reference genome got re-released, or a tool silently changed its default parameters.",
      "The fix is not heroic discipline; it is infrastructure. Three layers do most of the work: containers for the software environment, a workflow manager for the execution graph, and version control for everything that humans touch.",
      "Containers — Docker, Singularity, or Apptainer — pin the exact binaries your analysis depends on. BioContainers gives you ready-made images for thousands of bioinformatics tools. The discipline is to never run analyses against an unpinned `latest` tag; always reference a specific digest or version.",
      "Workflow managers — Nextflow and Snakemake are the dominant options — turn a tangle of shell scripts into a declarative graph that the system itself can re-execute, resume, and parallelize. They also force you to make data dependencies explicit, which is half the battle in catching silent bugs.",
      "Version everything. Code in git, configuration in git, parameter files in git. Reference data and large inputs go in object storage with checksums and a manifest committed to the repo. The goal is that a reviewer in two years can clone the repository, run one command, and reproduce your figures — bit-for-bit when possible, scientifically when not.",
      "Reproducibility has a real upfront cost. Irreproducibility has a larger ongoing cost: retracted findings, wasted re-analyses, lost institutional knowledge when team members leave. Treat the infrastructure as part of the science, not overhead on top of it.",
    ],
  },
];