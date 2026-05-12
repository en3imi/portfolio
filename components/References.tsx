import React from "react";
import { Mail, ExternalLink, GraduationCap } from "lucide-react";

const references = [
  {
    name: "Dr. Tariq Alomari",
    role: "Assistant Professor",
    department: "Department of Computer Science",
    university: "Jordan University of Science and Technology",
    email: "talomari@just.edu.jo",
    link: "https://www.just.edu.jo/eportfolio/Pages/Default.aspx?email=talomari",
  },
  {
    name: "Dr. Yanal Alahmad",
    role: "Assistant Professor",
    department: "Department of Software Engineering",
    university: "Jordan University of Science and Technology",
    email: "ynalahmad@just.edu.jo",
    link: "https://www.just.edu.jo/eportfolio/Pages/Default.aspx?email=ynalahmad",
  },
  {
    name: "Dr. Deya Alzoubi",
    role: "Assistant Professor",
    department: "Computer Information System Department",
    university: "Jordan University of Science and Technology",
    email: "daalzoubi@just.edu.jo",
    link: "https://www.just.edu.jo/eportfolio/Pages/Default.aspx?email=daalzoubi",
  },
];

export default function References() {
  return (
    <section id="references" className="py-24 bg-gray-50/50 dark:bg-white/[0.01]">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-neutral-100 mb-12 text-center md:text-left">
          Academic References
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {references.map((ref, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-6 hover:border-indigo-300 dark:hover:border-indigo-500/50 transition-all hover:shadow-lg hover:shadow-indigo-500/5 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 bg-indigo-50 dark:bg-indigo-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <GraduationCap className="text-indigo-600 dark:text-indigo-400" size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                  {ref.name}
                </h3>
                <p className="text-indigo-600 dark:text-indigo-400 font-medium text-sm mb-3">
                  {ref.role}
                </p>
                <div className="space-y-2 mb-6">
                  <p className="text-gray-500 dark:text-neutral-400 text-xs leading-relaxed">
                    {ref.department}
                  </p>
                  <p className="text-gray-400 dark:text-neutral-500 text-[10px] uppercase tracking-wider font-semibold">
                    {ref.university}
                  </p>
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-gray-100 dark:border-white/5">
                <a
                  href={`mailto:${ref.email}`}
                  className="flex items-center gap-2 text-sm text-gray-600 dark:text-neutral-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  <Mail size={16} />
                  <span className="truncate">{ref.email}</span>
                </a>
                <a
                  href={ref.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-600 dark:text-neutral-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  <ExternalLink size={16} />
                  <span>View ePortfolio</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
