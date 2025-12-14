// app/components/Portfolio.tsx
"use client";
import React from "react";
import Image from "next/image";
import { X, Facebook, Twitter, Instagram, Mail } from "lucide-react";

// --- 1. DATA (Expanded for Modal) ---
const defaultProjectDescription =
  "Quisdom ilaque peralus interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Ilique peralus interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.";

const portfolioItems = [
  // Item 1: Tall item on the left (Design)
  {
    id: 1,
    category: "Design",
    title: "Branding Design",
    imagePath: "/project-1.jpg",
    details: {
      client: "Client A",
      industry: "Branding",
      technologies: "Photoshop, Illustrator",
      date: "Oct 1, 2023",
      url: "www.example-a.com",
      description: defaultProjectDescription,
    },
  },
  // Item 2: Top middle (Design)
  {
    id: 2,
    category: "Design",
    title: "Mobile App Mockup",
    imagePath: "/project-4.jpg",
    details: {
      client: "Client B",
      industry: "Web Dev",
      technologies: "Next.js, Tailwind",
      date: "Jan 15, 2024",
      url: "www.example-b.com",
      description: defaultProjectDescription,
    },
  },
  // Item 3: Top right (Brand)
  {
    id: 3,
    category: "Brand",
    title: "Project Title 3",
    imagePath: "/project-2.jpg", // Matches image_529537.png top right
    details: {
      client: "Mauri Lindberg",
      industry: "Books & Reference",
      technologies: "iOS, Android, PHP, Java",
      date: "Sep 30, 2019",
      url: "www.example.com",
      description: defaultProjectDescription,
    },
  },
  // Item 4: Middle left, tall column starts here (Design) - This is the pink background item in the image
  {
    id: 4,
    category: "Design",
    title: "Marketing Material",
    imagePath: "/project-3.jpg",
    details: {
      client: "Client D",
      industry: "Marketing",
      technologies: "HTML, CSS",
      date: "Mar 1, 2023",
      url: "www.example-d.com",
      description: defaultProjectDescription,
    },
  },
  // Item 5: Bottom middle (Motion)
  {
    id: 5,
    category: "Motion",
    title: "Video Animation",
    imagePath: "/project-5.jpg",
    details: {
      client: "Client E",
      industry: "Video",
      technologies: "After Effects",
      date: "Jun 1, 2024",
      url: "www.example-e.com",
      description: defaultProjectDescription,
    },
  },
  // Item 6: Middle right (Brand) - The item with the charger
  {
    id: 6,
    category: "Brand",
    title: "E-commerce Product",
    imagePath: "/project-6.jpg",
    details: {
      client: "Client F",
      industry: "E-commerce",
      technologies: "Shopify, Liquid",
      date: "Feb 10, 2024",
      url: "www.example-f.com",
      description: defaultProjectDescription,
    },
  },
];

const categories = ["All", "Design", "Brand", "Motion", "Photos"];
const accentColorHex = "#20C997";

// --- 2. MODAL SUB-COMPONENT ---
interface ProjectModalProps {
  item: (typeof portfolioItems)[0] | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-[200] bg-gray-900 bg-opacity-80 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-gray-900 rounded-lg max-w-5xl w-full max-h-[90vh] overflow-y-auto transform transition-all duration-300 shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-white hover:text-gray-300 z-[201] p-2 rounded-full"
          onClick={onClose}
        >
          ×
        </button>

        <div className="p-8 container mx-auto">
          {/* Title */}
          <h2 className="text-3xl font-semibold text-center text-white mb-6">
            {item.title}
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Left Column: Image */}
            <div>
              <img
                src={item.imagePath}
                alt={item.title}
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>

            {/* Right Column: Details */}
            <div className="text-white">
              {/* Project Info */}
              <h4 className="text-xl font-semibold mb-2">Project Info:</h4>
              <p className="text-gray-400">{item.details.description}</p>

              {/* Project Details */}
              <h4 className="text-xl font-semibold mt-4 mb-2">
                Project Details:
              </h4>
              <ul className="list-disc list-inside text-gray-400 space-y-1">
                <li>
                  <span className="font-semibold text-white">Client:</span>{" "}
                  {item.details.client}
                </li>
                <li>
                  <span className="font-semibold text-white">Industry:</span>{" "}
                  {item.details.industry}
                </li>
                <li>
                  <span className="font-semibold text-white">
                    Technologies:
                  </span>{" "}
                  {item.details.technologies}
                </li>
                <li>
                  <span className="font-semibold text-white">Date:</span>{" "}
                  {item.details.date}
                </li>
                <li>
                  <span className="font-semibold text-white">URL:</span>{" "}
                  <a
                    href={`http://${item.details.url}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    {item.details.url}
                  </a>
                </li>
              </ul>

              {/* Share */}
              <div className="mt-4 flex items-center space-x-2">
                <span className="font-semibold">Share:</span>
                <Facebook
                  size={20}
                  className="hover:text-gray-300 cursor-pointer"
                />
                <Twitter
                  size={20}
                  className="hover:text-gray-300 cursor-pointer"
                />
                <Instagram
                  size={20}
                  className="hover:text-gray-300 cursor-pointer"
                />
                <Mail
                  size={20}
                  className="hover:text-gray-300 cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- 3. MAIN COMPONENT ---
export default function Portfolio() {
  const [filter, setFilter] = React.useState("All");
  const [selectedItem, setSelectedItem] = React.useState<
    (typeof portfolioItems)[0] | null
  >(null);

  const filteredItems = portfolioItems.filter((item) =>
    filter === "All" ? true : item.category === filter
  );

  const openModal = (item: (typeof portfolioItems)[0]) => {
    setSelectedItem(item);
    document.body.style.overflow = "hidden"; // Disable background scrolling
  };

  const closeModal = () => {
    setSelectedItem(null);
    document.body.style.overflow = "unset"; // Re-enable scrolling
  };

  return (
    <section id="portfolio" className="relative py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        {/* SECTION HEADER */}
        {/* SECTION HEADER */}
        <div className="relative w-full text-center mb-12 pt-0">
          {/* BACKGROUND BIG TEXT */}
          <h3 className="text-[50px] md:text-[100px] font-bold text-white opacity-[0.04] uppercase tracking-wider select-none">
            portfolio
          </h3>

          {/* FOREGROUND TITLE */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-white">
              My Work
            </h2>

            {/* Underline */}
            <div
              className="w-20 h-[3px] mt-2 rounded-full"
              style={{ backgroundColor: accentColorHex }}
            ></div>
          </div>
        </div>

        <ul className="flex justify-center space-x-6 mb-12">
          {categories.map((cat) => (
            <li key={cat}>
              <button
                onClick={() => setFilter(cat)}
                className={`text-sm font-medium uppercase tracking-wide pb-1 transition-colors ${
                  filter === cat
                    ? "text-[#20C997] border-b-2 border-[#20C997]"
                    : "text-gray-400 hover:text-white border-b-2 border-transparent"
                }`}
              >
                {cat}
              </button>
            </li>
          ))}
        </ul>

        {/* Gallery Grid (Using custom column spans to replicate the design) */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="break-inside-avoid overflow-hidden rounded-lg cursor-pointer group relative"
              onClick={() => openModal(item)}
            >
              <div className="relative w-full h-auto">
                <Image
                  src={item.imagePath}
                  alt={item.title}
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover transition-all duration-300 group-hover:opacity-40"
                />
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-center">
                <h5 className="text-lg text-white">{item.title}</h5>
                <span className="text-sm text-[#20C997] mt-1">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Render Modal */}
        <ProjectModal item={selectedItem} onClose={closeModal} />
      </div>
    </section>
  );
}
