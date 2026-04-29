import React from "react";
import { ExternalLink, Trophy, FileText } from "lucide-react";

type Project = {
  title: string;
  description: string;
  bullets: string[];
  tools: string[];
  award?: string;
  github?: string;
  link?: string;
  paper?: string;
};

const GithubIcon = ({ size = 24 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const projectCategories: { category: string; projects: Project[] }[] = [
  {
    category: "Agentic Systems",
    projects: [
      {
        title: "CareerHub",
        award: "2nd Best Regional Project + Best AI Tools Award",
        description: "Multi-agent system that empowers students to land jobs, sharpen their skills, and stay ahead of the market — all autonomously.",
        bullets: [
          "Automated job matching: scans opportunities and matches them to each student's profile and skills",
          "Slack agent that continuously monitors and delivers workshops, competitions, courses, and opportunities",
          "Expert chatbot for resume crafting, LinkedIn profile optimization, and interview preparation",
        ],
        tools: ["CrewAI", "n8n", "Docker", "FastAPI", "Tavily Search", "ScraperGraphAI", "Apify", "Slack"],
        github: "https://github.com/en3imi/Career-Hub-CrewAI-n8n-",
      },
    ],
  },
  {
    category: "NLP & RAG Systems",
    projects: [
      {
        title: "AILS — AI for Land & Survey Department Jordan",
        description: "Intelligent legal assistant that answers Jordanian citizens' queries about land and survey laws in under 10 seconds.",
        bullets: [
          "RAG system with a curated knowledge base of official legal documents",
          "Hybrid search + reranker for precise retrieval — strict anti-hallucination instructions",
        ],
        tools: ["Weaviate", "Perplexity LLM", "Streamlit"],
        github: "https://github.com/en3imi/AILS",
      },
      {
        title: "AI Parser for RAG Systems",
        description: "Smart document parser that selects the optimal chunking strategy per document — purpose-built for high-quality RAG pipelines.",
        bullets: [
          "Adapts chunking method dynamically based on document structure and content",
          "Arabic dialect support — semantic search and SQL search via metadata",
        ],
        tools: ["Weaviate", "PostgreSQL", "Streamlit", "Gemini 2.5 Flash"],
        github: "https://github.com/en3imi/pyxon-ai-entry-task",
      },
      {
        title: "AraBERT Arabic Food Delivery Reviews",
        description: "Dual-task NLP system for Arabic text classification — combining POS tagging with sentiment analysis.",
        bullets: [
          "Task 1: POS tagging — classifies each word in the review",
          "Task 2: Sentiment classification — positive / negative / neutral at sentence level",
        ],
        tools: ["Transformers", "HuggingFace", "AraBERT", "Kaggle"],
      },
      {
        title: "Zephyr-7B Fine-tuning with QLoRA",
        description: "Parameter-efficient fine-tuning of a 7B LLM on an instruction-following dataset.",
        bullets: [
          "Applied QLoRA for memory-efficient training on consumer-grade hardware",
        ],
        tools: ["Transformers", "HuggingFace", "Zephyr-7B-Beta", "Kaggle"],
        github: "https://github.com/en3imi/NLP/blob/main/zephyr-7b-beta/zephyr-7b-beta.ipynb",
      },
      {
        title: "RNN Variants — Movie Reviews Sentiment",
        description: "Trained multiple sequence models for sentiment classification on movie reviews.",
        bullets: [
          "Implemented RNN, LSTM, Bidirectional LSTM, and Multilayer LSTM architectures",
          "Compared performance across all variants for positive/negative classification",
        ],
        tools: ["PyTorch", "HuggingFace", "Kaggle"],
        github: "https://github.com/en3imi/NLP/blob/main/SentimentClassificationLSTM/sentiment-classification-using-sequence-in-pytorch.ipynb",
      },
      {
        title: "SVM Sentiment Classification",
        description: "Positive/negative classification of movie reviews using a classical SVM pipeline.",
        bullets: [],
        tools: ["SVM", "Python", "Scikit-learn"],
        github: "https://github.com/en3imi/NLP/tree/main/SVM%20for%20movie%20reviews",
      },
    ],
  },
  {
    category: "Computer Vision",
    projects: [
      {
        title: "Blood Pattern Classification",
        award: "IEEE International Conference — May 18, 2026",
        description: "First-authored research paper accepted at IEEE — outperforms previous works in both accuracy and methodology.",
        bullets: [
          "First Author: Eyad Al-Naimi",
          "Techniques: LDA, PCA, T-SNE, Transformer Embeddings",
          "Merged 2 datasets into a 3-class classification problem",
          "Self-supervised transformer embeddings + SVM classifier — eliminates manual feature engineering",
          "Achieved 97% avg accuracy and F1-score, surpassing prior state-of-the-art",
        ],
        tools: ["Transformers", "SVM", "PyTorch", "LDA", "PCA", "T-SNE"],
        github: "https://github.com/en3imi/DS372-Forensics",
        paper: "Accepted — Publishing May 18, 2026",
      },
      {
        title: "YOLO Aerial Car Detection",
        description: "Fine-tuned YOLO on an aerial imagery dataset for real-time car detection from drone footage.",
        bullets: [
          "Achieved strong detection metrics on challenging overhead perspectives",
          "Built a live demo UI for end-to-end testing",
        ],
        tools: ["Ultralytics YOLO", "Streamlit"],
        link: "https://drone-x-demo-x3hk3abumjjfzi3kgqiv2a.streamlit.app",
      },
      {
        title: "ResNet from Scratch",
        description: "Implemented and trained a full ResNet architecture on CIFAR-10 without using pre-built model classes.",
        bullets: [],
        tools: ["PyTorch"],
        github: "https://github.com/en3imi/DeepLearning",
      },
    ],
  },
  {
    category: "Deep Learning Fundamentals",
    projects: [
      {
        title: "Neural Network from Scratch (No Libraries)",
        description: "A fully functional neural network built using pure mathematics — zero ML frameworks.",
        bullets: [
          "Implements forward pass, backpropagation, and gradient descent from first principles",
          "Demonstrates mastery of the math behind deep learning: linear algebra, calculus, and optimization",
        ],
        tools: ["Python", "NumPy only"],
        github: "https://github.com/en3imi/DeepLearning/blob/main/NN_FROM_SCRATCH/NN_from_scratch.ipynb",
      },
    ],
  },
  {
    category: "Data Science",
    projects: [
      {
        title: "Customer Churn Analysis",
        description: "End-to-end data science project delivering actionable business recommendations through segmentation and pattern discovery.",
        bullets: [
          "Customer segmentation via clustering — profiled distinct user groups",
          "Association rules mining to identify variables driving churn and retention",
          "Interactive PowerBI dashboard visualizing all findings",
        ],
        tools: ["KNIME", "Python", "PowerBI", "Excel"],
        link: "https://hub.knime.com/eyad_alnaimi/spaces/Customer%20Churn/Customer%20Churn%20Analysis%20in%20a%20Telecom%20Company~YXHajwsmXictHTBY/current-state",
      },
      {
        title: "Student Mental Health & Wellbeing in Jordan",
        description: "Data-driven study analyzing mental health patterns among Jordanian university students.",
        bullets: [
          "Answered 5 research questions through exploratory data analysis",
          "Clustering to group students with similar psychological characteristics",
          "Association rules to identify variables linked to depression and positive wellbeing",
          "Statistical hypothesis testing to validate findings",
        ],
        tools: ["Python", "Statistics"],
        github: "https://github.com/en3imi/The-Wellbeing-Landscape-in-Jordan",
      },
      {
        title: "PowerBI Sales & Profitability Dashboard",
        description: "Interactive dashboard analyzing sales and profitability data across products and regions.",
        bullets: [],
        tools: ["PowerBI"],
        github: "https://github.com/en3imi/PowerBI/tree/main/PowerBI.WWI",
      },
      {
        title: "Cross-Continental Sales & Delivery Analysis",
        description: "Data analysis of sales and parcel delivery performance across continents.",
        bullets: [],
        tools: ["PowerBI", "Python"],
        github: "https://github.com/en3imi/PowerBI/tree/main/Project2",
      },
      {
        title: "Association Rule Mining — Supermarket",
        description: "Discovered frequently co-purchased products using association rule mining on supermarket transaction data.",
        bullets: [],
        tools: ["Python", "mlxtend"],
        github: "https://github.com/en3imi/Machine-Learning/tree/main/association%20rule%20mining",
      },
      {
        title: "MNIST Clustering (Full Marks)",
        description: "Clustering with dimensionality reduction techniques on the MNIST dataset — received full marks.",
        bullets: [
          "Applied PCA, T-SNE, and UMAP for dimensionality reduction before clustering",
        ],
        tools: ["Python", "Scikit-learn", "UMAP", "T-SNE"],
      },
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-background">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-neutral-100 mb-12">Projects</h2>

        <div className="space-y-16">
          {projectCategories.map((category, idx) => (
            <div key={idx}>
              <h3 className="text-xl font-bold text-indigo-600 dark:text-indigo-400 mb-6 flex items-center gap-3">
                <span className="w-8 h-[2px] bg-indigo-500/50"></span>
                {category.category}
              </h3>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {category.projects.map((project, pIdx) => (
                  <div key={pIdx} className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-6 hover:border-indigo-300 dark:hover:border-indigo-500/50 transition-colors flex flex-col h-full">
                    <div className="mb-4">
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{project.title}</h4>
                      {project.award && (
                        <div className="inline-flex items-center gap-1 text-xs font-medium bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-3 py-1 rounded-full mb-3">
                          <Trophy size={14} />
                          {project.award}
                        </div>
                      )}
                      <p className="text-gray-500 dark:text-neutral-400 text-sm leading-relaxed mb-4">{project.description}</p>

                      {project.bullets.length > 0 && (
                        <ul className="list-disc list-outside ml-4 space-y-1 text-sm text-gray-600 dark:text-neutral-300">
                          {project.bullets.map((bullet, bIdx) => (
                            <li key={bIdx}>{bullet}</li>
                          ))}
                        </ul>
                      )}
                    </div>

                    <div className="mt-auto pt-6">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tools.map((tool, tIdx) => (
                          <span key={tIdx} className="text-xs font-medium bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-neutral-300 px-2.5 py-1 rounded-md">
                            {tool}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-3">
                        {project.github && (
                          <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full hover:bg-indigo-50 dark:hover:bg-white/20 text-gray-700 dark:text-white transition-colors" title="View Source">
                            <GithubIcon size={18} />
                          </a>
                        )}
                        {project.link && (
                          <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full hover:bg-indigo-50 dark:hover:bg-white/20 text-gray-700 dark:text-white transition-colors" title="View Project">
                            <ExternalLink size={18} />
                          </a>
                        )}
                        {project.paper && (
                          <div className="flex items-center gap-2 text-sm text-indigo-600 dark:text-indigo-300">
                            <FileText size={16} />
                            <span>{project.paper}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
