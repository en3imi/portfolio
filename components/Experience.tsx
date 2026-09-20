import React from "react";

const experiences = [
  {
    title: "Solutions Manager",
    company: "Huawei",
    date: "Sep 2026 – Present",
    location: "Amman, Jordan",
    bullets: [
      "Spearheading the solution architecture, strategy, and end-to-end technical delivery of enterprise AI, Cloud, and intelligent computing solutions.",
      "Collaborating closely with enterprise clients and executive stakeholders to translate high-level business requirements into robust, high-performance architectural solutions.",
      "Driving technical solution proposals, client engagement, and technological roadmaps to accelerate digital transformation.",
    ],
  },
  {
    title: "Digital Transformation & AI Intern",
    company: "Bank of Jordan",
    date: "Jul 2026 – Sep 2026",
    location: "Amman, Jordan",
    bullets: [
      "Participated in an intensive Digital Transformation training program within the IT department, where I learned how to manage and optimize MSSQL databases, deploying Java applications through Tomcat and JBoss, and executing basic Linux commands, in addition to analyzing application logs to identify and troubleshoot deployment issues.",
      "Led a team of interns from different departments to develop an AI solution to help grow the bank's customer base, including researching the bank's operations and available data, analyzing feasibility and ROI, and presenting the final solution to a committee of department heads and the bank's CEO.",
      "Selected as a hiring nominee out of 50 interns across the organization, driven by my deep domain knowledge and exceptional work ethic.",
      "Tools: MSSQL, Java, Apache Tomcat, JBoss, Linux, AI Solution Architecture",
    ],
  },
  {
    title: "AI Engineer",
    company: "Protech",
    date: "Oct 2025 – Jul 2026",
    location: "Amman, Jordan",
    bullets: [
      "Designed and developed an enterprise-grade Agentic AI platform that enables users to analyze, query, and visualize organizational data using natural language prompts. The system allows users to interact with company data conversationally while the underlying agents handle data analysis and generate meaningful visual insights.",
      "The platform was built with a secure and scalable backend architecture using Python and FastAPI, with JWT-based authentication and Role-Based Access Control (RBAC) to enforce data access permissions based on user identity and role. A dedicated database layer was implemented to securely store conversations and chat history, enabling persistent and contextual interactions.",
      "The entire application was containerized using Docker, providing a consistent and portable deployment environment. Grafana was integrated for system observability, enabling monitoring of application health, performance, and operational metrics.",
      "🏆 Achievement: Selected among the Top 10 Projects in the Hashemite Kingdom of Jordan in 2026 at the National Technology Parade (NTP13).",
      "Tools: Python, FastAPI, Docker, PostgreSQL, Redis, CrewAI, React.js, Grafana, CI/CD",
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
      "Invited by the university's academic staff to deliver a specialized workshop on Agentic AI for faculty members and students.",
      "The workshop covered fundamental and advanced topics including Large Language Models (LLMs), AI Agents, and Tool Calling.",
      "Showcased a live practical demonstration of building a functional AI Agent using n8n, MCP, Memory, and Lovable.",
    ],
  },
  {
    title: "ML / DL / NLP Workshop",
    company: "NASA Space Apps Challenge",
    date: "October 2025",
    bullets: [
      "Led a technical workshop for NASA Space Apps Challenge participants.",
      "Covered the full progression: Machine Learning → Deep Learning → NLP.",
      "Hands-on sessions with practical examples and code.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-white dark:bg-white/[0.02]">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-neutral-100 mb-12">Experience</h2>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-8 hover:border-indigo-300 dark:hover:border-indigo-500/50 transition-colors">
              <div className="flex flex-col md:flex-row md:items-start justify-between mb-4 gap-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.title}</h3>
                  <p className="text-indigo-600 dark:text-indigo-400 font-medium">@ {exp.company}</p>
                </div>
                <div className="text-left md:text-right">
                  <p className="text-gray-700 dark:text-neutral-300 font-medium text-sm">{exp.date}</p>
                  <p className="text-gray-400 dark:text-neutral-500 text-xs">{exp.location}</p>
                </div>
              </div>
              <ul className="space-y-3 text-gray-600 dark:text-neutral-400 text-sm md:text-[15px]">
                {exp.bullets.map((bullet, idx) => {
                  const isAchievement = bullet.startsWith("🏆");
                  const isTools = bullet.startsWith("Tools:");

                  if (isAchievement) {
                    return (
                      <li key={idx} className="mt-4 p-4 bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/20 rounded-xl text-amber-900 dark:text-amber-300 font-medium text-sm leading-relaxed">
                        {bullet}
                      </li>
                    );
                  }

                  if (isTools) {
                    return (
                      <li key={idx} className="mt-3 pt-3 border-t border-gray-200/70 dark:border-white/10 text-xs font-semibold text-indigo-600 dark:text-indigo-400">
                        {bullet}
                      </li>
                    );
                  }

                  return (
                    <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 flex-shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-neutral-100 mb-12 mt-24">Workshops & Community</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {workshops.map((workshop, index) => (
            <div key={index} className="bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-8 hover:border-indigo-300 dark:hover:border-indigo-500/50 transition-colors">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{workshop.title}</h3>
              <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-4">
                {workshop.company} <span className="text-gray-400 dark:text-neutral-500 text-sm ml-2">{workshop.date}</span>
              </p>
              <ul className="space-y-2.5 text-gray-600 dark:text-neutral-400 text-sm">
                {workshop.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 flex-shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
