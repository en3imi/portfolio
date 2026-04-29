import React from "react";

const experiences = [
  {
    title: "AI Engineer",
    company: "Protech",
    date: "Nov 2025 – Present",
    location: "Amman, Jordan",
    bullets: [
      "Building enterprise agentic systems for data analysis, trend forecasting, and strategic decision support",
      "Designing multi-agent pipelines that combine internal database querying with real-world news analysis",
      "Tools: Docker, FastAPI, PostgreSQL, Redis, CrewAI, Node.js, React.js, CI/CD",
    ],
  },
  {
    title: "Fellow — Training and Competitions",
    company: "Correlation One",
    date: "Nov 2024 – Jun 2025",
    location: "Remote, USA",
    bullets: [
      "Honors Graduate — top 28% of participants across all cohorts",
      "Selected from 15,000 applicants — only 2,000 accepted into the program",
      "Completed 100+ professional development hours across technical skills, English proficiency, and career readiness",
      "Member of a 500+ professional tech community",
    ],
  },
  {
    title: "Data Science Instructor & Researcher",
    company: "DSC-JUST",
    date: "Jul 2024 – Jan 2025",
    location: "Irbid, Jordan",
    bullets: [
      "Taught statistics, data analysis, visualization, and storytelling to university students",
      "Served as consultant on administrative matters for the Data Science Club",
      "Research achievement: built a forecasting model for the 2024 US election — successfully predicted Republican victory with ~73M votes",
    ],
  },
];

const workshops = [
  {
    title: "Agentic AI Workshop",
    company: "JUST",
    date: "May 9, 2026",
    bullets: [
      "Invited speaker at Jordan University of Science and Technology.",
      "Presenting Agentic AI to teaching staff and students.",
      "Workshop organized by the academic staff themselves — a recognition of expertise.",
    ],
  },
  {
    title: "ML / DL / NLP Workshop",
    company: "NASA Space Apps Challenge",
    date: "Past Event",
    bullets: [
      "Led a technical workshop for NASA Space Apps Challenge participants.",
      "Covered the full progression: Machine Learning → Deep Learning → NLP.",
      "Hands-on sessions with practical examples and code.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-white/[0.02]">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-neutral-100 mb-12">Experience</h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors">
              <div className="flex flex-col md:flex-row md:items-start justify-between mb-4 gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                  <p className="text-indigo-400 font-medium text-lg">@ {exp.company}</p>
                </div>
                <div className="text-left md:text-right">
                  <p className="text-neutral-300 font-medium">{exp.date}</p>
                  <p className="text-neutral-500 text-sm">{exp.location}</p>
                </div>
              </div>
              <ul className="list-disc list-outside ml-5 space-y-2 text-neutral-400">
                {exp.bullets.map((bullet, idx) => (
                  <li key={idx} className="leading-relaxed">{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <h2 className="text-4xl font-extrabold text-neutral-100 mb-12 mt-24">Workshops & Community</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {workshops.map((workshop, index) => (
            <div key={index} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors">
              <h3 className="text-xl font-bold text-white mb-2">{workshop.title}</h3>
              <p className="text-indigo-400 font-medium mb-4">{workshop.company} <span className="text-neutral-500 text-sm ml-2">{workshop.date}</span></p>
              <ul className="list-disc list-outside ml-5 space-y-2 text-neutral-400">
                {workshop.bullets.map((bullet, idx) => (
                  <li key={idx} className="leading-relaxed text-sm">{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
