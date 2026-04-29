import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-neutral-100 mb-6">Let's Connect</h2>
        <p className="text-lg text-neutral-400 mb-12 max-w-2xl mx-auto">
          Whether you have a question about my research, want to discuss an exciting AI project, or simply want to say hello, feel free to reach out. I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <a
            href="mailto:efalnaimi22@gmail.com"
            className="flex flex-col items-center justify-center p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors"
          >
            <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center mb-4 text-indigo-400">
              <Mail size={24} />
            </div>
            <h3 className="text-white font-bold mb-1">Email</h3>
            <p className="text-neutral-400 text-sm">efalnaimi22@gmail.com</p>
          </a>

          <a
            href="tel:+962782608645"
            className="flex flex-col items-center justify-center p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors"
          >
            <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center mb-4 text-emerald-400">
              <Phone size={24} />
            </div>
            <h3 className="text-white font-bold mb-1">Phone</h3>
            <p className="text-neutral-400 text-sm">+962 78 260 8645</p>
          </a>

          <div
            className="flex flex-col items-center justify-center p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors cursor-default"
          >
            <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center mb-4 text-rose-400">
              <MapPin size={24} />
            </div>
            <h3 className="text-white font-bold mb-1">Location</h3>
            <p className="text-neutral-400 text-sm">Amman, Jordan</p>
          </div>
        </div>
        
        <div className="mt-24 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-neutral-500">
          <p>© 2026 Eyad Al-Naimi. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="https://github.com/en3imi" className="hover:text-white transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/eyad-naimi-1401ba276/" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  );
}
