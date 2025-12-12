import React from "react";
import { Star } from "lucide-react";

const testimonialData = [
  {
    name: "Patrick Cary",
    role: "Freelancer from USA",
    image: "/img.jpg",
    quote:
      "I am happy working with printing and typesetting industry. Quidam lisque persius interesset his et, in quot quidam persequeris essent possim iriure.",
  },
  {
    name: "Chris Tom",
    role: "User from UK",
    image: "/img.jpg",
    quote:
      "I have used them twice now. Good rates, very efficient service and priced simply dummy text of the printing and typesetting industry. Excellent.",
  },
  {
    name: "Dennis Jacques",
    role: "User from USA",
    image: "/img.jpg",
    quote:
      "Only trying it out since a few days. But up to now excellent. Seems to work flawlessly. Priced simply dummy text of the printing and typesetting industry.",
  },
  {
    name: "Jay Shah",
    role: "Founder at Icomatic Pvt Ltd",
    image: "/img.jpg",
    quote:
      "Easy to use, reasonably priced simply dummy text of the printing and typesetting industry. Quidam lisque persius interesset his et, in quot quidam possim iriure.",
  },
];

const StarRating = () => (
  <div className="flex mt-2 space-x-1">
    {[...Array(5)].map((_, i) => (
      <Star key={i} size={16} fill="#FACC15" strokeWidth={0} />
    ))}
  </div>
);

export default function Testimonials() {
  const accentColorHex = "#20C997";
  return (
    <section id="testimonials" className="bg-gray-900 py-16 relative">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        {/* SECTION HEADER */}
        <div className="relative w-full text-center mb-12 pt-0">
          {/* BACKGROUND BIG TEXT */}
          <h3 className="text-[30px] sm:text-[50px] md:text-[80px] lg:text-[100px] font-bold text-white opacity-[0.04] uppercase tracking-wider select-none">
            Testimonial
          </h3>

          {/* FOREGROUND TITLE */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-semibold text-white">
              Client Speak
            </h2>

            {/* Underline */}
            <div
              className="w-16 h-[3px] mt-2 rounded-full"
              style={{ backgroundColor: accentColorHex }}
            ></div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 sm:gap-8 md:gap-8">
          {testimonialData.map((t, idx) => (
            <div
              key={idx}
              className="bg-gray-800 rounded-lg p-4 sm:p-5 md:p-6 flex flex-col h-full"
            >
              <div className="flex items-center mt-auto">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full object-cover"
                />
                <div className="ml-3 sm:ml-4">
                  <h5 className="text-white font-semibold text-sm sm:text-base md:text-base lg:text-lg">
                    {t.name}
                  </h5>
                  <p className="text-gray-400 text-xs sm:text-sm md:text-sm lg:text-sm">
                    {t.role}
                  </p>
                  <StarRating />
                </div>
              </div>
              <p className="text-gray-300 mt-4 sm:mt-6 mb-4 sm:mb-6 text-sm sm:text-base md:text-base lg:text-base">
                “{t.quote}”
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
