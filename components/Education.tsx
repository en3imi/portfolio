import React from "react";

const education = [
  {
    degree: "Bachelor's Degree in Data Science",
    institution: "Jordan University of Science and Technology",
    date: "2022 – 2026",
    location: "Irbid, Jordan",
    bullets: [
      "Focused on advanced topics in Machine Learning, Deep Learning, and AI.",
      "Developed strong foundations in statistics and software engineering.",
    ],
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 bg-white dark:bg-white/[0.02]">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-neutral-100 mb-12">Education</h2>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <div key={index} className="bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-8 hover:border-indigo-300 dark:hover:border-indigo-500/50 transition-colors">
              <div className="flex flex-col md:flex-row md:items-start justify-between mb-4 gap-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{edu.degree}</h3>
                  <p className="text-indigo-600 dark:text-indigo-400 font-medium">@ {edu.institution}</p>
                </div>
                <div className="text-left md:text-right">
                  <p className="text-gray-700 dark:text-neutral-300 font-medium text-sm">{edu.date}</p>
                  <p className="text-gray-400 dark:text-neutral-500 text-xs">{edu.location}</p>
                </div>
              </div>
              <ul className="list-disc list-outside ml-5 space-y-2 text-gray-500 dark:text-neutral-400 text-sm">
                {edu.bullets.map((bullet, idx) => (
                  <li key={idx} className="leading-relaxed">{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
