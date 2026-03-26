import { personalInfo } from "@/data/content";

export default function Contact() {
  return (
    <section
      id="contact"
      className="border-b-4 border-black"
    >
      <div className="max-w-5xl mx-auto px-4 py-16 md:py-20 grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8">
        <h2 className="text-3xl md:text-4xl font-black text-accent-red uppercase">
          Contact
        </h2>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-accent-blue font-bold text-lg underline underline-offset-4 decoration-2 hover:text-black"
            >
              {personalInfo.email}
            </a>
<p className="text-black/60 font-bold text-sm uppercase tracking-wider">
              {personalInfo.location}
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-block w-fit bg-black text-white font-black text-sm uppercase tracking-widest px-8 py-4 border-3 border-black shadow-[4px_4px_0_#FF0000] hover:bg-accent-red hover:text-black hover:shadow-[6px_6px_0_#000] hover:translate-x-[-2px] hover:translate-y-[-2px]"
            >
              Email Me →
            </a>
            <a
              href="https://www.linkedin.com/in/santikas/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-fit bg-white text-black font-black text-sm uppercase tracking-widest px-8 py-4 border-3 border-black shadow-[4px_4px_0_#0000FF] hover:bg-accent-blue hover:text-white hover:shadow-[6px_6px_0_#000] hover:translate-x-[-2px] hover:translate-y-[-2px]"
            >
              LinkedIn →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
