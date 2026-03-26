"use client";

import Image from "next/image";
import { useRef } from "react";
import { experience } from "@/data/content";

const collaborations = [
  {
    name: "The Local Enablers / e-mind",
    logo: "/images/tle-logo.png",
    width: 240,
    height: 80,
    notes: [
      "Co-developed Design Thinking for Life (DT4Life)",
      "Trainer: Design Thinking & OBE",
    ],
  },
  {
    name: "BEKRAF (IKKON 2017)",
    logo: "/images/bekraf-logo.png",
    width: 160,
    height: 160,
    notes: [
      "Tourism product & service development (with Banjarmasin Government)",
    ],
  },
  {
    name: "IDDC",
    logo: "/images/iddc-logo.svg",
    width: 200,
    height: 80,
    notes: [
      "Indonesia Dispatch Service — Ministry of Trade",
      "Product Designer (project-based)",
    ],
  },
];

export default function Experience() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = scrollRef.current.offsetWidth * 0.7;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "instant",
    });
  };

  return (
    <section
      id="experience"
      className="border-b-4 border-black"
    >
      <div className="max-w-5xl mx-auto px-4 py-16 md:py-20">
        <h2 className="text-3xl md:text-4xl font-black text-accent-red uppercase mb-10">
          Experience
        </h2>

        <div className="mb-12 border-3 border-black bg-white p-6 shadow-[4px_4px_0_#000] flex flex-col md:flex-row items-center gap-6">
          <Image
            src="/images/bbs-logo.jpg"
            alt="BINUS University Business School"
            width={200}
            height={130}
            className="shrink-0 object-contain"
          />
          <div>
            <span className="text-xs font-black uppercase tracking-widest text-accent-blue">
              Institutional Anchor
            </span>
            <h3 className="text-lg font-black uppercase mt-1">
              Creativepreneurship Department, Binus Business School, Binus @Bandung
            </h3>
            <p className="text-sm leading-relaxed mt-2">
              Faculty member and former Section Head of Business Incubator at BINUS University Bandung — the institutional base for teaching, research, and venture incubation work since 2020.
            </p>
            <a
              href="https://binus.ac.id/bandung/creativepreneurship/faculty-member/santika/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 text-sm font-black uppercase tracking-widest text-accent-blue underline hover:text-accent-red"
            >
              View Faculty Profile &rarr;
            </a>
          </div>
        </div>

        {/* Strategic Collaboration */}
        <div className="mb-12 border-3 border-black bg-white shadow-[4px_4px_0_#000]">
          <div className="flex items-center justify-between p-6 pb-0">
            <span className="text-xs font-black uppercase tracking-widest text-accent-blue">
              Strategic Collaboration
            </span>
            <div className="flex gap-2">
              <button
                onClick={() => scroll("left")}
                className="w-9 h-9 border-3 border-black bg-white font-black text-sm hover:bg-black hover:text-white"
                aria-label="Scroll left"
              >
                &larr;
              </button>
              <button
                onClick={() => scroll("right")}
                className="w-9 h-9 border-3 border-black bg-black text-white font-black text-sm hover:bg-accent-red hover:text-black"
                aria-label="Scroll right"
              >
                &rarr;
              </button>
            </div>
          </div>
          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-6 p-6 snap-x snap-mandatory"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {collaborations.map((collab, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-[260px] border-3 border-black bg-white flex flex-col items-center p-6 snap-start hover:bg-gray-50"
              >
                <div className="flex items-center justify-center h-[120px]">
                  <Image
                    src={collab.logo}
                    alt={collab.name}
                    width={collab.width}
                    height={collab.height}
                    className="object-contain max-h-[110px]"
                  />
                </div>
                <div className="border-t-2 border-black/20 pt-3 mt-3 w-full">
                  {collab.notes.map((note, j) => (
                    <p key={j} className="text-[11px] leading-tight text-black/60">
                      {note}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col">
          {experience.map((exp, i) => (
            <div
              key={i}
              className={`grid grid-cols-1 md:grid-cols-[180px_1fr] gap-4 md:gap-8 py-8 ${
                i !== experience.length - 1 ? "border-b-3 border-black" : ""
              }`}
            >
              <span className="text-sm font-bold text-accent-blue uppercase tracking-wider">
                {exp.period}
              </span>
              <div>
                <h3 className="text-xl font-black uppercase">{exp.role}</h3>
                <p className="text-sm font-bold text-black/60 uppercase tracking-wider mt-1">
                  {exp.organization}
                </p>
                <ul className="mt-4 flex flex-col gap-2">
                  {exp.highlights.map((h, j) => (
                    <li key={j} className="text-base leading-relaxed pl-4 border-l-3 border-accent-red">
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
