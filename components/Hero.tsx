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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[150px] opacity-70 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] opacity-50 pointer-events-none" />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto space-y-8">
        {/* Main Heading */}
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight text-neutral-100 leading-tight">
          Eyad Al-Naimi
        </h1>
        
        {/* Title */}
        <h2 className="text-2xl md:text-4xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 drop-shadow-sm">
          Data Scientist & AI Engineer
        </h2>

        {/* About Subtitle */}
        <p className="text-lg md:text-xl text-neutral-400 max-w-4xl mx-auto font-light leading-relaxed text-justify sm:text-center">
          <span className="text-neutral-200 font-medium">Specialist in Agentic Solutions and Intelligent Systems.</span><br />
          I take ideas from early research and design all the way through to production deployment.
          <br className="hidden md:block" /><br className="hidden md:block" />
          Currently developing enterprise agentic systems at Protech, conducting active scientific research, with published work at an international conference, and an ongoing role in advancing AI education across Jordan.
        </p>

        {/* Social Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 pt-6">
          <a
            href="https://github.com/en3imi"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-colors text-white"
          >
            <GithubIcon size={20} />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/eyad-naimi-1401ba276/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-colors text-white"
          >
            <LinkedinIcon size={20} />
            <span>LinkedIn</span>
          </a>
          <a
            href="mailto:efalnaimi22@gmail.com"
            className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-colors text-white"
          >
            <Mail size={20} />
            <span>Email</span>
          </a>
          <a
            href="tel:+962782608645"
            className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-colors text-white"
          >
            <Phone size={20} />
            <span>+962 78 260 8645</span>
          </a>
        </div>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
          <a
            href="#projects"
            className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-neutral-200 transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]"
          >
            Explore My Work
          </a>
        </div>
      </div>
    </section>
  );
}
