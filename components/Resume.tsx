// app/components/Resume.tsx
import React from "react";
import { Download } from "lucide-react";

interface ResumeProps {
  accentColor?: string;
}

// EDUCATION DATA
const educationData = [
  {
    years: "2015 – 2017",
    title: "MS Software Project Management",
    institution: "FAST NUCES",
    description:
      "Focused on enterprise software delivery, agile methodologies, project governance, and product lifecycle frameworks.",
  },
  {
    years: "2003 – 2005",
    title: "MCS, Computer Science",
    institution: "Gomal University",
    description:
      "Developed strong foundations in programming, database systems, and core software engineering concepts.",
  },
];

// EXPERIENCE DATA
const experienceData = [
  {
    years: "2015 – Present",
    title: "Software Development Project Manager",
    company: "LumenSoft Technologies",
    description:
      "Leading delivery of Candela RMS and Nimbus RMS across global retail markets. Managing end-to-end projects, Azure cloud operations, SaaS migrations, digital invoicing, and Agile teams.",
  },
  {
    years: "2011 – Present",
    title: "Co-Founder",
    company: "TechReFi",
    description:
      "Driving AI-powered product development including chatbots, document intelligence, and retail analytics. Managing cross-functional teams and shaping product vision.",
  },
  {
    years: "2007 – 2015",
    title: "Software Engineer → Senior Engineer → Team Lead",
    company: "LumenSoft Technologies",
    description:
      "Delivered POS, ERP, accounting, and inventory systems. Mentored development teams and contributed to architecture and API design.",
  },
];

// SKILLS DATA (mapped for skill bars)
const skillsData = [
  { name: "Project Management", level: 95 },
  { name: "Azure Cloud", level: 90 },
  { name: ".NET / C#", level: 92 },
  { name: "SQL Server Optimization", level: 88 },
  { name: "Retail ERP / POS Systems", level: 96 },
  { name: "SaaS Architecture", level: 89 },
  { name: "Agile / Scrum Leadership", level: 93 },
  { name: "API Integrations (FBR / PRAL)", level: 94 },
];

// Reusable Resume Entry
const ResumeEntry = ({
  years,
  title,
  institutionOrCompany,
  description,
}: {
  years: string;
  title: string;
  institutionOrCompany: string;
  description: string;
}) => {
  const accentColorHex = "#20C997";
  return (
    <div className="p-5 bg-gray-800 rounded-lg shadow-md space-y-2">
      <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-red-600 text-white">
        {years}
      </span>
      <h4 className="text-xl font-semibold text-white mt-2">{title}</h4>
      <p className={`text-[${accentColorHex}] text-base font-medium`}>
        {institutionOrCompany}
      </p>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  );
};

// Skill Bar Component
const SkillBar = ({ name, level }: { name: string; level: number }) => {
  const accentColorHex = "#20C997";
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-white font-medium">{name}</span>
        <span className="text-gray-400">{level}%</span>
      </div>

      <div className="w-full bg-gray-700/50 rounded-full h-2">
        <div
          className="h-2 rounded-full"
          style={{ width: `${level}%`, backgroundColor: accentColorHex }}
        ></div>
      </div>
    </div>
  );
};

export default function Resume({ accentColor }: ResumeProps) {
  const accentColorHex = "#20C997";

  return (
    <section id="resume" className="bg-gray-900 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="relative w-full text-center mb-16">
          <h3 className="text-[40px] sm:text-[60px] md:text-[100px] font-bold text-white opacity-[0.04] uppercase select-none">
            SUMMARY
          </h3>

          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white">
              Resume
            </h2>
            <div
              className="w-20 h-[3px] mt-2 rounded-full"
              style={{ backgroundColor: accentColorHex }}
            />
          </div>
        </div>

        {/* GRID SECTION */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-8">
              My Education
            </h3>
            <div className="space-y-6">
              {educationData.map((item, index) => (
                <ResumeEntry
                  key={index}
                  years={item.years}
                  title={item.title}
                  institutionOrCompany={item.institution}
                  description={item.description}
                />
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-8">
              My Experience
            </h3>
            <div className="space-y-6">
              {experienceData.map((item, index) => (
                <ResumeEntry
                  key={index}
                  years={item.years}
                  title={item.title}
                  institutionOrCompany={item.company}
                  description={item.description}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="mt-20">
          <h3 className="text-2xl md:text-3xl font-semibold text-white mb-8">
            My Skills
          </h3>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
            {skillsData.map((skill, index) => (
              <SkillBar key={index} name={skill.name} level={skill.level} />
            ))}
          </div>
        </div>

        {/* CV Button */}
        <div className="text-center mt-16">
          <button className="px-10 py-3 rounded-full text-white font-medium uppercase tracking-wider border-2 border-gray-700 hover:bg-gray-700 transition flex items-center justify-center mx-auto">
            Download CV <Download size={18} className="ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
}
