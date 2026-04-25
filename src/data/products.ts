export interface Product {
  id: string;
  title: string;
  tagline: string;
  description: string;
  language: string;
  url: string;
  tags: string[];
}

export const products: Product[] = [
  {
    id: "eeg-cp-bci",
    title: "EEG-CP-BCI",
    tagline: "Motor intention decoder for cerebral palsy",
    description:
      "EEG-based brain-computer interface that decodes motor intention in children with cerebral palsy to assist assistive-tech control and rehabilitation research.",
    language: "Python",
    url: "https://github.com/sherax-ahmad/EEG-CP-BCI",
    tags: ["EEG", "BCI", "Healthcare AI"],
  },
  {
    id: "opgene",
    title: "Opgene",
    tagline: "Python toolkit for genomics analysis",
    description:
      "A Python package providing reusable utilities for genomics data analysis — sequence handling, variant processing, and downstream statistics for bioinformatics workflows.",
    language: "Python",
    url: "https://github.com/sherax-ahmad/Opgene",
    tags: ["Genomics", "Python", "Bioinformatics"],
  },
  {
    id: "eeg-mental-state",
    title: "EEG Mental-State Classifier",
    tagline: "Cognitive state classification from EEG",
    description:
      "Machine-learning pipeline that classifies mental states from EEG signals — feature extraction, model training, and evaluation for neuro-cognitive applications.",
    language: "Python",
    url: "https://github.com/sherax-ahmad/EEG-Based-Mental-State-Classifier",
    tags: ["EEG", "ML", "Neuroscience"],
  },
  {
    id: "dynamic-fc",
    title: "Dynamic Functional Connectivity",
    tagline: "Aging & cognitive load brain dynamics",
    description:
      "Investigates how brain connectivity changes with aging and cognitive load using AI on large-scale resting-state EEG data from the Dortmund Vital Study.",
    language: "Python",
    url: "https://github.com/sherax-ahmad/dynamic-functional-connectivity",
    tags: ["EEG", "Connectivity", "Aging"],
  },
];