import React from "react";

const courses = [
  "Supervised & Unsupervised Learning",
  "Deep Learning",
  "Natural Language Processing (NLP)",
  "Data Engineering",
  "Data Visualization",
  "Cloud Computing",
  "Operating Systems",
  "Algorithms",
  "Data Structures",
  "Object-Oriented Programming (OOP)",
  "Information Security",
  "Software Engineering",
  "Web Development",
  "Project Management",
];

export default function Education() {
  return (
    <section id="education" className="py-24 bg-white dark:bg-white/[0.02]">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-neutral-100 mb-12">Education</h2>

        <div className="bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-8 hover:border-indigo-300 dark:hover:border-indigo-500/50 transition-colors">
          <div className="flex flex-col md:flex-row md:items-start justify-between mb-6 gap-4">
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Bachelor&apos;s Degree in Data Science</h3>
              <p className="text-indigo-600 dark:text-indigo-400 font-medium">@ Jordan University of Science and Technology</p>
            </div>
            <div className="text-left md:text-right">
              <p className="text-gray-700 dark:text-neutral-300 font-medium text-sm">2022 – 2026</p>
              <p className="text-gray-400 dark:text-neutral-500 text-xs">Irbid, Jordan</p>
            </div>
          </div>

          <p className="text-sm font-semibold text-gray-700 dark:text-neutral-300 mb-4">Relevant Coursework</p>
          <div className="flex flex-wrap gap-2">
            {courses.map((course, idx) => (
              <span
                key={idx}
                className="text-xs px-3 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-500/20"
              >
                {course}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
