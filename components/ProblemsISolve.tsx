const problems = [
  {
    pain: "Your incubator graduates don't sustain the businesses after the program ends",
    response:
      "I design incubation systems with built-in validation loops and founder self-efficacy — so ventures survive past demo day. At BINUS, 40% of student ventures remained active post-graduation.",
  },
  {
    pain: "Your workshops inspire people but nothing changes on Monday",
    response:
      "I build workshops around real context translation — participants leave with reframed problems and tools they can use immediately, not just inspiration.",
  },
  {
    pain: "Nascent entrepreneurs have ideas but can't validate or execute",
    response:
      "I take founders from vague ideas through structured problem framing, user research, and prototype testing — so they act on evidence, not assumptions.",
  },
  {
    pain: "Your team builds products before understanding the real problem",
    response:
      "I shift teams from execution obsession to problem validity first — using Design Thinking not as steps, but as a way of thinking under uncertainty.",
  },
];

export default function ProblemsISolve() {
  return (
    <section id="problems" className="border-b-4 border-black bg-black">
      <div className="max-w-5xl mx-auto px-4 py-16 md:py-20">
        <h2 className="text-3xl md:text-4xl font-black text-accent-red uppercase mb-4">
          Problems I Solve
        </h2>
        <p className="text-sm font-bold uppercase tracking-widest text-white/50 mb-10">
          Sound familiar?
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {problems.map((item, i) => (
            <div
              key={i}
              className="border-3 border-white bg-black p-6 shadow-[4px_4px_0_#FF0000] hover:shadow-[6px_6px_0_#FF0000] hover:translate-x-[-2px] hover:translate-y-[-2px]"
            >
              <p className="text-lg md:text-xl font-black text-white leading-tight mb-4">
                &ldquo;{item.pain}&rdquo;
              </p>
              <div className="border-t-2 border-white/30 pt-4">
                <p className="text-sm text-white/70 leading-relaxed">
                  {item.response}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 border-t-3 border-white/30 pt-10 text-center">
          <p className="text-lg md:text-xl font-black text-white uppercase mb-6">
            If any of this sounds like your program, let&apos;s talk.
          </p>
          <a
            href="mailto:santika.syaravina@gmail.com?subject=Let's%20talk%20about%20my%20program"
            className="inline-block bg-accent-red text-black font-black text-sm uppercase tracking-widest px-10 py-5 border-3 border-white shadow-[4px_4px_0_#FFF] hover:bg-white hover:text-black hover:shadow-[6px_6px_0_#FF0000] hover:translate-x-[-2px] hover:translate-y-[-2px]"
          >
            Let&apos;s Talk About Your Program &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
