// app/components/Services.tsx
import React from "react";
import {
  Monitor,
  Cpu,
  Layers,
  Target,
  BarChart3,
  Brain,
  Users,
} from "lucide-react";

export default function Services() {
  const accentColorHex = "#20C997";

  const services = [
    {
      icon: <BarChart3 size={32} />,
      title: "Cloud & SaaS Architecture",
      description:
        "Designing scalable cloud and SaaS platforms using Azure, .NET, microservices, and multi-tenant systems.",
    },
    {
      icon: <Cpu size={32} />,
      title: "Retail ERP & POS Development",
      description:
        "Building and modernizing ERP, POS, procurement, and retail workflow systems for global operations.",
    },
    {
      icon: <Brain size={32} />,
      title: "AI Automation & Intelligence",
      description:
        "Developing AI chatbots, document intelligence, analytics, and workflow automation for smarter operations.",
    },
    {
      icon: <Monitor size={32} />,
      title: "Application Modernization",
      description:
        "Upgrading legacy platforms to modern React SPA and .NET API architectures with improved performance.",
    },
    {
      icon: <Target size={32} />,
      title: "Enterprise System Optimization",
      description:
        "Performance tuning, SQL optimization, cloud governance, and cost-efficient infrastructure planning.",
    },
    // {
    //   icon: <Layers size={32} />,
    //   title: "Integration & API Engineering",
    //   description:
    //     "Building secure REST APIs and integrating compliance, fintech, and third-party enterprise systems.",
    // },
    {
      icon: <Users size={32} />,
      title: "Software Project Leadership",
      description:
        "Leading teams, managing delivery, and driving end-to-end execution for complex software projects.",
    },
  ];

  return (
    <section id="services" className="relative py-16 bg-gray-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* SECTION HEADER */}
        <div className="relative w-full text-center mb-16 pt-0">
          <h3 className="text-[40px] sm:text-[60px] md:text-[100px] font-bold text-white opacity-[0.04] uppercase tracking-wider select-none">
            Services
          </h3>

          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
              What I Do?
            </h2>

            <div
              className="w-20 h-[3px] mt-2 rounded-full"
              style={{ backgroundColor: accentColorHex }}
            />
          </div>
        </div>

        {/* SERVICES GRID */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex space-x-4 p-6 bg-gray-800 rounded-lg shadow-sm hover:shadow-lg transition duration-300"
            >
              <div
                className="bg-gray-900 w-16 h-16 flex items-center justify-center rounded flex-shrink-0"
                style={{ color: accentColorHex }}
              >
                {service.icon}
              </div>

              <div className="flex flex-col justify-center">
                <h4 className="text-lg sm:text-xl font-semibold mb-2">
                  {service.title}
                </h4>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
