"use client";

import { projects } from "@/data/content";
import Image from "next/image";
import { useRef } from "react";

export default function Projects() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = scrollRef.current.offsetWidth * 0.8;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "instant",
    });
  };

  return (
    <section id="projects" className="border-b-4 border-black bg-white">
      <div className="max-w-5xl mx-auto px-4 pt-16 md:pt-20 pb-6">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-accent-red uppercase">
              Projects
            </h2>
            <p className="text-sm font-bold uppercase tracking-widest text-black mt-2">
              Scroll to explore &rarr;
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="w-12 h-12 border-3 border-black bg-white font-black text-xl hover:bg-black hover:text-white"
              aria-label="Scroll left"
            >
              &larr;
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-12 h-12 border-3 border-black bg-black text-white font-black text-xl hover:bg-accent-red hover:text-black"
              aria-label="Scroll right"
            >
              &rarr;
            </button>
          </div>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-6 px-4 pb-16 md:pb-20 snap-x snap-mandatory"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
          paddingLeft: "max(1rem, calc((100vw - 64rem) / 2 + 1rem))",
        }}
      >
        {projects.map((project, index) => (
          <article
            key={index}
            className="flex-shrink-0 w-[68vw] md:w-[480px] border-3 border-black bg-white shadow-[6px_6px_0_#000] snap-start"
          >
            {/* Project Image */}
            <div className="relative w-full h-[200px] md:h-[240px] border-b-3 border-black overflow-hidden bg-black">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
              {/* Tag overlay */}
              <div className="absolute top-0 left-0 bg-accent-red border-b-3 border-r-3 border-black px-4 py-2">
                <span className="text-xs font-black uppercase tracking-widest text-white">
                  {project.tag}
                </span>
              </div>
              {/* Number */}
              <div className="absolute bottom-0 right-0 bg-black px-4 py-2 border-t-3 border-l-3 border-black">
                <span className="text-2xl font-black text-white">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl md:text-2xl font-black uppercase leading-tight mb-3">
                {project.title}
              </h3>
              <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Highlights */}
              <div className="space-y-2 mb-5">
                {project.highlights.map((highlight, i) => (
                  <div key={i} className="flex gap-3 text-sm">
                    <span className="text-accent-red font-black mt-0.5 flex-shrink-0">
                      //
                    </span>
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              {/* Core Delivery */}
              <div className="border-t-3 border-black pt-4">
                <p className="text-xs font-black uppercase tracking-widest text-accent-blue mb-1">
                  Core Delivery
                </p>
                <p className="text-sm font-bold">{project.coreDelivery}</p>
              </div>
            </div>
          </article>
        ))}

        {/* Spacer for last card visibility */}
        <div className="flex-shrink-0 w-4" />
      </div>

      {/* Scroll progress bar */}
      <div className="border-t-3 border-black">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center gap-4">
          <span className="text-xs font-black uppercase tracking-widest">
            {projects.length} Projects
          </span>
          <div className="flex-1 h-1 bg-gray-200">
            <div
              className="h-full bg-black"
              style={{ width: `${(1 / projects.length) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
