import React from "react";
import { Mail, Phone } from "lucide-react";

const GithubIcon = ({ size = 24 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const LinkedinIcon = ({ size = 24 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gray-50 dark:bg-background pt-20">
      {/* Background Glows */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-indigo-400/10 dark:bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-400/10 dark:bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — Text */}
          <div className="space-y-8">
            <div className="space-y-3">
              <p className="text-indigo-600 dark:text-indigo-400 font-medium tracking-widest text-sm uppercase">
                Data Scientist & AI Engineer
              </p>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-neutral-100 leading-tight">
                Eyad<br />Al-Naimi
              </h1>
              <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
            </div>

            <p className="text-gray-600 dark:text-neutral-400 text-lg leading-relaxed max-w-lg">
              <span className="text-gray-900 dark:text-neutral-200 font-medium">
                Specialist in Agentic Solutions and Intelligent Systems.
              </span>
              {" "}I take ideas from early research and design all the way through to production deployment.
              <br /><br />
              Currently developing enterprise agentic systems at Protech, conducting active scientific research, with published work at an international conference, and an ongoing role in advancing AI education across Jordan.
            </p>

            {/* Social Links */}
            <div className="flex flex-wrap gap-3">
              {[
                { href: "https://github.com/en3imi", icon: <GithubIcon size={18} />, label: "GitHub" },
                { href: "https://www.linkedin.com/in/eyad-naimi-1401ba276/", icon: <LinkedinIcon size={18} />, label: "LinkedIn" },
                { href: "mailto:efalnaimi22@gmail.com", icon: <Mail size={18} />, label: "Email" },
                { href: "tel:+962782608645", icon: <Phone size={18} />, label: "+962 78 260 8645" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 text-sm bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full text-gray-700 dark:text-neutral-300 hover:border-indigo-400 dark:hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all"
                >
                  {link.icon}
                  <span>{link.label}</span>
                </a>
              ))}
            </div>

            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-indigo-500/30"
            >
              Explore My Work
            </a>
          </div>

          {/* Right — Photo Card */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow behind card */}
              <div className="absolute -inset-4 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-3xl blur-2xl" />
              {/* Card */}
              <div className="relative bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-3xl p-4 shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                <img
                  src="/eyad.jpg"
                  alt="Eyad Al-Naimi"
                  className="w-72 h-80 md:w-80 md:h-96 object-cover object-top rounded-2xl"
                />
                {/* Card footer */}
                <div className="mt-4 px-2 pb-2 text-center">
                  <p className="font-bold text-gray-900 dark:text-white">Eyad Al-Naimi</p>
                  <p className="text-sm text-gray-500 dark:text-neutral-400">AI Engineer @ Protech</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
