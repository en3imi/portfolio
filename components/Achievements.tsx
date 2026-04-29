import React from "react";
import { Trophy, BookOpen, Award } from "lucide-react";

const research = [
  {
    title: "Blood Pattern Classification Using Transformer-Based Image Embeddings",
    conference: "ACM Conference on Data Engineering and Intelligent Systems",
    date: "(Submitted and got accepted) March 2026",
    bullets: [
      "Developed an end-to-end CV pipeline using a Vision Transformer model with a linear SVM to classify multi-class bloodstain patterns.",
      "Extracted 384-dimensional embeddings and trained an SVM classifier, achieving 97.88% accuracy and outperforming traditional handcrafted feature engineering methods and previous related work in forensic analysis."
    ]
  }
];

const awards = [
  {
    title: "Second Place in the University Students Category of the UniAgents Hackathon 2025",
    issuer: "Qafza & IEEE",
    date: "Nov 2025",
    description: "Developed a multi-agent AI system that helps students find job opportunities, internships, and workshops, and monitors labor market trends and emerging skills to guide career development."
  },
  {
    title: "Best Use of AI Tools in UniAgents Hackathon 2025",
    issuer: "Qafza - IEEE",
    date: "Nov 2025",
    description: "Awarded for outstanding and efficient use of AI tools, including LLM-powered agents and automation workflows, to deliver a real-world student career support system."
  }
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 bg-white dark:bg-white/[0.02]">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Research Section */}
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-neutral-100 mb-12 flex items-center gap-4">
          <BookOpen className="text-indigo-500" size={36} />
          Research
        </h2>

        <div className="space-y-6 mb-24">
          {research.map((item, index) => (
            <div key={index} className="bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-8 hover:border-indigo-300 dark:hover:border-indigo-500/50 transition-colors">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-6">
                <p className="text-indigo-600 dark:text-indigo-400 font-medium">{item.conference}</p>
                <span className="hidden md:inline text-gray-300 dark:text-gray-700">•</span>
                <p className="text-emerald-600 dark:text-emerald-400 font-medium text-sm bg-emerald-50 dark:bg-emerald-500/10 px-3 py-1 rounded-full w-fit">
                  {item.date}
                </p>
              </div>
              <ul className="list-disc list-outside ml-5 space-y-3 text-gray-600 dark:text-neutral-400 text-sm md:text-base leading-relaxed">
                {item.bullets.map((bullet, idx) => (
                  <li key={idx}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Awards Section */}
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-neutral-100 mb-12 flex items-center gap-4">
          <Trophy className="text-yellow-500" size={36} />
          Honors & Awards
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {awards.map((award, index) => (
            <div key={index} className="bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-8 hover:border-yellow-300 dark:hover:border-yellow-500/50 transition-colors flex flex-col h-full">
              <div className="mb-4">
                <div className="w-12 h-12 bg-yellow-50 dark:bg-yellow-500/10 rounded-full flex items-center justify-center mb-4 text-yellow-600 dark:text-yellow-400">
                  <Award size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 leading-snug">{award.title}</h3>
                <p className="text-gray-500 dark:text-neutral-400 text-sm font-medium mb-4">
                  Issued by {award.issuer} <span className="mx-2">•</span> {award.date}
                </p>
              </div>
              <p className="text-gray-600 dark:text-neutral-300 text-sm leading-relaxed mt-auto">
                {award.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
