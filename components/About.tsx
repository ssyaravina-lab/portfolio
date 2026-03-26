"use client";

import { useState } from "react";

const blocks = [
  {
    label: "Career Arc",
    content:
      "I started as a textile & fashion designer and moved deliberately into designing learning systems — focused on entrepreneurship, innovation, and decision-making under uncertainty.",
  },
  {
    label: "Signature Results",
    content:
      "Led the BINUS student business incubator where 40% of ventures remained active post-graduation. Convened DT4Life — a multi-stakeholder experiment testing Design Thinking as a life-level intervention, achieving 123.05% ROI and clear market pull.",
  },
  {
    label: "What Drives Me",
    content:
      "Across academia, government, and corporate settings, I work on the same problem from different angles: building programs, partnerships, systems and tools that translate mindset shifts into execution, market validation, founder self-efficacy, and measurable outcomes.",
  },
];

export default function About() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="about" className="border-b-4 border-black">
      <div className="max-w-5xl mx-auto px-4 py-16 md:py-20">
        <h2 className="text-3xl md:text-4xl font-black text-accent-red uppercase mb-10">
          About
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blocks.map((block, i) => (
            <div
              key={i}
              className="border-3 border-black bg-white p-6 shadow-[4px_4px_0_#000]"
            >
              <span className="text-xs font-black uppercase tracking-widest text-accent-blue">
                {block.label}
              </span>
              <p className="text-base leading-relaxed mt-3">{block.content}</p>
            </div>
          ))}
        </div>

        {/* Expandable full narrative */}
        <div className="mt-8">
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-sm font-black uppercase tracking-widest border-3 border-black px-6 py-3 bg-white hover:bg-black hover:text-white"
          >
            {expanded ? "Show Less" : "Read Full Story"} {expanded ? "\u2191" : "\u2193"}
          </button>
          {expanded && (
            <div className="mt-6 border-3 border-black bg-white p-6 shadow-[4px_4px_0_#000]">
              <p className="text-base leading-relaxed">
                I started as a textile & fashion designer and moved deliberately
                into designing learning systems with a focus on entrepreneurship,
                innovation, and decision-making under uncertainty. I led the
                student business incubator at BINUS University Bandung, where 40%
                of ventures remained active post-graduation, and convened DT4Life
                as a multi-stakeholder experiment to test whether Design Thinking
                can function as a life-level intervention, achieving 123.05% ROI
                and clear market pull in the personal development space. Across
                academia, government, and corporate settings, I work on the same
                problem from different angles: building programs, partnerships,
                systems and tools that translate mindset shifts into execution,
                market validation, founder self-efficacy, and measurable outcomes.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
