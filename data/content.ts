export const personalInfo = {
  name: "Santika Syaravina",
  title: "Founder Development Lead",
  subtitle: "Human-Centered Systems Designer",
  email: "santika.syaravina@gmail.com",
  phone: "+62 818 405 440",
  location: "Bandung, West Java, Indonesia",
};

export const summary =
  "I started as a textile & fashion designer and moved deliberately into designing learning systems with a focus on entrepreneurship, innovation, and decision-making under uncertainty. I led the student business incubator at BINUS University Bandung, where 40% of ventures remained active post-graduation, and convened DT4Life as a multi-stakeholder experiment to test whether Design Thinking can function as a life-level intervention, achieving 123.05% ROI and clear market pull in the personal development space. Across academia, government, and corporate settings, I work on the same problem from different angles: building programs, partnerships, systems and tools that translate mindset shifts into execution, market validation, founder self-efficacy, and measurable outcomes.";

export interface Skill {
  name: string;
  proof: string;
}

export const skills: Skill[] = [
  {
    name: "AI Tool Orchestration",
    proof: "Multi-agent AI workflows that cut manual work ~70%, reducing hours to minutes",
  },
  {
    name: "Learning System Design",
    proof: "Built UX & Service Design of Monev-SRL, an internal venture assessment tool at BINUS",
  },
  {
    name: "Business Ecosystem Building",
    proof: "Designed BINUS incubation curriculum that produced 40% venture sustainability",
  },
  {
    name: "Problem Formulation Under Uncertainty",
    proof: "Double Diamond + JTBD applied across 50+ student teams",
  },
  {
    name: "Startup & SME Growth",
    proof: "Mentored 30+ studentpreneur teams in 3 years",
  },
];

export interface Experience {
  role: string;
  organization: string;
  period: string;
  highlights: string[];
}

export const experience: Experience[] = [
  {
    role: "Independent Consultant",
    organization: "Self-employed",
    period: "Jan 2024 — Present",
    highlights: [
      "Design Thinking and innovation facilitation for Eiger, Pelindo, and Pemkot Cimahi.",
      "Founded DT4Life with The Local Enablers — 42 participants designing life decisions using Design Thinking.",
      "Launched multiple MVPs, achieved 123.05% ROI, and validated premium demand in the self-development market.",
    ],
  },
  {
    role: "Section Head of Business Incubator",
    organization: "BINUS University Bandung",
    period: "May 2021 — 2023",
    highlights: [
      "Incubated 300+ student ventures; designed entrepreneurship curriculum and mentoring framework.",
      "Achieved 40% post-graduation sustainability rate for student-led businesses.",
      "Designed UX of an internal venture-readiness tracking system (research granted by BINUS).",
    ],
  },
  {
    role: "Faculty Member — Creativepreneurship",
    organization: "BINUS Business School",
    period: "Jul 2020 — Present",
    highlights: [
      "Designed and taught courses on ideation, market validation, and marketing strategy.",
      "Research on Design Thinking, self-efficacy, and creativity in academic education.",
      "Trained in mixed-method research; published findings in educational forums.",
    ],
  },
  {
    role: "Co-Founder",
    organization: "Jalin Natural Goods",
    period: "Jan 2019 — 2021",
    highlights: [
      "Sustainable fashion brand: 416% revenue growth and 146% ROAS within 6 months.",
      "Represented at Jakarta Fashion Week and INACRAFT with BEKRAF and Korean Government support.",
    ],
  },
  {
    role: "Founder",
    organization: "Halomasin",
    period: "Dec 2018 — 2019",
    highlights: [
      "Developed and validated a business concept from BEKRAF's IKKON research — 80% of products sold in target segment.",
    ],
  },
  {
    role: "Textile & Service Designer",
    organization: "IKKON 2017, BEKRAF",
    period: "Jul — Nov 2017",
    highlights: [
      "Co-created eco-friendly textile collection rooted in Banjarmasin heritage.",
      "Featured in Net TV, IFW 2018, and Kompas Online.",
    ],
  },
  {
    role: "Product Designer",
    organization: "Indonesia Dispatch Service — Ministry of Trade",
    period: "Mar — Oct 2016",
    highlights: [
      "Designed lighting products for silver-wear SMEs in Yogyakarta for export markets.",
    ],
  },
];

export interface Project {
  title: string;
  tag: string;
  description: string;
  coreDelivery: string;
  image: string;
  highlights: string[];
}

export const projects: Project[] = [
  {
    title: "Fundamental of Design Preneur",
    tag: "Academic Flagship",
    description:
      "Students arrived with vague ideas and no framework for testing them. This program gave them a structured path from problem discovery to validated solution — with real users, not hypotheticals.",
    coreDelivery:
      "40% of student ventures remained active post-graduation",
    image: "/images/project-designpreneur.svg",
    highlights: [
      "Vague ideas → validated problems using Double Diamond",
      "Real user research replaced assumptions (Empathy Map, interviews, User Journey)",
      "Structured JTBD statements replaced gut-feel targeting",
      "Willingness-to-pay validated before building (Van Westendorp)",
      "Prototypes tested with real users — show, don't tell",
      "Peer critique via GSLC replaced unstructured feedback",
      "OBE-aligned rubrics replaced opinion-based grading",
    ],
  },
  {
    title: "Design Thinking Workshops",
    tag: "Corporate / External",
    description:
      "Teams were jumping straight to building solutions without validating the problem. These workshops shifted participants from execution obsession to problem-first thinking they could apply on Monday.",
    coreDelivery:
      "Participants reframed how they define problems before acting",
    image: "/images/project-dtworkshop.svg",
    highlights: [
      "Grounded urgency: why products fail when problems are skipped",
      "Shifted teams from execution obsession → problem validity",
      "Design thinking taught as a way of thinking, not a checklist",
      "Tools activated as enablers for their real work context",
      "Each participant left with a reframed problem from their own role",
    ],
  },
  {
    title: "Design Thinking 4 Life",
    tag: "Emerging Product",
    description:
      "People were stuck overthinking life decisions — paralyzed by fear, unclear goals, and dysfunctional beliefs. DT4Life turned life into a design problem with small, testable experiments.",
    coreDelivery:
      "123.05% ROI — validated premium demand in self-development market",
    image: "/images/project-dt4life.svg",
    highlights: [
      "Overthinking → small testable life experiments",
      "Dysfunctional beliefs identified and reframed",
      "Life treated as a design problem, not a plan",
      "Feedback Grid replaced abstract goal-setting (works / fails / questions / ideas)",
      "42 participants across multiple cohorts",
    ],
  },
  {
    title: "UMKM / Applied Entrepreneurship Training",
    tag: "Applied Training",
    description:
      "Small business owners were making decisions informally — unclear on roles, feasibility, and operational structure. This training moved them from gut-feel to structured business thinking.",
    coreDelivery:
      "Informal business thinking → structured operational decisions",
    image: "/images/project-umkm.svg",
    highlights: [
      "Unclear roles resolved: hire vs partner decisions clarified",
      "Ideas translated into operational and financial decisions",
      "Case-based learning across F&B, fashion, and creative sectors",
      "Feasibility thinking introduced — not just ideas, but viability",
    ],
  },
];

export interface Education {
  degree: string;
  institution: string;
  field: string;
  period: string;
}

export interface Certification {
  title: string;
  issuer: string;
  issued: string;
  credentialId: string;
  link: string;
}

export const certifications: Certification[] = [
  {
    title: "Design Thinking for Associate Educators",
    issuer: "Design Thinking Academy Indonesia",
    issued: "Feb 2024",
    credentialId: "1d8cbd54-95b9-46f6-9d6c-c6d8302cc338",
    link: "https://credsverse.com/credentials/1d8cbd54-95b9-46f6-9d6c-c6d8302cc338?preview=1",
  },
];

export const education: Education[] = [
  {
    degree: "Master of Business Administration (M.B.A)",
    institution: "Bandung Institute of Technology",
    field: "Creative Cultural Entrepreneurship",
    period: "2014 — 2017",
  },
  {
    degree: "Textile Craft (S.Ds)",
    institution: "Bandung Institute of Technology",
    field: "Textile Craft & Design",
    period: "2007 — 2012",
  },
];
