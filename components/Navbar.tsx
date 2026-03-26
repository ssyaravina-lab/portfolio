"use client";

import { useState } from "react";

const NAV_LINKS = [
  { label: "PROBLEMS", href: "#problems" },
  { label: "ABOUT", href: "#about" },
  { label: "SKILLS", href: "#skills" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "PROJECTS", href: "#projects" },
  { label: "EDUCATION", href: "#education" },
  { label: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black border-b-4 border-accent-red">
      <div className="max-w-5xl mx-auto px-4 flex items-center justify-between h-14">
        <a
          href="#hero"
          className="text-white font-bold text-xl tracking-widest uppercase"
        >
          SS
        </a>

        <button
          className="md:hidden text-white text-2xl font-bold"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <div className="hidden md:flex gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white text-sm font-bold tracking-wider uppercase hover:text-accent-red"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-black border-t-2 border-white">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block px-4 py-3 text-white text-sm font-bold tracking-wider uppercase hover:bg-accent-red hover:text-black border-b-2 border-white/20"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
