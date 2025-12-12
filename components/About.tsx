import React from "react";
import { Download } from "lucide-react";

export default function About() {
  const accentColorHex = "#20C997";

  const profileDetails = [
    { label: "Name", value: "Abdul Jabbar" },
    {
      label: "Email",
      value: "retailtechpm@gmail.com",
      href: "mailto:retailtechpm@gmail.com",
    },
    { label: "Age", value: "32" },
    { label: "From", value: "Lahore, Panjab Pakistan" },
  ];

  const stats = [
    { number: "18+", label: "Years Experience" },
    { number: "250+", label: "Happy Clients" },
    { number: "650+", label: "Projects Done" },
    { number: "38", label: "Get Awards" },
  ];

  return (
    <section id="about" className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        {/* SECTION HEADER */}
        <div className="relative w-full text-center mb-12 pt-0">
          {/* BACKGROUND BIG TEXT */}
          <h3 className="text-[50px] md:text-[100px] font-bold text-white opacity-[0.04] uppercase tracking-wider select-none">
            ABOUT ME
          </h3>

          {/* FOREGROUND TITLE */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-white">
              Know Me More
            </h2>

            {/* Underline */}
            <div
              className="w-20 h-[3px] mt-2 rounded-full"
              style={{ backgroundColor: accentColorHex }}
            ></div>
          </div>
        </div>

        {/* ABOUT CONTENT GRID */}
        <div className="grid lg:grid-cols-12 gap-10 pl-6 md:pl-12 pr-2">
          {/* LEFT SIDE */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-2xl font-medium mb-2">
              I’m Abdul Jabbar, a software and cloud engineering
            </h3>

            <p className="text-gray-400">
              professional with more than eighteen years of experience in retail
              ERP, SaaS platforms, AI automation, and enterprise system
              development. I’ve led the architecture and delivery of large
              products such as Candela RMS and Nimbus RMS, helping retailers
              modernize their systems, move to the cloud, and improve
              performance across global operations. My work blends strong
              technical depth with product leadership, allowing me to build
              scalable architectures, optimize SQL performance, streamline
              infrastructure on Azure, and guide full-cycle software delivery.
            </p>

            <p className="text-gray-400">
              I have extensive hands-on experience with .NET, C#, ASP.NET MVC,
              .NET Core, REST APIs, Azure services, SQL Server optimization, and
              cloud automation. I specialize in Retail ERP, POS, inventory and
              procurement workflows, multi-tenant SaaS design, and system
              integrations. I also focus on AI-enabled applications, including
              chatbots, document intelligence, workflow automation, AI scoring
              models, and predictive retail analytics. I bring a balanced mix of
              engineering expertise and strategic vision, delivering reliable,
              scalable systems that support operational efficiency and long-term
              business growth.
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div className="lg:col-span-5">
            <ul className="space-y-3">
              {profileDetails.map((detail) => (
                <li
                  key={detail.label}
                  className="border-b border-white/10 pb-2 flex items-center max-w-[400px]"
                >
                  <span className="text-lg font-semibold w-1/4">
                    {detail.label}:
                  </span>
                  <span className="text-gray-400 font-medium ml-2">
                    {detail.href ? (
                      <a
                        href={detail.href}
                        className={`hover:text-[${accentColorHex}] transition-colors`}
                      >
                        {detail.value}
                      </a>
                    ) : (
                      detail.value
                    )}
                  </span>
                </li>
              ))}
            </ul>

            {/* CV BUTTON */}
            <div className="pt-8">
              <button
                className={`px-8 py-3 rounded-full text-white font-medium uppercase tracking-wider bg-[${accentColorHex}] hover:bg-opacity-80 flex items-center justify-center`}
              >
                Download CV <Download size={18} className="ml-2" />
              </button>
            </div>
          </div>
        </div>

        {/* STATISTICS SECTION */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 pt-14 mt-6 pb-20 text-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`
        py-4
        ${index !== 0 ? "border-l border-white/10" : ""}
      `}
            >
              <span className="text-4xl font-semibold text-gray-400">
                {stat.number}
              </span>
              <p className="text-white text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
