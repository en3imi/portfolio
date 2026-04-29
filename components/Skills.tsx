import React from "react";
import { Award, Code2, Database, LayoutTemplate, BrainCircuit, TerminalSquare } from "lucide-react";

const skillCategories = [
  {
    title: "AI & Agents",
    icon: <BrainCircuit size={20} className="text-indigo-400" />,
    skills: [
      "Multi-Agent Systems (CrewAI)",
      "Agentic AI & Design Patterns",
      "MCP (Model Context Protocol)",
      "RAG Systems & Hybrid Search",
      "Prompt Engineering",
    ],
  },
  {
    title: "Deep Learning & NLP",
    icon: <Code2 size={20} className="text-indigo-400" />,
    skills: [
      "Transformers, BERT, AraBERT",
      "NER & Text Classification",
      "Sequence Models: RNN, LSTM, GRU",
      "CNNs & Computer Vision",
      "QLoRA & Fine-tuning",
      "Data Parallelism (Multi-GPU)",
      "Backpropagation & Math of DL",
    ],
  },
  {
    title: "MLOps & Production",
    icon: <TerminalSquare size={20} className="text-indigo-400" />,
    skills: [
      "ML in Production & Lifecycle Mgmt",
      "NVIDIA Triton Inference",
      "Docker, CI/CD",
    ],
  },
  {
    title: "Data Science & Analytics",
    icon: <Database size={20} className="text-indigo-400" />,
    skills: [
      "Machine Learning (Classical & Advanced)",
      "Statistics & Statistical Testing",
      "Time Series Analysis",
      "ML Explainability",
      "Customer Segmentation & Clustering",
      "Association Rules",
      "Big Data / PySpark",
      "SQL, Excel",
    ],
  },
  {
    title: "Tools & Databases",
    icon: <LayoutTemplate size={20} className="text-indigo-400" />,
    skills: [
      "n8n, FastAPI, Node.js, React.js",
      "PostgreSQL, Redis, Weaviate (Vector DB)",
      "PowerBI, Streamlit",
    ],
  },
  {
    title: "Languages",
    icon: <Code2 size={20} className="text-indigo-400" />,
    skills: ["Python (Advanced)", "SQL"],
  },
];

const certifications = [
  "Design, Develop & Deploy Multi-Agent Systems with CrewAI — DeepLearning.AI (Jan 2026)",
  "Data Parallelism: Train Deep Learning Models on Multiple GPUs — NVIDIA (Dec 2025)",
  "Agentic AI with Andrew Ng — DeepLearning.AI (Oct 2025)",
  "Machine Learning in Production — DeepLearning.AI (Sep 2025)",
  "Retrieval Augmented Generation (RAG) — DeepLearning.AI (Sep 2025)",
  "AI Automation with n8n — Science IDEs (Aug 2025)",
  "Machine Learning Explainability — Kaggle (Aug 2025)",
  "Time Series — Kaggle (Jul 2025)",
  "Building Transformer-Based NLP Applications — NVIDIA (May 2025)",
  "Professional Development for Tech Roles — Honors Graduate — Correlation One (Jun 2025)",
  "Big Data with PySpark — DataCamp (Feb 2025)",
  "Intermediate Deep Learning with PyTorch — DataCamp (Feb 2025)",
  "Deep Learning for NLP — ITI (Feb 2025)",
  "The Power of Statistics — Google (Aug 2024)",
  "Statistics for Data Science & AI — Unihance (Jul 2024)",
  "Python Data Structures — University of Michigan (Jun 2023)",
  "Programming for Everybody — University of Michigan (May 2023)",
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-white/[0.02]">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-neutral-100 mb-12">Skills & Expertise</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-white/5 rounded-xl">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>
              <ul className="space-y-3">
                {category.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="text-neutral-400 text-sm flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 flex-shrink-0"></span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <h2 className="text-4xl font-extrabold text-neutral-100 mb-12 flex items-center gap-4">
          <Award size={36} className="text-yellow-400" />
          Certifications
        </h2>
        
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
            {certifications.map((cert, idx) => {
              const [title, issuer] = cert.split(" — ");
              return (
                <li key={idx} className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-yellow-400/80 shadow-[0_0_8px_rgba(250,204,21,0.5)]"></div>
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">{title}</p>
                    {issuer && <p className="text-neutral-500 text-xs mt-1">{issuer}</p>}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
