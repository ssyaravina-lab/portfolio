import { personalInfo } from "@/data/content";

export default function Hero() {
  return (
    <section
      id="hero"
      className="pt-14 bg-white border-b-4 border-black"
    >
      <div className="max-w-5xl mx-auto px-4 py-16 md:py-24">
        <p className="text-lg md:text-xl font-bold uppercase tracking-wider text-accent-blue mb-6">
          I help incubators, universities, and governments
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase leading-none tracking-tight">
          Turn entrepreneurship programs into systems that actually produce founders who act under uncertainty.
        </h1>
        <div className="mt-8 flex flex-col gap-2 md:flex-row md:gap-6">
          <span className="text-xl md:text-2xl font-bold text-accent-red uppercase tracking-wide">
            {personalInfo.name}
          </span>
          <span className="hidden md:block text-2xl font-bold">/</span>
          <span className="text-base md:text-lg font-bold uppercase tracking-wide text-black/60">
            {personalInfo.title} &mdash; {personalInfo.subtitle}
          </span>
        </div>
        <p className="mt-3 text-sm font-bold uppercase tracking-wider text-black/40">
          {personalInfo.location}
        </p>

        {/* Who I Work With */}
        <div className="mt-10 border-t-3 border-black pt-6">
          <p className="text-xs font-black uppercase tracking-widest text-accent-blue mb-3">
            Who I Work With
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              "Incubators",
              "Accelerators",
              "Universities",
              "Corporate Innovation Teams",
              "Government Programs",
            ].map((audience) => (
              <span
                key={audience}
                className="text-sm font-bold uppercase tracking-wider border-3 border-black px-4 py-2 bg-white"
              >
                {audience}
              </span>
            ))}
          </div>
        </div>

        <a
          href="/media"
          className="inline-block mt-8 bg-black text-white font-black text-sm uppercase tracking-widest px-8 py-4 border-3 border-black shadow-[4px_4px_0_#FF0000] hover:bg-accent-red hover:text-black hover:shadow-[6px_6px_0_#000] hover:translate-x-[-2px] hover:translate-y-[-2px]"
        >
          Media Coverage →
        </a>
      </div>
    </section>
  );
}
