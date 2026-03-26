import { skills } from "@/data/content";

export default function Skills() {
  return (
    <section
      id="skills"
      className="border-b-4 border-black"
    >
      <div className="max-w-5xl mx-auto px-4 py-16 md:py-20">
        <h2 className="text-3xl md:text-4xl font-black text-accent-red uppercase mb-10">
          Skills
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="border-3 border-black bg-white px-5 py-4 text-sm font-bold uppercase tracking-wider shadow-[4px_4px_0_#000] hover:bg-black hover:text-white hover:shadow-[6px_6px_0_#FF0000] hover:translate-x-[-2px] hover:translate-y-[-2px]"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
