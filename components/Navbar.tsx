"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200 dark:border-white/10 transition-colors">
      <span className="font-extrabold text-gray-900 dark:text-white tracking-tight text-lg">
        Eyad<span className="text-indigo-500">.</span>
      </span>

      <div className="hidden md:flex items-center gap-8">
        {["experience", "projects", "skills", "contact"].map((section) => (
          <a
            key={section}
            href={`#${section}`}
            className="text-sm capitalize text-gray-500 dark:text-neutral-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            {section}
          </a>
        ))}
      </div>

      {mounted && (
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-2 rounded-full bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20 transition-colors text-gray-700 dark:text-neutral-300"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      )}
    </nav>
  );
}
