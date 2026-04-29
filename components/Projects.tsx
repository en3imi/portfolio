import React from "react";
import { ExternalLink, Trophy, FileText } from "lucide-react";

const GithubIcon = ({ size = 24 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const projectCategories = [
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
        tools: ["CrewAI", "n8n", "Docker", "FastAPI"],
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
    ],
  },
  {
    category: "Computer Vision",
    projects: [
      {
        title: "Blood Pattern Classification",
        award: "ACM Conference — May 18, 2026",
        description: "Research paper accepted at ACM — outperforms previous works in both accuracy and methodology.",
        bullets: [
          "Merged 2 datasets into a 3-class classification problem",
          "Self-supervised transformer embeddings + SVM classifier — eliminates manual feature engineering",
          "Achieved 97% avg accuracy and F1-score, surpassing prior state-of-the-art",
        ],
        tools: ["Transformers", "SVM", "PyTorch"],
        github: "https://github.com/en3imi/DS372-Forensics",
        paper: "submitted and got accepted",
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
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-neutral-100 mb-12">Projects</h2>
        
        <div className="space-y-16">
          {projectCategories.map((category, idx) => (
            <div key={idx}>
              <h3 className="text-2xl font-bold text-indigo-400 mb-6 flex items-center gap-3">
                <span className="w-8 h-[2px] bg-indigo-500/50"></span>
                {category.category}
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {category.projects.map((project, pIdx) => (
                  <div key={pIdx} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors flex flex-col h-full">
                    <div className="mb-4">
                      <h4 className="text-xl font-bold text-white mb-2">{project.title}</h4>
                      {project.award && (
                        <div className="inline-flex items-center gap-1 text-xs font-medium bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-full mb-3">
                          <Trophy size={14} />
                          {project.award}
                        </div>
                      )}
                      <p className="text-neutral-400 text-sm leading-relaxed mb-4">{project.description}</p>
                      
                      {project.bullets.length > 0 && (
                        <ul className="list-disc list-outside ml-4 space-y-1 text-sm text-neutral-300">
                          {project.bullets.map((bullet, bIdx) => (
                            <li key={bIdx}>{bullet}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                    
                    <div className="mt-auto pt-6">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tools.map((tool, tIdx) => (
                          <span key={tIdx} className="text-xs font-medium bg-white/10 text-neutral-300 px-2.5 py-1 rounded-md">
                            {tool}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center gap-3">
                        {project.github && (
                          <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 border border-white/10 rounded-full hover:bg-white/20 text-white transition-colors" title="View Source">
                            <GithubIcon size={18} />
                          </a>
                        )}
                        {project.link && (
                          <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 border border-white/10 rounded-full hover:bg-white/20 text-white transition-colors" title="View Project">
                            <ExternalLink size={18} />
                          </a>
                        )}
                        {project.paper && (
                          <div className="flex items-center gap-2 text-sm text-indigo-300">
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
