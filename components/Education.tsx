import { education, certifications } from "@/data/content";

export default function Education() {
  return (
    <section
      id="education"
      className="border-b-4 border-black"
    >
      <div className="max-w-5xl mx-auto px-4 py-16 md:py-20">
        <h2 className="text-3xl md:text-4xl font-black text-accent-red uppercase mb-10">
          Education
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((edu, i) => (
            <div
              key={i}
              className="border-3 border-black bg-white p-6 shadow-[4px_4px_0_#000]"
            >
              <span className="text-sm font-bold text-accent-blue uppercase tracking-wider">
                {edu.period}
              </span>
              <h3 className="text-lg font-black uppercase mt-3">
                {edu.degree}
              </h3>
              <p className="text-sm font-bold text-black/60 uppercase tracking-wider mt-1">
                {edu.institution}
              </p>
              <p className="text-sm mt-2">{edu.field}</p>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <h3 className="text-2xl md:text-3xl font-black text-accent-red uppercase mt-14 mb-6">
          Certification
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, i) => (
            <div
              key={i}
              className="border-3 border-black bg-white p-6 shadow-[4px_4px_0_#0000FF]"
            >
              <span className="text-sm font-bold text-accent-blue uppercase tracking-wider">
                Issued {cert.issued}
              </span>
              <h4 className="text-lg font-black uppercase mt-3">
                {cert.title}
              </h4>
              <p className="text-sm font-bold text-black/60 uppercase tracking-wider mt-1">
                {cert.issuer}
              </p>
              <p className="text-xs text-black/40 mt-2">
                ID: {cert.credentialId}
              </p>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-sm font-black uppercase tracking-widest text-accent-blue underline hover:text-accent-red"
              >
                View Credential &rarr;
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
